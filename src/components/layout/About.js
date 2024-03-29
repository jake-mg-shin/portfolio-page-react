import React, { Fragment } from 'react';
import { Container, Divider, Label } from 'semantic-ui-react';
import styled from 'styled-components';

const About = () => {
    return (
        <Fragment>
            <BackGround>
                <Container id='about'>
                    <Title>Glad to meet you!</Title>
                    <Desc>
                        Since last year I have been a full-time student of web
                        development. I previously worked in the Financial
                        industry but have now found that my passion lies in
                        building my skills as a Web Developer. I've used these
                        skills as a volunteer for ARK, a charity for children
                        with accessibility challenges. I am now looking for
                        other opportunities to assist organizations or companies
                        with what I have learned.
                    </Desc>
                </Container>
            </BackGround>

            <Container>
                <Skills>
                    <Skill1>
                        <Icon className='far fa-file-code'></Icon>
                        <SkillTitle>Front-End</SkillTitle>
                        <SkillDesc>
                            To build interactive Web applications using
                            implemented visual elements while always considering
                            how it will combine with the entire Server-Side.
                            Using React.js when developing the Client-Side.
                        </SkillDesc>
                        <Tools>Skills</Tools>
                        <LabelWrapper>
                            <Label color='red'>HTML</Label>
                            <Label color='blue'>CSS</Label>
                            <Label color='yellow'>JavaScript</Label>
                            <Label color='grey'>jQuery</Label>
                            <Label color='teal'>React.js</Label>
                            <Label color='orange'>D3.js</Label>
                        </LabelWrapper>
                    </Skill1>
                    <Skill2>
                        <Icon className='fas fa-database'></Icon>
                        <SkillTitle>Back-End</SkillTitle>
                        <SkillDesc>
                            To build an effective Server-Side and structure for
                            properly combining with the Client-Side. Maintaining
                            data and API for an application with Node.js and
                            Express.js or Apollo-Server and GraphQL.
                        </SkillDesc>
                        <Tools>Skills</Tools>
                        <LabelWrapper>
                            <Label color='olive'>Node.js</Label>
                            <Label color='grey'>Express.js</Label>
                            <Label color='brown'>Passport.js</Label>
                            <Label color='black'>Apollo</Label>
                            <Label color='pink'>GraphQL</Label>
                            <Label color='green'>MongoDB</Label>
                        </LabelWrapper>
                    </Skill2>
                    <Skill3>
                        <Icon className='fab fa-connectdevelop'></Icon>
                        <SkillTitle>Development</SkillTitle>
                        <SkillDesc>
                            To create the look, layout, and feature of Web sites
                            and associated applications. Moreover, trying to
                            make a user-friendly design and enjoying learning
                            new stacks and use various tools.
                        </SkillDesc>
                        <Tools>Skills</Tools>
                        <LabelWrapper>
                            <Label color='teal'>Semantic UI</Label>
                            <Label color='blue'>Bootstrap</Label>
                            <Label color='yellow'>styled-components</Label>
                            <Label color='brown'>Github</Label>
                            <Label color='purple'>Heroku</Label>
                            <Label color='black'>Vercel</Label>
                            <Label color='grey'>Netlify</Label>
                        </LabelWrapper>
                    </Skill3>
                </Skills>
            </Container>
            <Divider id='project' />
        </Fragment>
    );
};

export default About;

const BackGround = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    text-align: center;
    width: 100%;
    height: 500px;
    background: rgb(58, 174, 139);
    background: -webkit-gradient(
        linear,
        left bottom,
        left top,
        color-stop(70%, rgba(58, 174, 139, 1)),
        to(rgba(253, 187, 45, 1))
    );
    background: -o-linear-gradient(
        bottom,
        rgba(58, 174, 139, 1) 70%,
        rgba(253, 187, 45, 1) 100%
    );
    background: linear-gradient(
        0deg,
        rgba(58, 174, 139, 1) 70%,
        rgba(253, 187, 45, 1) 100%
    );
`;
const Title = styled.p`
    font-family: var(--ff-secondary);
    font-size: var(--fs-h3);
    font-weight: var(--fw-bold);
    color: var(--clr-light);
    padding-top: 100px;

    @media only screen and (max-width: 768px) {
        padding-top: 70px;
    }
`;
const Desc = styled.p`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-pack: space-evenly;
    -ms-flex-pack: space-evenly;
    justify-content: space-evenly;
    margin-left: auto;
    margin-right: auto;
    max-width: 800px;
    font-family: var(--ff-primary);
    font-size: var(--fs-body);
    font-weight: lighter;
    color: var(--clr-light);
`;

const Skills = styled.div`
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    max-width: 1200px;
    height: auto;
    border: 1px solid lightgray;
    border-radius: 10px;
    -webkit-box-shadow: 0px 2px 3px lightgray;
    box-shadow: 0px 2px 3px lightgray;

    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-pack: space-evenly;
    -ms-flex-pack: space-evenly;
    justify-content: space-evenly;
    margin: -12rem auto 5em auto;
    background-color: var(--clr-light);
    text-align: center;

    @media only screen and (max-width: 768px) {
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-box-flex: 1;
        -ms-flex-positive: 1;
        flex-grow: 1;
        max-width: 600px;
        // margin-bottom: 3em;
        margin: -18rem auto 3em auto;
    }
`;
const LabelWrapper = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
`;
const Skill1 = styled.div`
    padding: 2em;

    @media only screen and (max-width: 768px) {
        padding: 1em;
    }
`;
const Skill2 = styled.div`
    padding: 2em;
    border-left: 1px solid lightgray;
    border-right: 1px solid lightgray;

    @media only screen and (max-width: 768px) {
        padding: 1em;
        border-left: 0px solid lightgray;
        border-right: 0px solid lightgray;

        border-top: 1px solid lightgray;
        border-bottom: 1px solid lightgray;
    }
`;
const Skill3 = styled.div`
    padding: 2em;

    @media only screen and (max-width: 768px) {
        padding: 1em;
    }
`;
const Icon = styled.i`
    font-size: 4em;
    color: var(--clr-accent);
    padding: 1.5rem;

    @media only screen and (max-width: 768px) {
        font-size: 2.5em;
        padding: 0.5rem;
    }
`;
const SkillTitle = styled.p`
    font-family: var(--ff-secondary);
    font-size: var(--fs-body);
    font-weight: var(--fw-bold);
    padding: 1.5rem;

    @media only screen and (max-width: 768px) {
        padding: 0.5rem;
    }
`;
const SkillDesc = styled.p`
    font-family: var(--ff-primary);
    font-size: var(--fs-small);
    font-weight: lighter;
    color: var(--clr-dark);
`;
const Tools = styled.p`
    font-family: var(--ff-secondary);
    font-size: var(--fs-body);
    font-weight: var(--fw-bold);

    padding: 1.5rem;

    @media only screen and (max-width: 768px) {
        padding: 0.5rem;
    }
`;
