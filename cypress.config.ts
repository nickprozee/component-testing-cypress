import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    experimentalRunAllSpecs: true,
    screenshotOnRunFailure: true,
    viewportWidth: 1980,
    viewportHeight: 1024,
  },

  component: {
    viewportWidth: 800,
    viewportHeight: 1024,
    devServer: {
      framework: "create-react-app",
      bundler: "webpack",
    },
  },
});
