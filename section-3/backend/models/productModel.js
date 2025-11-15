const { Schema, model } = require('../connection');

const productSchema =  new Schema({
    name:{ type: String, required: true },
    price:{ type: Number, required: true, min: 0 },
    currency: { type: String, default: 'USD' },
    stock: { type: Number, default: 0, min: 0 },
    description: { type: String, default: '' },
    categories: [{ type: String }],
    addAt: { type: Date, default: Date.now }
});

module.exports = model('Products', productSchema);
// the collection will be named 'Products' in the database
