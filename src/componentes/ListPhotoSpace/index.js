import React from "react";
import { Photospace } from "../photoSpace";

export const ListPhotoSpace = () => {
  return (
    <ul>
      {
        [1, 2, 3].map(id => <Photospace key={id} />)
      }
    </ul>
  )
}
