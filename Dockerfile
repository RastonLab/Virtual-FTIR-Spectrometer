# pull proper node version
FROM node:20

# create working directory
WORKDIR /app

# copy 'package.json' to the root of the working directory
COPY package.json .

# install dependencies
RUN npm install

# copy rest of files to working directory
COPY . .

# expose default React port in container
EXPOSE 3000

# starts React application
CMD ["npm", "start"]
