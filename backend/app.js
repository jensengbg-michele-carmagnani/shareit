const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();
app.use(bodyParser.json());
// app.use(express.json());

// routes
const placeRoutes = require("./routes/places-routes");

app.use("/api/places", placeRoutes);
app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500).send({message: error.message || 'An unknown error occurred!'});
});

const PORT = process.env.PORT;

app.listen(PORT || 8080, () => {
  console.log(`server running on ${PORT}`);
});
