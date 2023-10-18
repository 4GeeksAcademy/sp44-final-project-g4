# Untitled

# Full-Stack Pet Services and Adoption App

Welcome to the Full-Stack Pet Services and Adoption App! This application helps users find animal vets, dog groomers, and dog walkers, as well as facilitates pet adoption, all based in New York. We utilize various third-party APIs such as Maplibre, Petfinder, APISerper, and have a backend built with Flask, Marshmallow, SQLAlchemy, and a React.js frontend.

## Features

- **Search for Animal Vets**: Find nearby animal vets to take care of your pet's health.
- **Locate Dog Groomers**: Discover professional dog groomers for pet grooming services.
- **Hire Dog Walkers**: Easily find dog walkers for daily exercise and companionship for your dogs.
- **Adopt a Pet**: Search for adoptable pets through the Petfinder API and make them a part of your family.

## Technologies Used

- **Frontend**:
    - React.js
    - Flux for state managment.
    - Maplibre for interactive maps
    - APISerper for integrating external APIs
    - PetFinder API to locate pets on adoption.
- **Backend**:
    - Flask for API server
    - Marshmallow for data serialization
    - SQLAlchemy for database management
    - GeoPY library to convert addresses into coordinates.

## Getting Started

Follow these steps to get the project up and running on your local machine.

### Prerequisites

- [Node.js](https://nodejs.org/) for frontend development
- [Python](https://www.python.org/) for the Flask backend
- [PostgreSQL](https://www.postgresql.org/) for the database

## Usage

- Make port 3001 public in terminal/ports
- .Open your web browser and visit `http://localhost:3000` to access the application.
- APISerper for integrating external APIs
- Use the search functionality to find animal vets, dog groomers, dog walkers, and adoptable pets in New York.

## APIs Used

This project integrates the following APIs:

- **Petfinder API**: Used for pet adoption.
- **Maplibre API**: Used for map display and location-based services.
- **APISerper API**: Used for additional data and services.

# WebApp boilerplate with React JS and Flask API

# Depoly URL/ Live Version: https://sample-service-name-9dn1.onrender.com 

Build web applications using React.js for the front end and python/flask for your backend API.

- Documentation can be found here: https://start.4geeksacademy.com/starters/react-flask
- Here is a video on [how to use this template](https://www.loom.com/share/f37c6838b3f1496c95111e515e83dd9b)
- Integrated with Pipenv for package managing.
- Fast deployment to heroku [in just a few steps here](https://start.4geeksacademy.com/backend/deploy-heroku-posgres).
- Use of .env file.
- SQLAlchemy integration for database abstraction.

### 1) Installation:

> If you use Github Codespaces (recommended) or Gitpod this template will already come with Python, Node and the Posgres Database installed. If you are working locally make sure to install Python 3.10, Node 

It is recomended to install the backend first, make sure you have Python 3.8, Pipenv and a database engine (Posgress recomended)

1. Install the python packages: `$ pipenv install`
2. Create a .env file based on the .env.example: `$ cp .env.example .env`
3. Install your database engine and create your database, depending on your database you have to create a DATABASE_URL variable with one of the possible values, make sure you replace the valudes with your database information:

| Engine    | DATABASE_URL                                        |
| --------- | --------------------------------------------------- |
| SQLite    | sqlite:////test.db                                  |
| MySQL     | mysql://username:password@localhost:port/example    |
| Postgress | postgres://username:password@localhost:5432/example |

4. Migrate the migrations: `$ pipenv run migrate` (skip if you have not made changes to the models on the `./src/api/models.py`)
5. Run the migrations: `$ pipenv run upgrade`
6. Run the application: `$ pipenv run start`

> Note: Codespaces users can connect to psql by typing: `psql -h localhost -U gitpod example`

### Undo a migration

You are also able to undo a migration by running

```sh
$ pipenv run downgrade
```

### Backend Populate Table Users

To insert test users in the database execute the following command:

```sh
$ flask insert-test-users 5
```

And you will see the following message:

```
  Creating test users
  test_user1@test.com created.
  test_user2@test.com created.
  test_user3@test.com created.
  test_user4@test.com created.
  test_user5@test.com created.
  Users created successfully!
```

### **Important note for the database and the data inside it**

Every Github codespace environment will have **its own database**, so if you're working with more people eveyone will have a different database and different records inside it. This data **will be lost**, so don't spend too much time manually creating records for testing, instead, you can automate adding records to your database by editing ```commands.py``` file inside ```/src/api``` folder. Edit line 32 function ```insert_test_data``` to insert the data according to your model (use the function ```insert_test_users``` above as an example). Then, all you need to do is run ```pipenv run insert-test-data```.

### Front-End Manual Installation:

-   Make sure you are using node version 14+ and that you have already successfully installed and runned the backend.

1. Install the packages: `$ npm install`
2. Start coding! start the webpack dev server `$ npm run start`

## Publish your website!

This boilerplate it's 100% read to deploy with Render.com and Heroku in a matter of minutes. Please read the [official documentation about it](https://start.4geeksacademy.com/deploy).

### Contributors

This template was built as part of the 4Geeks Academy [Coding Bootcamp](https://4geeksacademy.com/us/coding-bootcamp) by [Alejandro Sanchez](https://twitter.com/alesanchezr) and many other contributors. Find out more about our [Full Stack Developer Course](https://4geeksacademy.com/us/coding-bootcamps/part-time-full-stack-developer), and [Data Science Bootcamp](https://4geeksacademy.com/us/coding-bootcamps/datascience-machine-learning).

You can find other templates and resources like this at the [school github page](https://github.com/4geeksacademy/).
