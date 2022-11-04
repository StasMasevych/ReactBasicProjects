

const reducer = (state, action) => { 
    if (action.type === 'CLEAR_CARTS') {
        return {...state, carts: []}
    }

    if (action.type === 'REMOVE_CART') {
        return {...state, carts: state.carts.filter((cart) => {
            return cart.id !== action.payload;
        })}
    }

    if (action.type === 'INCREASE_CART') {
        let tempCarts = state.carts.map((cartItem) => {
            if (cartItem.id === action.payload) {
                return {...cartItem, amount: cartItem.amount + 1}
            }

            return cartItem;
        })
        return {...state, carts: tempCarts
        }}

    if (action.type === 'DECREASE_CART') {
        let tempCarts = state.carts.map((cartItem) => {
            if (cartItem.id === action.payload) {
                return {...cartItem, amount: cartItem.amount - 1}
            }
    
                return cartItem;
            })
            .filter((cartItem) => cartItem.amount !== 0)

            return {...state, carts: tempCarts
            }}
      
      if (action.type === 'GET_TOTALS') {
          let {total, amount} = state.carts.reduce((cartTotal, cartItem) => {
          const {price, amount} = cartItem;
          const itemsTotal = price * amount;

          cartTotal.total += itemsTotal;//cartTotal its {total: 0, amount: 0}
          cartTotal.amount += amount;//sum of amount from cartItem
          
          
          return cartTotal;
         
        }, {total: 0, amount: 0})

        total = parseFloat(total.toFixed(2))
        
        return {...state, total, amount}
      }

      if (action.type === 'LOADING') {
        return {...state, loading: true}
      }

      if (action.type === 'DISPlAY_ITEMS') {
        return {...state, carts: action.payload, loading: false}
      }

      return state
    
    
    }

    


export default reducer;