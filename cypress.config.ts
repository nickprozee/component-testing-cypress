import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    experimentalRunAllSpecs: true,
    screenshotOnRunFailure: true,
    viewportWidth: 1980,
    viewportHeight: 1024,
  },

  component: {
    devServer: {
      framework: "create-react-app",
      bundler: "webpack",
    },
  },
});
