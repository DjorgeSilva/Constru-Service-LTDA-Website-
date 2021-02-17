import React from 'react'
import { Layout } from "../../Components/Layout/Layout.js"
import terraplanagemIMG from "../../assets/aboutImg.jpg"
import avaliacaoestruturalIMG from "../../assets/avaliacaoestrutural.jpg"
import topografiaIMG from "../../assets/topografia.jpg"
import sinalizacaoIMG from "../../assets/bg-sinalizacao.jpg"
import imprimacaoIMG from "../../assets/imprimação.jpg"
import drenagemIMG from "../../assets/drenagem.png"
import { Row, Col } from "react-bootstrap";
import {
    ServicoContainer,
    ServicoItemTxt,
    ServicoGrid,
    ServicoGridItem,
    ServicoGridItemHide
} from "./ServicosElements.js"
import { Link } from "react-router-dom";

export const Servicos = ({ sizeWindow }) => {
    return (
        <>
            <ServicoContainer>
                <Layout>
                    <ServicoItemTxt>
                        <h1>Nossas áreas de atuação</h1>
                        <p>A Constru Service possui experiência em projetos e consultoria das mais variadas soluções em engenharia, tendo realizado serviços em diversos Estados do Brasil.</p>
                    </ServicoItemTxt>

                    <ServicoGrid>
                        <Row>
                            <Col sm={12} md={6} lg={4}>
                                <ServicoGridItem>
                                    <img src={terraplanagemIMG} alt="" />
                                    <h1>Terraplanagem</h1>
                                </ServicoGridItem>
                            </Col>
                            <Col sm={12} md={6} lg={4}>
                                <ServicoGridItem>
                                    <img src={avaliacaoestruturalIMG} alt="" />
                                    <h1>Avaliação estrutural</h1>
                                </ServicoGridItem>
                            </Col>
                            <Col sm={12} md={6} lg={4}>
                                <ServicoGridItem>
                                    <img src={topografiaIMG} alt="" />
                                    <h1>Topografia</h1>
                                </ServicoGridItem>
                            </Col>
                            <Col sm={12} md={6} lg={4}>
                                <ServicoGridItem >
                                    <img src={sinalizacaoIMG} alt="" />
                                    <h1>Sinalização</h1>
                                </ServicoGridItem>
                            </Col>
                            <Col sm={12} md={6} lg={4} style={(sizeWindow < 768 ? { display: "none" } : { display: "block" })}>
                                <ServicoGridItemHide >
                                    <img src={imprimacaoIMG} alt="" />
                                    <h1>Imprimação</h1>
                                </ServicoGridItemHide>
                            </Col>
                            <Col sm={12} md={6} lg={4} style={(sizeWindow < 768 ? { display: "none" } : { display: "block" })}>
                                <ServicoGridItemHide >
                                    <img src={drenagemIMG} alt="" />
                                    <h1>Drenagem</h1>
                                </ServicoGridItemHide>
                            </Col>
                        </Row>
                    </ServicoGrid>

                    <Link to="/servicos" style={{textDecoration: 'none'}}>
                        <button>Saiba mais</button>
                    </Link>
                    
                </Layout>

            </ServicoContainer>
        </>
    )
}