import React from 'react'
import { Logo } from './componentes/logo'
import { ListaComponentes } from './componentes/listadecomponentes/listas'
import { Globalstyle } from './componentes/globalStyles/Globalstyles'
import { ListPhotoSpace } from './componentes/ListPhotoSpace'

export const App = () => (
  <h2>
    <Logo />
    <Globalstyle />
    {/* Alertaaaaaaaa de tamaño del bundler excesivo se da en modo development */}
    <ListaComponentes />
    <ListPhotoSpace />
  </h2>
)
