import api from '../services/api'
import { messageError } from '../utils/toast'
import useGlobal from './useGlobal'

function useRequests() {
  const { setProducts, setCurrentProduct } = useGlobal()

  async function getProducts() {
    try {
      const { data } = await api.get('/produtos')
      setProducts(data)
    } catch (error) {
      messageError('Não foi possível carregar os produtos')
    }
  }

  async function getProduct(id) {
    try {
      const { data } = await api.get(`/produtos/${id}`)
      setCurrentProduct(data)
    } catch (error) {
      messageError('Não foi possível carregar o produto')
    }
  }

  return {
    getProducts,
    getProduct
  }
}

export default useRequests
