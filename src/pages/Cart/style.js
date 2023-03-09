import styled from '@emotion/styled'
import { Container, css } from '@mui/material'

export const CustomContentCart = styled(Container)`
  ${({ theme }) => css`
    padding: 25px 92px 60px;

    ${theme.breakpoints.down('sm')} {
      padding: 25px 40px;
    }
  `}
`
