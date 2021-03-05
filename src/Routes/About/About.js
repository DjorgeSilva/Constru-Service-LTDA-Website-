import React from 'react'
import sobreIMG from "../../assets/sobre.jpg"
import BannerIMG from "../../assets/bannerSobre.jpeg"
import { Layout } from "../../Components/Layout/Layout"
import { Row, Col } from "react-bootstrap"
import {
    ContainerAbout,
    Banner,
    Main,
    ContainerItem,
    InnerItem,
    ItemGrid
} from "./AboutElements.js"
import { ContatoFooter } from "../../Components/Contato/Contato"


export const About = () => {
    return (
        <>
            <Banner>
                <img src={BannerIMG} alt="Imagem trabalhadores Constru Service" />
            </Banner>
            <ContainerAbout>
                <Main>
                    <Layout>
                        <ContainerItem>
                            <InnerItem>
                                <img src={sobreIMG} alt="" />
                            </InnerItem>

                            <InnerItem>
                                <h1>Sobre a <span>Constru Service</span></h1>
                                <p>
                                    A empresa iniciou suas atividades na incorporação, construção e comercialização de habitações residenciais populares na Grande São Paulo em 2011, com a denominação de Ébano Construções e Empreendimentos Ltda.
                                    Em 2017, com a entrada de novos acionistas, a empresa muda sua sede e passa a se chamar constru service Ltda., com foco em incorporação e na prestação de serviços para incorporadoras e empresas. Política da Qualidade</p>

                                <p>A empresa iniciou suas atividades na incorporação, construção e comercialização de habitações residenciais populares na Grande São Paulo em 2011, com a denominação de Ébano Construções e Empreendimentos Ltda.</p>
                                <p>Em 2017, com a entrada de novos acionistas, a empresa muda sua sede e passa a se chamar constru service Ltda., com foco em incorporação e na prestação de serviços para incorporadoras e empresas.</p>
                            </InnerItem>

                        </ContainerItem>

                        <InnerItem>
                            <h1>Política da Qualidade</h1>
                            <p>A BauTechnik Construções Especiais se compromete a satisfazer aos seus clientes com respeito, sustentabilidade e responsabilidade no relacionamento com colaboradores, fornecedores, comunidade e meio ambiente, atendendo aos requisitos e garantindo a melhoria contínua do Sistema de Gestão da Qualidade.</p>
                        </InnerItem>

                        <ContainerItem>
                            <Row>

                                <Col sm={12} lg={4}>
                                    <ItemGrid>
                                        <i class="fas fa-clipboard-list"></i>
                                        <h3>Missão</h3>
                                        <p>Oferecer produtos e serviços no mais alto grau de qualidade e inovação, com respeito e responsabilidade no relacionamento com colaboradores, clientes, fornecedores e a comunidade, criando condições de crescimento e de perpetuidade.</p>
                                    </ItemGrid>

                                </Col>

                                <Col sm={12} lg={4}>
                                    <ItemGrid>
                                        <i class="far fa-eye"></i>
                                        <h3>Visão</h3>
                                        <p>Concretizar sonhos superando as expectativas. Acreditamos que os clientes analisam não somente o produto, mas também a forma que os serviços são oferecidos; Ser uma empresa que aposta em serviços direcionados; Ser uma empresa que aposta;</p>
                                    </ItemGrid>
                                </Col>

                                <Col sm={12} lg={4}>
                                    <ItemGrid>
                                        <i class="far fa-gem"></i>
                                        <h3>Valores</h3>
                                        <p>Ser transparente, ético, agir com respeito e cidadania; Acreditar no ser humano e na sua capacidade e desejo para evoluir; Desenvolver pessoas por meio da educação pelo e para o trabalho; Desenvolver pessoas por meio da educação pelo e para o trabalho;</p>
                                    </ItemGrid>
                                </Col>
                            </Row>

                        </ContainerItem>

                    </Layout>
                </Main>
            </ContainerAbout>
            <ContatoFooter />
        </>
    )
}
