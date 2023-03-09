import { useState } from 'react'
import { useLocalStorage } from 'react-use'

function useGlobalProvider() {
  const [products, setProducts] = useState([])
  const [product, setProduct, removeProduct] = useLocalStorage('product')
  const [cart, setCart, removeCart] = useLocalStorage('cart', [])
  const [currentProduct, setCurrentProduct, removeCurrentProduct] =
    useLocalStorage('current-product')

  return {
    products,
    setProducts,
    product,
    setProduct,
    removeProduct,
    cart,
    setCart,
    removeCart,
    currentProduct,
    setCurrentProduct,
    removeCurrentProduct
  }
}

export default useGlobalProvider
