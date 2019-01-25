const express = require('express');
const router = express.Router();

const pokedex_controller = require('../controllers/pokedex.controller');

router.get('/pokedex', pokedex_controller.pokedex);
router.post('/create', pokedex_controller.pokedex_create);
router.get('/:id', pokedex_controller.pokedex_details);
router.put('/:id/update', pokedex_controller.pokedex_update);
router.delete('/:id/delete', pokedex_controller.pokedex_delete);

module.exports = router;