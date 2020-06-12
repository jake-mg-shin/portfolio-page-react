import React, { Fragment } from 'react';
import styled from 'styled-components';
import { Modal, Label, Image, Icon } from 'semantic-ui-react';

import p2_1 from '../images/project2_1.png';
import p2_2 from '../images/project2_2.png';

const Project2 = () => {
    return (
        <Card>
            <Img src={p2_1} />
            <Overlay>
                <Content>
                    <CardTitle>Show Me Your Cat</CardTitle>
                    <CardDesc>
                        <div>
                            <Icon name='arrow circle right' />
                            &nbsp;Social Network Web for Cat Lovers
                        </div>
                        <div>
                            <Icon name='node js' />
                            &nbsp; Built with Node.js
                        </div>
                    </CardDesc>
                    <Fragment>
                        <Modal trigger={<Button>Learn More</Button>} closeIcon>
                            <Modal.Header>Show Me Your Cat</Modal.Header>
                            <Modal.Content>
                                <Modal.Description>
                                    <div
                                        style={{ fontSize: 'var(--fs-small)' }}
                                    >
                                        <div>
                                            <Icon name='check square' />
                                            &nbsp; Built with Node.js and
                                            Express.js. Used CRUD method and
                                            maintains Database with MongoDB.
                                        </div>
                                        <br />
                                        <div>
                                            <Icon name='laptop' />
                                            &nbsp;
                                            <a
                                                href='https://show-me-your-cat-v1.herokuapp.com/'
                                                target='_blank'
                                                rel='noopener noreferrer'
                                            >
                                                See Project
                                            </a>
                                            &nbsp; | <Icon name='github' />{' '}
                                            <a
                                                href='https://github.com/jake-mg-shin/show-me-your-cat-v1'
                                                target='_blank'
                                                rel='noopener noreferrer'
                                            >
                                                See Repo
                                            </a>
                                        </div>
                                    </div>
                                    <br />
                                    <LabelWrapper>
                                        <Label color='olive'>Node.js</Label>
                                        <Label color='grey'>Express.js</Label>
                                        <Label color='brown'>Passport.js</Label>
                                        <Label color='green'>MongoDB</Label>
                                        <Label color='purple'>Bootstrap</Label>
                                        <Label color='purple'>Heroku</Label>
                                    </LabelWrapper>
                                </Modal.Description>
                            </Modal.Content>
                            <Image src={p2_2} fluid />
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
    );
};

export default Project2;

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
