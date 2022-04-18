import React, { useState, useEffect } from 'react'
import { Categoria } from '../componentebasico/Comp1'
import { Item, List } from './listStyled'
//  cuando se pone temporalmente un modulo que tiene un homonimo en el mismo archivo se renombra como: mock<nombre del archivo>
// import { categories as mockcategories } from '../../../api/db.json'

export const ListaComponentes = () => {
  const [categories, setCategories] = useState([])

  const [showFixed, setShowFixed] = useState(false)

  useEffect(function () {
    window.fetch('https://perritos-react-platzi-github-io.vercel.app/categories')
      .then(res => res.json())
      .then(response => {
        setCategories(response)
      })
  }, [])

  useEffect(function () {
    // onScroll nos dira cuando el scrool es > 200 para renderizar el componente PUEDE devolver T o F
    const onScroll = () => {
      const newShowFixed = window.scrollY > 200
      // si el estado que en este caso es el Scroll es mayor a 200 actualice el estado dependiendo de si onScroll es FoV es decir si es > 200
      showFixed !== newShowFixed && setShowFixed(newShowFixed)
    }
    document.addEventListener('scroll', onScroll)
    // se va a limpiar el efecto cada vez que carge
    return () => document.removeEventListener('scroll', onScroll)
  }, [showFixed]
    // se le ha añadido la dependencia, decir cada vez que carge el estado se ejecutara la dependencia
  )

  const renderList = (fixed) => (
    // Este ternario quiere decir que si fixed es true le damos la className fixed, de lo contrario un ''
    // Se editara en styled para cuando tenga la clase fixed & sea el componente List
    <List className={fixed ? 'fixed' : ''}>
      {
        // El spread operator me pasa todas las props que encuentre
        categories.map(category => <Item key={category.id}> <Categoria {...category} /> </Item>)
        // Como es una lista requiere que cada item tenga su key para poder identificarlo

        // se importan del archivo db.json el array categories para poner de ejemplo mientras se hace un fetch
        // categories.map(category => <Item key={category.id}> <Categoria cover={category.cover} emoji={category.emoji} /> </Item>)

      }
    </List>
  )

  return (
    <div>
      {/* Esto solo lo va a renderizar cuando el state showFixed sea TRUE */}
      {showFixed && renderList(true)}
      {renderList()}

    </div>

  )
}
