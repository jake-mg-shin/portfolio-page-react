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
                <LogoWrapper as='a' href='#' onClick={refreshPage}>
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

// Style
const Flex = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
`;
const NavBar = styled(Flex)`
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    width: 100%;
    height: auto;
    margin-top: 1em;
    margin: 0 auto;

    @media only screen and (max-width: 480px) {
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
    }
`;
const LogoWrapper = styled(Flex)`
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    text-align: left;
    width: 100%;
    padding: 1em 0;
`;
const LogoImg = styled.img`
    max-width: 25px;
    margin-right: 5px;
    -webkit-transition: -webkit-transform 0.4s linear;
    transition: -webkit-transform 0.4s linear;
    -o-transition: transform 0.4s linear;
    transition: transform 0.4s linear;
    transition: transform 0.4s linear, -webkit-transform 0.4s linear;
    -webkit-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    transform: rotate(0deg);

    :hover {
        -webkit-transition: -webkit-transform 0.4s linear;
        transition: -webkit-transform 0.4s linear;
        -o-transition: transform 0.4s linear;
        transition: transform 0.4s linear;
        transition: transform 0.4s linear, -webkit-transform 0.4s linear;
        -webkit-transform: rotate(90deg);
        -ms-transform: rotate(90deg);
        transform: rotate(90deg);
    }

    @media only screen and (min-width: 800px) {
        max-width: 35px;
    }
`;
const LogoName = styled.p`
    font-family: 'Monoton', cursive;
    font-size: var(--fs-h3);
    // font-weight: var(--fw-bold);
    color: var(--clr-dark);
`;
const Nav = styled(Flex)`
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    list-style: none;
    height: 100%;
    font-family: var(--ff-secondary);
    font-size: var(--fs-h3);
    font-weight: var(--fw-light);
`;
const NavItem = styled.div`
    color: black;
    padding: 0.8rem;
    border: 1px solid var(--clr-light);
    border-radius: 5px;
    border-color: var(--clr-light);
    -webkit-transition: border 0.2s ease-in-out;
    -o-transition: border 0.2s ease-in-out;
    transition: border 0.2s ease-in-out;

    :hover {
        cursor: pointer;
        color: black;
        background-color: #fdcb6e;
        border-color: var(--clr-warning);
        -webkit-transition: border 0.5s ease-in-out;
        -o-transition: border 0.5s ease-in-out;
        transition: border 0.5s ease-in-out;
    }
`;
