import React from 'react'

function ProductNonModelProp(productModel: any) {
    return (
        <>
            <h1>Name: {productModel.name}</h1>
            <h1>Price: {productModel.price}</h1>
            <h1>Stock: {productModel.stock}</h1>
        </>
    )
}

export default ProductNonModelProp