import React from 'react'
import { Layout } from "../../Components/Layout/Layout.js"
import AboutImg from "../../assets/servicos.jpeg"
import {
    AboutContainer,
    AboutItemTxt,
    AboutItemImg
} from "./AboutElements.js"
import {Link} from "react-router-dom";

export const About = () => {
    return (
        <>
            <AboutContainer>
                <Layout>

                    <AboutItemTxt>
                        <h1>Sobre a Constru Service</h1>
                        <p>A Constru Service presta serviços na área de construção civíl para incorporadoras e empresas. Contamos com profissionais especializados, que buscam constantemente o conhecimento, resultando em tecnologia e inovação para entregar obras diferenciadas, com o foco na qualidade, de acordo com o perfil de seus clientes.</p>
                        <Link to="/about">
                            <button>Saiba mais</button>
                        </Link>
                    </AboutItemTxt>

                    <AboutItemImg>
                        <img src={AboutImg} alt="Sobre a constru service" />
                    </AboutItemImg>
                </Layout>

            </AboutContainer>
        </>
    )
}
