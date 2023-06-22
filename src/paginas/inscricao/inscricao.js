import React from "react";
import "./inscricao.css"

function Inscricao() {
    return (
        <div class="container">
            <div class="collum">
                <div class="row">
                    <p class="text1 text-start mt-5">Muito bom ter você com a<br/>gente, R0ut!</p>
                </div>
                <div class="row justify-content-center">
                    <p class="text2" >NOME DA EQUIPE</p>
                    <div class="line"></div>
                </div>
                <div class="row justify-content-center mt-5">
                    <button class="button1">INSCREVER</button>
                </div>
                <div class="row justify-content-center mt-5">
                    <button class="button2">Copiar Link de convite
                        <div class="vector1">
                            <img class="vector2" src="./inscricao_vector.svg" alt="SVG"/>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Inscricao