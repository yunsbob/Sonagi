FROM nginx:alpine

RUN rm /etc/nginx/conf.d/default.conf

COPY nginx.conf /etc/nginx/conf.d
COPY cert/certificate.crt /cert
COPY cert/private.key /cert


CMD ["nginx", "-g", "daemon off;"]