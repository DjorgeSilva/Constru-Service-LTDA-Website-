import styled from "styled-components"
import {Link} from "react-router-dom"

export const ContainerWhatsapp = styled.div`
    cursor: pointer;
    width: fit-content;
    height: fit-content;
    position: fixed;
    bottom: 40px;
    right: 20px;
    z-index: 100000;
`

export const BoxFaleConosco = styled.div`
    width: 270px;
    height: 40px;
    background: #075E54;
    color: ${props=> props.theme.secundary_color};    
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 80px;
    i{
        width: 20%;
        font-size: 1.8rem;
        text-align: center;
    }
    p{
        width: 80%;
        text-align: left;
        margin-top: 14px;
        font-size: .9rem;
    }
`

export const NavAtendimento = styled.nav`
    width: 290px;
    height: it-content;
    background: ${props=>props.theme.secundary_color};
    border-radius: 20px;
    position: fixed;
    bottom: 90px;
    right: ${({ isOpenAtendOnline }) => (isOpenAtendOnline ? '20px' : '-400px')};
    z-index: 100000;
    transition: .5s;
    box-shadow: 5px 3px #cfcfcf;
    h4{
        width: 100%fit-content;
        height: 50px;
        background: #075E54;
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;
        color: ${props=>props.theme.secundary_color};
        padding-top: 15px;
        text-align: center;
        font-size: 1.2rem;
    }
    ul{
        width: 100%;
        list-style: none;
        li{
            padding-top: 12px;
            width: inherit;
            border-bottom: 1px solid #CDCDCD;
            i{
                height: 50px;
                display: flex;
                justify-content: center;
                align-items: center;
                width: 20%;
                font-size: 2.2rem;
                color: #075E54;
            }
        }
    }
`

export const ItemContato = styled.div`
    width: 80%;
    height: fit-content;
    display: flex;
    flex-direction: column;
`

export const LinkBox = styled(Link)`
    width: 100%;
    cursor: pointer;
    height: fit-content;
    display: flex;
    h6{
        font-size: .9rem;
        text-transform: uppercase;
        color: #333;
    }
    p{
        font-size: .9rem;
        color: red;
        font-weight: bold;
    }
`
