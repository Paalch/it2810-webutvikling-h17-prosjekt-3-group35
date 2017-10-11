import React, {Component} from 'react'
import {Button} from 'react-bootstrap'
import "./schedule.css"
import moment from 'moment'


class Appointment extends Component {

  constructor(props) {
    super(props);
    this.state = {
      appointments: this.props.appointments
    };
    this.deleteAppointment = this.deleteAppointment.bind(this);
  }

  deleteAppointment() {
    let appointments = this.state.appointments;
    for (let i = 0; i < appointments.length; i++) {
      if (appointments[i].includes(this.props.id)) {
        appointments.splice(i, 1);
      }
    }
    this.setState({
      appointments: appointments
    });

    this.props.receiveAppointment(this.state.appointments);
  }

    interval = setInterval(() => {
      if (this.state.appointments.length > 0){
          let appointments = this.state.appointments;
          for (let i = 0; i < appointments.length; i++) {
              if(appointments[i][2].format("DD.MM.YYYY HH:mm") < moment().subtract(1, "hours").format("MM.DD.YYYY HH:mm")){
                  appointments.splice(i, 1)
              }
          }
          this.setState({
              appointments: appointments
          });

          this.props.receiveAppointment(this.state.appointments);
      }
    }, 1000);



  render() {
    return (
      <div className={'appointment-container'}>
            <label className={"appointment-content"}>{this.props.time}</label>
            <label>{this.props.text}</label>
            <Button className={"delete-appointment"} onClick={this.deleteAppointment}>X</Button>
      </div>
    );
  }
}

export default Appointment;