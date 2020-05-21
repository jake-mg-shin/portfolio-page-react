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
                <a
                    href='https://github.com/jake-mg-shin'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    <Icon className='fab fa-github' />
                </a>
                <a
                    href='mailto:jake.mg.shin@gmail.com'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    <Icon className='far fa-envelope' />
                </a>
            </IconWrap>
            <Text>© 2020 Dev.JakeShin. All rights reserved</Text>
        </Wrapper>
    );
};

export default Footer;

const Wrapper = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: end;
    -ms-flex-pack: end;
    justify-content: flex-end;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    text-align: center;
    width: 100%;
    height: 200px;
    background-color: var(--clr-accent);
`;
const IconWrap = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
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
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    font-size: 1.5em;
    color: white;
    border: 2px solid white;
    border-radius: 50%;
    padding: 1rem;
    margin: 0 1rem;
    background-color: var(--clr-accent);
    -webkit-transition: background 0.3s linear;
    -o-transition: background 0.3s linear;
    transition: background 0.3s linear;

    :hover {
        color: var(--clr-accent);
        background-color: white;
        -webkit-transition: background 0.5s linear;
        -o-transition: background 0.5s linear;
        transition: background 0.5s linear;
    }
    @media only screen and (max-width: 768px) {
        padding: 0.5rem;
    }
`;
const Text = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    font-size: 14px;
    color: white;
    padding-bottom: 1rem;
`;
