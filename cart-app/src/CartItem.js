import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import { removeFromCart, adjustQty } from './actions/shoppingAction'

const CartItem = ({_id,name,image,price,qty}) => {

    const dispatch = useDispatch()

    const [qtyAdj,setQtyAdj] = useState(qty)

    const handleQty = (e) => {
        setQtyAdj(e.target.value)
        dispatch(adjustQty(_id,e.target.value))
    }

    return (
        <div className='cart-itemWrapper'>
            <img src={image} alt='product'></img>
             <div className='item-container'>
                <div className="cart-itemDetails">
                    <p>{name}</p>
                    <p>Rs. {price}</p>
                </div>
                <div className="cart-itemActions">
                    <div className="cart-qty">
                        <label>Qty</label>
                        <input type='number' value={qtyAdj} onChange={handleQty} min='1'></input>
                    </div>
                    <button onClick={()=>dispatch(removeFromCart(_id))}>Remove</button>
                </div>
            </div>
        </div>
    )
}


export default CartItem
