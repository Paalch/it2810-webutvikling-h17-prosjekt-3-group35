import React, {Component} from 'react'
import {Col, Row} from 'react-bootstrap'


class AppointmentList extends Component {

    constructor(props){
        super(props);
        this.state = {
            appointments: []
        }

    }

    render(){
        let content = this.state.appointments.map();

        return(
          <div>
              <div>
                  {content}
              </div>
          </div>
        );

    }
}

export default AppointmentList;