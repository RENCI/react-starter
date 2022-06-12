# RENCI React Starter

This React application boilerplate contains an initial configuration common to the many of the web applications built at/by/for RENCI.

The following are set up by default: Webpack 5, Babel, CSS, SCSS, Source Maps, Hot module replacement, React, Image support (png, jpg, jpeg, gif, svg, webp), and ESLint. For a more complete set of dependencies, consults the `package.json` file. In addition, this starter comes with the branding resources for RENCI and UNC, which we also often require.

### 🚀 Get Started

Simply cloning this repo is a fine way to get started. The cleanest way to base your React app off of this starter is with [degit](https://www.npmjs.com/package/degit). This is likely a more preferred way because degit doesn't bring the git history of _this_ project into _your_ project. On a machine with NPM, you will need to have degit installed globally (`npm i degit -g`), then the following command will create a directory called `project-name` that contains a current snapshot the code in this repo's `main` branch. Note that this will only bring in the code &mdash; not the git history. You'll still need to run `git init`, etc.

```shell
degit RENCI/react-starter project-name
```

### 🚧 Application Development

Now, that we have the base code. We're ready to install the application depdendencies and begin development. Move into the project root, and install the dependencies with `npm i`. Then start a local development server by running `npm start`. Note that this development environment utilizes [hot-module-replacement](https://webpack.js.org/guides/hot-module-replacement/) and [react-refresh](https://github.com/pmmmwh/react-refresh-webpack-plugin) for optimal developer experience. That's it!

#### Environment Variables

Not every UI will require environment-specific variables, but it is common, so some notes are here to get that set up in Webpack. First, we'll need to install one dependency: `dotenv-webpack`.

```shell
npm i dotenv-webpack
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

Then the environment variables will populate the `process.env` object in your React application. See the [dotenv-webpack documentation](https://github.com/mrsteele/dotenv-webpack#readme) for additional customization. Note that it is often desirable to add `.env` to your `.gitignore` file.

### 🎁 Building for Production

To build a production-ready React app from this starter, run `npm run build` from the project root directory. The bundled files will be exported to the `dist` directory.

To build an easily debuggable production build, use `npm run build-dev`.

---

See [RENCI/create-renci-app](https://github.com/RENCI/create-renci-app).
