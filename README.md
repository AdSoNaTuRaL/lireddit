<div align="center">
   <h1>LiReddit</h1>
   <h4>Project made to acquire and improve knowledge with GraphQL, NextJS, Chakra UI - tutorial by <a href="https://youtu.be/I6ypD7qv3Z8">@benawad</a> </h4>
  <sub>Built with ❤︎ by
    <a href="https://github.com/AdSoNaTuRaL">Adson Henrique</a>
  </sub>
</div>

<br/>

# 🧾 Table of Contents

* [Technologies](#computer-technologies)
* [Features](#rocket-features)
* [How to Run](#construction_worker-how-to-run)
* [Found a bug? Missing a specific feature?](#bug-issues)

### :camera: Web Screenshots

> :information_source: You can also access the website online by clicking [here](https://adsonatural.online/)

<sub>:warning: DEPENDING ON THE DATE YOU ACCESS AND OTHER FACTORS, THE SITE MAY BE OFFLINE </sub><br/>

<div aling="center">
  <img src="https://user-images.githubusercontent.com/26275918/100002550-07f16580-2dc5-11eb-9341-a9791e4bcfbd.png">
  <img src="https://user-images.githubusercontent.com/26275918/100002556-09229280-2dc5-11eb-8d97-b1737af8b37e.png">
  <img src="https://user-images.githubusercontent.com/26275918/100002557-0a53bf80-2dc5-11eb-9a25-454dd02b8c3b.png">
</div>

# :computer: Technologies
This project was made using the follow technologies:

* [Typescript](https://www.typescriptlang.org/)      
* [React](https://reactjs.org/)      
* [Express](https://expressjs.com/)       
* [URQL](https://formidable.com/open-source/urql/)       
* [Apollo](https://www.apollographql.com/docs/)       
* [Node.js](https://nodejs.org/en/)       
* [PostgreSQL](https://www.postgresql.org/)       
* [MikroORM](https://mikro-orm.io/)       
* [TypeORM](https://typeorm.io/#/)       
* [Redis](https://redis.io/)       
* [Next.js](https://nextjs.org/)       
* [TypeGraphQL](https://typegraphql.com/)       
* [Chakra](https://chakra-ui.com/)

# :rocket: Features

* Web system that works like reddit, you can create a post, updoot or downdoot on some post.

# :construction_worker: How to run
> :information_source: If you want (and have docker configured in your computer), you can download the docker container with all pre-configured environment.
```bash
# Download container
$ docker push adsonatural/lireddit:1.2
```
> or clone the repository
```bash
# Clone Repository
$ git clone https://github.com/AdSoNaTuRaL/lireddit.git
```
### 📦 Run API
> ℹ️  Before you run the api, make sure you have redis installed and running and a postgresql database installed and running (you must create a database). After that create an `.env` file and fill it, with the example information from the `.env.example` file
```bash
# Go to server folder
$ cd lireddit/server

# Install Dependencies
$ yarn

# Run Aplication (watch)
$ yarn watch

# Run Aplication
$ yarn dev
```
### 💻 Run Web Project

```bash
# Go to web folder
$ cd lireddit/web

# Install Dependencies
$ yarn

# Run Aplication
$ yarn dev
```
Go to http://localhost:3000/ to see the result.

# :bug: Issues

Feel free to **file a new issue** with a respective title and description on the [LiReddit](https://github.com/AdSoNaTuRaL/lireddit/issues) repository. If you already found a solution to any problem, **I would love to review your pull request**!
