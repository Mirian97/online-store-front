import { Grid, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import useGlobal from '../../hooks/useGlobal'
import useRequests from '../../hooks/useRequests'
import ProductCard from '../ProductCard'
import { CustomListProducts } from './style'

function ListProducts() {
  const navigate = useNavigate()
  const { products } = useGlobal()
  const { getProduct } = useRequests()

  async function handleDetailProduct(product) {
    await getProduct(product.id)
    navigate(`/detail-product/${product.id}`)
  }

  return (
    <CustomListProducts disableGutters>
      <Typography variant='h1' mb={2}>
        Produtos
      </Typography>
      <Grid container spacing={3}>
        {products &&
          products.map((product) => (
            <Grid
              item
              md={3}
              sm={4}
              xs={6}
              key={product.id}
              onClick={() => handleDetailProduct(product)}
            >
              <ProductCard product={product} />
            </Grid>
          ))}
      </Grid>
    </CustomListProducts>
  )
}

export default ListProducts
