import { CardActionArea } from '@mui/material'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { handleFormatToMoney } from '../../utils/formatters'

function ProductCard({ product: { nome, descricao, foto, preco } }) {
  return (
    <Card className='card' sx={{ maxWidth: 250, minHeight: 200 }}>
      <CardActionArea>
        <CardMedia
          component='img'
          sx={{ width: 200, minHeight: 100 }}
          image={foto}
          alt={descricao}
        />
        <CardContent className='card-content'>
          <Typography variant='h5'>{nome}</Typography>
          <Typography variant='h5' color='text.secondary' mt={1}>
            {descricao}
          </Typography>
          <Typography variant='h4' mt={2}>
            {handleFormatToMoney(preco)}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
export default ProductCard
