import React from 'react';
import {Col, Row} from 'antd';


const NetworkInformation = () => {
    return (
        <div>
            <p><span className='bold'>Avaliable seats:</span> 100</p>
            <p><span className='bold'>Borrowed seats:</span> 40</p>

            <Row className='tHeader'>
                <Col className='tHeaderCell' span={8}>Seat name</Col>
                <Col className='tHeaderCell' span={8}>End date</Col>
                <Col style={{padding:'5px'}} span={8}>Computer name</Col>
            </Row>
            <Row className='tRow'>
                <Col className='tRowCell' span={8}>Seat 1</Col>
                <Col className='tRowCell' span={8}>5/6/2020</Col>
                <Col style={{padding:'5px'}} span={8}>Computer 1</Col>
            </Row>
            <Row className='tRow'>
                <Col className='tRowCell' span={8}>Seat 2</Col>
                <Col className='tRowCell' span={8}>5/11/2021</Col>
                <Col style={{padding:'5px'}} span={8}>Computer 2</Col>
            </Row>

        </div>
    )
}

export default NetworkInformation
