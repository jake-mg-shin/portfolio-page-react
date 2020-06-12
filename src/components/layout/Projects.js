import React from 'react';
import styled from 'styled-components';
import { Container } from 'semantic-ui-react';

import Project1 from '../projects/Project1';
import Project2 from '../projects/Project2';
import Project3 from '../projects/Project3';
import Project4 from '../projects/Project4';
import Project5 from '../projects/Project5';

const Projects = () => {
    return (
        <Wrapper>
            <Title>Projects</Title>
            <SubTitle>Some of My Work</SubTitle>
            <Container>
                <Cards>
                    <Project1 />
                    <Project2 />
                    <Project3 />
                    <Project4 />
                    <Project5 />
                </Cards>
            </Container>
        </Wrapper>
    );
};

export default Projects;

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
