import React from 'react';
import { Row, Col} from 'react-bootstrap'

const ChartHolder = (props) => {
    const {chartType, refType} = {
        charType: props.charType,
        refType: props.refType
    }
    return (
        <>
            <Row className="justify-content-md-center">
                <Col md={10}>
                    <canvas id={chartType} ref={refType}></canvas>
                </Col>
            </Row>
        </>
    );
}

export default ChartHolder;
