import { ThemeProvider } from '@emotion/react'
import { Route, Routes } from 'react-router-dom'
import { GlobalProvider } from './contexts/GlobalContext'
import Cart from './pages/Cart'
import DetailProduct from './pages/DetailProduct'
import Home from './pages/Home'
import { theme } from './theme/index'

function MainRoutes() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalProvider>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/detail-product/:idProduct' exact element={<DetailProduct />} />
          <Route path='/cart' exact element={<Cart />} />
        </Routes>
      </GlobalProvider>
    </ThemeProvider>
  )
}

export default MainRoutes
