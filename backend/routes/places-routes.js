const express = require("express");
const router = express.Router();
const HttpError = require("../models/http-error");

const PLACES = [
  {
    id: "p1",
    title: "Empire state building",
    description: "One of the most famous places in the world",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Manhattan_at_Dusk_by_slonecker.jpg/300px-Manhattan_at_Dusk_by_slonecker.jpg",
    address: "20 W 34th St, New York, NY 10001, United State",
    location: {
      lat: +"40.7484405",
      lng: parseFloat("-73.9878531,17"),
    },
    creator: "u1",
  },
  {
    id: "p2",
    title: "Emp. state building",
    description: "One of the most famous places in the world",
    imageUrl:
      "https://image.newyork.se/wp-content/uploads/2013/02/Empire-State-Building-Tickets.jpg",
    address: "20 W 34th St, New York, NY 10001, United State",
    location: {
      lat: +"40.7484405",
      lng: parseFloat("-73.9878531,17"),
    },
    creator: "u2",
  },
  {
    id: "p3",
    title: "Empire state building",
    description: "One of the most famous places in the world",
    imageUrl:
      "https://image.newyork.se/wp-content/uploads/2013/02/Empire-State-Building-Tickets.jpg",
    address: "20 W 34th St, New York, NY 10001, United State",
    location: {
      lat: +"40.7484405",
      lng: parseFloat("-73.9878531,17"),
    },
    creator: "u3",
  },
];

router.get("/:pid", async (req, res, next) => {
  const placeId = req.params.pid;

  const place = PLACES.find((p) => {
    return p.id === placeId;
  });
  if (!place) {

    throw new HttpError(
      "Could not find a place for the provided location !",
      404
    );
  }

  res.send({ place });
});

router.get("/user/:uid", async (req, res, next) => {
  const userId = req.params.uid;
  const place = PLACES.find((p) => {
    return p.creator === userId;
  });

  if (!place) {
    return next(
      new HttpError(
        "The location for the provided user id does not exist!",
        404
      )
    );
  }

  res.send({ place });
});

module.exports = router;
