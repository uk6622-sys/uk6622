// Restaurant API Endpoints

const express = require('express');
const router = express.Router();

// Sample endpoint to get all restaurants
router.get('/', (req, res) => {
    res.json([{ id: 1, name: 'Restaurant A' }, { id: 2, name: 'Restaurant B' }]);
});

// Sample endpoint to get restaurant by ID
router.get('/:id', (req, res) => {
    const restaurant = { id: req.params.id, name: 'Restaurant A' };
    res.json(restaurant);
});

module.exports = router;
