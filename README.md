# Welcome to the Basic Node Shopping Cart repository!

Author: Tyler Shockman

## Description

This project serves as a demonstration of my understanding of web development using Node.js and integrating it with a MySQL database to create a basic shopping cart application.

## Contents:
- [Installation](#installation)
- [Pre-Run Setup](#pre-run-setup)
- [Starting the Application](#starting-the-application)


## Installation

To install this repository locally it can be cloned from [GitHub.com](#github.com) utilizing git.

- GitHub Repository Page: https://github.com/Tyler-Shockman/basic-node-shopping-cart
- Installing Git: https://git-scm.com/book/en/v2/Getting-Started-Installing-Git
- Cloning a GitHub Repository: https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository

## Pre-Run Setup

Once installed, you will need to complete a few steps before you can run the application locally:

- [Install npm and node](#how-to-install-npm-and-node)
- [Setup an env File](#how-to-setup-an-env-file)
- [Install Dependencies](#how-to-install-dependencies)

### How to install npm and node

This project requires nodejs and npm to properly build and run. Nodejs is a backend javascript interpreter. Npm stands for Node Package Manager and is used to install and manage any dependencies. To install both on your machine you can follow the guide here: https://docs.npmjs.com/downloading-and-installing-node-js-and-npm

### How to Setup an env File

To setup an environment (".env") file you can start by making a copy of the ".env.example" file and naming it ".env". To do this, ensure you are in the base directory of the project and run this command:

Windows:
```
copy .env.example .env
```
Linux/Mac
```
cp .env.example .env
```
Once done, you'll have a ".env" file in your base directory. You can now open that file and observe the default environment variables. Adjust any that need to be adjusted and save.

### How to Install Dependencies

Dependencies in this project are managed using npm. If you have not yet installed npm you will need to do so before you can run the command to install dependencies. To check if npm has been installed run this command in the command line:
```
npm -v
```
If the command succeeded then npm is installed. If not, see the section above on installing npm.

To install dependencies, you only need to run this command in the command line:
```
npm install
```
This should run and install all desired dependencies.

## Starting the Application

By default, the application will run on port 3000. If this will conflict with another service running on your machine you will want to change the "PORT" variable in the ".env" file.

To start the application, you need to tell node to run the base file for the application. This is the src/index.js file for this application. To do so you can run this command in the command line:
```
node .\src\index.js
```
