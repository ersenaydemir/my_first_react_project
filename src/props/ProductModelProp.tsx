import React from 'react'
import { ProductModel } from '../models/ProductModel'

function ProductModelProp(productModel: ProductModel) {
  return (
    <>
    <h1>Name: {productModel.name}</h1>
    <h1>Price: {productModel.price}</h1>
    <h1>Stock: {productModel.stock}</h1>
    <ul>
        {
            productModel.points?.map((item) => <li>{item}</li>)
        }
    </ul>       
    </>
  )
}

export default ProductModelProp