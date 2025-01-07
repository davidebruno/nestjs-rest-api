# Project Overview
I have created this sample project as learning reference on how to use NestJS Framework to build REST API. There are different Frameworks that can be used to build APIs, NestJS offers some advantages as:

  -  **Scalability and Maintainability:** NestJS promotes a modular architecture inspired by Angular’s design principles. It allows developers to easily organize applications into modules, components, services, and controllers. This modularity helps with code maintainability, and scalability and allows us to isolate and refactor specific parts of the application easily, without affecting other areas. This is important as it allows small teams or large to work on different features and functionality in parallel.
    
  -  **Native Support for Microservices:**
When re-architecting our API we knew that Microservices was the route we wanted to take, so finding a framework that supported this type of architecture was important. Finding one that natively supported it was even better. NestJS has a handy package@nestjs/microservices that handles all the service communication and supports a range of transport protocols, such as gRPC.

  - **Similarity to Angular:**
At Ricoh Europe we already have strong experience and foundations with Angular, which meant getting started with NestJS was much easier than the other options. Any Angular developer can easily get started building a NestJS application with only a small learning curve. This is a big advantage when getting started building a new API.

  - **TypeScript at its Core:**
NestJS uses TypeScript at its core which gives a strong adherence to TypeScript. TypeScript is great for many reasons such as type safety, robust codebase, and early error detection and others.

  - **Native GraphQL Support:**
NestJS has a built-in module for GraphQL called @nestjs/graphqlwhich means it is easy to seamlessly integrate GraphQL into your application. This module allows you to define GraphQL schemas using decorators and TypeScript classes, making it easy to create and manage your GraphQL API.

  This written example show a CRUD REST API build using NestJS, Docker, Postgres, Swagger, and Prisma

This project creates a simple CRUD REST API built on top of NodeJs that uses NestJS as backend framework, Docker to run the Postgres database, Swagger to document and provide an interactive tool to eecute the APIs and Prisma as a tool that facilitates the interaction with the Database as it builds boilerplate code, interfaces and scripts to interact with it.

## How to Run
1 - System Requirements:
  - NodeJs version 20.7.0
  - Docker - latest
  - Docker Compose - latest
    
2 - Clone the repo run the following command line on a shell:
  - npm install
  - npm run start
  - execute the APIs calls via Swagger UI at http://localhost:3000/api

<img src="[https://github.com/davidebruno/nestjs-rest-api/issues/1#issue-2621507482](https://private-user-images.githubusercontent.com/29027414/381179149-37432bcf-9092-45e1-a118-437114ed63e4.gif?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzYyMDk4ODMsIm5iZiI6MTczNjIwOTU4MywicGF0aCI6Ii8yOTAyNzQxNC8zODExNzkxNDktMzc0MzJiY2YtOTA5Mi00NWUxLWExMTgtNDM3MTE0ZWQ2M2U0LmdpZj9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTAxMDclMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwMTA3VDAwMjYyM1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWIxZDQwYjM5MTM0NDk3MTQ3ZWE0NTAxMjUzZjM5Mjg1MDI2MTcyOTRmM2FkNzY5NGIyMDRkNzViMTliMjJmMDkmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.Jups68_W7SqfKqEHuyaLDweykgzoqVLpbHPwr0bYjkk)" />

<img src="https://private-user-images.githubusercontent.com/29027414/381179149-37432bcf-9092-45e1-a118-437114ed63e4.gif?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzAyMTQ5ODAsIm5iZiI6MTczMDIxNDY4MCwicGF0aCI6Ii8yOTAyNzQxNC8zODExNzkxNDktMzc0MzJiY2YtOTA5Mi00NWUxLWExMTgtNDM3MTE0ZWQ2M2U0LmdpZj9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDEwMjklMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQxMDI5VDE1MTEyMFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWVlM2EzZDJlNTQ2NWI2NDI2MmIzYjhhMTBjOTE4NGFjZTQzMmM2ODdjYWU3OGNiZTkwMTgxMzg0NjYzZWQ1YWYmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.V9mBbEgbyJgC9Iuz_6GfN4Mn2xh_aeuNSCn0pEmcXQo" />
