import React from 'react'
import {FaStarHalfAlt} from 'react-icons/fa'
import {FaStar} from 'react-icons/fa'
import {FiStar} from 'react-icons/fi'

const Ratings = ({value,reviews}) => {
    return (
        <>
            {[1,2,3,4,5].map((star)=>{
                return(
                    <>
                    <span>{value + 1 === star + 0.5 ? <FaStarHalfAlt className='star-color' /> : value > star ? <FaStar className='star-color' /> : <FiStar className='star-color' />}</span>
                    </>
                )
            })}
            <h4>{reviews} reviews</h4>
        </>
    )
}

export default Ratings
