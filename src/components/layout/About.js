import React, { Fragment } from 'react';
import { Container, Divider } from 'semantic-ui-react';
import styled from 'styled-components';

const About = () => {
    return (
        <Fragment>
            <BackGround>
                <Container>
                    <Title>Glad to meet you!</Title>
                    <Desc>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Sit itaque adipisci nisi rem maxime neque saepe
                        illo molestiae impedit eveniet distinctio odio similique
                        quaerat, sed aspernatur temporibus, optio delectus iste.
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Sit itaque adipisci nisi rem maxime neque saepe
                        illo molestiae impedit eveniet distinctio odio similique
                        quaerat, sed aspernatur temporibus, optio delectus iste.
                    </Desc>
                    <Fragment>
                        <Icon1 className='fab fa-html5 '></Icon1>
                        <Icon1 className='fab fa-css3-alt '></Icon1>
                        <Icon1 className='fab fa-js '></Icon1>
                    </Fragment>
                </Container>
            </BackGround>

            <Container>
                <Skills>
                    <Skill1>
                        <Icon className='far fa-file-code'></Icon>
                        <SkillTitle>Front-End Developer</SkillTitle>
                        <SkillDesc>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Quisquam ratione quo, obcaecati modi saepe
                            optio placeat quam, repellendus consectetur dicta ea
                            excepturi. Sequi porro nesciunt dignissimos est
                            nihil laborum a?
                        </SkillDesc>
                        <Tools>Tools</Tools>
                    </Skill1>
                    <Skill2>
                        <Icon className='fas fa-database'></Icon>
                        <SkillTitle>Back-End Developer</SkillTitle>
                        <SkillDesc>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Quisquam ratione quo, obcaecati modi saepe
                            optio placeat quam, repellendus consectetur dicta ea
                            excepturi. Sequi porro nesciunt dignissimos est
                            nihil laborum a?
                        </SkillDesc>
                        <Tools>Tools</Tools>
                    </Skill2>
                    <Skill3>
                        <Icon className='fab fa-connectdevelop'></Icon>
                        <SkillTitle>Web Development</SkillTitle>
                        <SkillDesc>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Quisquam ratione quo, obcaecati modi saepe
                            optio placeat quam, repellendus consectetur dicta ea
                            excepturi. Sequi porro nesciunt dignissimos est
                            nihil laborum a?
                        </SkillDesc>
                        <Tools>Tools</Tools>
                    </Skill3>
                </Skills>
            </Container>
            <Divider />
        </Fragment>
    );
};

export default About;

const BackGround = styled.div`
    display: flex;
    justify-content: space-between;
    text-align: center;
    width: 100%;
    height: 600px;
    background: rgb(58, 174, 139);
    background: linear-gradient(
        0deg,
        rgba(58, 174, 139, 1) 70%,
        rgba(253, 187, 45, 1) 100%
    );
`;
const Title = styled.p`
    font-family: var(--ff-third);
    font-size: var(--fs-h3);
    font-weight: var(--fw-bold);
    color: var(--clr-light);
    padding-top: 100px;
    @media only screen and (max-width: 768px) {
        padding-top: 70px;
    }
`;
const Desc = styled.p`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin-left: auto;
    margin-right: auto;
    max-width: 800px;

    font-family: var(--ff-forth);
    font-size: 1.2rem;
    font-weight: lighter;
    color: var(--clr-light);
`;
const Icon1 = styled.i`
    font-size: 2.5em;
    padding: 1rem;
    color: var(--clr-light);
    @media only screen and (max-width: 768px) {
        font-size: 1.7em;
        padding: 0.5rem;
    }
`;
const Skills = styled.div`
    box-sizing: border-box;
    max-width: 1200px;
    height: auto;
    border: 1px solid lightgray;
    border-radius: 10px;
    box-shadow: 0px 2px 3px lightgray;

    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin: -12rem auto 5em auto;
    background-color: var(--clr-light);
    text-align: center;

    @media only screen and (max-width: 768px) {
        flex-direction: column;
        flex-grow: 1;
        max-width: 600px;
        margin-bottom: 3em;
    }
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
    font-family: var(--ff-third);
    font-size: var(--fs-body);
    font-weight: var(--fw-bold);
    padding: 1.5rem;
    @media only screen and (max-width: 768px) {
        padding: 0.5rem;
    }
`;
const SkillDesc = styled.p`
    font-family: var(--ff-forth);
    font-size: 1.15rem;
    font-weight: lighter;
    color: var(--clr-dark);
`;
const Tools = styled.p`
    color: var(--clr-accent);
    font-size: 1.2rem;
    padding: 1.5rem;
    @media only screen and (max-width: 768px) {
        padding: 0.5rem;
    }
`;
