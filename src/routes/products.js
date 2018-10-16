import { Router } from 'express'
import {
    createProduct,
    getProduct,
    updateProduct,
    deleteProduct,
} from '../controllers/products'

const ProductRouter = Router()

ProductRouter.post('/', createProduct)
ProductRouter.get('/:id', getProduct)
ProductRouter.put('/:id', updateProduct)
ProductRouter.delete('/:id', deleteProduct)

export default ProductRouter
