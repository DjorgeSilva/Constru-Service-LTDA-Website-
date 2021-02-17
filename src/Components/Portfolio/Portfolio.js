import React from 'react'
import { Layout } from "../../Components/Layout/Layout.js"
import projeto1 from "../../assets/projeto6.jpg"
import projeto2 from "../../assets/projetos2.jpg"
import tprojeto3 from "../../assets/projeto1.jpg"
import projeto4 from "../../assets/projetos3.jpg"
import projeto5 from "../../assets/projeto4.jpg"
import projeto6 from "../../assets/projetos5.jpg"
import { Row, Col } from "react-bootstrap";
import {
    PortfolioContainer,
    PortfolioItemTxt,
    PortfolioGrid,
    PortfolioGridItem,
    PortfolioGridItemHide
} from "./PortfolioElements.js"
import { Link } from "react-router-dom";

export const Portfolios = ({ sizeWindow }) => {
    return (
        <>
            <PortfolioContainer>
                <Layout>
                    <PortfolioItemTxt>
                        <h1>Portfólio</h1>
                    </PortfolioItemTxt>

                    <PortfolioGrid>
                        <Row>
                            <Col sm={12} md={6} lg={4}>
                                <PortfolioGridItem>
                                    <img src={projeto1} alt="" />
                                    <h1>Projeto 1</h1>
                                </PortfolioGridItem>
                            </Col>
                            <Col sm={12} md={6} lg={4}>
                                <PortfolioGridItem>
                                    <img src={projeto2} alt="" />
                                    <h1>Projeto 2</h1>
                                </PortfolioGridItem>
                            </Col>
                            <Col sm={12} md={6} lg={4}>
                                <PortfolioGridItem>
                                    <img src={tprojeto3} alt="" />
                                    <h1>Projeto 3</h1>
                                </PortfolioGridItem>
                            </Col>
                            <Col sm={12} md={6} lg={4}>
                                <PortfolioGridItem >
                                    <img src={projeto4} alt="" />
                                    <h1>Projeto 4</h1>
                                </PortfolioGridItem>
                            </Col>
                            <Col sm={12} md={6} lg={4} style={(sizeWindow < 768 ? { display: "none" } : { display: "block" })}>
                                <PortfolioGridItemHide >
                                    <img src={projeto5} alt="" />
                                    <h1>Projeto 5</h1>
                                </PortfolioGridItemHide>
                            </Col>
                            <Col sm={12} md={6} lg={4} style={(sizeWindow < 768 ? { display: "none" } : { display: "block" })}>
                                <PortfolioGridItemHide >
                                    <img src={projeto6} alt="" />
                                    <h1>Projeto 6</h1>
                                </PortfolioGridItemHide>
                            </Col>
                        </Row>
                    </PortfolioGrid>

                    <Link to="/portfolio" style={{textDecoration: 'none'}}>
                        <button>Confira o portfólio completo</button>
                    </Link>
                    
                </Layout>

            </PortfolioContainer>
        </>
    )
}