import styled from 'styled-components'
import { keyframesImg } from '../globalStyles/keyFrames'

export const WrapperImg = styled.div`
  width: 100%;
  /* porque la img que va dentro del wrapper sera absoluta */
  position: relative;
  border-radius: 10px;
  display: block;
  height: 100;
  overflow: hidden;
  /* para que tenga la misma rel 16/9 de aspecto empujando la img hacia arriba */
  /* padding: 56.25% 0 0 0; */
`
export const StyleImg = styled.img`
  
  animation: 5s ${keyframesImg} ease;
  width: 100%;
  box-shadow: 0 10px 10px rgba(0,0,0,.5);
  /* Para que se ajuste al espacio que tiene el elemnto cover */
  object-fit: cover;
`
export const StyleButton = styled.button`
  display: flex;
  align-items: center;
  padding-top: 9px;
  /* Este & se refiere al selctor anterior en este caso el 'button' */
  /* Es decir el svg que este entre el button lo podemos estilar con las propiedades que tengamos dentro */
  & svg {
    margin-left: 10px;
  }
`
