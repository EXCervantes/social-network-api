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

This is the backend API for a Social Network using MongoDB. It uses the Mongoose ODM and Express.js for handling the routing. 

This is an E-commerce back end application using REST API. It uses packages such as "PostgreSQL Node client" and "Dotenv" and [Express.js](https://expressjs.com/) along with [Sequelize](https://sequelize.org/) to handle database interaction. The Node language manager uses those packages to perform CRUD actions such as to create, update, get, and delete the categories, products, and tags of the E-commerce database. To easily interact with these API calls a user can use an application such as [Insomnia](https://insomnia.rest/).

Creating this application helped practice more on utilizing Sequelize to manage the database in a more quicker way. There were some challenges encountered in this project such so figuring out how to update and post products following a set criteria.

Further development involves implementing a front end for ease of access for interacting directly with the database.

## Technologies and Packages Used

- [Node.js](https://nodejs.org/en)
- [Express.js](https://expressjs.com/)
- [Sequelize](https://sequelize.org/)
- [PostgreSQL Node client](https://www.npmjs.com/package/pg)
- [Dotenv](https://www.npmjs.com/package/dotenv)
- [Insomnia](https://insomnia.rest/)
  
## Installation

First to use this application head to [E-Commerce Backend](https://github.com/EXCervantes/social-network-api) and clone the repository. To learn how to clone a repository checkout this guide [Cloning a repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository).

You must have `node` installed on your system. Go [here](https://nodejs.org/en/learn/getting-started/how-to-install-nodejs) for instructions on how to do so. To properly run this application you must have [PostgreSQL](https://www.postgresql.org/) installed on your system. Run `npm i` to install the necessary dependencies onto your system.

This application utilizes a package that requires a file named `.env` to be created on the user's native system in the root directory of the cloned repo. The following lines must exist in this file:

```md
DB_NAME='ecommerce_db'
DB_USER='postgres'
DB_PASSWORD='user's password created during PostgreSQL install'
```

## Usage

Once Node, PostgreSQL, and the necessary dependencies have been installed as well as the `.env` file created a user can then run PostgreSQL to create a database in the terminal with the following commands.

First navigate to the database directory

```md
cd db
```

Then login to Postgres

```md
psql -U postgres
```

Then run the command to create the database

```md
\i schema.sql
```

Finally use the following commands in sequential order to quit Postgres then navigate to the home directory

```md
\q
```

```md
cd ..
```

The next step is to seed the database with the following command in the terminal

```md
npm run seed
```

To run the application open the Terminal or GitBash in VSCode and run `node server.js` or `npm start`. Now the server is active and a user can use an application such as [Insomnia](https://insomnia.rest/) to perform the CRUD operations with this application.

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
