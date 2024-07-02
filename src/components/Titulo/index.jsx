import styled from "styled-components"

const Titulo = styled.h2`
  color: #7B78E6;
  font-size: 32px;
  text-align: ${props => props.$alinahmento ? props.$alinahmento : 'left'};
`

export default Titulo
