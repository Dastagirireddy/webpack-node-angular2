FROM node:4.4.2

# Create app directory
RUN mkdir -p /webpack-node-angular2

WORKDIR /webpack-node-angular2

# Install app dependencies
RUN npm install --production

# Bundle app source
COPY . /webpack-node-angular2/

WORKDIR /webpack-node-angular2/

CMD ["node", "server.js"]

EXPOSE 3000