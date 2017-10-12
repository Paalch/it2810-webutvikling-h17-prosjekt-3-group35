import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import Schedule from "./schedule/Schedule";
import Todo from "./todo/Todo";
import Notes from "./notes/Notes";
import BottomNav from "./bottomNav/BottomNav"
import '../styles/main.css';


class Main extends Component {
  constructor(){
    super();
    this.state = {
      schedule: '',
      todo: 'hidden-xs',
      notes: 'hidden-xs',
    };
    this.openSchedule = this.openSchedule.bind(this);
    this.openNotes = this.openNotes.bind(this);
    this.openTodo = this.openTodo.bind(this);

  }

  openSchedule(){
    this.setState({schedule:'', todo:'hidden-xs', notes:'hidden-xs' })
  }

  openTodo(){
    this.setState({schedule:'hidden-xs', todo:'', notes:'hidden-xs' })
  }

  openNotes(){
    this.setState({schedule: 'hidden-xs', todo:'hidden-xs', notes:''})
  }
  
  render () {
    
    return (
      <div className={'main-container'}>
        <Grid>
          <Row className={'main-row'}>
            <Col sm={7} xs={12} className={'left-main'}>
              <Col className={this.state.schedule}>
                <Schedule/>
              </Col>
            </Col>
            <Col sm={5} xs={12} className={'right-main'}>
              <Col className={this.state.todo}>
                <Todo/>
              </Col>
              <Col className={this.state.notes}>
                <Notes/>
              </Col>
              </Col>
          </Row>
          <Row className ={'footer-row'}>
            <Col lgHidden mdHidden smHidden>
              <BottomNav
                  openSchedule={this.openSchedule}
                  openNotes={this.openNotes}
                  openTodo={this.openTodo}/>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

export default Main;