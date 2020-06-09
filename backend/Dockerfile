FROM node:14-alpine

RUN mkdir -p /usr/src/handyman

WORKDIR /usr/src/handyman
# copy package.json into the container at /api
COPY package*.json /usr/src/handyman/

RUN npm install

COPY . /usr/src/handyman/

EXPOSE 8181

CMD ["npm", "start"]

