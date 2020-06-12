import React, { Fragment } from 'react';
import styled from 'styled-components';
import { Container, Modal, Label, Image, Icon } from 'semantic-ui-react';

import p5 from '../images/project5_1.png';
import p5_2 from '../images/project5_2.png';

const Project5 = () => {
    return (
        <Card>
            <Img src={p5} />
            <Overlay>
                <Content>
                    <CardTitle>Apollo Movie DB</CardTitle>
                    <CardDesc>
                        <div>
                            <Icon name='arrow circle right' />
                            &nbsp;Provides Details and News of Movies, and
                            Trailers.
                        </div>
                        <div>
                            <Icon name='react' />
                            &nbsp; Built with React.js and GraphQL
                        </div>
                    </CardDesc>
                    <Fragment>
                        <Modal trigger={<Button>Learn More</Button>} closeIcon>
                            <Modal.Header>Apollo Movie DB</Modal.Header>
                            <Modal.Content>
                                <Modal.Description>
                                    <div
                                        style={{
                                            fontSize: 'var(--fs-small)',
                                        }}
                                    >
                                        <div>
                                            <Icon name='check square' />
                                            &nbsp; Client-Side is built with
                                            React.js and Apollo-Client.
                                        </div>
                                        <div>
                                            <Icon name='check square' />
                                            &nbsp; Server-Side is built with
                                            Apollo-Server and GraphQL.
                                        </div>
                                        <br />
                                        <div>
                                            <Icon name='laptop' />
                                            &nbsp;&nbsp;
                                            <a
                                                href='https://apollo-movie-db.netlify.app/#/'
                                                target='_blank'
                                                rel='noopener noreferrer'
                                            >
                                                See Project
                                            </a>
                                            &nbsp; | <Icon name='github' />{' '}
                                            <a
                                                href='https://github.com/jake-mg-shin/apollo-movie-db-app-react'
                                                target='_blank'
                                                rel='noopener noreferrer'
                                            >
                                                See Repo
                                            </a>
                                        </div>
                                    </div>
                                    <br />
                                    <LabelWrapper>
                                        <Label color='teal'>React.js</Label>
                                        <Label color='black'>Apollo</Label>
                                        <Label color='pink'>GraphQL</Label>
                                        <Label color='teal'>Semantic UI</Label>
                                        <Label color='yellow'>
                                            styled-components
                                        </Label>
                                        <Label color='brown'>Github</Label>
                                        <Label color='teal'>Netlify</Label>
                                        <Label color='black'>Vercel</Label>
                                    </LabelWrapper>
                                </Modal.Description>
                            </Modal.Content>
                            <Image src={p5_2} fluid />
                        </Modal>
                        <Button
                            href='https://apollo-movie-db.netlify.app/#/'
                            target='_blank'
                        >
                            See Project
                        </Button>
                    </Fragment>
                </Content>
            </Overlay>
        </Card>
    );
};

export default Project5;

// Style
const Wrapper = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    text-align: center;
    margin: 5em auto;

    @media only screen and (max-width: 768px) {
        margin-top: 3em;
        margin-bottom: 3em;
    }
`;
const Title = styled.p`
    font-family: var(--ff-secondary);
    font-size: var(--fs-h3);
    font-weight: bold;
    margin-bottom: 5px !important;
`;
const SubTitle = styled.p`
    font-family: var(--ff-primary);
    font-size: var(--fs-body);
    font-weight: lighter;
    color: var(--clr-dark);
`;

const Cards = styled.div`
    margin-top: 5em;
    display: -ms-grid;
    display: grid;
    -ms-grid-columns: 1fr 1.5rem 1fr 1.5rem 1fr;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
    grid-auto-flow: row dense;
    max-width: 1400px;
    margin-left: auto;
    margin-right: auto;

    @media only screen and (max-width: 1024px) {
        -ms-grid-columns: (1fr) [2];
        grid-template-columns: repeat(2, 1fr);
        max-width: 1000px;
        margin-top: 3em;
    }
    @media only screen and (max-width: 768px) {
        -ms-grid-columns: (1fr) [1];
        grid-template-columns: repeat(1, 1fr);
        max-width: 600px;
        margin-top: 1em;
    }
`;
const Card = styled.div`
    display: block;
    position: relative;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    border: 1px solid lightgray;
    -webkit-box-shadow: 0px 2px 3px lightgray;
    box-shadow: 0px 2px 3px lightgray;
    border-radius: 5px;
    width: 100%;
`;

const Img = styled.img`
    display: block;
    width: 100%;
    height: auto;
    border-radius: 5px;
`;
const Overlay = styled.div`
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: auto;
    border-radius: 5px;
    opacity: 0;
    -webkit-transition: 0.5s ease;
    -o-transition: 0.5s ease;
    transition: 0.5s ease;

    :hover {
        opacity: 0.9;
        background-color: var(--clr-dark);
    }
`;
const Content = styled.div`
    display: block;
    position: absolute;
    color: white;
    top: 50%;
    left: 50%;
    min-width: 200px;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    text-align: left;
`;
const CardTitle = styled.div`
    font-family: var(--ff-secondary);
    font-weight: bold;
    font-size: var(--fs-body);
    padding-bottom: 5px;
    word-spacing: -7px;
`;
const CardDesc = styled.div`
    font-size: 14px;
    font-weight: lighter;
    padding-bottom: 5px;
`;
const LabelWrapper = styled.div`
    text-align: right;
`;
const Button = styled.a`
    background-color: white;
    border: none;
    color: var(--clr-dark);
    padding: 5px 10px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 12px;
    font-weight: bold;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 5px;
    opacity: 0.5;
    -webkit-transition: opacity 0.3s linear;
    -o-transition: opacity 0.3s linear;
    transition: opacity 0.3s linear;

    :hover {
        color: var(--clr-dark);
        opacity: 1;
        -webkit-transition: opacity 0.5s linear;
        -o-transition: opacity 0.5s linear;
        transition: opacity 0.5s linear;
    }
`;
