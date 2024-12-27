import { CloudRain, DollarSign, Globe, Home } from "lucide-react";
export const navLinks = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: Home,
  },
  {
    name: "Sites",
    href: "/dashboard/sites",
    icon: Globe,
  },
  {
    name: "Pricing",
    href: "/dashboard/pricing",
    icon: DollarSign,
  },
];

export const PricingPlans: props[] = [
  {
    id: 0,
    cardTitle: "Freelancer",
    cardDescription: "The best pricing plan for people starting out.",
    benefits: [
      "1 Site",
      "Up to 1000 Visitors",
      "Up to 1000 Visitors",
      "Up to 1000 Visitors",
    ],
    priceTitle: "Free",
  },
  {
    id: 1,
    cardTitle: "Startup",
    cardDescription: "The best pricing plan for professionals.",
    priceTitle: "$29",
    benefits: [
      "Unlimited Sites",
      "Unimlited Visitors",
      "Unimlited Visitors",
      "Unimlited Visitors",
    ],
  },
];

export const features = [
  {
    name: "Sign up for free",
    description:
      "Get started with our service at no cost. Create an account and access basic features without any financial commitment, allowing you to explore our platform risk-free.",
    icon: CloudRain,
  },
  {
    name: "Blazing fast",
    description:
      "Experience lightning-quick performance with our optimized infrastructure. Enjoy rapid load times, swift data processing, and seamless interactions for an efficient user experience.",
    icon: CloudRain,
  },
  {
    name: "Super secure with Kinde",
    description:
      "Benefit from top-tier security powered by Kinde authentication. Your data is protected with state-of-the-art encryption, multi-factor authentication, and regular security audits.",
    icon: CloudRain,
  },
  {
    name: "Easy to use",
    description:
      "Navigate our intuitive interface with ease. Our user-friendly design ensures that you can quickly learn and efficiently use all features, saving you time and reducing frustration.",
    icon: CloudRain,
  },
];
