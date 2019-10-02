import React from 'react';
import { useRef, useEffect } from 'react';
import Chart from 'chart.js';
import { Container } from 'react-bootstrap';
import ChartHolder from './ChartHolder';


const Bar = () => {
    const myBarRef = useRef(null);

    useEffect(() => {
        const barRef = myBarRef.current.getContext("2d")

       try {
           new Chart(barRef, {
               type: 'bar',
               data: {
                   labels: ['Jan', 'Feb', 'March', 'April', 'June', 'July', 'Aug', 'Sept'],
                   datasets: [
                       {
                           label: "First Data",
                           data: [3, 7, 12, 17, 21, 28, 32, 41],
                           backgroundColor: 'rgba(24,233, 75, 0.6)'
                       },
                       {
                           label: "Second Data",
                           data: [5, 11, 15, 22, 30, 36, 40, 45],
                           backgroundColor: 'rgba(28,163, 175, 0.6)'
                       }
                   ]
               },
               options: {
                   responsive: true,
                   title: {
                       display: true,
                       text: "This is the Line Title",
                       fontFamily: "Cambria"
                   },
                   legend: {},
                   tooltips: {},
                   scales: {}

               }
           });
       } catch (error) {
           
       }
    });
    return (
        <div>
            <Container>
                <h1>Bar</h1>
                <ChartHolder chartType="barchart" refType={myBarRef} />
            </Container>
        </div>
    );
}

export default Bar;
