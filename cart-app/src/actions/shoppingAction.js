export const addToCart = (itemId) => {
    console.log(itemId)
    return{
        type:'ADD_TO_CART',
        payload:{
            id:itemId
        }
    }
}

export const removeFromCart = (itemId) => {
    return{
        type: 'REMOVE_FROM_CART',
        payload:{
            id:itemId
        }
    }
}

export const adjustQty = (itemId,value) => {
    return{
        type:'ADJUST_QTY',
        payload:{
            id:itemId,
            qty:value
        }
    }
}

export const loadCurrentItem = (item) => {
    return{
        type:'LOAD_CURRENT_ITEM',
        payload:item
    }
}