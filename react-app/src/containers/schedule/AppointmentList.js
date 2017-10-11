import React, {Component} from 'react'
import Appointment from "./Appointment";



class AppointmentList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      appointments: this.props.appointments
    };
    this.receiveAppointment = this.receiveAppointment.bind(this);
  }

  receiveAppointment(appointments) {
    this.state = {
      appointments: appointments
    };
    this.props.onAppointments(this.state.appointments);
  }

  render() {
    const appointments = (this.state.appointments).sort((a, b) => a[2] > b[2]).map((apps, i) =>
      <Appointment
          content={apps}
        text={apps[1]} moment={apps[2]} key={i} id={apps[3]} time={apps[0]} color={apps[4]} appointments={this.state.appointments}
        receiveAppointment={this.receiveAppointment}/>);
    return (
      <div>
        <div>
          {appointments}
        </div>
      </div>
    );

  }
}

export default AppointmentList;