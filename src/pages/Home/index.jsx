import { useEffect } from 'react'
import Header from '../../components/Header'
import ListProducts from '../../components/ListProducts'
import useGlobal from '../../hooks/useGlobal'
import useRequests from '../../hooks/useRequests'
import { CustomContainerPage } from '../../theme/container'
import { CustomContentHome } from './style'

function Home() {
  const { getProducts } = useRequests()
  const { products } = useGlobal()

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <CustomContainerPage>
      <Header />
      <CustomContentHome disableGutters>
        <ListProducts />
      </CustomContentHome>
    </CustomContainerPage>
  )
}

export default Home
