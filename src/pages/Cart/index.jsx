import { Button, Grid, Stack, Typography } from '@mui/material'
import { useEffect } from 'react'
import Header from '../../components/Header'
import ItemCart from '../../components/ItemCart'
import useGlobal from '../../hooks/useGlobal'
import { CustomContainerPage } from '../../theme/container'
import { handleFormatToMoney } from '../../utils/formatters'
import { messageSucess } from '../../utils/toast'
import { CustomContentCart } from './style'

function Cart() {
  const { cart, setCart } = useGlobal()

  function handleReturnTotal() {
    let total = 0
    for (let product of cart) {
      total += product.preco * product.qtd
    }
    return handleFormatToMoney(total)
  }

  function handleFinishBuy() {
    setCart([])
    messageSucess(`Compra finalizada, total de ${handleReturnTotal()}`)
  }

  useEffect(() => {
    handleReturnTotal()
  }, [cart])

  return (
    <CustomContainerPage>
      <Header />
      <CustomContentCart disableGutters>
        <Typography variant='h2'>Meu Carrinho</Typography>
        {cart.length ? (
          <>
            <Grid container spacing={2} mt={3}>
              {cart.map((item) => (
                <Grid item xs={12} key={item.id}>
                  <ItemCart product={item} />
                </Grid>
              ))}
            </Grid>
            <Stack direction='row' justifyContent='space-between' mt={3}>
              <Typography variant='h2'>Total: {handleReturnTotal()}</Typography>
              <Button variant='contained' onClick={handleFinishBuy}>
                Finalizar compra
              </Button>
            </Stack>
          </>
        ) : (
          <Typography variant='h3'>Carrinho vazio</Typography>
        )}
      </CustomContentCart>
    </CustomContainerPage>
  )
}

export default Cart
