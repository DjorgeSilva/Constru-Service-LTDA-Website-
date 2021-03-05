import React from 'react'
import portfolioIMG from "../../assets/portfolio.jpeg"
import { Layout } from "../../Components/Layout/Layout"
import { Row, Col } from "react-bootstrap"
import {
    Container,
    Banner,
    ContainerFormulario,
    Form,
    GridContato
} from "./ContatoElements.js"

export const Contato = () => {
    return (
        <>
            <Banner>
                <img src={portfolioIMG} alt="Imagem trabalhadores Constru Service" />
                <h1>Contato</h1>
                <p>Para maiores informações, entre em contato conosco!</p>
            </Banner>
            <Container>
                <Layout>
                    <ContainerFormulario>

                        <Form>
                            <h1>Contato</h1>
                            <h2>Teste</h2>

                            <label htmlFor="name">Nome</label>
                            <input type="text" id="name" />

                            <label htmlFor="email">E-mail</label>
                            <input type="email" id="email" />

                            <label htmlFor="telefone">Telefone</label>
                            <input type="tel" name="telefone" id="telefone" />

                            <label htmlFor="assunto-contato">Assunto</label>
                            <select name="assunto-contato" id="assunto-contato">
                                <option value="Dúvidas">Dúvidas</option>
                                <option value="Orçamento">Orçamento</option>
                                <option value="Parceria">Parceria</option>
                            </select>

                            <label htmlFor="mensagem">Mensagem</label>
                            <textarea name="mensagem" id="mensagem" cols="30" rows="10"></textarea>

                            <button type="submit">Enviar</button>

                        </Form>

                        <Row>
                            <Col sm={12} md={6}>
                                <GridContato>
                                    <i class="far fa-envelope"></i>
                                    <h1>Departamento Comercial</h1>
                                    <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=renata@construservice.com.br">renata@construservice.com.br</a>
                                </GridContato>
                            </Col>

                            <Col sm={12} md={6}>
                                <GridContato>
                                    <i class="far fa-envelope"></i>
                                    <h1>Departamento de Orçamentos</h1>
                                    <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=flanelon18@email.com">renata@construservice.com.br</a>
                                </GridContato>
                            </Col>

                            <Col sm={12} md={6}>
                                <GridContato>
                                    <i class="far fa-envelope"></i>
                                    <h1>Departamento de Obras</h1>
                                    <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=flanelon18@email.com">renata@construservice.com.br</a>
                                </GridContato>
                            </Col>

                            <Col sm={12} md={6}>
                                <GridContato>
                                    <i class="fas fa-phone"></i>
                                    <h1>Telefone</h1>
                                    <a href="tel:99981444763">(99) 98144-4763</a>
                                    <a href="tel:99995323265">(99) 99532-3265</a>
                                </GridContato>
                            </Col>

                            <Col sm={12} md={6}>
                                <GridContato>
                                    <i class="fas fa-map-marker-alt"></i>
                                    <h1>Endereço</h1>
                                    <p>Travessa Teresina, 2404</p>
                                    <p>Codó Novo, Codó</p>
                                </GridContato>
                            </Col>
                        </Row>
                    </ContainerFormulario>

                
                </Layout>


            </Container>
        
        </>
    )
}
