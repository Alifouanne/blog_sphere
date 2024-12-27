import Features from "@/components/front/Features";
import Hero from "@/components/front/Hero";
import Logos from "@/components/front/Logos";
import Pricing from "@/components/pricing/Pricing";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

export default async function Home() {
  const { getUser } = getKindeServerSession();
  const session = await getUser();
  if (session?.id) {
    return redirect("/dashboard");
  }
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
      <Hero />
      <Logos />
      <Features />
      <Pricing />
    </div>
  );
}
