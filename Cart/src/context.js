import React, { useState, useContext, useReducer, useEffect } from 'react'
import cartItems from './data'
import reducer from './reducer'

const url = 'https://course-api.com/react-useReducer-cart-project'
const AppContext = React.createContext()

const initialState = {
  loading:false,
  carts: cartItems,
  total: 0,
  amount: 0
}


const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const clearCarts = () => {
    dispatch({type: 'CLEAR_CARTS'})
  }

  const removeItems = (id) => {
    dispatch({type: 'REMOVE_CART', payload: id})
   
  }

  const increaseItems = (id) => {
    dispatch({type: 'INCREASE_CART', payload:id})
  }

  const decreaseItems = (id) => {
    dispatch({type: 'DECREASE_CART', payload:id})
  }

  const fetchData = async () => {
    dispatch({type: 'LOADING'})
    const response = await fetch(url)
    const carts = await response.json()
    dispatch({type: 'DISPlAY_ITEMS', payload: carts})
  }

  useEffect(() => {
    fetchData()
  },[])

  useEffect(() => {
    dispatch({type: 'GET_TOTALS'})
  }, [state.carts])

  return (
    <AppContext.Provider
      value={{
        ...state,
        clearCarts,
        removeItems,
        increaseItems,
        decreaseItems
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
