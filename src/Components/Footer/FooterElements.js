import styled from "styled-components"
import border_nav from "../../assets/traçado.png";

export const FooterContainer = styled.div`
    width: 100%;
    height: fit-content;
    background: ${props => props.theme.primary_color};
    color: ${props => props.theme.secundary_color};
    padding: 30px 10px;
    overflow: hidden;
       

`

export const FooterLogo = styled.div`
    width: 90%;
    margin: 45px auto;
    img{
        display: block;
        width: 250px;
        margin: 0 auto;
        @media (min-width: 500px){
            width: 50%;
        }
        
    }
`;

export const FooterGrid = styled.div`
    width: 100%;
    height: fit-content;
    h1{
        font-size: 1.8rem;
        margin: 25px auto;
        color: ${props => props.theme.ternary_color}
    }
    h3{
        width: 100%;
        font-size:1.2rem;
        text-align: center;
    }
    i{
        margin-right: 10px;
    }
`


export const FooterGridItem = styled.div`
    height:fit-content;
    margin-top: 10px;
    background: black;
    border-radius:20px;
    padding-left: 40px;

    @media (max-width: 750px){
        padding-left: 0px;
        }
`


export const FooterGridItemRedesSociais = styled.div`
    height:fit-content;
    margin-top: 10px;
    background: black;
    border-radius:20px;

    h2{
        font-size: 1.8rem;
        margin: 25px auto;
        color: ${props => props.theme.ternary_color};
        text-align: center;

    }

    

    nav{
        margin-top: 40px;
        ul{
            width: 320px;
            display: flex;
            align-items: center;
            justify-content: space-around;
            margin: 0 auto;
            
            li{
                width: fit-content;
                display: inline-block;
                text-align: center;
                i{
                    display: block;
                    font-size: 2rem;
                    margin: 0;
                    color: ${props=> props.theme.ternary_color};
                    &:hover{
                        color: ${props=> props.theme.secundary_color};
                    }
                }
            }
        }
    }
`;