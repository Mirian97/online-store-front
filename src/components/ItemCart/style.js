import styled from '@emotion/styled'
import { css } from '@mui/material'

export const CustomItemCart = styled('section')`
  ${({ theme }) => css`
    border-bottom: 1px solid ${theme.palette.grey[500]};
    display: flex;
    gap: 16px;
    padding-bottom: 16px;
    width: 100%;

    .cart-image {
      width: 250px;
      min-height: 120px;
      border-radius: 5px;
    }

    .cart-content {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    :hover {
      .cart-short-text {
        text-decoration: underline;
      }
    }
  `}
`
