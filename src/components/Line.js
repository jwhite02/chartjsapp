import React from 'react';
import { useRef, useEffect} from 'react';
import { Container} from 'react-bootstrap';
import Chart from 'chart.js';
import ChartHolder from './ChartHolder';

const Line = () => {
    const mylineRef = useRef(null);

    useEffect(() => {
        const lineref = mylineRef.current.getContext("2d")

        try {
            new Chart(lineref, {
                type: 'line',
                data: {
                    labels: ['Jan', 'Feb', 'March', 'April', 'June', 'July', 'Aug', 'Sept'],
                    datasets: [
                        {
                            label: "First Data",
                            data: [3, 7, 12, 17, 21, 28, 32, 41],
                            backgroundColor: 'rgba(24,23, 75, 0.6)'
                        },
                        {
                            label: "Second Data",
                            data: [5, 11, 15, 22, 30, 36, 40, 45],
                            backgroundColor: 'rgba(20,233, 75, 0.6)'
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
                <h1>Line</h1>
                <ChartHolder chartType="linechart" refType={mylineRef} />
            </Container>
        </div>
    );
}

export default Line;
