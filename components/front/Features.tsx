import { features } from "@/utils/constants";
import { cn } from "@/lib/utils";

export default function Features() {
  return (
    <section className="container mx-auto px-4 pt-12 pb-24 sm:pt-16 sm:pb-32">
      <div className="mx-auto max-w-2xl lg:text-center  animate-in fade-in slide-in-from-bottom-3 duration-700 fill-mode-forwards">
        <p
          className={cn(
            "inline-block font-semibold",
            "rounded-full bg-primary/10 px-4 py-1.5 text-sm text-primary",
            "transform transition-all duration-300 hover:scale-105"
          )}
        >
          Blog Faster
        </p>
        <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
          Get your blog up and running in{" "}
          <span className="text-primary">minutes</span>
        </h2>
        <p className="mt-6 text-base leading-relaxed text-muted-foreground lg:text-lg">
          Create your professional blog effortlessly. Our intuitive platform
          streamlines the process, letting you focus on what matters most – your
          content.
        </p>
      </div>

      <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
        <div
          className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16 [&>*:nth-child(2)]:delay-200 [&>*:nth-child(3)]:delay-300 [&>*:nth-child(4)]:delay-400"
          role="list"
          aria-label="Features"
        >
          {features.map((feature) => (
            <div
              key={feature.name}
              className="relative pl-16 transition-all duration-300 hover:translate-x-1"
            >
              <div className="text-base font-semibold leading-7">
                <div
                  className={cn(
                    "absolute left-0 top-0 flex size-10 items-center justify-center rounded-lg",
                    "bg-primary transition-all duration-300",
                    "group-hover:shadow-lg group-hover:shadow-primary/25 group-hover:ring-2 group-hover:ring-primary/10"
                  )}
                >
                  <feature.icon className="size-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold tracking-tight">{feature.name}</h3>
              </div>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
