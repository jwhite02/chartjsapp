import React from 'react';
import { useRef, useEffect } from 'react';
import Chart from 'chart.js';
import Container from 'react-bootstrap/Container';
import ChartHolder from './ChartHolder';

const Bubble = () => {
    const myBubbleRef = useRef(null);

    useEffect(() => {
        const bubbleRef = myBubbleRef.current.getContext("2d")
          
    
        try {
             new Chart(bubbleRef, {
                type: 'bubble',
                data: {
                    labels: ['Jan', 'Feb', 'March', 'April', 'June', 'July', 'Aug', 'Sept'],
                    datasets: [
                        {
                            label: "First Data",
                            data: [{
                                x: 4,
                                y: 7,
                                r: 15
                            }],
                            backgroundColor: 'rgba(24,233, 75, 0.6)'
                        },
                        {
                            label: "Second Data",
                            data: [{
                                x: 9,
                                y: 3,
                                r: 12
                            }],
                            backgroundColor: 'rgba(24,33, 175, 0.6)'
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
            console.log(error)
        }
        
    });
    return (
        <div>
            <Container>
                <h1>Bubble</h1>
                <ChartHolder chartType="bubblechart" refType={myBubbleRef} />
            </Container>
        </div>
    );
}

export default Bubble;
