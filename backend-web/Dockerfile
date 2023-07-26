FROM openjdk:17-jdk-slim as builder

COPY gradlew .
COPY gradle gradle
COPY build.gradle .
COPY settings.gradle .
COPY src src
RUN chmod +x ./gradlew
RUN ./gradlew bootJar

FROM openjdk:17-jdk-slim
COPY --from=builder build/libs/*.jar app.jar
EXPOSE 8080

# ARG SERVER_MODE
# RUN echo "$SERVER_MODE"
# ENV SERVER_MODE=$SERVER_MODE
# "-Dspring.profiles.active=${SERVER_MODE}" 개발환경

ENTRYPOINT ["java", "-Duser.timezone=Asia/Seoul", "-jar", "app.jar"]