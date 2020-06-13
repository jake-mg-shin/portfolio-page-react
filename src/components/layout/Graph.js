import React, { useState, useRef, useEffect } from 'react';
import { select, scaleLinear, scaleBand, max, easeBounceOut } from 'd3';
import ResizeObserver from 'resize-observer-polyfill';
import styled from 'styled-components';
import { Container } from 'semantic-ui-react';

const useResizeObserver = (ref) => {
    const [dimensions, setDimensions] = useState(null);
    useEffect(() => {
        const observeTarget = ref.current;
        const resizeObserver = new ResizeObserver((entries) => {
            entries.forEach((entry) => {
                setDimensions(entry.contentRect);
            });
        });
        resizeObserver.observe(observeTarget);
        return () => {
            resizeObserver.unobserve(observeTarget);
        };
    }, [ref]);
    return dimensions;
};

const getData = () => {
    let d = [];
    for (let i = 0; i < 50; i++) {
        d.push(Math.ceil(Math.random() * 99));
    }
    return d;
};

const Graph = () => {
    const data = getData();

    const svgRef = useRef();
    const wrapperRef = useRef();
    const dimensions = useResizeObserver(wrapperRef);

    useEffect(() => {
        const svg = select(svgRef.current);
        // console.log(dimensions);

        if (!dimensions) return;

        const xScale = scaleBand()
            .domain(data.map((v, i) => i))
            .range([0, dimensions.width])
            .paddingInner(0.1);
        const yScale = scaleLinear()
            .domain([0, max(data)])
            .range([0, dimensions.height]);

        const colorScale = scaleLinear()
            .domain([0, data.length])
            .range(['rgb(58, 174, 139)', 'rgb(32, 23, 77)'])
            .clamp(true);

        svg.selectAll('.bar')
            .data(data)
            .join('rect')
            .attr('class', 'bar')
            .attr('x', (v, i) => xScale(i))
            .attr('width', xScale.bandwidth())
            .attr('height', 0)
            .attr('fill', (v, i) => colorScale(i));

        svg.selectAll('.bar')
            .data(data)
            .join('rect')
            .attr('class', 'bar')
            .transition()
            .attr('height', (v, i) => dimensions.height - yScale(v))
            // .attr('y', (v, i) => yScale(v))
            .delay((v, i) => {
                return i * 20;
            })
            .duration(1500)
            .ease(easeBounceOut);
    }, [data, dimensions]);

    return (
        <Section>
            <Container>
                <div ref={wrapperRef}>
                    <Wrap ref={svgRef}>
                        <g className='x-axis' />
                        <g className='y-axis' />
                    </Wrap>
                </div>
            </Container>
        </Section>
    );
};

export default Graph;

const Section = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    max-width: 700px;
    margin: 2rem auto 120px auto;

    @media only screen and (max-width: 768px) {
        margin: 0.5rem auto 1rem auto;
    }
`;
const Wrap = styled.svg`
    display: block;
    overflow: visible !important;
    background: white;
    margin-bottom: 2rem;

    @media only screen and (max-width: 768px) {
        height: 90px;
    }
`;
