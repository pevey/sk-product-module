import { initialize as ProductModuleInitialize } from '@medusajs/product'
import { POSTGRES_URL } from '$env/static/private'

const productService = await ProductModuleInitialize()
export default productService