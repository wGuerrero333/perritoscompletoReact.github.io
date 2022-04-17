import React from 'react'
import { WrapperImg, StyleImg, StyleButton } from './styles'
import { GiBiohazard } from 'react-icons/gi'
// se podra poner 2 iconos?
// import { IconName } from "react-icons/ai"

const DEFAULTIMG = 'https://images.unsplash.com/photo-1553987882-91d92995e16c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'

// se le pasan las props por eg likes con valores por default
export const Photospace = ({ id, src = DEFAULTIMG, likes = 40 }) => {
  return (
    <article>
      <a href={`/detail/${id}`}>
        <WrapperImg>
          <StyleImg src={src} />
        </WrapperImg>
      </a>
      <StyleButton>
        {/* <IconName /> */}
        Likes {likes}
        {/* icono despues de instalar react-icons */}
        <GiBiohazard size={30} />
      </StyleButton>
    </article>
  )
}
