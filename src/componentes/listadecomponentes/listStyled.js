import styled from 'styled-components'

export const List = styled.ul`
    display: flex;
  /* cuando los componentes ocupen mas del 100% permita hacer scroll */
  overflow-y:hidden ;
  width: 100%;
  &.fixed{
    position: fixed;
    max-width: 400px;
    /* Asi se centra */
    left: 0;
    right: 0;
    margin: 0 auto;
    background-color: aqua;
    border-radius: 50px;
    box-shadow: 0 0 20px rgba(0,0,0, 0.3);
    top: -10px;
    /* Se reduce a .5 de su tamaño */
    transform: scale(.8);
    z-index: 1;
    
    /* ::-webkit-scrollbar {
    display: none;} */
  }
`
export const Item = styled.li`
  padding: 0 8px;
`
