FROM maven:3.9-eclipse-temurin-21 AS build

WORKDIR /backend-om

COPY . .

RUN chmod +x mvnw
RUN ./mvnw clean package -DskipTests

FROM eclipse-temurin:21-jre-jammy AS runtime

WORKDIR /backend-om

COPY --from=build /backend-om/target/*.jar backend-om.jar

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "backend-om.jar"]