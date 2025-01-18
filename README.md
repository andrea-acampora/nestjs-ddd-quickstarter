# NestJS Quickstarter

![Build](https://github.com/andrea-acampora/nestjs-ddd-quickstarter/actions/workflows/build.yml/badge.svg)
[![pages-build-deployment](https://github.com/andrea-acampora/nestjs-ddd-quickstarter/actions/workflows/pages/pages-build-deployment/badge.svg)](https://github.com/andrea-acampora/nestjs-ddd-quickstarter/actions/workflows/pages/pages-build-deployment)
![Node Current](https://img.shields.io/node/v/%40nestjs%2Fcore)
![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)
[![Semantic Release](https://img.shields.io/badge/semantic--release-angular-e10079?logo=semantic-release)](https://github.com/semantic-release/semantic-release/tree/master)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-%23FE5196?logo=conventionalcommits&logoColor=white)](https://conventionalcommits.org)
![GitHub Issues or Pull Requests](https://img.shields.io/github/issues-pr/andrea-acampora/nestjs-ddd-quickstarter?style=flat&color=cyan)
![GitHub Issues](https://img.shields.io/github/issues-raw/andrea-acampora/nestjs-ddd-quickstarter?style=flat)
![GitHub Repo stars](https://img.shields.io/github/stars/andrea-acampora/nestjs-ddd-quickstarter?style=flat&color=yellow)
![GitHub contributors](https://img.shields.io/github/contributors/andrea-acampora/nestjs-ddd-quickstarter?color=orange)


The purpose of this repository is to create a ready-to-use project following _Domain-Driven Design_, _Clean Architecture_ and _Functional Programming_ best practices, combined with some _DevOps_ techniques such as _Continuous Integration_, _Continuous Delivery_ and _Quality Assurance_.


## Stack
[NodeJS](https://nodejs.org/en/) | [TypeScript](https://www.typescriptlang.org/) | [NestJS](https://nestjs.com/) | [PostgreSQL](https://www.postgresql.org/) | [Mikro-ORM](https://mikro-orm.io/) | [Docker](https://www.docker.com/)

[![nodejs](https://deviconapi.vercel.app/nodejs?color=83CD29ff&size=70)](https://nodejs.org/en)
[![typescript](https://deviconapi.vercel.app/typescript?color=007ACCFF&size=70)](https://www.typescriptlang.org)
[![nestjs](https://deviconapi.vercel.app/nestjs?color=DF234FFF&size=70)](https://nestjs.com)
[![postgresql](https://deviconapi.vercel.app/postgresql?version=plain&color=336791FF&size=70)](https://www.postgresql.org)
[<img src="https://avatars.githubusercontent.com/u/54766168?s=200&v=4" width="70" />](https://mikro-orm.io)
[![docker](https://deviconapi.vercel.app/docker?color=019BC6FF&size=70)](https://www.docker.com)

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
4. Provide a ```.env``` file with all required environment variables _(check out .env.dist example file)_
5. Create and generate the database schema from your entities metadata:
     ```bash
     npm run schema:update
     ```
7. Start to create your modules and entities following all the principles explained in the below chapters!

## Table of Contents
- [Clean Architecture](#clean-architecture)
- [Domain Driven Design](#domain-driven-design)
- [Functional Programming](#functional-programming)
- [Testing](#testing)
- [Continuous Integration](#continuous-integration)
- [Continuous Delivery](#continuous-delivery)
- [Automatic Dependency Update](#automatic-dependency-update)
- [Automatic Documentation Generation](#automatic-documentation-generation)
- [Semantic Versioning](#semantic-versioning)
- [Static Code Analysis](#static-code-analysis)
- [Backend Best Practices](#backend-best-practices)

---

### Clean Architecture
### Domain Driven Design
### Functional Programming
### Testing
### Continuous Integration
### Continuous Delivery
### Automatic Dependency Update
### Automatic Documentation Generation
### Semantic Versioning
### Static Code Analysis
### Backend Best Practices
