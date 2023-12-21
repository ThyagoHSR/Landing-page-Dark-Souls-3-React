import React from "react";
import { Footer, SectionMain } from "./style";

const Main = () =>{
    return(
        <>
        <SectionMain>
            <div class="container">
                 <div class="container1">

                 </div>
                <div class="container2">
                     <h1>Dark Souls</h1>
                     <p class="subtitulo">"Explore a Terra de Lothric em Dark Souls III"</p>
                     <p class="paragrafo">Em Dark Souls III, mergulhe em uma jornada épica repleta de desafios e descobertas enquanto você adentra a terra amaldiçoada de Lothric. Prepare-se para uma experiência intensa, onde a morte é apenas o começo e cada passo adiante é uma batalha contra criaturas terríveis e chefes imponentes.</p>
                     <iframe class="video" src="https://www.youtube.com/embed/cWBwFhUv1-8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                     <Footer>
                        <p>Created by </p>
                        <a href="https://github.com/ThyagoHSR" target="_blank">ThyagoHSR</a>
                        <p>| © 2023 Todos os direitos reservados.</p>
                     </Footer>
                </div>
             </div>
    </SectionMain>
        </>
        
    )
}
export default Main;