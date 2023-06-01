import productService from '$lib/server/productService'
import { error, json } from '@sveltejs/kit'

export async function GET() {
	let data = await productService.list()
	return data? json(data) : error(400, 'No products found')
}
