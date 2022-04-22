# jorum

Jorum (**J**ava F**orum**) is a simple forum application written using the Spring Boot framework, with a React frontend. It is currently a work in progress and I am developing it primarily to teach myself Spring Boot and React.

## Developing

To build and run the backend, simply run `mvnw spring-boot:run` in the root folder.

## Packaging

Running the usual `mvnw clean install -DskipTests` will package both the backend and frontend into a single JAR file which can then be deployed and run via: `java -jar [jar-name].jar`  