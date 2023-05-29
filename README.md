# Investment Listing Application

## Introduction



## Getting Started


## Installation

```bash
$ npm install
```

## Running the app

To run the development server run.
```bash
# development
$ npm run start
```

Although it is recommended to use the watch mode to automatically update your code changes
```bash
# watch mode
$ npm run start:dev
```
Either of the above would create qouteDB file in the root directory this is the database that serves
this application

To build for production run

```bash
# production mode
$ npm run start:prod
```
The application can be accessed from 
``` http://localhost:3000/ ```

## Testing the endpoints with payloads
You can test this appliction endpoints with any convinient REST API testing tools like Post Man

## TODOs
- Modify the readme to contain the end points and response pattern
- Add a delete endpoint
- Adding an Auth module to protect the update, delete 
- add database migration
- Add a httpResponse method in service class. all the services inherit from service class
- Remove the getHello
