# Webflow development workflow

This is a basic setup using Vite that we can use to help us build Webflow sites with animations or custom javascript.

## Getting started

1. Clone this repository.
2. Go into your Webflow project settings and add the following code snippets to the head of your project:

```
<!-- This first script is to see your changes update in real time. -->
<script type="module" src="http://localhost:5173/@vite/client"></script>
<script type="module" src="http://localhost:5173/js/index.js"></script>
```

3. Save and publish your webflow project.

## Running the workflow

1. Run `npm run dev`.
2. Make changes to files in your `/js` directory.
3. See your updates change in real time.

## Building for production

- To build your files for production, run `npm run build`.
- Bundled files will be generated within the `/dist` directory.

## Hosting your `index.js` file.

- In Google Cloud Platform (GCP), create a new subfolder in the `otherlife-public-assets-prod` folder with the name of your project. Upload the built and bunlded JavaScript file in this folder. Once the file is uploaded, copy the URL, and use paste this as the script tag in your Project Settings, replacing the development scripts.

` <script type="text/javascript" src="https://GOOGLE_CLOUD_URL"></script>`
