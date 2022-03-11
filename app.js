const express = require("express");
const add = require("date-fns/add");
const app = express();

app.get("/", (request, response) => {
  const result = add(new Date(2022, 2, 11, 0, 0, 0), {
    years: 0,
    months: 0,
    weeks: 0,
    days: 100,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  response.send(result);
});

module.exports = app;
