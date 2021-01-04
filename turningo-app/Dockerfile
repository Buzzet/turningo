FROM adoptopenjdk/openjdk11:ubi
ARG JAR_FILE
COPY app.jar /
ENTRYPOINT ["java","-jar","/app.jar"]
