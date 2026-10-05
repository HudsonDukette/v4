# ⚠️ A notice about Art Class's future
Art Class has officially shut down and stopped development as of March 2nd, 2025. Thank you all for being apart of this. Feel free to fork this and host it yourself, but this repo will no longer be maintained.

<div align="center">
  <img src="public/assets/images/icon.png" />
  <h1>Art Class v4</h1>
</div>
A website with tons of games, apps, built-in proxy, emulator, and more fun goodies. If you fork this repository, please consider giving it a star ⭐!

## Deploy to a cloud service
[![Deploy on Railway](https://binbashbanana.github.io/deploy-buttons/buttons/remade/railway.svg)](https://railway.app/new/template?template=https://github.com/art-class/v4)
[![Deploy to Cyclic](https://binbashbanana.github.io/deploy-buttons/buttons/remade/cyclic.svg)](https://app.cyclic.sh/api/app/deploy/art-class/v4)
[![Deploy to Koyeb](https://binbashbanana.github.io/deploy-buttons/buttons/remade/koyeb.svg)](https://app.koyeb.com/deploy?type=git&repository=github.com/art-class/v4&branch=main&name=v4)
[![Deploy to Render](https://binbashbanana.github.io/deploy-buttons/buttons/remade/render.svg)](https://render.com/deploy?repo=https://github.com/art-class/v4)
[![Deploy to Vercel](https://binbashbanana.github.io/deploy-buttons/buttons/remade/vercel.svg)](https://vercel.com/new/clone?repository-url=https://github.com/art-class/v4)

> Static hosting can serve the site's pages and catalog, but proxy-based features require a host that runs the Node server. Vercel is supported but experimental, and some things may not work as intended.

## Deploy to GitHub Pages

The included GitHub Actions workflow builds and deploys the static site whenever you push to `main`. In your repository settings, choose **Settings > Pages > Build and deployment > GitHub Actions**. You can also run the static build locally with `npm ci` followed by `npm run build:pages`; the output is written to `dist/`.

GitHub Pages is a static host and cannot run the Bare proxy server. Pages deployments can show the site and its catalog, but launching proxied games, apps, and the emulator requires a deployment that runs the Node server.

## Run locally

You need [NodeJS](https://nodejs.org) and [Git](https://git-scm.com/download) installed on your system.

````bash
git clone https://github.com/art-class/v4.git # Clone the repo
npm install # Install packages
npm start # Start the bare server + serve static files
````

## Support
Most issues can be answered by [opening an issue](https://github.com/art-class/v4/issues).

You can also join our [Discord server](https://discord.gg/desmos) for more support, or to get links.

## Contributors

[![Contrib](https://contrib.rocks/image?repo=art-class/v4#)](https://github.com/art-class/v4/graphs/contributors)
