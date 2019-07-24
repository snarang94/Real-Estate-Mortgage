FROM node:8

#Instaling sails framework
RUN npm install sails -g

# Create working directory
WORKDIR /usr/src/broker_frontend

ENV NODE_ENV development

#Install app dependecies
COPY package*.json ./

# installing dependencies
RUN npm install

# installing mysql adapter
RUN npm install sails-mysql

# installing waterline ORM
RUN npm install waterline

# Bundle application and copy to container VM
COPY . .

#Opening traffic on port 1337
EXPOSE 1337

CMD sails lift