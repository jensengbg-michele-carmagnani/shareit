const express = require('express');
const router = express.Router();


const PLACES = [
  {
    id: 'p1',
    title: 'Empire state building',
    description: 'One of the most famous places in the world',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Manhattan_at_Dusk_by_slonecker.jpg/300px-Manhattan_at_Dusk_by_slonecker.jpg',
    address: '20 W 34th St, New York, NY 10001, Stati Uniti',
    location: {
      lat: +'40.7484405',
      lng: parseFloat('-73.9878531,17'),
    },
    creator: 'u1',
  },
  {
    id: 'p2',
    title: 'Emp. state building',
    description: 'One of the most famous places in the world',
    imageUrl:
      'https://image.newyork.se/wp-content/uploads/2013/02/Empire-State-Building-Tickets.jpg',
    address: '20 W 34th St, New York, NY 10001, Stati Uniti',
    location: {
      lat: +'40.7484405',
      lng: parseFloat('-73.9878531,17'),
    },
    creator: 'u2',
  },
  {
    id: 'p3',
    title: 'Empire state building',
    description: 'One of the most famous places in the world',
    imageUrl:
      'https://image.newyork.se/wp-content/uploads/2013/02/Empire-State-Building-Tickets.jpg',
    address: '20 W 34th St, New York, NY 10001, Stati Uniti',
    location: {
      lat: +'40.7484405',
      lng: parseFloat('-73.9878531,17'),
    },
    creator: 'u3',
  },
];

router.get('/:pid', async (req, res, next) => {
  const placeId = req.params.pid
  const place = PLACES.find(p=>{
    return p.id === placeId
  })

  res.send({ place });
});


module.exports = router;