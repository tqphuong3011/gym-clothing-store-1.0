const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define Product schema
const ProductSchema = new Schema(
    {
        productID: { type: String, required: true, unique: true },
        name: { type: String, required: true, maxLength: 100 },
        category: { type: String, required: true, maxLength: 100 },
        price: { type: Number, required: true },
        brand: { type: String, required: true },
        description: { type: String, required: false, maxLength: 600 },
        images: { type: [String], required: false },
    },
    {
        timestamps: true, // Automatically add createdAt and updatedAt fields
    },
);

// Create and export the Product model
module.exports = mongoose.model('Product', ProductSchema);
