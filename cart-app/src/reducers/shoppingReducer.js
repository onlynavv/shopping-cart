import products from '../data'

const initialState = {
    products:products,
    cart:[],
    currentItem:null
}

const shoppingReducer = (state=initialState,action) => {
    switch(action.type){
        case 'ADD_TO_CART':
            const item = state.products.find((product)=>{
                return product._id === action.payload.id
            })

            console.log(item)

            const isInCart = state.cart.find((item) => {
        return item._id === action.payload.id ? true : false
            });
            console.log(isInCart)
            return{
                ...state,
                cart: isInCart ? state.cart.map((item)=>{
                    
                        if(item._id === action.payload.id){
                            return(
                                {
                                    ...item,
                                    qty:item.qty+1
                                }
                            )
                        }else{
                            return item
                        }
                    
                }) : [...state.cart,{...item,qty:1}]
            }
        case 'REMOVE_FROM_CART':
            return{
                ...state,
                cart: state.cart.filter((item)=>{
                    return(
                        item._id !== action.payload.id
                    )
                })
            }
        case 'ADJUST_QTY':
            return{
                ...state,
                cart: state.cart.map((item)=>{
                    if(item._id === action.payload.id){
                        return(
                            {
                                ...item,
                                qty:action.payload.qty
                            }
                        )
                    }else{
                        return item
                    }
                })
            }
        
        default:
            return state
    }
}

export default shoppingReducer