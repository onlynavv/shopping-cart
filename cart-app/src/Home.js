import React from 'react'
// import products from './data'
import ProductCard from './ProductCard'
import './index.css'
import { connect } from 'react-redux'

const Home = ({products}) => {
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

const mapStateToProps = (state) => {
    return{
        products : state.shoppingReducer.products
    }
}

export default connect(mapStateToProps)(Home)
