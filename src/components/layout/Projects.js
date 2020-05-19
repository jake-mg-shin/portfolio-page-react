import React, { Fragment } from 'react';
import styled from 'styled-components';
import { Container } from 'semantic-ui-react';

import p1 from '../images/project1.png';
import p2 from '../images/project2.png';
import p3 from '../images/project3.png';
import p4 from '../images/project4.png';

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
                                <Header>To-Do List</Header>
                                <Desc>
                                    <div>
                                        <span
                                            role='img'
                                            aria-label='arrow-right'
                                        >
                                            ▶️
                                        </span>
                                        Managing daily routine
                                    </div>
                                    <div>
                                        <i className='fab fa-js-square'></i>
                                        &nbsp; Built with Vanilla JavaScript
                                    </div>
                                </Desc>
                                <Fragment>
                                    <Button>Learn More</Button>
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
                                <Header>Show Me Your Cat</Header>
                                <Desc>
                                    <div>
                                        <span
                                            role='img'
                                            aria-label='arrow-right'
                                        >
                                            ▶️
                                        </span>
                                        Social Network Web for Cat Lovers
                                    </div>
                                    <div>
                                        <i
                                            className='fab fa-node-js'
                                            style={{ fontWeight: 'bold' }}
                                        ></i>
                                        &nbsp; Built with Node.js
                                    </div>
                                </Desc>
                                <Fragment>
                                    <Button>Learn More</Button>
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
                                <Header>My Community Listing</Header>
                                <Desc>
                                    <div>
                                        <span
                                            role='img'
                                            aria-label='arrow-right'
                                        >
                                            ▶️
                                        </span>
                                        A Template for Entrepreneur or Companies
                                        in Realty Market
                                    </div>
                                    <div>
                                        <i
                                            className='fab fa-react'
                                            style={{ fontWeight: 'bold' }}
                                        ></i>
                                        &nbsp; Built with React.js
                                    </div>
                                </Desc>
                                <Fragment>
                                    <Button>Learn More</Button>
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
                                <Header>Portfolio Page</Header>
                                <Desc>
                                    <div>
                                        <span
                                            role='img'
                                            aria-label='arrow-right'
                                        >
                                            ▶️
                                        </span>
                                        Portfolio Page
                                    </div>
                                    <div>
                                        <i
                                            className='fab fa-react'
                                            style={{ fontWeight: 'bold' }}
                                        ></i>
                                        &nbsp; Built with React.js
                                    </div>
                                </Desc>
                                <Fragment>
                                    <Button>Learn More</Button>
                                    <Button>See Project</Button>
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
    display: flex;
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

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1.5rem;
    grid-auto-flow: row dense;
    max-width: 1400px;
    margin-left: auto;
    margin-right: auto;

    @media only screen and (max-width: 1024px) {
        grid-template-columns: repeat(2, 1fr);
        max-width: 1000px;
        margin-top: 3em;
    }
    @media only screen and (max-width: 768px) {
        grid-template-columns: repeat(1, 1fr);
        max-width: 600px;
        margin-top: 1em;
    }
`;
const Card = styled.div`
    display: block;
    position: relative;
    box-sizing: border-box;
    border: 1px solid lightgray;
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
    transition: 0.5s ease;

    :hover {
        opacity: 0.9;
        // cursor: pointer;
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
const Header = styled.div`
    font-family: var(--ff-secondary);
    font-weight: bold;
    font-size: var(--fs-body);
    padding-bottom: 5px;
    word-spacing: -7px;
`;
const Desc = styled.div`
    font-size: 14px;
    font-weight: lighter;
    padding-bottom: 5px;
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

    :hover {
        color: var(--clr-dark);
        opacity: 1;
        transition: opacity 0.5s linear;
    }
    transition: opacity 0.3s linear;
`;
