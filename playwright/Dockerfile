FROM mcr.microsoft.com/playwright:v1.34.0-jammy
ENV CI=1
COPY package.json /playwright/package.json
WORKDIR /playwright
RUN npm install
VOLUME /playwright/playwright-report
VOLUME /playwright/test-results
VOLUME /playwright/tests
COPY playwright.config.ts /playwright/playwright.config.ts
EXPOSE 3000
ENTRYPOINT /bin/bash -c "npm run test" ; /bin/bash -c "npm run show -- --host 0.0.0.0 --port 3000"
