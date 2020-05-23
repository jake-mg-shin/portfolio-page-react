import React, { Fragment } from 'react';
import styled from 'styled-components';
import { Container } from 'semantic-ui-react';
import { Modal, Label } from 'semantic-ui-react';

import p1 from '../images/project1_1.png';
import p2 from '../images/project2_1.png';
import p3 from '../images/project3_1.png';
import p4 from '../images/project4_1.png';
import Carousel1 from '../projects/Carousel1';
import Carousel2 from '../projects/Carousel2';
import Carousel3 from '../projects/Carousel3';
import Carousel4 from '../projects/Carousel4';

const Projects = () => {
    return (
        <Wrapper>
            <Title>Projects</Title>
            <SubTitle>Some of My Work</SubTitle>
            <Container>
                <Cards>
                    <Card>
                        <Img src={p1} />
                        <Overlay>
                            <Content>
                                <CardTitle>To-Do List</CardTitle>
                                <CardDesc>
                                    <div>
                                        <i className='fas fa-arrow-circle-right'></i>
                                        &nbsp;Managing daily To-Do
                                    </div>
                                    <div>
                                        <i className='fab fa-js-square'></i>
                                        &nbsp; Built with Vanilla JavaScript
                                    </div>
                                </CardDesc>
                                <Fragment>
                                    <Modal
                                        trigger={<Button>Learn More</Button>}
                                        closeIcon
                                    >
                                        <Modal.Header>To-Do List</Modal.Header>
                                        <Modal.Content>
                                            <Modal.Description>
                                                <div
                                                    style={{ fontSize: '14px' }}
                                                >
                                                    <div>
                                                        <i className='fas fa-check-square'></i>
                                                        &nbsp;Built by Vanilla
                                                        JavaScript with
                                                        LocalStorage and Open
                                                        Weather App API.
                                                    </div>
                                                    <div>
                                                        <i className='fas fa-desktop'></i>
                                                        &nbsp;
                                                        <a
                                                            href='https://jake-mg-shin.github.io/to-do-list-v1/'
                                                            target='_blank'
                                                            rel='noopener noreferrer'
                                                        >
                                                            Visit Website
                                                        </a>
                                                    </div>
                                                </div>
                                                <br />
                                                <LabelWrapper>
                                                    <Label color='red'>
                                                        HTML
                                                    </Label>
                                                    <Label color='blue'>
                                                        CSS
                                                    </Label>
                                                    <Label color='yellow'>
                                                        JavaScript
                                                    </Label>
                                                    <Label color='brown'>
                                                        Github
                                                    </Label>
                                                </LabelWrapper>
                                            </Modal.Description>
                                        </Modal.Content>
                                        <Carousel1 />
                                    </Modal>

                                    <Button
                                        href='https://jake-mg-shin.github.io/to-do-list-v1/'
                                        target='_blank'
                                    >
                                        See Project
                                    </Button>
                                </Fragment>
                            </Content>
                        </Overlay>
                    </Card>
                    <Card>
                        <Img src={p2} />
                        <Overlay>
                            <Content>
                                <CardTitle>Show Me Your Cat</CardTitle>
                                <CardDesc>
                                    <div>
                                        <i className='fas fa-arrow-circle-right'></i>
                                        &nbsp;Social Network Web for Cat Lovers
                                    </div>
                                    <div>
                                        <i
                                            className='fab fa-node-js'
                                            style={{ fontWeight: 'bold' }}
                                        ></i>
                                        &nbsp; Built with Node.js
                                    </div>
                                </CardDesc>
                                <Fragment>
                                    <Modal
                                        trigger={<Button>Learn More</Button>}
                                        closeIcon
                                    >
                                        <Modal.Header>
                                            Show Me Your Cat
                                        </Modal.Header>
                                        <Modal.Content>
                                            <Modal.Description>
                                                <div
                                                    style={{ fontSize: '14px' }}
                                                >
                                                    <div>
                                                        <i className='fas fa-check-square'></i>
                                                        &nbsp; Built with
                                                        Node.js and Express.js.
                                                        Used CRUD method and
                                                        maintains Database with
                                                        MongoDB.
                                                    </div>
                                                    <div>
                                                        <i className='fas fa-desktop'></i>
                                                        &nbsp;
                                                        <a
                                                            href='https://show-me-your-cat-v1.herokuapp.com/'
                                                            target='_blank'
                                                            rel='noopener noreferrer'
                                                        >
                                                            Visit Website
                                                        </a>
                                                    </div>
                                                </div>
                                                <br />
                                                <LabelWrapper>
                                                    <Label color='red'>
                                                        HTML
                                                    </Label>
                                                    <Label color='blue'>
                                                        CSS
                                                    </Label>
                                                    <Label color='yellow'>
                                                        JavaScript
                                                    </Label>
                                                    <Label color='purple'>
                                                        Bootstrap
                                                    </Label>
                                                    <Label color='olive'>
                                                        Node.js
                                                    </Label>
                                                    <Label color='grey'>
                                                        Express.js
                                                    </Label>
                                                    <Label color='brown'>
                                                        Passport.js
                                                    </Label>
                                                    <Label color='green'>
                                                        MongoDB
                                                    </Label>
                                                    <Label color='purple'>
                                                        Heroku
                                                    </Label>
                                                </LabelWrapper>
                                            </Modal.Description>
                                        </Modal.Content>
                                        <Carousel2 />
                                    </Modal>
                                    <Button
                                        href='https://show-me-your-cat-v1.herokuapp.com/'
                                        target='_blank'
                                    >
                                        See Project
                                    </Button>
                                </Fragment>
                            </Content>
                        </Overlay>
                    </Card>
                    <Card>
                        <Img src={p3} />
                        <Overlay>
                            <Content>
                                <CardTitle>My Community Listing</CardTitle>
                                <CardDesc>
                                    <div>
                                        <i className='fas fa-arrow-circle-right'></i>
                                        &nbsp;A Template for Entrepreneur or
                                        Companies in Realty Market
                                    </div>
                                    <div>
                                        <i
                                            className='fab fa-react'
                                            style={{ fontWeight: 'bold' }}
                                        ></i>
                                        &nbsp; Built with React.js
                                    </div>
                                </CardDesc>
                                <Fragment>
                                    <Modal
                                        trigger={<Button>Learn More</Button>}
                                        closeIcon
                                    >
                                        <Modal.Header>
                                            My Community Listing
                                        </Modal.Header>
                                        <Modal.Content>
                                            <Modal.Description>
                                                <div
                                                    style={{ fontSize: '14px' }}
                                                >
                                                    <div>
                                                        <i className='fas fa-check-square'></i>
                                                        &nbsp; Built with
                                                        React.js and used D3.js
                                                        and Mapbox GL made it
                                                        looks more interactive.
                                                    </div>
                                                    <div>
                                                        <i className='fas fa-desktop'></i>
                                                        &nbsp;
                                                        <a
                                                            href='https://jake-mg-shin.github.io/my-community-listing-v2/'
                                                            target='_blank'
                                                            rel='noopener noreferrer'
                                                        >
                                                            Visit Website
                                                        </a>
                                                    </div>
                                                </div>
                                                <br />
                                                <LabelWrapper>
                                                    <Label color='red'>
                                                        HTML
                                                    </Label>
                                                    <Label color='blue'>
                                                        CSS
                                                    </Label>
                                                    <Label color='yellow'>
                                                        JavaScript
                                                    </Label>
                                                    <Label color='teal'>
                                                        React.js
                                                    </Label>
                                                    <Label color='orange'>
                                                        D3.js
                                                    </Label>
                                                    <Label color='teal'>
                                                        Semantic UI
                                                    </Label>
                                                    <Label color='yellow'>
                                                        styled-components
                                                    </Label>
                                                    <Label color='brown'>
                                                        Github
                                                    </Label>
                                                </LabelWrapper>
                                            </Modal.Description>
                                        </Modal.Content>
                                        <Carousel3 />
                                    </Modal>
                                    <Button
                                        href='https://jake-mg-shin.github.io/my-community-listing-v2/'
                                        target='_blank'
                                    >
                                        See Project
                                    </Button>
                                </Fragment>
                            </Content>
                        </Overlay>
                    </Card>
                    <Card>
                        <Img src={p4} />
                        <Overlay>
                            <Content>
                                <CardTitle>Portfolio Page</CardTitle>
                                <CardDesc>
                                    <div>
                                        <i className='fas fa-arrow-circle-right'></i>
                                        &nbsp;Portfolio Page
                                    </div>
                                    <div>
                                        <i
                                            className='fab fa-react'
                                            style={{ fontWeight: 'bold' }}
                                        ></i>
                                        &nbsp; Built with React.js
                                    </div>
                                </CardDesc>
                                <Fragment>
                                    <Modal
                                        trigger={<Button>Learn More</Button>}
                                        closeIcon
                                    >
                                        <Modal.Header>
                                            Portfolio Page
                                        </Modal.Header>
                                        <Modal.Content>
                                            <Modal.Description>
                                                <div
                                                    style={{ fontSize: '14px' }}
                                                >
                                                    <div>
                                                        <i className='fas fa-check-square'></i>
                                                        &nbsp; Built with
                                                        React.js. Expressed
                                                        dynamic design by using
                                                        D3.js and responsive-web
                                                        by flex-box and grid.
                                                    </div>
                                                </div>
                                                <br />
                                                <br />
                                                <LabelWrapper>
                                                    <Label color='red'>
                                                        HTML
                                                    </Label>
                                                    <Label color='blue'>
                                                        CSS
                                                    </Label>
                                                    <Label color='yellow'>
                                                        JavaScript
                                                    </Label>
                                                    <Label color='teal'>
                                                        React.js
                                                    </Label>
                                                    <Label color='orange'>
                                                        D3.js
                                                    </Label>
                                                    <Label color='teal'>
                                                        Semantic UI
                                                    </Label>
                                                    <Label color='yellow'>
                                                        styled-components
                                                    </Label>
                                                    <Label color='black'>
                                                        Vercel
                                                    </Label>
                                                </LabelWrapper>
                                            </Modal.Description>
                                        </Modal.Content>
                                        <Carousel4 />
                                    </Modal>
                                </Fragment>
                            </Content>
                        </Overlay>
                    </Card>
                </Cards>
            </Container>
        </Wrapper>
    );
};

export default Projects;

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
    font-family: var(--ff-third);
    font-size: var(--fs-h3);
    font-weight: bold;
    margin-bottom: 5px !important;
`;
const SubTitle = styled.p`
    font-family: var(--ff-forth);
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
    grid-gap: 1.5rem;
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
