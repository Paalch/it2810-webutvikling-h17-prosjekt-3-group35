import React, { Component } from 'react';
import '../styles/bottomNav.css'
import {Row, Col} from 'react-bootstrap';

class BottomNav extends Component {
    render () {
        return (
            <div className={'nav-container'}>
                <Row className={'item-container'}>
                    <Col xs={4} lgHidden mdHidden smHidden id={'schedule'} className={'nav-items'}>Schedule</Col>
                    <Col xs={4} lgHidden mdHidden smHidden id={'todo'} className={'nav-items'}>2do</Col>
                    <Col xs={4} lgHidden mdHidden smHidden id={'notes'} className={'nav-items'}>Notes</Col>
                </Row>
            </div>
        );
    }
}

export default BottomNav;