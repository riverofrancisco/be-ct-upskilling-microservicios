const { Schema } = require("mongoose");

const characterSchema = new Schema ({
    _id: String,
    name: String,
    height: String,
    mass: String,
    hair_color: String,
    skin_color: String,
    eye_color: String,
    birth_year: String,
    gender: String,
    homeworld: {type: String, ref: "Planet"}, // reference to a planet. other schema
    films: [{type: String, ref: "Film"}] // references to films.
})

module.exports = characterSchema;