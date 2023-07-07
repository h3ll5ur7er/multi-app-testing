# Playwright Evaluation

## Introduction

### Playwright

Playwright is an open source end-to-end testing framework developped by Microsoft. It can be used to easily test Webapps on different platforms and browsers. PLaywright is written in Typescript and can be used with Javascript, Python, C# and Java. Tests can be written by hand or recorded by clicking through the Webapp. Playwright offers a great integration into Visual Studio Code to record, edit, debug and run tests.

### Fastapi

Fastapi is a modern, fast (high-performance), web framework for building WebAPIs with Python. Fastapi offers the automatic generation of an OpenApi specification and exposes a Swagger UI to test the endpoints.

### Redis

Redis is an open source (BSD licensed), in-memory data structure store, used as a database, cache and message broker.

## This project

To evaluate Playwright, i created two linked WebAPIs using Python, Redis and Fastapi. For this simple evaluation, we are not required to create a propper frontend, we can simply use the Swagger UI.

The two APIs are:

- app1: Reads a value (user) from Redis
- app2: Writes a value (user) to Redis

To orchestrate the test setup i used Docker compose.

## How to run

Requirements:

- Docker and docker-compose
- Any browser to show results

Infrastructure managed by docker-compose:

- Redis database
- app1 and app2 WebAPIs
- Playwright test runner

```bash
cd infra
docker-compose up --build
# http://localhost:3000 to see the results
# http://localhost:8000 to access app1
# http://localhost:8001 to access app2
# Redis exposed on localhost:6379 (not usable via browser)
# Ctrl+C to stop
```

All artefacts and reports are exported to the infra folder.

## How to record tests

Additional Requirements:

- Visual Studio Code
- Playwright extension for Visual Studio Code
- Node.js and npm

Start the test setup as described above.

```bash
# Playwright setup:
cd playwright
npm install

# Open the folder in Visual Studio Code
# Select the "Testing" from the left menu bar
# Click on "Run" to run all tests
# Click on "Record new" to record a new test
#   This will open a new browser window. Navigate to the Webapp you want to test, perform the desired actions and close the browser window.
#   The test will be saved in the "playwright/tests" folder.
#   You can now edit the new test in the "playwright/tests" folder:
#     - Change the name of the test
#     - Clean up the test (remove unnecessary steps, pack more robust selectors, etc)
#     - Change the URL of the Webapp
#     - Add assertions
#     - etc
```

Command line usage:

- `npm run test` to run the tests and show progress/results and serve the report if any tests fail
- `npm run show` to serve the report
- `npm run generate` to open the code generator UI in the browser. This is used to record tests without VSCode. Tests are not automatically saved to the project.
- `npm run trace` to analyze the results of a failed test run (saved in infra/test-results/[test-name]/trace.zip)

## Conclusion

### Pro

Playwright is very versatile and it allows to write robust tests that automatically run on different browsers and platforms. It is easy to use and the integration into Visual Studio Code is great. The generated reports are very helpful to analyze test results. The generated code is easy to read and understand. The generated code is also easy to modify and extend.

The tests can open multiple webpages one after the other or in parallel. This allows to test complex workflows that span multiple pages.

The API is pretty well documented, easy to use and allows pretty low level access if needed.

Web requests can be intercepted and modified. This allows testing of error cases that are hard to reproduce in a real environment.

### Con

The generated code is not very DRY. However, it is easy to refactor the code and make it reuse some parts.

## References

- [Playwright](https://playwright.dev/) ([Github](https://github.com/microsoft/playwright))
