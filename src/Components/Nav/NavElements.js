import styled from "styled-components";
import border_nav from "../../assets/traçado.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

export const NavMenu = styled.nav`
    width: 100%;
    height: 80px;
    background-color: ${props => props.theme.primary_color};
    border-bottom: .4rem solid transparent;
    border-image: url(${border_nav}) 30 round;
    z-index:10;
`;

export const NavWrapper = styled.div`
    width: 100%;
    height: 80px;

    @media (min-width: 950px){
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    @media (min-width: 1300px){
            width:1300px;
            margin:0 auto;
    }
    `

export const NavIconWrap = styled.div`
    width: 20%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    float: left;
    position: relative;
    @media (min-width: 950px){
            width:fit-content;
            margin:0 20px;
    }
`;

export const IconMenuLateral = styled(GiHamburgerMenu)`
    cursor: pointer;
    color: ${props => props.theme.secundary_color};
    font-size: 3rem;
    @media (min-width: 950px){
         display: none;
    }
`;

export const NavLogoWrap = styled.div`
    width: 80%;
    float: right;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    img{
        width: 230px;
    }

    @media (min-width: 950px){
        width: 20%;
        overflow: hidden;
        img{
            width: 200px;
        }
    }
`
export const SideBar = styled.div`
    width: 300px;
    height: 100vh;
    background-color: ${props => props.theme.ternary_color};
    position: absolute;
    z-index:1000;
    left: ${({ isOpen }) => (isOpen ? '0' : '-1000px')};
    transition: .8s all;
    @media (min-width: 950px){
            display: none;
        }
`
export const IconCloseSideBar = styled(IoClose)`
    cursor: pointer;
    color: ${props => props.theme.secundary_color};
    font-size: 4rem;
    float:right;
    margin: 10px;
`

export const NavSideBar = styled.nav`
    width: 100%;
    height: fit-content;
    
`;

export const SideBarUl = styled.ul`
    width: 100%;
    height: fit-content;
    padding: 80px 25px;
    list-style: none;

`

export const SideBarLi = styled.li`
    width: 100%;
`

export const LinkSideBar = styled(Link)`
    display: block;
    width: 100%;
    height: 60px;
    font-size: 1.7rem;
    color: ${props => props.theme.font_color};
    font-weight: 600;
    text-decoration: none;
    outline: none;
    &:hover{
        color:  ${props => props.theme.secundary_color};
        outline: none;
        text-decoration:none;
    }
`
export const NavMenuDesktop = styled.div`
    width: 80%;
    height: 90px;
    display: flex;
    justify-content:center;
    align-items: center;
    @media (max-width: 950px){
        display: none;
    }

`;


export const MenuUl = styled.ul`
    width: fit-content;
    height: fit-content;
    list-style: none;
`

export const MenuLi = styled.li`
    width: 100%;
    margin-top: 10px;
`

export const LinkMenu = styled(Link)`
display: inline;
width: 100%;
height: 60px;
font-size: 1.3rem;
color: #fff;;
font-weight: 600;
text-decoration: none;
margin-right: 40px;
outline: none;
text-transform: uppercase;
&:hover{
    color:  ${props => props.theme.ternary_color};
    border-bottom: 4px solid #F5C32E;
    outline: none;
    text-decoration:none;
    padding-bottom: 6px;
}
`