import mongoose from 'mongoose'

const ProductSchema = new mongoose.Schema({
    name: { type: String, required: true, max: 100 },
    price: { type: Number, required: true },
})

const Product = mongoose.model('Product', ProductSchema)

export default Product
