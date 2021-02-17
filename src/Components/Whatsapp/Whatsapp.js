import React from 'react'
import { Link } from "react-router-dom"
import {
    ContainerWhatsapp,
    BoxFaleConosco,
    NavAtendimento,
    LinkBox,
    ItemContato
} from "./WhatsappElements.js"

export const AtendimentoOnline = ({isOpenAtendOnline, setIsOpenAtendOnline}) => {
    return (
        <>
            <ContainerWhatsapp onClick={()=>setIsOpenAtendOnline(!isOpenAtendOnline)}>
                <BoxFaleConosco>
                    <i class="fab fa-whatsapp"></i>
                    <p>Fale conosco pelo Whatsapp</p>
                </BoxFaleConosco>
            </ContainerWhatsapp>

            <NavAtendimento isOpenAtendOnline={isOpenAtendOnline}>
                <h4>Atendimento Online</h4>
                <ul>
                    <li>
                        <LinkBox style={{ textDecoration: 'none' }} path="/atendimento-oline">
                            <i class="fab fa-whatsapp"></i>
                            <ItemContato>
                                <h6>Orçamentos</h6>
                                <p>Paula</p>
                            </ItemContato>
                        </LinkBox>
                    </li>

                    <li>
                        <LinkBox style={{ textDecoration: 'none' }} path="/atendimento-oline">
                            <i class="fab fa-whatsapp"></i>
                            <ItemContato>
                                <h6>Departamento Comercial</h6>
                                <p>Paula</p>
                            </ItemContato>
                        </LinkBox>
                    </li>

                    <li style={{borderBottom:`none`}}>
                        <LinkBox style={{ textDecoration: 'none' }} path="/atendimento-oline">
                            <i class="fab fa-whatsapp"></i>
                            <ItemContato>
                                <h6>Departamento de Obras</h6>
                                <p>Paula</p>
                            </ItemContato>
                        </LinkBox>
                    </li>
                </ul>
            </NavAtendimento>
        </>
    )
}
