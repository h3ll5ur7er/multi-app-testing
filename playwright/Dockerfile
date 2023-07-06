FROM mcr.microsoft.com/playwright:v1.34.0-jammy
COPY package.json /playwright/package.json
WORKDIR /playwright
VOLUME /playwright/playwright-reports
VOLUME /playwright/test-results
RUN npm install
COPY . /playwright
VOLUME /playwright/tests
EXPOSE 3000
ENTRYPOINT /bin/bash -c "npm run test" ; /bin/bash -c "npm run show -- --host 0.0.0.0 --port 3000"
