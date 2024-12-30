/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";
import { parseWithZod } from "@conform-to/zod";
import { redirect } from "next/navigation";
import prisma from "./db";
import { reqUser } from "./requiredUser";
import { stripe } from "./stripe";
import { PostSchema, SiteCreationSchema } from "./zodSchemas";
export async function CreateSiteAction(prevState: any, formdata: FormData) {
  const user = await reqUser();
  const [subStatus, sites] = await Promise.all([
    prisma.subscription.findUnique({
      where: {
        userId: user.id,
      },
      select: {
        status: true,
      },
    }),
    prisma.site.findMany({
      where: {
        userId: user.id,
      },
    }),
  ]);
  if (!subStatus || subStatus.status != "active") {
    if (sites.length < 1) {
      //allow create a site
      await createSite();
    } else {
      //user have one site already
      return redirect("/dashboard/pricing");
    }
  } else if (subStatus?.status === "active") {
    //user have a active plan he can create a site
    await createSite();
  }
  async function createSite() {
    const submission = await parseWithZod(formdata, {
      schema: SiteCreationSchema({
        async isSubdirectoryUnique() {
          const existingSubdir = await prisma.site.findUnique({
            where: {
              subdirectory: formdata.get("subdirectory") as string,
            },
          });
          return !existingSubdir;
        },
      }),
      async: true,
    });
    if (submission.status !== "success") {
      return submission.reply();
    }
    await prisma.site.create({
      data: {
        name: submission.value.name,
        description: submission.value.description,
        subdirectory: submission.value.subdirectory,
        userId: user.id,
      },
    });
  }
  return redirect("/dashboard/sites");
}

export async function CreatePostAction(prevState: any, formdata: FormData) {
  const user = await reqUser();
  const submission = parseWithZod(formdata, {
    schema: PostSchema,
  });
  if (submission.status !== "success") {
    return submission.reply();
  }
  await prisma.article.create({
    data: {
      articleContent: JSON.parse(submission.value.articleContent),
      Description: submission.value.Description,
      image: submission.value.coverImage,
      slug: submission.value.slug,
      title: submission.value.title,
      userId: user.id,
      siteId: formdata.get("siteId") as string,
    },
  });
  return redirect(`/dashboard/sites/${formdata.get("siteId")}`);
}

export async function EditPostAction(prevState: any, formdata: FormData) {
  const user = await reqUser();
  const submission = parseWithZod(formdata, {
    schema: PostSchema,
  });
  if (submission.status !== "success") {
    return submission.reply();
  }
  const data = await prisma.article.update({
    where: {
      userId: user.id,
      id: formdata.get("articleId") as string,
    },
    data: {
      title: submission.value.title,
      articleContent: JSON.parse(submission.value.articleContent),
      Description: submission.value.Description,
      image: submission.value.coverImage,
      slug: submission.value.slug,
    },
  });
  return redirect(`/dashboard/sites/${data.siteId}`);
}

export async function DeletePost(formdata: FormData) {
  const user = await reqUser();
  await prisma.article.delete({
    where: {
      userId: user.id,
      id: formdata.get("articleId") as string,
    },
  });
  return redirect(`/dashboard/sites/${formdata.get("siteId")}`);
}

export async function UpdateImage(formdata: FormData) {
  const user = await reqUser();
  await prisma.site.update({
    where: {
      userId: user.id,
      id: formdata.get("siteId") as string,
    },
    data: {
      imageUrl: formdata.get("imageUrl") as string,
    },
  });
  return redirect(`/dashboard/sites/${formdata.get("siteId")}`);
}

export async function DeleteSite(formdata: FormData) {
  const user = await reqUser();
  await prisma.site.delete({
    where: {
      userId: user.id,
      id: formdata.get("siteId") as string,
    },
  });
  return redirect("/dashboard/sites");
}

export async function CreateSubscription() {
  const user = await reqUser();
  let stripeUserId = await prisma.user.findUnique({
    where: {
      id: user.id,
    },
    select: {
      customerId: true,
      email: true,
      firstName: true,
    },
  });
  if (!stripeUserId?.customerId) {
    const stripeCustomer = await stripe.customers.create({
      email: stripeUserId?.email,
      name: stripeUserId?.firstName,
    });
    stripeUserId = await prisma.user.update({
      where: {
        id: user.id,
      },
      data: {
        customerId: stripeCustomer.id,
      },
    });
  }
  const session = await stripe.checkout.sessions.create({
    customer: stripeUserId.customerId as string,
    mode: "subscription",
    billing_address_collection: "auto",
    payment_method_types: ["card"],
    customer_update: {
      address: "auto",
      name: "auto",
    },
    success_url:
      process.env.NODE_ENV === "production"
        ? "https://blog-sphere-lemon.vercel.app/dashboard/payment/success"
        : "http://localhost:3000/dashboard/payment/success",
    cancel_url:
      process.env.NODE_ENV === "production"
        ? "https://blog-sphere-lemon.vercel.app/dashboard/payment/cancel"
        : "http://localhost:3000/dashboard/payment/cancel",
    line_items: [{ price: process.env.STRIPE_PRICE_ID, quantity: 1 }],
  });
  return redirect(session.url as string);
}

export async function CreateCustomerPortal(formdata: FormData) {
  const session = await stripe.billingPortal.sessions.create({
    customer: formdata.get("customerId") as string,
    return_url:
      process.env.NODE_ENV === "production"
        ? "https://blog-sphere-lemon.vercel.app/dashboard"
        : "http://localhost:3000/dashboard",
  });
  return redirect(session.url);
}
