import { defineConfig } from "cypress";

export default defineConfig({
  downloadsFolder: "generated/downloads",
  env: {
    grepFilterSpecs: true,
    grepOmitFiltered: true,
  },
  e2e: {
    baseUrl: "https://pcxstaging.primetechpa.com/",
    setupNodeEvents(on, config) {
      require("tsconfig-paths").register();
      require("@cypress/grep/src/plugin")(config);
      return config;
    },
    specPattern: "cypress/e2e/**/*.spec.ts",
  },
  projectId: '5x9wno',
  retries: {
    runMode: 2,
    openMode: 0,
  },
  screenshotOnRunFailure: false,
  screenshotsFolder: "generated/screenshots",
  video: false,
  videosFolder: "generated/videos",
  viewportHeight: 1080,
  viewportWidth: 1920,
});

