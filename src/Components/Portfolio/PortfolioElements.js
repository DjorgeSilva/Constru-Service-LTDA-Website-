import styled from "styled-components"
import { Link } from "react-router-dom"

export const PortfolioContainer = styled.div`
    width: 100%;
    height: fit-content;
    background: ${props => props.theme.secundary_color};
    color: ${props => props.theme.primarycolor};
    padding: 30px 10px;
    overflow: hidden;
    
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
            background-color:${props => props.theme.ternary_color};
            color:${props => props.theme.primary_color};
            &:hover{
                background: ${props => props.theme.primary_color};
                color: ${props => props.theme.ternary_color};
                outline:none;
            }
        
            @media (min-width: 500px){
            width: 70%;
            }

            @media (min-width: 1100px){
            width: 35%;
            }
    }
         
    @media (min-width: 1000px){
            height: 100vh;
    }

`

export const PortfolioItemTxt = styled.div`
    width: 100%;
    h1{
        text-align: center;
        margin: 15px auto;
        @media (min-width: 950px){
            text-align: center;
            margin-top: 60px;
        }
    }
`;

export const PortfolioGrid = styled.div`
    width: 100%;
    height: fit-content;
`

export const PortfolioGridItem = styled.div`
    height:300px;
    margin-top: 20px;
    background: black;
    border-radius:20px;
    overflow: hidden;
    &:hover > h1{
        cursor: pointer;
        font-size: 1.8rem;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        color: ${props => props.theme.ternary_color};
        text-align: center;
        transition: display 1.2s;
    }
    &:hover > img{
        transform: scale(1.2);
            opacity:0;
            transition: all 1.2s;
    }
    img{
        cursor: pointer;
        width: 100%;
        height:100%;
        border-radius:20px;
        object-fit: cover;
    }
`;

export const PortfolioGridItemHide = styled.div`
    height:300px;
    margin-top: 20px;
    background: black;
    border-radius:20px;
    overflow: hidden;
    &:hover > h1{
        cursor: pointer;
        font-size: 1.8rem;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        color: ${props => props.theme.ternary_color};
        text-align: center;
        transition: display 1.2s;
    }
    &:hover > img{
        transform: scale(1.2);
            opacity:.1;
            transition: all 1.2s;
    }
    img{
        cursor: pointer;
        width: 100%;
        height:100%;
        border-radius:20px;
        object-fit: cover;
    }
`;