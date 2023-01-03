Node.js Application

This is a Node.js application that receives HTTP POST requests on the /track route, gets data in JSON format passed in the request body, and saves the data to a local file. If the data contains a count parameter, the application increments the value of the count key by the value of the count parameter in a Redis database.

The application also receives HTTP GET requests on the /count route, which returns the value of the count key from the Redis database.

Prerequisites
Before running this application, you will need to install the following dependencies:

Node.js
Redis
Running the Application
To start the application, run the following command:

node index.js

chai: a library for writing assertions in tests
chai-http: a plugin for testing HTTP requests with Chai
mocha: a test runner for running the tests
License
This application is released under the MIT License. See the LICENSE file for more details.
