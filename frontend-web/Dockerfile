FROM node:alpine as builder

WORKDIR /usr/src/app
COPY package.json /usr/src/app/package.json
RUN npm install --force

COPY . /usr/src/app
RUN npm run build

FROM nginx:alpine
EXPOSE 3000
COPY nginx/default.conf /etc/nginx/conf.d/default.conf

# 위에서 생성한 앱의 빌드산출물을 nginx의 샘플 앱이 사용하던 폴더로 이동
COPY --from=builder /usr/src/app/build /usr/share/nginx/html