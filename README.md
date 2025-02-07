# Webflow development workflow

This is a basic setup using Vite that we can use to help us build Webflow sites with animations or custom javascript.

## Getting started

1. Clone this repository.
2. Ensure LocalCan app is running to establish secure connection to webflow.
3. Go into your Webflow project settings and add the following code snippets to the head of your project:

```
<!-- This first script is to see your changes update in real time. -->
<script type="module" src="https://webflow-vite.local/@vite/client"></script>
<script type="module" src="https://webflow-vite.local/js/index.js"></script>
```

This script is for the global js file that will be used throughout the whole site. This starter also support page-spefic JavaScript files. Simply create a js file in the `pages` directory and update your `vite.config.js` file.

```
<script type="module" src="https://webflow-vite.local/@vite/client"></script>
<script type="module" src="https://webflow-vite.local/js/pages/home.js"></script>
```

3. Save and publish your pages and webflow project.

## Running the workflow

1. Run `npm run dev`.
2. Make changes to files in your `/js` directory.
3. See your updates change in real time.

## Building for production

- To build your files for production, run `npm run build`.
- Bundled files will be generated within the `/dist` directory.

## Hosting your bundled `JavaScript` files.

- Host bundled JavaScript files via CDN such as AWS or GCP (Google Cloud Platform). Upload the built and bunlded JavaScript file to your CDN. Once the file is uploaded, copy the URL, and use paste this as the script tag in your Project Settings, replacing the development scripts.

`<script type="module" src="https://AWS_URL"></script>`

Alternatively, you can covnert your JavaSript file to a `.txt` file, and host it in your Webflow Assets directory. Be sure to update your script type:

`<script type="text/javascript" src="https://WEBFLOW_ASSET_LINK"></script>`
