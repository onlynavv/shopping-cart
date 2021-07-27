import React,{useState,useEffect} from 'react'
import CartItem from './CartItem'
import { connect } from 'react-redux'

const Cart = ({cart}) => {

    const [total,setTotal] = useState(0)
    const [totalItems,setTotalItems] = useState(0)

    useEffect(()=>{

        let items = 0
        let price = 0

        cart.forEach(item => {
            items += item.qty
            price += item.qty * item.price
        });

        setTotal(price)
        setTotalItems(items)
    },[cart,total,totalItems])

    return (
        <div className='cart'>
            <h1>Cart</h1>
            <div className="cart-container">
                <div className="cart-item">
                    {cart.map((item)=>{
                        return(
                            <CartItem key={item._id} {...item} />
                        )
                    })}
                </div>
                <div className="cart-subtotal">
                    <h3>Subtotal</h3>
                    <div className="cart-total">
                        <p>Total ({totalItems}): <span>Rs. {total}</span></p>
                    </div>
                    <button>Proceed to Checkout</button>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        cart : state.shoppingReducer.cart
    }
}

export default connect(mapStateToProps)(Cart)
