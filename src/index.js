import React from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './app'

const container = document.getElementById('divdeentrada')

// La forma tradicional pronto desactualizda segun la documentacion
// import ReactDOM from 'react-dom'
// ReactDOM.render( <h1>'Renderizando revisar nueva indicacion console en: '</h1> , root )

const root = createRoot(container)

// como ya tiene babel configurado puedo ponerle JSX
root.render(<App />)
