import React from 'react'
import { Layout } from "../../Components/Layout/Layout.js"
import { Row, Col } from "react-bootstrap";
import {
    ContatoContainer,
    ContatoItemTxt,
} from "./ContatoElements.js"
import { Link } from "react-router-dom";

export const ContatoFooter = ({ sizeWindow }) => {
    return (
        <>
            <ContatoContainer>
                <Layout>
                    <ContatoItemTxt>
                        <h1>Nos mande uma mensagem falando sobre o seu projeto!</h1>
                    </ContatoItemTxt>

                    <Link to="/contato" style={{textDecoration: 'none'}}>
                        <button>Entre em contato</button>
                    </Link>
                    
                </Layout>

            </ContatoContainer>
        </>
    )
}