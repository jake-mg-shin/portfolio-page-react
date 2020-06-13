import React from 'react';
import styled from 'styled-components';
import { Container } from 'semantic-ui-react';

const Cover = () => {
    return (
        <CoverWrapper>
            <Container>
                <TitleText>
                    Hi, my name is Jake. <br /> I am a Web Developer.
                </TitleText>
                <SubText>
                    Passionate, Self-Motivated, and Energetic Developer in the
                    world.
                </SubText>
            </Container>
            <br />
        </CoverWrapper>
    );
};
export default Cover;

const CoverWrapper = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    text-align: center;
    width: 100%;
    height: 300px;
    margin-left: auto;
    margin-right: auto;
    background-color: white;

    @media only screen and (max-width: 768px) {
        height: 250px;
    }
`;
const TitleText = styled.p`
    font-family: var(--ff-secondary);
    font-size: var(--fs-h2);
    font-weight: var(--fw-bold);
    margin-bottom: 20px;
    padding-top: 100px;

    @media only screen and (max-width: 1024px) {
        padding-top: 50px;
    }
`;
const SubText = styled.p`
    font-family: var(--ff-primary);
    font-size: var(--fs-body);
    font-weight: lighter;
    color: var(--clr-dark);
    opacity: 0;
    -webkit-animation: 2s fadein 2s forwards;
    animation: 2s fadein 2s forwards;

    @keyframes fadein {
        100% {
            opacity: 1;
        }
    }
`;
