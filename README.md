# serverless-seed

### Getting started

After cloning run the below commands to get everything installed:

```sh
npm install
```

After setting up dependencies, make the following changes to customize your application:
```sh
rm -rf .git        # removes the existing GIT information
git init           # initialize an empty repository
  edit package.json to include new project name (project-name-like-this)
  edit serverless.yml to include new project name (projectNameLikeThis)
  edit README.md with the new project details
```

### Basic commands

To build:

```sh
npm run build
```

To run service (it will start in debug mode):

```sh
npm run start
```

To deploy:

```sh
serverless deploy
```



