# RENCI React Starter

This React application boilerplate contains an initial configuration common to the many of the web applications built at/by/for RENCI.

The following are set up by default:

- Webpack 5
- Babel
- CSS
- SCSS
- PostCSS
- Source Maps
- Hot module replacement
- React
- React Refresh
- Image support (png, jpg, jpeg, gif, svg, webp)
- ESLint

In addition, this project will contain the branding resources for RENCI and UNC, which we also often require.

### 🚀 Get Started

Simply cloning this repo is a fine way to get started. The cleanest way to base your React app off of this starter is with [degit](https://www.npmjs.com/package/degit). This is preferred because it doesn't bring the git history of _this_ project into _your_ project. On a machine with NPM, you will need to have degit installed globally (`npm i degit -g`), then the following command will create a directory called `project-name` that contains a current snapshot the code in this repo's `main` branch. Note that this will only bring in the code &mdash; not the git history. You'll still need to run `git init`, etc.

```shell
degit RENCI/react-starter project-name
```

### 🚧 Application Development

You're ready to begin development. Move into your project directory, and start a local development server by running `npm start`.

Note that this development environment utilizes [hot-module-replacement](https://webpack.js.org/guides/hot-module-replacement/) and [react-refresh](https://github.com/pmmmwh/react-refresh-webpack-plugin) for optimal developer experience.

#### Environment Variables

Not every UI will require environment-specific variables, but it is common, so some notes are here to get that setup in Webpack. First, we'll need to install `dotenv` for Webpack.

```shell
npm i dotenv-webpack
```
Next, we'll make two additions to `webpack.config.js`. Import this new dependency at the top of the file

```js
const DotenvPlugin = require('dotenv-webpack')
```

and add the plugin to the `plugins` array.

```js
const plugins = [
  // ...
  new DotenvPlugin({
    path: './.env', // Path to .env file (this is the default)
    safe: true, // load .env.example (defaults to "false" which does not use dotenv-safe)
  }),
]
```

That's it! Now, Webpack will look for the `.env` file for environment variables to feed into the application. An typical `.env` file might look something like the following.

```shell
# .env
API_PORT=3000
```

Then the environment variables can be used in the React application in the following manner.

```js
const { API_PORT } = process.env

console.log(API_PORT) // 3000
```

### 🎁 Building for Production

To build a production-ready React app from this starter, run `npm run build` from the project root directory. The bundled files will be exported to the `dist` directory.

To build an easily debuggable production build, use `npm run build-dev`.

---

See [RENCI/create-renci-app](https://github.com/RENCI/create-renci-app).
