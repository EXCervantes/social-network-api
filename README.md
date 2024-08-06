# Social Network API

## Table of Contents

- [Social Network API](#social-network-api)
  - [Table of Contents](#table-of-contents)
  - [Description](#description)
  - [Technologies and Packages Used](#technologies-and-packages-used)
  - [Installation](#installation)
  - [Usage](#usage)
    - [Video Demonstrating Application In Use](#video-demonstrating-application-in-use)
    - [Screenshots of the Application](#screenshots-of-the-application)
  - [Credits](#credits)
  - [License](#license)

## Description

This is the backend API for a Social Network using MongoDB. It uses [MongoDB](https://www.mongodb.com/) as the NoSQL database manager, [Express.js](https://expressjs.com/) for handling the routing along with [Mongoose](https://www.npmjs.com/package/mongoose) ODM to handle database interaction. The Node language manager uses those packages to perform CRUD actions such as to create, update, get, and delete the users, their "thoughts', reactions to thoughts, and managing friends of users. To easily interact with these API calls a user can use an application such as [Insomnia](https://insomnia.rest/).

Creating this application taught me a new way to manage the database without a set relational structure. There was intensive learning of the new ways to setup managing a database in MongoDB and using Mongoose. Further development involves implementing a front end for a nicer appearance and direct user interaction with the app.

## Technologies and Packages Used

- [Node.js](https://nodejs.org/en)
- [Express.js](https://expressjs.com/)
- [Mongoose](https://www.npmjs.com/package/mongoose)
- [MongoDB](https://www.mongodb.com/)
- [Insomnia](https://insomnia.rest/)
  
## Installation

First to use this application head to [Social Network API](https://github.com/EXCervantes/social-network-api) and clone the repository. To learn how to clone a repository checkout this guide [Cloning a repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository).

You must have `node` installed on your system. Go [here](https://nodejs.org/en/learn/getting-started/how-to-install-nodejs) for instructions on how to do so. To properly run this application you must have [MongoDB](https://www.mongodb.com/) installed on your system. Run `npm i` to install the necessary dependencies onto your system.

This application runs in the Terminal of VSCode and must be initialized there before REST API clients like Insomnia can interact with the application properly. More on that in the section below.

## Usage

Once Node, MongoDB, and the necessary dependencies have been installed, initialize the application in the Terminal in VSCode and run `npm run dev` or `npm run start`. Now the server is active and a user can use an application such as [Insomnia](https://insomnia.rest/) to perform the CRUD operations with this application.

There are full CRUD operations for "users" and "thoughts" also known as posts, and both create and delete methods for "reactions", or comments to thoughts and a user's friends. Also note deleting a user will also remove that particular user's thoughts from the database.

### Video Demonstrating Application In Use

Here is a [link]() to a video demonstrating how this application works.

### Screenshots of the Application

![GET](assets/images/ecommercebackendscreen1.jpg)
![PUT](assets/images/ecommercebackendscreen2.jpg)
![POST](assets/images/ecommercebackendscreen3.jpg)
![DELETE](assets/images/ecommercebackendscreen4.jpg)

## Credits

Referenced for examples of include with attributes in Sequelize.

"_node.js - How to use an include with attributes with sequelize? - Stack Overflow_". (2018, April 25). Stack Overflow. Retrieved June 26, 2024, from https://stackoverflow.com/questions/21883484/how-to-use-an-include-with-attributes-with-sequelize
  
## License

This project is licensed under [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Please see the [License](https://opensource.org/licenses/MIT) page for more info.
