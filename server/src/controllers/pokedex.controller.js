const Pokemon = require('../models/Pokemon');

exports.pokedex = function (req, res) {
    res.sendfile('/pokedex.html');
};

// Create
exports.pokedex_create = function (req, res) {
    let Pokemon = new Pokemon(
        {
            Row: req.body.Row,
            Name: req.body.Name,
            Pokedex_Number: req.body.Pokedex_Number
        }
    );

    pokedex.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Pokemon was caught!')
    })
};

// Read
exports.pokedex_details = function (req, res) {
    Pokemon.findById(req.params.id, function (err, pokemon) {
        if (err) return next(err);
        res.send(pokemon);
    })
};

// Update
exports.pokedex_update = function (req, res) {
    Pokemon.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, pokemon) {
        if (err) return next(err);
        res.send('Pokemon udpated.');
    });
};

// Delete
exports.pokedex_delete = function (req, res) {
    Pokemon.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};