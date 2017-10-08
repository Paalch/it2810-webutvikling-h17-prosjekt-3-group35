import React, {Component} from 'react'

class Appointment extends Component{

    constructor(props){
        super(props);
        this.state ={

        }
    }

    render(){
        return(
          <div>
              <Row>
                  <Col>
                      {props.date}
                  </Col>
                  <Col>
                      {props.time}
                  </Col>
                  <Col>
                      {props.details}
                  </Col>
              </Row>
          </div>
        );
    }
}

export default Appointment