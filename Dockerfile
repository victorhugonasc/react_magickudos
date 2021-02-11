# pull official base image
FROM node:13.12.0-alpine

# set working directory
WORKDIR /usr/src/app
 
# Copies package.json and package-lock.json to Docker environment
COPY package*.json ./
 
# Installs all node packages
RUN npm install
 
# Copies everything over to Docker environment
COPY . .

#exposing port 3000
EXPOSE 3000

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH
ENV REACT_APP_BACKEND_DOMAIN=http://localhost:8080
ENV REACT_APP_FRONTEND_DOMAIN=http://localhost:3000

# start app
CMD ["npm", "start"]