import { Button, Divider, Stack, Typography } from '@mui/material'
import useGlobal from '../../hooks/useGlobal'
import { handleFormatToMoney } from '../../utils/formatters'
import { messageSucess } from '../../utils/toast'
import { CustomItemCart } from './style'

function ItemCart({ product }) {
  const { setCart, cart } = useGlobal()
  const { foto, descricao, nome, preco, qtd, id } = product

  function handleAddToCart() {
    const localCart = [...cart]
    const findProduct = localCart.find((item) => item.id === id)
    findProduct.qtd += 1
    setCart(localCart)
    messageSucess('Produto adicionado ao carrinho')
  }

  function handleRemoveToCart() {
    const localCart = [...cart]
    const findProduct = localCart.find((item) => item.id === id)
    if (findProduct.qtd > 1) {
      findProduct.qtd -= 1
      setCart(localCart)
    } else {
      const productRemoved = localCart.filter((product) => product !== findProduct)
      setCart(productRemoved)
    }
    messageSucess('Produto removido ao carrinho')
  }

  return (
    <>
      <CustomItemCart>
        <img className='cart-image' src={foto} alt={descricao} />
        <div className='cart-content'>
          <Typography className='cart-short-text' variant='h4'>
            {nome}
          </Typography>
          <Typography variant='h5'>{handleFormatToMoney(preco)}</Typography>
          <Typography variant='h5'>Quantidade: {qtd}</Typography>
          <Typography variant='h5'>
            Subtotal: {handleFormatToMoney(qtd * preco)}
          </Typography>
          <Stack direction='row' gap={2}>
            <Button variant='contained' onClick={handleAddToCart}>
              Adicionar + 1 item
            </Button>
            <Button variant='contained' onClick={handleRemoveToCart}>
              Remover - 1 item
            </Button>
          </Stack>
        </div>
      </CustomItemCart>
      <Divider />
    </>
  )
}

export default ItemCart
