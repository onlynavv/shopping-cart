import React from 'react'
import Ratings from './Ratings'

const ProductCard = ({_id,name,image,price,rating,numReviews}) => {
    return (
        <div className='productCard-wrapper'>
            <div>
                <div className='img-wrapper'>
                    <img className='product-image' src={image} alt='name'></img>
                </div>
                <h3>{name}</h3>
                <div className='product-price'>
                    <h5>{price}</h5>
                </div>
                <div className='productCard-rating'>
                    <Ratings value={rating} reviews={numReviews} />
                </div>
                <button className='productCard-button'>Add to cart</button>
            </div>
        </div>
    )
}

export default ProductCard
