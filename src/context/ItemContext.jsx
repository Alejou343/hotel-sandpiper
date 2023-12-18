"use client"
import React from 'react'

const ItemContext = React.createContext();

const ItemProvider = ({children}) => {

    const [item, setItem] = React.useState(3)

  return (
    <ItemContext.Provider value={{item, setItem}}>
        {children}
    </ItemContext.Provider>
  )
}

export default ItemProvider

export const useItem = () => {
    return React.useContext(ItemContext);
  };