FROM node:4.4.2

# Install supervisor
RUN npm install -g nodemon

# Create app directory
RUN mkdir -p /webpack-node-angular2

WORKDIR /webpack-node-angular2

# Install app dependencies
#COPY node_modules /webpack-node-angular2
# RUN npm install --production

# Bundle app source
COPY . /webpack-node-angular2/

WORKDIR /webpack-node-angular2/

CMD ["nodemon", "-L", "-e", "js,css,html,png,gif", "server.js"]

EXPOSE 3000