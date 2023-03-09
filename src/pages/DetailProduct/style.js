import styled from '@emotion/styled'
import { Container, css } from '@mui/material'

export const CustomContentDetailProduct = styled(Container)`
  ${({ theme }) => css`
    padding: 25px 92px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 30px;

    .image-product {
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        width: 300px;
      }
    }

    .info-product {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 20px;
    }

    ${theme.breakpoints.down('sm')} {
      padding: 25px 40px;
    }
  `}
`
