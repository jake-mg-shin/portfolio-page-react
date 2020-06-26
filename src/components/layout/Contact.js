import React, { Fragment } from 'react';
import { Container, Divider } from 'semantic-ui-react';
import styled from 'styled-components';

import Pdf from '../documents/JakeShin_Resume_Portfolio.pdf';

const Contact = () => {
    return (
        <Fragment>
            <Divider />
            <Wrapper id='contact'>
                <Title>Let's Work Together</Title>
                <SubTitle>I am ready to work with you!</SubTitle>
            </Wrapper>

            <Wrapper2>
                <Container>
                    <ContactMe>
                        <Button
                            target='_blank'
                            href='mailto:jake.mg.shin@gmail.com'
                        >
                            EmailMe
                        </Button>
                        <Header>
                            <Text>
                                <i className='far fa-arrow-alt-circle-left'></i>
                                &nbsp; Interested in collaborating or hiring me?
                                &nbsp;&nbsp;&nbsp;
                                <i className='far fa-arrow-alt-circle-right'></i>
                            </Text>
                        </Header>
                        <Button href={Pdf} target='_blank'>
                            Resume
                        </Button>
                    </ContactMe>
                </Container>
            </Wrapper2>
        </Fragment>
    );
};

export default Contact;

const Wrapper = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    text-align: center;
    width: 100%;
    height: 250px;
`;
const Title = styled.p`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    margin-left: auto;
    margin-right: auto;
    padding-top: 2em;
    margin-bottom: 5px !important;
    font-family: var(--ff-secondary);
    font-size: var(--fs-h3);
    font-weight: var(--fw-bold);
    color: black;
`;
const SubTitle = styled.p`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    margin-left: auto;
    margin-right: auto;
    font-family: var(--ff-primary);
    font-size: var(--fs-body);
    font-weight: lighter;
    color: var(--clr-dark);
`;

const Wrapper2 = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
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
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -ms-flex-pack: distribute;
    justify-content: space-around;
    -webkit-box-align: center;
    -ms-flex-align: center;
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
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-box-flex: 1;
        -ms-flex-positive: 1;
        flex-grow: 1;
        margin-top: -6rem;
    }
    @media only screen and (max-width: 414px) {
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-box-flex: 1;
        -ms-flex-positive: 1;
        flex-grow: 1;
        margin-top: -9rem;
    }
`;
const Header = styled.div`
    font-family: var(--ff-secondary);
    font-size: var(--fs-body);
    font-weight: lighter;
    color: white;
    margin-bottom: 0 !important;
    padding: 2rem 1.5rem;
`;
const Text = styled.div`
    padding: 5px;
    line-height: 30px;
`;
const Button = styled.a`
    border: 2px solid var(--clr-accent);
    border-radius: 30px;
    background-color: var(--clr-dark);
    padding: 1rem 1rem;
    font-family: var(--ff-secondary);
    font-size: var(--fs-body);
    font-weight: lighter;
    color: white;
    -webkit-transition: background 0.3s linear;
    -o-transition: background 0.3s linear;
    transition: background 0.3s linear;

    :hover {
        color: white;
        background-color: var(--clr-accent);
        cursor: pointer;
        -webkit-transition: background 0.5s linear;
        -o-transition: background 0.5s linear;
        transition: background 0.5s linear;
    }
`;
