FROM hub.hamdocker.ir/library/node:18-alpine as BUILD_IMAGE
WORKDIR /app

# install dependencies
COPY . .
RUN yarn install --frozen-lockfile
# build
WORKDIR /arze-customer/
RUN yarn build

FROM hub.hamdocker.ir/library/node:18-alpine
WORKDIR /app
# copy from build image

COPY --from=BUILD_IMAGE /public ./public
COPY --from=BUILD_IMAGE /.next/standalone ./
COPY --from=BUILD_IMAGE /node_modules ./node_modules
COPY --from=BUILD_IMAGE /.next/static ./.next/static

EXPOSE 3000
CMD ["node", "server.js"]