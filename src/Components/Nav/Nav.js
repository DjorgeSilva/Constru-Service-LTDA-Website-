import React from 'react'
import { Link } from "react-router-dom"
import {
    NavMenu,
    NavWrapper,
    NavIconWrap,
    NavLogoWrap,
    IconMenuLateral,
    SideBar,
    IconCloseSideBar,
    NavSideBar,
    SideBarUl,
    SideBarLi,
    LinkSideBar,
    NavMenuDesktop,
    MenuUl,
    MenuLi,
    LinkMenu
} from "./NavElements.js"
import LogoIMG from "../../assets/logo.png";

export const Nav = ({ isOpen, toggleCloseIcon, sizeWindow }) => {

    return (
        <>
            <NavMenu id="menu">
                <NavWrapper>
                    <NavIconWrap>
                        <IconMenuLateral onClick={toggleCloseIcon} />
                    </NavIconWrap>

                    <NavLogoWrap>
                        <Link to="/">
                            <img src={LogoIMG} alt="Logomarca Constru Service" />
                        </Link>

                    </NavLogoWrap>

                    <SideBar isOpen={isOpen}>
                        <IconCloseSideBar onClick={toggleCloseIcon} />

                        <NavSideBar>
                            <SideBarUl>
                                <SideBarLi>
                                    <LinkSideBar to="/" onClick={toggleCloseIcon}>Home</LinkSideBar>
                                    <LinkSideBar to="/about" onClick={toggleCloseIcon}>Quem somos</LinkSideBar>
                                    <LinkSideBar to="/servicos" onClick={toggleCloseIcon}>Serviços</LinkSideBar>
                                    <LinkSideBar to="/portfolio" onClick={toggleCloseIcon}>Portfólio</LinkSideBar>
                                    <LinkSideBar to="/contato" onClick={toggleCloseIcon}>Contato</LinkSideBar>
                                </SideBarLi>
                            </SideBarUl>
                        </NavSideBar>
                    </SideBar>


                    <NavMenuDesktop id="menu">
                        <MenuUl>
                            <MenuLi>
                                <LinkMenu to="/" onClick={toggleCloseIcon}>Home</LinkMenu>
                                <LinkMenu to="/about" onClick={toggleCloseIcon}>Quem somos</LinkMenu>
                                <LinkMenu to="/servicos" onClick={toggleCloseIcon}>Serviços</LinkMenu>
                                <LinkMenu to="/portfolio" onClick={toggleCloseIcon}>Portfólio</LinkMenu>
                                <LinkMenu to="/contato" onClick={toggleCloseIcon}>Contato</LinkMenu>
                            </MenuLi>
                        </MenuUl>
                    </NavMenuDesktop>
                </NavWrapper>
            </NavMenu>
        </>
    )
}
