import React from 'react';
import { useRef, useEffect } from 'react';
import Chart from 'chart.js';
import Container from 'react-bootstrap/Container';
import ChartHolder from './ChartHolder';

const Doughnut = () => {
    const myDoughnutRef = useRef(null);

    useEffect(() => {
        const doughnutRef = myDoughnutRef.current.getContext("2d")

        const lineChart = new Chart(doughnutRef, {
            type: 'doughnut',
            data: {
                labels: ['Jan', 'Feb', 'March', 'April', 'June', 'July', 'Aug', 'Sept'],
                datasets: [
                    {
                        label: "First Data",
                        data: [3, 7, 12, 17, 21, 28, 32, 41],
                        backgroundColor: 'rgba(24,23, 275, 0.6)'
                    },
                    {
                        label: "Second Data",
                        data: [5, 11, 15, 22, 30, 36, 40, 45],
                        backgroundColor: 'rgba(24, 70, 175, 0.6)'
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
    });
    return (
        <div>
            <Container>
                <h1>Doughnut</h1>
                <ChartHolder chartType="doughnut" refType={myDoughnutRef} />
            </Container>
        </div>
    );
}

export default Doughnut;
