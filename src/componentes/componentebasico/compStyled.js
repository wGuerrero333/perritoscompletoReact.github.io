
// En la raiz se ha instalado npm install --save styled-components
import styled from 'styled-components'

export const Anchor = styled.a`
   display:flex;
   flex-direction: column;
   text-align: center;
   text-decoration: none;
   width: 80px;
`

export const Image = styled.img`
  width: 75px;
  height: 75px;
  border: 2px solid blue;
  box-shadow: 0px 10px 14px rgba(0,0,0,.5);
  border-radius: 50px;
  /* ocultar lo que sobresalga */
  overflow: hidden;
  /* para que la img se quede en lo que ocupa el comp */
  object-fit: cover;

`
