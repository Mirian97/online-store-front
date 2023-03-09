import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded'
import StoreIcon from '@mui/icons-material/Store'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { useNavigate } from 'react-router-dom'

export default function Header() {
  const navigate = useNavigate()

  return (
    <Box>
      <AppBar position='static'>
        <Toolbar variant='dense' sx={{ bgcolor: '#434343', p: '12px 20px' }}>
          <IconButton edge='start' color='inherit' sx={{ mr: 2 }}>
            <StoreIcon onClick={() => navigate('/')} sx={{ fontSize: 40 }} />
          </IconButton>
          <Typography variant='h2' color='white'>
            MI Store
          </Typography>
          <IconButton edge='end' color='inherit' sx={{ ml: 'auto' }}>
            <ShoppingCartRoundedIcon
              onClick={() => navigate('/cart')}
              sx={{ fontSize: 35 }}
            />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
