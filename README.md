<h1 align="center">Stripe Subscriptions Course</h1>

![Demo App](/public/demo-for-readme.png)

[Video Tutorial on Youtube](https://youtu.be/R9PwoQwVpPQ)

Some Features:

-   ⚛️ Tech Stack: Next.js 14, TypeScript, Prisma, MongoDB, Stripe
-   🔐 Authentication with Kinde Auth
-   💸 Monthly and Annually Subscriptions with Stripe
-   💵 Building a Stripe Billing Portal
-   🛠️ What are Webhooks
-   🔄 Stripe Event Types
-   🌗 Light/Dark Mode
-   🌐 Deployment
-   ✅ This is a lot of work. Support me by subscribing to the [Youtube Channel](https://www.youtube.com/@asaprogrammer_)

### Setup .env file

```js
DATABASE_URL=<get_your_mongo_db_url>

KINDE_CLIENT_ID=
KINDE_CLIENT_SECRET=
KINDE_ISSUER_URL=
KINDE_SITE_URL=
KINDE_POST_LOGOUT_REDIRECT_URL=
KINDE_POST_LOGIN_REDIRECT_URL=

STRIPE_MONTHLY_PLAN_LINK=<get_from_stripe>
STRIPE_YEARLY_PLAN_LINK=<get_from_stripe>

STRIPE_MONTHLY_PRICE_ID=<get_from_stripe>
STRIPE_YEARLY_PRICE_ID=<get_from_stripe>

STRIPE_SECRET_KEY=<get_from_stripe>
STRIPE_WEBHOOK_SECRET=<get_from_stripe>
NEXT_PUBLIC_STRIPE_CUSTOMER_PORTAL_URL=<get_from_stripe>
```

### Install dependencies

```shell
npm install
```

### Start the app

```shell
npm run dev
```

## `Timestamps` for your convenience 👇

-   00:00:00 - Demo
-   00:01:04 - App Setup
-   00:06:20 - MongoDB and Prisma Setup
-   00:16:40 - Auth Setup with Kinde
-   00:19:40 - Understanding Auth Callbacks
-   00:32:50 - Stripe Subscriptions Setup
-   00:49:00 - Webhooks and API Route
-   01:16:10 - Building a Customer Portal
-   01:22:40 - Detailed Deployment and thank you!

### I'll see you in the next one! 🚀
