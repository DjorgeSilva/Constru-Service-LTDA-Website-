import React from 'react'
import portfolioIMG from "../../assets/portfolio.jpeg"
import BannerIMG from "../../assets/bannerSobre.jpeg"
import { Layout } from "../../Components/Layout/Layout"
import { Row, Col } from "react-bootstrap"
import { ContatoFooter } from "../../Components/Contato/Contato"

import {
    Container,
    Banner,
    ItemGrid
} from "./PortfolioElements.js"
import { DataPortfolio } from "./DataPortfolio.js"

export const Portfolio = () => {
    return (
        <>
            <Banner>
                <img src={portfolioIMG} alt="Imagem trabalhadores Constru Service" />
                <h1>Portfólio</h1>
                <p>Galeria dos nossos projetos</p>
            </Banner>
            <Container>
                <Layout>
                    <Row>
                        {DataPortfolio.map((item) => {
                            return (
                                <Col sm={6} lg={4}>
                                    <ItemGrid>
                                        <img src={item.img} alt={item.alt} />
                                        <h3>{item.alt}</h3>
                                    </ItemGrid>
                                </Col>
                            )
                        })}
                    </Row>

                </Layout>
            </Container>
            <ContatoFooter />
        </>
    )
}
