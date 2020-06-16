import React, { Fragment } from 'react';
import styled from 'styled-components';
import { Modal, Label, Image, Icon } from 'semantic-ui-react';

import p5_1 from '../images/project5_1.png';
import p5_2 from '../images/project5_2.png';

const Project5 = () => {
    return (
        <Card>
            <Img src={p5_1} />
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
                                            {/* &nbsp; | <Icon name='github' />{' '}
                                            <a
                                                href='https://github.com/jake-mg-shin/apollo-movie-db-app-react'
                                                target='_blank'
                                                rel='noopener noreferrer'
                                            >
                                                See Repo
                                            </a> */}
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
const Wrap = styled.div`
    display: block;
    position: absolute;
`;
const Card = styled(Wrap)`
    position: relative;
    width: 100%;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    border: 1px solid lightgray;
    -webkit-box-shadow: 0px 2px 3px lightgray;
    box-shadow: 0px 2px 3px lightgray;
    border-radius: 5px;
`;
const Img = styled.img`
    display: block;
    width: 100%;
    height: auto;
    border-radius: 5px;
`;
const Overlay = styled(Wrap)`
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
        background-color: var(--clr-dark);
        opacity: 0.9;
    }
`;
const Content = styled(Wrap)`
    top: 50%;
    left: 50%;
    min-width: 200px;
    color: white;
    text-align: left;

    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
`;
const CardTitle = styled.div`
    font-family: var(--ff-secondary);
    font-weight: bold;
    font-size: var(--fs-body);
    word-spacing: -7px;
    padding-bottom: 5px;
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
    display: inline-block;
    background-color: white;
    border: none;
    border-radius: 5px;
    font-weight: bold;
    font-size: 12px;
    color: var(--clr-dark);
    text-align: center;
    text-decoration: none;

    padding: 5px 10px;
    margin: 4px 2px;
    opacity: 0.5;
    cursor: pointer;

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
