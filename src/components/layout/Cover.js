import React from 'react';
import styled from 'styled-components';

const Cover = () => {
    return (
        <CoverWrapper>
            <TitleText>
                Hi, my name is Jake. <br /> I am a Web Developer.
            </TitleText>
            <SubText>
                Passionate, Self-Motivated, and Energized Developer in the
                world.
            </SubText>
        </CoverWrapper>
    );
};
export default Cover;

const CoverWrapper = styled.div`
    display: flex;
    flex-direction: column;

    width: 100%;
    height: 300px;
    margin-left: auto;
    margin-right: auto;

    text-align: center;
    background-color: white;
`;
const TitleText = styled.p`
    font-family: var(--ff-secondary);
    font-size: var(--fs-h2);
    font-weight: var(--fw-bold);
    margin-bottom: 20px;
    padding-top: 100px;
`;
const SubText = styled.p`
    font-family: var(--ff-primary);
    font-size: var(--fs-h3);
    font-weight: var(--fw-light);
    color: var(--clr-dark);

    animation: 2s fadein 2s forwards;
    opacity: 0;

    @keyframes fadein {
        100% {
            opacity: 1;
        }
    }
`;
