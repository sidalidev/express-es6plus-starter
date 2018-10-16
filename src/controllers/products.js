import Product from '../models/product'

export function createProduct({ body: { name, price } }, res, next) {
    const product = new Product({
        name,
        price,
    })
    product.save((err) => {
        if (err) {
            return next(err)
        }
        res.send('Product created successfully ✔️')
    })
}

export function getProduct({ params: { id } }, res, next) {
    Product.findById(id, (err, product) => {
        if (err) {
            return next(err)
        }
        res.send(product)
    })
}

export function updateProduct({ params: { id }, body }, res, next) {
    Product.findByIdAndUpdate(id, { $set: body }, (err) => {
        if (err) {
            return next(err)
        }
        res.send('Product updated ✔️')
    })
}

export function deleteProduct({ params: { id } }, res, next) {
    Product.findByIdAndDelete(id, (err) => {
        if (err) {
            return next(err)
        }
        res.send('Product removed ✔️')
    })
}
