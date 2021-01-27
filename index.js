const express = require("express");
const getAllUtil = require("./utils/getAll.js");
const getStatesUtil = require("./utils/getStates.js");
const getCarriersUtil = require("./utils/getCarriers.js");

const app = express();

app.route("/:queryName").get(function (req, res) {
  if (req.params.queryName === "getAll") {
    console.log("Return results for query getAll");
    res.json(getAllUtil.getAll());
  } else if (req.params.queryName === "states") {
    console.log("Query for states");
    res.json(
      getStatesUtil.getStates(req.query.insuranceType, req.query.carrier)
    );
  } else if (req.params.queryName === "carriers") {
    console.log("Query for carriers");
    res.json(
      getCarriersUtil.getCarriers(req.query.insuranceType, req.query.state)
    );
  } else {
    res.send("Welcome to the server!");
  }
});

app.listen(3000, function (error) {
  console.log("Server listening on port 3000");
});
