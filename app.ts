"use strict";
require("dotenv").config();

const port = process.env.PORT;

const server = require('./server');
const app = server();

app.listen({ port }, console.log(`Listening on ${port} ☀️ 🌏`));

process.on('SIGTERM', () => {
  console.info(`Termination by SIGTERM`);
  process.exit(0);
});

process.on('SIGINT', () => {
  console.info('Termination by SIGINT');
  process.exit(0);
});