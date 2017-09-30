import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import Schedule from "./schedule/Schedule";
import Todo from "./todo/Todo";
import Notes from "./notes/Notes";
import '../styles/main.css';

class Main extends Component {
  render () {
    return (
      <div className={'main-container'}>
        <Grid>
          <Row className={'main-row'}>
            <Col sm={7} className={'left-main'}>
              <Schedule/>
            </Col>
            <Col sm={5} className={'right-main'}>
              <Todo/>
              <Notes/>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

export default Main;