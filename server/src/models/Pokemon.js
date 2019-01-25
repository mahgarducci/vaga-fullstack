const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let PokemonSchema = new Schema({
    Row: {type: Number, required: true},
    Name: {type: String, required: true},
    Pokedex_Number: {type: Number, required: true}
    // Img_name: {type: String, required: true},
    // Generation: {type: Number, required: true},
    // Evolution_Stage: {type: String, required: true},
    // Evolved: {type: Number, required: true},
    // FamilyID: {type: Number, required: true},
    // Cross_Gen: {type: Number, required: true},
    // Type_1: {type: String, required: true},
    // Type_2: {type: String, required: true},
    // Weather_1: {type: String, required: true},
    // Weather_2: {type: String, required: true},
    // STAT_TOTAL: {type: Number, required: true},
});

// ATK,DEF,STA,Legendary,Aquireable,Spawns,
// Regional,Raidable,Hatchable,Shiny,Nest,New,Not-Gettable,Future Evolve,100% CP @ 40,100% CP @ 39

// Export the model
module.exports = mongoose.model('Pokemon', PokemonSchema);