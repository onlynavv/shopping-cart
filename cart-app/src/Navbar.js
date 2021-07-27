import React,{useState,useEffect} from 'react'
import {BiSearchAlt} from 'react-icons/bi'
import {FiShoppingCart} from 'react-icons/fi'
import './index.css'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'

const Navbar = ({cart}) => {

    const [cartCount,setCartCount] = useState(0)

    useEffect(()=>{
        let count = 0
        cart.forEach(item => {
         count = count + item.qty   
        });

        setCartCount(count)
    },[cart,cartCount])

    return (
        <nav>
            <div className='nav-left'>
                <Link to='/'>
                    ShopBee
                </Link>
            </div>
            <div className='nav-middle'>
                <div className='input-wrapper'>
                    <input type='text'></input>
                    <BiSearchAlt className='search-icon' />
                </div>
            </div>
            <div className='nav-right'>
                <Link to='/cart' className='nav-cart'>
                    <div className='cart-icon-wrapper'>
                        <FiShoppingCart className='cart-icon' />
                    </div>
                    <div>
                        {cartCount}
                    </div>
                </Link>
            </div>
        </nav>
    )
}

const mapStateToProps = (state) => {
    return{
        cart:state.shoppingReducer.cart
    }
}

export default connect(mapStateToProps)(Navbar)
