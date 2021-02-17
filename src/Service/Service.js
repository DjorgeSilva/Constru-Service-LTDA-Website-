import React from 'react'
import BannerIMG from "../../assets/alvenaria.jpg"
import { Row, Col } from "react-bootstrap"
import { Layout } from "../../Components/Layout/Layout.js"
import {
    Banner,
    Container,
    ItemGrid
} from "./ServiceElements"
import { DataService } from "./ServiceData"

export const Service = () => {
    return (
        <>
            <Banner>
                <img src={BannerIMG} alt="Imagem trabalhadores Constru Service" />
                <h1>Atuação</h1>
                <p>Conheça nossos serviços</p>
            </Banner>
            <Container>
                <Layout>
                    <Row>
                        {DataService.map((item) => {
                            return (
                                <Col sm={12} lg={4}>
                                    <ItemGrid>
                                        <img src={item.img} alt="" />
                                        <h3>{item.service_name}</h3>
                                        <p>{item.desc}</p>
                                    </ItemGrid>
                                </Col>
                            )
                        })}
                    </Row>

                </Layout>
            </Container>
        </>
    )
}
