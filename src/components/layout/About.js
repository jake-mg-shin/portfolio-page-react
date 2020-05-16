import React, { Fragment } from 'react';
import { Container } from 'semantic-ui-react';
import styled from 'styled-components';

const About = () => {
    return (
        <Fragment>
            <BackGround>
                <Container>
                    <TitleText id='about'>Glad to meet you!</TitleText>
                    <SubText></SubText>
                </Container>
            </BackGround>
        </Fragment>
    );
};

export default About;

const BackGround = styled.div`
    width: 100%;
    height: 500px;
    background-color: var(--clr-accent);
`;
const TitleText = styled.p`
    font-family: var(--ff-third);
    font-size: var(--fs-h3);
    // font-weight: var(--fw-medium);
    color: var(--clr-light);
    padding-top: 100px;
`;
const SubText = styled.p``;
