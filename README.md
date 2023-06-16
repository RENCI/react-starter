# RENCI React Starter

This React application boilerplate contains an initial configuration common to the many of the web applications built at/by/for RENCI.

The following are set up by default: Webpack 5, Babel, CSS Modules, Source Maps, Hot Module Replacement, React, Image support (png, jpg, jpeg, gif, svg, webp), and ESLint. Basic client-side routing is configured with a couple exmaples using [Markdown](https://www.markdownguide.org/) files for content management. For a more complete set of dependencies, consult the `package.json` file. In addition, this starter comes with the branding resources for RENCI and UNC, which we also often require.

### 🚀 Get Started

This repository is a template repository. Click [Use this template](https://github.com/renci/react-starter/generate) to
generate a new repository with the same directory structure and files as this repository.
(The "Include all branches" checkbox can safely remain unchecked on the repository generation page.)

### 🚧 Application Development

Now that we have the base code. We're ready to install the application depdendencies and begin development. Move into the project root directory, and install the dependencies with `npm i`. Then start a local development server by running `npm start`. Note that this development environment utilizes [hot-module-replacement](https://webpack.js.org/guides/hot-module-replacement/) and [react-refresh](https://github.com/pmmmwh/react-refresh-webpack-plugin) for optimal developer experience. That's it!

#### Environment Variables

Not every UI will require environment-specific variables, but it is common, so some notes are here to get that set up in Webpack.
First, we'll need to install `dotenv-webpack`, which compiles environment variables into the application bundle.

```shell
npm i dotenv-webpack -D
```
Next, we'll make two additions to `webpack.config.js`: (1) import this new dependency at the top of the file

```js
const DotenvPlugin = require('dotenv-webpack')
```

and (2) add the plugin to the `plugins` array.

```js
const plugins = [
  // ...
  new DotenvPlugin(),
]
```

All done! Now, Webpack will look for the `.env` file for environment variables to feed into the application. A typical `.env` file might look something like the following.

```shell
# .env
API_PORT=3000
```

The environment variables defined in the `.env` file will populate the `process.env` object in your React application. See the [dotenv-webpack documentation](https://github.com/mrsteele/dotenv-webpack#readme) for additional customization. Note that it is often desirable to add `.env` to your `.gitignore` file.

> This section can be used as a guide to install other Webpack [plugins](https://webpack.js.org/plugins/) and [loaders](https://webpack.js.org/loaders/) in general.

### 🎁 Building for Production

To build a production-ready React app, run `npm run build` from the project root directory. The bundled files will be exported to the `dist` directory. To build an easily debuggable production build, use `npm run build-dev`.

#### Docker

A Dockerfile lives in this repo to help get started with containerized deployment.
It is a multi-stage build that results in an NGINX image with the application bundle where NGNIX expects to find it.

The command to build an image might look something like the following.
```
docker build -t my-ui .
```

To spin up a container from your image, use a command such as the following.
```
docker run --rm -p 80:8080 my-ui
```
