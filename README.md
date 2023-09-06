<a href="https://epicfolio.zank.studio">
  <img src=".github/images/banner.png" />
</a>

# Epicfolio


Epicfolio is a template made with [Astro](https://astro.build), [Tailwind](https://tailwindcss.com/), [AlpineJS](https://alpinejs.dev/) and [gsap](https://greensock.com/gsap/).


[![Deploy to Cloudflare Workers](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/zankhq/epicfolio)

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/zankhq/epicfolio)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/zankhq/epicfolio)


### [🧪 Site preview →](https://epicfolio.zank.studio)

### [🧑‍🚀 Astro website →](https://astro.build/)

### [🕮 Astro docs →](https://docs.astro.build/en/getting-started/)

---

## Preview

![Epicfolio Preview](.github/images/preview.png)

## 🧪 Test

On the folder run

1. `npm i`  <small>(or `yarn` or `pnpm i`)</small>
2. `npm run dev`  <small>(or `yarn dev` or `pnpm dev`)</small>


## 🚀 Deploy

### Cloudflare pages (suggested)

You can either click on the button above to deploy to Cloudflare automatically, or you can fork this repository and deploy manually from cloudflare dashboard.

You can leave build settings as defaults.

## ✅ Features

- [x] CMS for editing blog post (thanks to decap CMS)
- [x] PWA (thanks to vite-pwa)

## ✍️ Admin dashboard

You can access the admin dashboard for editing blog post at `/admin`

For more information follow Decap CMS documentation at https://decapcms.org/docs/

In order to access the admin dashboard to change blog articles content you need to have access to the github repo, a quick way to test it test would be fork the repo and than configure decap cms accordingly to your cloud provider (netlify, cloudflare, vercel, etc...).

If you use cloudflare pages you can follow this guide https://github.com/i40west/netlify-cms-cloudflare-pages.

If you use netlify it's actually easier, you will need to change in the file `astro.config.mjs` NetlifyCMS config `config.backend.name` to git-gateway. (See https://decapcms.org/docs/git-gateway-backend/#git-gateway-with-netlify for more info)

<br/>

---

<p align="right"><a href="https://zank.studio" target="_blank">zank.studio</p>
