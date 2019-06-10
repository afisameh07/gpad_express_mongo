const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    type_vehicule: String,
    immatriculation: String,
    depences: String,
    libelle:String,
    montant: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Product', ProductSchema);