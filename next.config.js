/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-var-requires */
const withFonts = require("next-fonts");
const withTM = require("next-transpile-modules")(["react-rainbow-components"]);

module.exports = withTM(
  withFonts({
    enableSvg: true,
    webpack(config, options) {
      return config;
    },
    serverRuntimeConfig: {
      PROJECT_ROOT: __dirname,
    },
  })
);
