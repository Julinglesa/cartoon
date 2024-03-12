import React from 'react'
import logo from "./imagensHeader/logo.png"
import manete from "./imagensHeader/manete.png"
import relogio from "./imagensHeader/relogio.png"

import * as S from "./HeaderStyle.jsx"


function Header(){
    return (
     <S.HeaderStyle>
           <img src={logo} alt="logocartoon"/>

           <S.Section>
              <S.Div>
             <img src={manete} alt="imagemmanete"/>
             <h2>Jogos</h2>
            </S.Div>

            <S.Div>
               <img src={relogio} alt= "imagemrelogio"/>
               <h2>Programação</h2>
               </S.Div>
            
        </S.Section>
    </S.HeaderStyle>
        
            
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
    )
}

export default Header