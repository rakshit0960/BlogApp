
# BlogApp

A blog application where users can read blogs and wite wite their blogs 



## Tech Stack

**Client:** React, Redux, TailwindCSS

**Server:** Node, Express


## Run Locally 

Clone the project

```bash
  git clone https://link-to-project
```
### For Server
Go to the project directory

```bash
  cd BlogApp
```

Install dependencies

```bash
  pnpm install
```

Start the server

```bash
  pnpm start
```
### For Client
<!-- Go to the project directory

```bash
  cd BlogApp
```

Install dependencies

```bash
  pnpm install
```

Start the server

```bash
  pnpm dev
``` -->

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`DB_USER` username for the postgress database (can user `postgres` as default user)

`DB_HOST` host url of the database (can use `localhost` for local database)

`DB_NAME` name of the database 

`DB_PASSWORD` password of the user

`DB_PORT` port on which db is running (`5432` is default for postgres)

`JWT_SECRET` secret key used to sign the payload of a JWT

