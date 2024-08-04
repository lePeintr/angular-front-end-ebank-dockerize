#Etape 1: Compile and cuild angular codebase
#Use official node image as the base image
FROM node:latest as build

#Set the working directoru
WORKDIR /usr/local/app

#Add the source code to app
COPY ./ /usr/local/app

#Install all the dependencies because node_modules was not copy
RUN npm install

#Generate the build of application execute ng build
RUN npm run build

#Etape 2: serve app with nginx server

#Use official nginx image as the base image
FROM nginx:latest

#copy the build output to replace the default nginx contents.
COPY --from=build /usr/local/app/dist/angular-front/browser /usr/share/nginx/html

#Expose port 80
EXPOSE 80
