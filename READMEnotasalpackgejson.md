COMENTARIOS AL package.json

Cuando haga la revision con el lint llamado standard,
 
  "standard":{
      "ignore":[ "/api**"]
  },

 se le pasa un array de objetos el primero  ignorara los archivos del directorio api
 Cuando no haya mas errores de syntaxis dejara de producir error.para

Tambien se configura 
     "eslintConfig": {
          "extends": ["./node_modules/standard/eslintrc.json"]
      }

Para las reglas que cumplira el eslint



**¡Sígueme en Twitch para streams sobre desarrollo web!** 👉 https://www.twitch.tv/midudev

Repositorio con el código del [Curso Avanzado de React de Platzi](https://platzi.com/cursos/react-avanzado/)
