import React from 'react';
import { Container } from 'semantic-ui-react';
import styled from 'styled-components';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import logo from '../images/logo.png';

const Navbar = () => {
    const refreshPage = () => {
        window.location.reload();
    };

    return (
        <Container>
            <NavBar>
                <LogoWrapper href='#' onClick={refreshPage}>
                    <LogoImg src={logo} />
                    <LogoName>Dev.JS</LogoName>
                </LogoWrapper>
                <Nav>
                    <NavItem onClick={refreshPage}>Home</NavItem>
                    <AnchorLink href='#about'>
                        <NavItem>About</NavItem>
                    </AnchorLink>
                    <AnchorLink href='#project'>
                        <NavItem>Projects</NavItem>
                    </AnchorLink>
                    <AnchorLink href='#contact'>
                        <NavItem>Contact</NavItem>
                    </AnchorLink>
                </Nav>
            </NavBar>
        </Container>
    );
};
export default Navbar;

const NavBar = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    // text-align: center;
    // position: relative;
    margin-top: 1em;
    width: 100%;
    height: auto;
    margin: 0 auto;

    @media only screen and (max-width: 480px) {
        flex-direction: column;
        // text-align: left;
    }
`;
const LogoWrapper = styled.a`
    display: flex;
    // flex-direction: row;
    align-items: center;
    text-align: left;
    width: 100%;
    // float: left;
    padding-top: 1em;
    padding-bottom: 1em;
`;
const LogoImg = styled.img`
    max-width: 35px;
    margin-right: 10px;
    transition: transform 0.4s linear;
    transform: rotate(0deg);

    :hover {
        transition: transform 0.4s linear;
        transform: rotate(90deg);
    }

    @media only screen and (min-width: 800px) {
        max-width: 45px;
    }
`;
const LogoName = styled.p`
    font-size: var(--fs-h3);
    font-weight: var(--fw-bold);
    color: var(--clr-dark);
`;
const Nav = styled.div`
    display: flex;
    list-style: none;
    height: 100%;
    // flex-direction: row;
    // justify-content: space-evenly;
    align-items: center;
    // float: right;

    font-family: var(--ff-secondary);
    font-size: var(--fs-h3);
    font-weight: var(--fw-light);

    // @media only screen and (max-width: 414px) {
    //     flex-direction: column;

    // }
`;
const NavItem = styled.div`
    color: black;
    padding: 0.5rem;
    border: 1px solid var(--clr-light);
    border-radius: 5px;
    border-color: var(--clr-light);
    transition: border 0.2s ease-in-out;

    :hover {
        cursor: pointer;
        color: black;
        background-color: #fdcb6e;
        border-color: var(--clr-warning);
        transition: border 0.5s ease-in-out;
    }
`;
