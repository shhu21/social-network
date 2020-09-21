# social-network

# Demo
[Demo Video](https://drive.google.com/file/d/1t0IS646JWAvGIOOtaXXDgrg4Bi5fNj8g/view)

# Table Of Contents

* [Description](#description)
* [Installation](#installation)
* [User's Guide](#users-guide)
  - [User](#user)
  - [Thought](#thought)
  - [Reaction](#reaction)
 * [Testing](#testing)

# Description
Builds a custom API for a social-network using Mongoose and MongoDB.

# Installation
1. Clone the repository.
2. Run `npm install` in the command line to install the dependancies.
3. Run `npm start` in the command line to start the program.

# User's Guide
As mentioned in the [Installation](#installation) instructions, run `npm start` to start the program.  View below for a list of routes.  View the [Demo](#demo) for a video walkthrough of the program. </br>

The following is a list of available routes for each model:  

## User
- GET: All
- GET: By ID
- POST
- PUT
- DELETE
- __Friend__ </br>
__**Note: Self-reference from User**__
  - POST
  - DELETE

## Thought
- GET: All
- GET: By ID
- POST
- PUT
- DELETE

## Reaction
__**Note: Schema only**__
- POST
- DELETE

# Testing
Testing can be done via an API platform.
