const express = require('express');
const router = express.Router();


router.get('/', async (req, res, next) => {
  console.log('Get request in places');
  res.send({ message: 'It works!' });
});


module.exports = router;