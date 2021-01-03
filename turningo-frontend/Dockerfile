FROM node:15.3.0 as build-step
WORKDIR /usr/src/app
COPY package.json package.json 
RUN npm install
RUN npm install -g @angular/cli
COPY . .
RUN ng build --prod

FROM nginx:alpine
COPY --from=build-step /usr/src/app/dist/turningo-frontend /usr/share/nginx/html
EXPOSE 80 443
