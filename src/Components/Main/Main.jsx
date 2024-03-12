import React ,{useState} from "react"

import Scooby from "./imagensMain/scooby.png"
import Ben10 from "./imagensMain/ben10.png"
import Pernalonga from "./imagensMain/pernalonga.png"
import Pufrosa from "./imagensMain/pufrosa.png"
import Poderosas from "./imagensMain/poderosas.png"
import Tom from "./imagensMain/Tom.png"

import programação from "./programaçao/programação.js"
import *as S from "Mainstyle.jsx"



function Main () {

const [galeria , SetGaleria] = useState([

    Pufrosa,
    Poderosas,
    Tom,
])


    return (
     ) 
}
     <main>
      <S.Section>
      <img src={scooby} alt ="scooby"/>
      <img src= {bem10} alt="bem10" />
      <img src= {Tom} alt="Tom" />
      </S.Section>


      <S.SegundaSection>
       {galeria.map((item) => (
        <img src={item} alt="" />

        ))}

</S.SegundaSection>
<Programação/>
    
</main> 
    
export default Main