import { PricingPlans } from "@/utils/constants";
import { Check, Sparkles } from "lucide-react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { SubmitButton } from "../dashboard/SubmitButtons";
import { CreateSubscription } from "@/lib/actions";
import { cn } from "@/lib/utils";

export default function Pricing() {
  return (
    <section className="container px-4 py-16">
      <div className="max-w-3xl mx-auto text-center  ">
        <Badge
          variant="secondary"
          className="px-4 py-2 text-sm font-semibold text-primary bg-primary/10 hover:bg-primary/20 transition-colors"
        >
          Pricing
        </Badge>
        <div className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-gray-100 dark:via-gray-200 dark:to-gray-100">
          Pricing plans for everyone and every budget!
        </div>
      </div>
      <p className="mx-auto mt-6 max-w-2xl text-center leading-relaxed text-muted-foreground text-lg  ">
        Choose the perfect plan that fits your needs. Whether you&apos;re a solo
        entrepreneur, a growing startup, or an established enterprise, we have
        flexible options designed to scale with your business.
      </p>
      <div className="grid grid-cols-1 gap-8 mt-16 lg:grid-cols-2 lg:max-w-5xl lg:mx-auto">
        {PricingPlans.map((item, index) => (
          <Card
            key={item.id}
            className={cn(
              "relative transition-all duration-300 hover:shadow-xl",

              item.id === 1 ? "border-primary shadow-md" : "",
              "hover:translate-y-[-4px]"
            )}
            style={{ animationDelay: `${(index + 2) * 200}ms` }}
          >
            {item.id === 1 && (
              <div className="absolute -top-3 -right-3">
                <Sparkles className="w-6 h-6 text-primary animate-pulse" />
              </div>
            )}
            <CardHeader>
              <CardTitle className="text-2xl">
                {item.id === 1 ? (
                  <div className="flex items-center justify-between">
                    <span className="text-primary font-bold">Startup</span>
                    <Badge className="bg-primary/20 text-primary border border-primary/20">
                      Most Popular
                    </Badge>
                  </div>
                ) : (
                  <span>{item.priceTitle}</span>
                )}
              </CardTitle>
              <CardDescription className="text-base mt-2">
                {item.cardDescription}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mt-4 text-4xl font-bold tracking-tight">
                {item.priceTitle}
              </div>
              <ul className="mt-8 space-y-4 text-sm leading-6 text-muted-foreground">
                {item.benefits.map((benefit, index) => (
                  <li
                    key={index}
                    className="flex gap-x-3 items-start group transition-colors duration-300 hover:text-foreground"
                  >
                    <Check className="text-primary size-5 mt-0.5 group-hover:scale-110 transition-transform duration-300" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              {item.id === 1 ? (
                <form className="w-full" action={CreateSubscription}>
                  <SubmitButton
                    text="Buy Plan"
                    className="mt-5 w-full transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                  />
                </form>
              ) : (
                <Button
                  variant="secondary"
                  className="mt-5 w-full transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                  asChild
                >
                  <Link href="/dashboard">Try for free</Link>
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
