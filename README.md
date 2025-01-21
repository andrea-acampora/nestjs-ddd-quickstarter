# NestJS Quickstarter

[![Build](https://github.com/andrea-acampora/nestjs-ddd-quickstarter/actions/workflows/build.yml/badge.svg)](https://github.com/andrea-acampora/nestjs-ddd-quickstarter/actions/workflows/build.yml)
[![pages-build-deployment](https://github.com/andrea-acampora/nestjs-ddd-quickstarter/actions/workflows/pages/pages-build-deployment/badge.svg)](https://github.com/andrea-acampora/nestjs-ddd-quickstarter/actions/workflows/pages/pages-build-deployment)
![Node Current](https://img.shields.io/node/v/%40nestjs%2Fcore)

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/andrea-acampora/nestjs-ddd-quickstarter/blob/main/LICENSE)
[![Semantic Release](https://img.shields.io/badge/semantic--release-angular-e10079?logo=semantic-release)](https://github.com/semantic-release/semantic-release/tree/master)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-%23FE5196?logo=conventionalcommits&logoColor=white)](https://conventionalcommits.org)

[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/andrea-acampora/nestjs-ddd-quickstarter?style=flat&color=cyan)](https://github.com/andrea-acampora/nestjs-ddd-quickstarter/pulls)
[![GitHub Issues](https://img.shields.io/github/issues-raw/andrea-acampora/nestjs-ddd-quickstarter?style=flat)](https://github.com/andrea-acampora/nestjs-ddd-quickstarter/issues)
[![GitHub Repo stars](https://img.shields.io/github/stars/andrea-acampora/nestjs-ddd-quickstarter?style=flat&color=yellow)](https://github.com/andrea-acampora/nestjs-ddd-quickstarter/stargazers)
[![GitHub contributors](https://img.shields.io/github/contributors/andrea-acampora/nestjs-ddd-quickstarter?color=orange)](https://github.com/andrea-acampora/nestjs-ddd-quickstarter/graphs/contributors)

The purpose of this [repository](https://github.com/andrea-acampora/nestjs-ddd-quickstarter) is to create a ready-to-use project following _Domain-Driven Design_, _Clean
Architecture_ and _Functional Programming_ best practices combined with some _DevOps_ techniques such as _Continuous
Integration_, _Continuous Delivery_ and _Quality Assurance_.

The project is completely open source using the **MIT** license, feel free to contribute by opening
a [issue](https://github.com/andrea-acampora/nestjs-ddd-quickstarter/issues/new/choose),
a [pull request](https://github.com/andrea-acampora/nestjs-ddd-quickstarter/compare) or
a [discussion topic](https://github.com/andrea-acampora/nestjs-ddd-quickstarter/discussions/new/choose).

In the following chapters you will find a description of the main choices, technologies and techniques adopted.

## Stack

| NodeJS    | TypeScript | NestJS |  PostgreSQL   | Mikro-ORM  | Docker |
| :---:     | :----:     | :---:  |  :---:        | :----:     | :---:  |
| [![nodejs](https://deviconapi.vercel.app/nodejs?color=83CD29ff&size=75)](https://nodejs.org/en) | [![typescript](https://deviconapi.vercel.app/typescript?color=007ACCFF&size=75)](https://www.typescriptlang.org) | [![nestjs](https://deviconapi.vercel.app/nestjs?color=DF234FFF&size=75)](https://nestjs.com)  | [![postgresql](https://deviconapi.vercel.app/postgresql?version=plain&color=336791FF&size=75)](https://www.postgresql.org) | [<img src="https://avatars.githubusercontent.com/u/54766168?s=200&v=4" width="75" />](https://mikro-orm.io) | [![docker](https://deviconapi.vercel.app/docker?color=019BC6FF&size=75)](https://www.docker.com) |

## Instructions

1. Fork this repository and use it as ```template``` repository
2. Install all dependencies
     ```bash
     npm install
     ```
3. Start the _PostgreSQL_ development database in a local container
    ```bash
     docker-compose up -d
     ```
4. Provide a ```.env``` file with all required environment variables _(check out ```.env.dist``` example file)_
5. Create and generate the database schema from your entities metadata:
     ```bash
     npm run schema:update
     ```
7. Start to create your modules and entities following all the principles explained in the below chapters!

## Table of Contents

- [Architecture](#architecture)
- [Domain-Driven Design](#domain-driven-design)
- [Clean Architecture](#clean-architecture)
- [Testing](#testing)
- [Functional Programming](#functional-programming)
- [Workflow Organization](#workflow-organization)
- [Semantic Versioning](#semantic-versioning)
- [Continuous Integration](#continuous-integration)
- [Continuous Delivery](#continuous-delivery)
- [Automatic Dependency Update](#automatic-dependency-update)
- [Automatic API Documentation](#automatic-api-documentation)
- [Backend Best Practices](#backend-best-practices)

### Architecture

**NestJS** provides a modular architecture that allows the creation of loosely coupled and easily testable components. \
Although this framework natively supports the development of microservice or event-driven architectures, they will not
be considered because the purpose of this project is just to create a simple, extensible and ready-to-use application. \
For this reason, we are going to implement a **Modular Monolith**: an architectural pattern that structures the
application into independent modules or components with well-defined boundaries.

<p align="center">
<img src="https://raw.githubusercontent.com/andrea-acampora/nestjs-ddd-quickstarter/refs/heads/main/docs/images/modular-monolith.png" height="250" alt="Modular Monolith Architecture" /><br>
<sup>Example of a Modular Monolith Architecture.</sup>
</p>


In addition to simplicity and extensibility, a modular monolith allows us to start the development of the application as
a single repository and deployment unit, with distinct and clear boundaries between business contexts.
By this way, we can gradually refactor our architecture to a microservice architecture rather than implementing it from
the beginning. \
In **NestJS**, applications typically consists of multiple modules, each serving a specific purpose or feature set.
A module is a class annotated with the `@Module()` decorator, and it encapsulates a specific domain or feature of the
application. A module class define providers and inject them into other components leveraging **Dependency Injection**.

### Domain-Driven Design

### Clean Architecture

Once the various bounded contexts have been identified and designed, it is necessary to proceed with the internal design of each module. \
In this context, we will be helped by the principles of **Clean Architecture**, defined by _Robert C. Martin_ in this [article](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html).

> Clean architecture is a software design philosophy that separates the elements of a design into ring levels. An important goal of clean architecture is to provide developers with a way to organize code in such a way that it encapsulates the business logic but keeps it separate from the delivery mechanism.

This architecture attempts to integrate some of the leading modern architecture like [Hexagonal Architecture](https://en.wikipedia.org/wiki/Hexagonal_architecture_(software)), [Onion Architecture](http://jeffreypalermo.com/blog/the-onion-architecture-part-1/), [Screaming Architecture](https://blog.cleancoder.com/uncle-bob/2011/09/30/Screaming-Architecture.html) into one main architecture. \
**NestJS**, with its modular structure and robust features, provides an excellent foundation for applying Clean Architecture principles.
Since each module corresponds to a different Bounded Context, we are going to apply these principles within each module of the application.

<p align="center">
<img src="https://raw.githubusercontent.com/andrea-acampora/nestjs-ddd-quickstarter/refs/heads/main/docs/images/clean-architecture.png" height="250" alt="Clean Architecture" />
<br>
<sup>Different layers of the Clean Architecture.</sup>
</p>

In this application, we are going to use these Clean Architecture layers:
- **Entity Layer**: contains all domain elements. It is the central, most stable and therefore least volatile layer of any module, and the concepts defined within it are completely independent of anything defined in the external layers, resulting in decoupling from the technologies and libraries used.
- **Use Case Layer**: contains all the use cases of the system. They use only the domain concepts defined in the innermost Entity layer acting as orchestrators of entities encapsulating business policies. They thus allow the details of domain elements to be abstracted behind a coarse-grained API that reflects the system's use cases. This allows unit-testing of system use cases without having dependencies on the infrastructure.
- **Application Layer**: contains the controllers and presenters. The former handle the orchestration of the application flow by managing the interaction between external actors and the business policies defined in the core. They therefore do not represent domain concepts let alone define business rules. The second ones deal with serialization and deserialization, then presentation, of data to the infrastructure layer or use case layer, thus adapting the data to the most convenient format for the layers involved.
- **Infrastructure Layer**: contains all the technological choices of the system. They are confined to the outermost layer because they are more volatile thus allowing everything defined in the innermost layers to remain valid in the face of technological changes, providing more flexibility to the system.

In cases where inner layers must interact with abstractions defined in upper layers, as defined in the Clean Architecture [article](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html), the principle of **Dependency Inversion** (DIP) is exploited to make dependencies go only inward. Whenever this occurs, an interface is defined in the inner layer that is then implemented in the outer layer. In this way, dependencies remain only inward, without depending on concepts defined in the outer layers.

Accordingly, each module of the application will have the following directory structure:
```md
.
└── src
    ├── app.module.ts
    ├── main.ts
    ├── config
    ├── lib
    └── modules
        └── module-x
            ├── domain
            ├── usecase
            ├── application
            └── infrastructure
        └── module-y
            ├── domain
            ├── usecase
            ├── application
            └── infrastructure
```

### Testing

### Functional Programming
In this section we are going to discuss and to explore some technical choices used in the development of this project, with a focus on **Functional Programming**.

 > Functional programming is a programming paradigm where programs are constructed by applying and composing functions. It is a declarative programming paradigm in which function definitions are trees of expressions that map values to other values, rather than a sequence of imperative statements which update the running state of the program.

Since this is a web server using _NodeJS_ and _TypeScript_, the project will not be fully functional like _Scala_ or _Haskell_ applications. \
Instead, we will try to apply the following principles belonging to functional programming with the aim of improving the quality of our code:

- **Immutability**: one of the biggest headaches in _JavaScript_ is dealing with state changes and unexpected side effects. With FP principles like immutability, we avoid accidental data mutations. Instead of modifying objects directly, we create new ones. This approach makes our app more predictable and easier to debug. _TypeScript_'s type system helps enforce immutability with tools like readonly and utility types, ensuring your data stay consistent.
  
- **Pure Functions**: pure functions always return the same output for the same input and don't mess with the outside world. This predictability makes our code easier to test and reason about. With _TypeScript_, we get an added layer of security by defining precise input and output types.
  
- **Higher-Order Functions**: higher-order functions (HOFs) let us write reusable and composable code. They can be used to create reusable abstractions that can simplify complex code and make it easier to understand.
  
- **Type Safety**: with _TypeScript_, you catch mistakes before they become runtime issues. FP concepts align perfectly with _TypeScript_'s static typing, reducing the chances of passing around undefined or null by accident.

- **Declarativity**: functional programming encourages writing code that focuses on what should happen rather than how it happens. This leads to cleaner, more readable code, which is easier for us to maintain.

To implement and follow all of these FP principles we are going to use the [Effect-TS](https://github.com/Effect-TS/effect) library, which belongs to the [Effect](https://effect.website/) ecosystem. \
The `effect-ts` library is a powerful tool for managing functional programming paradigms in a _Node.js_ and _TypeScript_ project. It provides a comprehensive set of utilities for handling side effects, asynchronous operations, and error management in a purely functional and type-safe manner.
Its core abstractions, such as `Effect`, `Option`, and `Either`, allow developers to build complex applications while maintaining clarity and scalability. Whether handling HTTP requests, database interactions, or background tasks, `effect-ts` simplifies the process of structuring the logic in a way that is predictable, testable, and resilient to failure.

<p align="center">
<img src="https://raw.githubusercontent.com/andrea-acampora/nestjs-ddd-quickstarter/refs/heads/main/docs/images/effect-code.png" height="250" alt="Effect Code" />
<br>
<sup>Example of Effect-TS usage.</sup>
</p>


### Workflow Organization
In order to make the best use of _DevOps_ practices, it is necessary to adopt an appropriate **Workflow Organization**. \
In this project we are going to use a custom version of the [Gitflow Workflow]( https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow). \
Instead of a single `main` branch, this workflow uses two branches to record the history of the project. The `main` branch stores the official release history, and the `develop` branch serves as an integration branch for features. It's also convenient to tag all commits in the main branch with a version number. Each new feature should reside in its own branch, which can be pushed to the central repository for backup/collaboration. But, instead of branching off of main, feature branches use develop as their parent branch. When a feature is complete, it gets merged back into develop. Features should never interact directly with main.

<p align="center">
<img src="https://raw.githubusercontent.com/andrea-acampora/nestjs-ddd-quickstarter/refs/heads/main/docs/images/git-flow.jpg" height="250" alt="Gitflow Workflow" />
<br>
<sup>Gitflow branch structure.</sup>
</p>

The overall flow of Gitflow is:

1. A develop branch is created from main
2. Feature branches are created from develop
3. When a feature is complete it is merged into the develop branch
4. When we want to trigger a release the develop branch is merged into main
5. If an issue in main is detected a hotfix branch is created from main
6. Once the hotfix is complete it is merged to both develop and main

In this project, we are also going to adopt a `rebase` policy instead of a `merge` policy to keep a cleaner and linear project history.

### Semantic Versioning

### Continuous Integration

### Continuous Delivery

### Automatic Dependency Update

### Automatic API Documentation

### Backend Best Practices

### Caching
### Data Validation
### Rate Limiting
### API Versioning
### Security
### Logging
### Events

## Contributors

<a href="https://github.com/andrea-acampora/nestjs-ddd-quickstarter/contributors">
  <img src="https://contributors-img.web.app/image?repo=andrea-acampora/nestjs-ddd-quickstarter" alt="Contributors" />
</a>
