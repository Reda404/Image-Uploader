<!-- Please update value in the {}  -->

<h1 align="center">Image Uploader</h1>

<div align="center">
   Solution for a challenge from  <a href="http://devchallenges.io" target="_blank">Devchallenges.io</a>.
</div>

<div align="center">
  <h3>
    <a href="https://image-uploader-c94b5.web.app">
      Demo
    </a>
    <span> | </span>
    <a href="https://github.com/Reda404/Image-Uploader">
      Solution
    </a>
    <span> | </span>
    <a href="https://devchallenges.io/challenges/O2iGT9yBd6xZBrOcVirx">
      Challenge
    </a>
  </h3>
</div>

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [Overview](#overview)
  - [Built With](#built-with)
- [Features](#features)
- [How to use](#how-to-use)
- [Contact](#contact)
- [Acknowledgements](#acknowledgements)

<!-- OVERVIEW -->

## Overview

![screenshot](/screenshot.png?raw=true)

This is my solution of the "Image Uploader" challenge from [Dev Challenges](https://devchallenges.io/)

You can see a demo [here](https://image-uploader-c94b5.web.app)

What I learned :

- Create custom image uploader UI component
- Post file to backend
- Handle file with Node
- Implement file validation in React and Node
- Use [@google-cloud/storage](https://www.npmjs.com/package/@google-cloud/storage) to send file from Node to Firebase Cloud Storage
- Basic understanding of streams in Node

### Built With

<!-- This section should list any major frameworks that you built your project using. Here are a few examples.-->

- [React](https://reactjs.org/)
- [Express](https://expressjs.com/)

## Features

<!-- List the features of your application or follow the template. Don't share the figma file here :) -->

This application/site was created as a submission to a [DevChallenges](https://devchallenges.io/challenges) challenge. The [challenge](https://devchallenges.io/challenges/O2iGT9yBd6xZBrOcVirx) was to build an application to complete the given user stories.

## How To Use

<!-- Example: -->

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/Reda404/Image-Uploader.git
```

In the api folder :

Create a .env file with the following variables

```
PRIVATE_KEY = XXXX
CLIENT_EMAIL = XXXX
BUCKET_URL = XXXX
PORT = XXXX
```

You can find the first three paramaters by generating a private key in Firebase console

Then execute commands

```bash
$ npm install
$ npm start
```

In the ui folder :

Create a .env file with the following variable

```
REACT_APP_API_URL = http://localhost:{PORT_YOU_HAVE_DEFINED_FOR_THE_API}
```

Then execute commands

```bash
$ npm install
$ npm start
```

## Acknowledgements

<!-- This section should list any articles or add-ons/plugins that helps you to complete the project. This is optional but it will help you in the future. For example -->

- [How to Upload Files to Firebase Cloud Storage With React and Node.js](https://medium.com/better-programming/how-to-upload-files-to-firebase-cloud-storage-with-react-and-node-js-e87d80aeded1)

## Contact

- [email](mailto:julienmerlin.dev@gmail.com)
