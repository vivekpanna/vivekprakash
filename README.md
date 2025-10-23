This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

\`\`\`bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Custom domain routing on Render

This project serves two distinct experiences from the same Next.js codebase:

- `vivekprakash.de` → landing page rendered from `app/page.tsx`
- `portfolio.vivekprakash.de` → immersive portfolio rendered from `app/portfolio/page.tsx`

To host both on a single Render Web Service:

1. **Add both custom domains in Render.** Point the apex domain `vivekprakash.de` (and optionally `www.vivekprakash.de`) to the service, then add the subdomain `portfolio.vivekprakash.de` as an additional custom domain. Update your DNS provider with the A/ALIAS (apex) and CNAME (subdomain) records Render provides.
2. **Set the portfolio hostname (optional).** If you need a hostname other than `portfolio.vivekprakash.de`, define the `PORTFOLIO_HOST` environment variable on the Render service (for example `work.vivekprakash.de`). The middleware included in this repo will automatically rewrite requests from that host to the `/portfolio` route.
3. **Add a rewrite rule.** In the Render dashboard, open the service → **Redirects / Rewrites** and add:

   | Source | Destination | Action |
   | ------ | ----------- | ------ |
   | `/*`   | `/portfolio/$1` | _Rewrite_ |

   Attach the rule to the `portfolio.vivekprakash.de` custom domain only. The middleware ensures direct navigations, deep links, and asset requests resolve correctly.
4. **Deploy once.** Redeploy (or trigger a manual deploy) so the middleware and domain configuration take effect.

Visitors hitting `vivekprakash.de` stay on the landing page, while anyone using `portfolio.vivekprakash.de` is seamlessly served the portfolio without maintaining two separate codebases.
