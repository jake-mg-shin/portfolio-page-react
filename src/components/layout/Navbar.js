import React from 'react';
import { Container } from 'semantic-ui-react';
import styled from 'styled-components';

import logo from '../images/logo.png';

const Navbar = () => {
    return (
        <NavBar>
            <Container>
                <LogoWrapper href='#'>
                    <LogoImg src={logo} />
                    <LogoName>Dev.JS</LogoName>
                </LogoWrapper>
                <Nav>
                    <NavItem href='#'>Home</NavItem>
                    <NavItem href='#about'>About</NavItem>
                    <NavItem href='#'>Project</NavItem>
                    <NavItem href='#'>HireMe</NavItem>
                </Nav>
            </Container>
        </NavBar>
    );
};
export default Navbar;

const NavBar = styled.div`
    position: relative;
    margin-top: 1em;
    width: 100%;
    height: 50px;
`;
const LogoWrapper = styled.a`
    display: flex;
    flex-direction: row;
    align-items: center;
    float: left;
    padding-top: 1em;
    padding-bottom: 1em;
`;
const LogoImg = styled.img`
    max-width: 35px;
    margin-right: 10px;

    @media (min-width: 800px) {
        max-width: 45px;
    }

    :hover {
        transition: transform 0.4s linear;
        transform: rotate(90deg);
    }

    transition: transform 0.4s linear;
    transform: rotate(0deg);
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
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    float: right;
    padding: 1rem;

    font-family: var(--ff-secondary);
    font-size: var(--fs-h3);
    font-weight: var(--fw-light);
`;
const NavItem = styled.a`
    color: black;
    padding: 0.5em 1em 0.5em 1em;
    border: 1px solid var(--clr-light);
    border-radius: 5px;

    :hover {
        color: black;
        border-color: var(--clr-warning);
        transition: border 0.5s ease-in-out;
    }
    border-color: var(--clr-light);
    transition: border 0.2s ease-in-out;
`;
