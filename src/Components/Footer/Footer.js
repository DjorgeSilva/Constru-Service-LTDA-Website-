import React from 'react'
import { Layout } from "../../Components/Layout/Layout.js"
import { Row, Col } from "react-bootstrap";
import {
    FooterContainer,
    FooterLogo,
    FooterGrid,
    FooterGridItem,
    FooterGridItemRedesSociais
} from "./FooterElements.js"
import { Link } from "react-router-dom";
import LogoIMG from "../../assets/logo.png";

export const Footer = ({ sizeWindow }) => {
    return (
        <>
            <FooterContainer>
                <Layout>
                    <FooterLogo>
                        <img src={LogoIMG} alt="" />
                    </FooterLogo>

                    <FooterGrid>
                        <Row>
                            <Col sm={12} md={6} lg={4}>
                                <FooterGridItem>
                                    <h1>Endereço</h1>
                                    <p><i class="fas fa-map-marker-alt"></i>Travessa Teresina, 2404</p>
                                    <p><i class="fas fa-home"></i>Constru Service LTDA</p>
                                    <p><i class="fas fa-map-marked-alt"></i>Codó Novo - MA</p>
                                    <p><i class="fas fa-compass"></i>CEP: 65400-000</p>
                                </FooterGridItem>
                            </Col>

                            <Col sm={12} md={6} lg={4}>
                                <FooterGridItem>
                                    <h1>Contato</h1>
                                    <p><i class="fas fa-phone"></i>+55 99 98144-4269</p>
                                    <p><i class="fas fa-phone"></i>+55 99 99836-9214</p>
                                    <p><i class="far fa-envelope"></i>construservice@gmail.com</p>
                                </FooterGridItem>
                            </Col>

                            <Col sm={12} lg={4} >
                                <FooterGridItemRedesSociais>
                                    <h2>Rede Sociais</h2>
                                    <h3>Siga-nos em nossas redes sociais</h3>
                                    <nav>
                                        <ul>
                                            <li>
                                                <Link to="/" style={{textDecoration:"none"}}>
                                                    <i class="fab fa-facebook"></i>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/" style={{textDecoration:"none"}}>
                                                    <i class="fab fa-instagram"></i>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/" style={{textDecoration:"none"}}>
                                                    <i class="fab fa-twitter"></i>
                                                </Link>
                                            </li>
                                        </ul>
                                    </nav>
                                </FooterGridItemRedesSociais>
                            </Col>

                        </Row>
                    </FooterGrid>
                </Layout>

            </FooterContainer>
        </>
    )
}