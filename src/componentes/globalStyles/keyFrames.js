import React from "react";

import { keyframes } from "styled-components";

// Le vamos a indicar cuales son los frames de la animacion
export const keyframesImg = keyframes`
 from {
   filter: blur(5px);
   opacity: 0;
 }
 to{
   filter: blur(0);
   opacity: 1;
 }

`
