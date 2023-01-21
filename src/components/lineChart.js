import React, { useState, useRef, useEffect } from 'react';
import * as d3 from 'd3';

// Data Should be in object form {x: Val, y: Val}, ...
// Otherwise it will not be seen by generator

function LineChart(props) {
    const { data } = props;

    const svgRef = useRef();
    useEffect(() => {
        const layout = {
            width: 300,
            height: 200
        };
        const svg = d3.select(svgRef.current)
            .attr('width', layout.width)
            .attr('height', layout.height)
            .style('background', '#FAF9F6');



        //create x scale
        const xScale = d3.scaleTime()
            .domain([Date(2022, 11, 20), Date(2023, 4, 10)]);
        
        //create y scale
        const yScale = d3.scaleLinear()
            .domain([0, 100])
            .range([layout.height, 0]);

        const generateScaledLine = d3.line()
            .x(xScale)
            .y(yScale)
            .curve(d3.curveCardinal);


        const xAxis = d3.axisBottom(xScale)
            .ticks(12)

        const yAxis = d3.axisLeft(yScale)
            .ticks(10)
        
        svg.append('g')
            .call(xAxis)
            .attr('transform', `transalte(0, ${layout.height}`);
        
        svg.append('g')
            .call(yAxis)
        
        svg.selectAll('.line')
            .data([data])
            .join('path')
                .attr('d', d => generateScaledLine(d))
                .attr('filled', 'none')
                .attr('stroke', 'green')

    }, [data]);

    

    return <svg ref='svgRef'></svg>;
}

export default LineChart;