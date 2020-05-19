import React, { Fragment } from 'react';
import { Container, Divider } from 'semantic-ui-react';
import styled from 'styled-components';

const HireMe = () => {
    return (
        <Fragment>
            <Divider />
            <Wrapper>
                <Title>Hire Me</Title>
                <SubTitle>
                    Interested in collaborating or hiring me?
                    <br />I am ready to work with you!
                </SubTitle>
            </Wrapper>

            <Wrapper2>
                <Container>
                    <ContactMe>
                        <Header>Start a project together</Header>
                        <Header>Start a project together</Header>
                        <Header>Start a project together</Header>
                    </ContactMe>
                </Container>
            </Wrapper2>
        </Fragment>
    );
};

export default HireMe;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 100%;
    height: 275px;
`;
const Title = styled.p`
    display: flex;
    margin-left: auto;
    margin-right: auto;
    padding-top: 2em;

    font-family: var(--ff-third);
    font-size: var(--fs-h3);
    font-weight: var(--fw-bold);
    color: black;
`;
const SubTitle = styled.p`
    display: flex;
    margin-left: auto;
    margin-right: auto;

    font-family: var(--ff-forth);
    font-size: var(--fs-body);
    font-weight: lighter;
    color: var(--clr-dark);
`;

const Wrapper2 = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    width: 100%;
    height: 100px;
    margin-left: auto;
    margin-right: auto;
    background-color: var(--clr-accent);
`;
const ContactMe = styled.div`
    margin-top: -4rem;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    text-align: center;
    max-width: 1200px;
    height: auto;
    margin-left: auto;
    margin-right: auto;
    padding: 2em 2em;
    border-radius: 10px;
    background-color: var(--clr-dark);

    @media only screen and (max-width: 768px) {
        flex-direction: column;
        flex-grow: 1;
        max-width: 600px;
    }
`;
const Header = styled.p`
    font-family: var(--ff-secondary);
    font-size: var(--fs-body);
    font-weight: var(--fw-bold);
    color: var(--clr-light);
    margin-bottom: 0 !important;
    // padding: 4em 4em;
`;
