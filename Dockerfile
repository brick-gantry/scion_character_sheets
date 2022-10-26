FROM node as build-vue
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY front/package*.json ./
RUN npm install
COPY front .
RUN npm run build

FROM python:3.10-buster
RUN apt update && apt install -y nginx
COPY back /back
RUN pip install -r /back/requirements.txt
COPY --from=build-vue /app/dist /usr/share/nginx/html
RUN python /back/setup.py install
COPY nginx.conf /
COPY supervisord.conf /

EXPOSE 80

CMD supervisord -n -c /supervisord.conf