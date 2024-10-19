// @ts-check
const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  // Reporter configuration
  reporter: [
    ['list'], 
    ['junit', {  outputFile: 'junitTestResult.xml' }],
    ['experimental-allure-playwright']
  ],

  // Test config files
  globalSetup: 'globalSetup.js',
  testDir: './src/tests',
  use: {
    args: ["--start-maximized"],
    trace: 'on-first-retry',
    screenshot: 'only-on-failure'
  },

  // retries in case of failure
  retries: 1,

  // timeout logic
  timeout: 60000,
  expect: {
    timeout: 10000,
  },
  
  // Parallel configuration
  fullyParallel: true,
  workers: 4,
  
  // Decide in which browsers will run the tests
  projects: [
    {
      name: 'Google Chrome',
      use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'safari',
      use: { ...devices['Desktop Safari'] },
    }
        
    /*
      Test against mobile viewports.
      {
        name: 'Mobile Chrome',
        use: { ...devices['Pixel 5'] },
      },
      {
        name: 'Mobile Safari',
        use: { ...devices['iPhone 12'] },
      },

      Test against branded browsers.
      {
        name: 'Microsoft Edge',
        use: { ...devices['Desktop Edge'], channel: 'msedge' },
      },
    */
  ],
});

