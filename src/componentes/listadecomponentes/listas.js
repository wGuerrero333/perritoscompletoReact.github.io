
import React from 'react'
import { Categoria } from '../componentebasico/Comp1'
import { Item, List } from './listStyled'
import { categories } from '../../../api/db.json'

export const ListaComponentes = () => {
  return (
    <List>
      {/* Como es una lista requiere que cada item tenga su key para poder identificarlo */}
      {
        // El spread operator me pasa todas las props que encuentre
        categories.map(category => <Item key={category.id}> <Categoria {...category} /> </Item>)

// se importan del archivo db.json el array categories para dar ejemplo
        // categories.map(category => <Item key={category.id}> <Categoria cover={category.cover} emoji={category.emoji} /> </Item>)

      }
    </List>
  )
}
