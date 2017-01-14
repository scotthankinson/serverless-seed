# serverless-seed

### Getting started

After cloning run the below commands to get everything installed:

```sh
npm run globals
npm install
```

After setting up dependencies, make the following changes to customize your application:
```sh
rm -rf .git        # removes the existing GIT information
git init           # initialize an empty repository
  edit package.json to include new project name (project-name-like-this)
  edit serverless.yml to include new project name (projectNameLikeThis)
  edit sonar-project.properties to include new project name (project-name-like-this)
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

To test:

```sh
npm run test
```

To test and debug:

```sh
npm run testdebug
```

To generate code coverage (reports will be under the coverage folder):

```sh
npm run cover
```

To deploy:

```sh
npm run deploy [-- --stage <stage>]
```

### VSCode Setup

for in-line linting help, install the plugin TSLint for Visual Studio Code

for debugging add the following lines to the .vscode/launch.json file:

```json
"sourceMaps": true,
"outDir": "${workspaceRoot}/build",
```

### Importing

When doing an import and creating files, use camel casing.

Say you have a file src/shared/lib/responseHandler that you want to import.

Wrong:

```sh
import { ResponseHandler } from 'src/shared/lib/ResponseHandler';
```

Correct:

```sh
import { ResponseHandler } from 'src/shared/lib/responseHandler';
```






Consumer API

POST /account/authenticate
{
email: '',
password: ''
}
POST /account/validate
* Used to help us keep track of users/month
GET /account/profile
GET /feeds
[{
feedId: 1,
title: 'Company Podcasts',
latestEpisodeReleaseDate: '',
iconUrl: '',
description: ''
}]
GET /feed/:feedId
[{
documentId: 1,
type: 'mp3',
title: 'Podcast Episode Title',
releaseDate: '',
tags: ['Corporate Strategy', 'Technology'],
url: '',
iconUrl: '',
description: ''
}]
POST /documents/:documentId
{
seconds: 121
}
* used to perform analytics


Admin API
GET, PUT, POST, DELETE /feeds
GET, PUT, POST, DELETE /documents
GET /dashboard