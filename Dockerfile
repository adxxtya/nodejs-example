FROM node:18

# RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json .

# USER node

RUN npm install

COPY . .
# COPY --chown=node:node . .

EXPOSE 8080

CMD [ "node", "app.js" ]