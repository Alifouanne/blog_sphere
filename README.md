# Blog Sphere - Modern Blog SaaS Platform

Blog Sphere is a powerful, feature-rich blogging platform that enables users to create and manage multiple blogs with ease. Built with modern technologies and best practices, it offers both free and premium tiers for different user needs.

![Blog Sphere Logo](./public/logo.png)

## ✨ Features

### Free Tier
- Create and manage one site with multiple blogs
- Rich text editor for content creation
- Customizable blog appearance
- Secure authentication
- Responsive design

### Premium Tier
- Create and manage multiple sites
- All features from free tier
- Advanced customization options
- Subscription management
- Priority support

## 🚀 Tech Stack

- **Frontend Framework**: [Next.js 15](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Authentication**: [Kinde](https://kinde.com/)
- **Database**: 
  - ORM: [Prisma](https://www.prisma.io/)
  - Database: [Supabase](https://supabase.com/)
- **Form Handling**: 
  - Validation: [Zod](https://zod.dev/)
  - Type-safe forms: [Conform](https://conform.guide/)
- **Rich Text Editor**: [Novel](https://novel.sh/) with [Tiptap](https://tiptap.dev/)
- **Image Storage**: [uploadthing](https://uploadthing.com/)
- **Payments**: [Stripe](https://stripe.com/)
- **Type Safety**: [TypeScript](https://www.typescriptlang.org/)

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/Alifouanne/blog-sphere.git
cd blog-sphere
```

2. Install dependencies:
```bash
bun install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

4. Set up your database:
```bash
bunx prisma generate
bunx prisma db push
```

5. Run the development server:
```bash
bun run dev
```

## 🔑 Environment Variables

Create a `.env.local` file with the following variables:

```bash
KINDE_CLIENT_ID
KINDE_CLIENT_SECRET
KINDE_ISSUER_URL
KINDE_SITE_URL
KINDE_POST_LOGOUT_REDIRECT_URL
KINDE_POST_LOGIN_REDIRECT_URL


DATABASE_URL

DIRECT_URL

UPLOADTHING_TOKEN=

STRIPE_SECRET_KEY=
STRIPE_PRICE_ID=
STRIPE_WEBHOOK_SECRET=


## 🔒 Security

- Secure authentication with Kinde
- Type-safe API routes and form handling
- Secure payment processing with Stripe
- Protected routes and API endpoints
- Data validation with Zod

## 🎯 Key Features

1. **Blog Management**
   - Create and edit blogs
   - Rich text editing
   - Image uploads
   - Draft and publish functionality

2. **Site Management**
   - Customize site appearance
   - Manage multiple sites (Premium)
   - Site analytics

3. **User Management**
   - Secure authentication
   - User profiles
   - Subscription management

4. **Subscription System**
   - Free and premium tiers
   - Stripe integration
   - Subscription status tracking

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.



## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Kinde](https://kinde.com/)
- [Supabase](https://supabase.com/)
- [Stripe](https://stripe.com/)

---

Built with ❤️ using Next.js and TypeScript
