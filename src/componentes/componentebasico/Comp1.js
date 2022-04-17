import React from 'react'
import { Anchor, Image } from './compStyled'

const IMAGEN = 'https://cdn2.thecatapi.com/images/JdMcWHjhB.jpg'

export const Categoria = ({ cover = IMAGEN, path, emoji = ':v' }) => (
  <div>
    <Image src={cover} />
    <Anchor href={path}>
      <p>{emoji}</p>
    </Anchor>
  </div>
)
