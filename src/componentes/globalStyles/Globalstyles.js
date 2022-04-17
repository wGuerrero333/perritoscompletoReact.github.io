import { createGlobalStyle } from 'styled-components'
// Estilos globales se establece, dado que los navegadores por default inician con dif estilos

export const Globalstyle = createGlobalStyle`
/* todo el html tendra el mismo estilo */
  html{
    /* va a utilizar el pading para calcular el ancho de los elementos */
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, 
    'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
    'Helvetica Neue', sans-serif;
  }
  /* todos los elementos usaran el boeder box */
  *,*:before,*::after{
    box-sizing: inherit;
  }
  ul,li,h1,h2,h3,p,button {
    margin: 0;
    padding: 0;
  }
  ul{
    list-style: none;
  }
  button{
    background:transparent;
    border:0;
    outline:0;
  }
  body{
    width: 100%; 
    background:grey;
    height:100vh;
    margin: 0 auto;
    /* para ser responsive */
    max-width: 500px;
    /* evita que el scroll haga rebotes */
    overscroll-behavior: none;
  }
  #App{
    box-shadow: 0 0 10px rgba(0,0,0,0.5);
    overflow-x: hidden;
    min-height: 100vh;
    padding-bottom: 0ex;
  }

`
