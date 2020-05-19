import React from 'react';
import styled from 'styled-components';

const Footer = () => {
    return (
        <Wrapper>
            <IconWrap>
                <a
                    href='https://www.linkedin.com/in/developer-js/'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    <Icon className='fab fa-linkedin-in' />
                </a>
                <Icon className='fab fa-github'></Icon>
                <Icon className='far fa-envelope'></Icon>
            </IconWrap>
            <Text>© 2020 Dev.JakeShin. All rights reserved</Text>
        </Wrapper>
    );
};

export default Footer;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    text-align: center;
    width: 100%;
    height: 200px;
    background-color: var(--clr-accent);
`;
const IconWrap = styled.div`
    display: flex;
    margin: 0 auto;
    padding: 1rem;
    padding-top: 7rem;

    @media only screen and (max-width: 768px) {
        padding: 0.5rem;
        padding-top: 7rem;
    }
`;
const Icon = styled.i`
    display: flex;
    font-size: 1.5em;
    color: white;
    border: 2px solid white;
    border-radius: 50%;
    padding: 1rem;
    margin: 0 1rem;
    background-color: var(--clr-accent);
    transition: background 0.3s linear;

    :hover {
        color: var(--clr-accent);
        background-color: white;
        transition: background 0.5s linear;
    }
    @media only screen and (max-width: 768px) {
        padding: 0.5rem;
    }
`;
const Text = styled.a`
    display: flex;
    font-size: 14px;
    color: white;
    padding-bottom: 1rem;
`;
