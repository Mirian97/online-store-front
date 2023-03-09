import { Button, Grid, Stack, Typography } from '@mui/material'
import Header from '../../components/Header'
import useGlobal from '../../hooks/useGlobal'
import { CustomContainerPage } from '../../theme/container'
import { handleFormatToMoney } from '../../utils/formatters'
import { messageSucess } from '../../utils/toast'
import { CustomContentDetailProduct } from './style'

function DetailProduct() {
  const { currentProduct, cart, setCart } = useGlobal()

  const { nome, descricao, foto, preco, id } = currentProduct

  function handleAddToCart() {
    const localCart = [...cart]
    const findProduct = localCart.find((item) => item.id === id)
    if (findProduct) {
      findProduct.qtd += 1
    } else {
      localCart.push({ ...currentProduct, qtd: 1 })
    }
    setCart(localCart)
    messageSucess('Produto adicionado ao carrinho')
  }

  return (
    <CustomContainerPage>
      <Header />
      <CustomContentDetailProduct disableGutters>
        <Typography variant='h2'>{nome}</Typography>
        <Grid container>
          <Grid item xs={12} sm={6} className='image-product'>
            <img src={foto} alt={descricao} />
          </Grid>
          <Grid item xs={12} sm={6} className='info-product'>
            <Typography variant='h3'>{descricao}</Typography>
            <Typography color='grey.400' variant='h3'>
              {handleFormatToMoney(preco)}
            </Typography>
            <Stack>
              <Button variant='contained' onClick={handleAddToCart}>
                Adicionar ao carrinho
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </CustomContentDetailProduct>
    </CustomContainerPage>
  )
}

export default DetailProduct
