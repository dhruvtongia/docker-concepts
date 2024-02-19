FROM node:hydrogen-alpine3.19
WORKDIR = /usr/src/app
COPY ./package* . 
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "run", "dev"]