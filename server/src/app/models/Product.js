const mongoose = require('mongoose');
const slug = require('mongoose-slug-updater');
mongoose.plugin(slug);
const Schema = mongoose.Schema;

// Define Product schema
const ProductSchema = new Schema(
    {
        productID: { type: String, unique: true },
        name: { type: String, maxLength: 100 },
        category: { type: String, maxLength: 100 },
        price: { type: Number },
        brand: { type: String },
        description: { type: String, maxLength: 600 },
        images: { type: [String] },
        slug: { type: String, slug: 'name', unique: true },
    },
    {
        timestamps: true,
    },
);

// Create and export the Product model
module.exports = mongoose.model('Product', ProductSchema);
