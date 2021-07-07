import React from 'react'
import products from './data'
import ProductCard from './ProductCard'
import './index.css'

const Home = () => {
    return (
        <div className='products-wrapper'>
            {products.map((product)=>{
                return(
                    <ProductCard key={product._id} {...product} />
                )
            })}
        </div>
    )
}

export default Home
