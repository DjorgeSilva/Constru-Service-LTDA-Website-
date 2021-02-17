import styled from "styled-components"
import contatoIMG from "../../assets/contato.jpg"

export const ContatoContainer = styled.div`
    width: 100%;
    height: 500px;

    padding: 30px 10px;
    overflow: hidden;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #000;
    position: relative;
    color: ${props => props.theme.secundary_color};
    z-index: 100;
    &::after{
        content: "";
        background-image: url(${contatoIMG});
        opacity: 0.6;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        position: absolute;
        z-index: -1; 
        background-size: cover;
        
    @media (min-width: 750px){
        background-position: 50% 100%;
    }
    }
    
    button{
        display: block;
            padding: 12px 30px;
            border-radius: 5px;
            border: none;
            font-size: clamp(1rem, 2.5vw, 1.1rem);
            font-weight: 500;
            outline:none;
            margin: 0 auto;
            margin-top: 40px;
            text-transform: uppercase;
            background-color:${props => props.theme.secundary_color};
            color:${props => props.theme.primary_color};
            &:hover{
                background: ${props => props.theme.ternary_color};
                outline:none;
            }
        
            @media (min-width: 500px){
            width: 70%;
            }
            @media (min-width: 950px){
            width: 34%;
            }
    }

`

export const ContatoItemTxt = styled.div`
    width: 100%;
    h1{
        text-align: center;
        margin: 15px auto;
        z-index: 200;
        @media (min-width: 950px){
            text-align: center;
        }
    }
`;

