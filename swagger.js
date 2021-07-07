const express = require("express");
const swaggerAutogen = require('swagger-autogen')()
const http = require('http')
const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('./swagger_output.json')

const outputFile = './swagger_output.json'
const endpointsFiles = ['./config/routes']

const app = express();

swaggerAutogen(outputFile, endpointsFiles).then(() => {
    require('./index.js')
})

const db = require("./config/db");
const consign = require("consign");

consign()
  .include("./config/passport.js")
  .then("./config/middlewares.js")
  .then("./api")
  .then("./config/routes.js")
  .into(app);
app.db = db;


http.createServer(app).listen(3001)
console.log("Listening at:// port:%s (HTTP)", 3001)

app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))

