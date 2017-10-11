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
    const appointments = (this.state.appointments).sort((a, b) => a[1] > b[1]).map((apps, i) =>
      <Appointment
        text={apps[0]} moment={apps[1]} key={i} id={apps[2]} appointments={this.state.appointments}
        receiveAppointment={this.receiveAppointment}/>);
    return (
      <div>
        <div>
          { appointments }
        </div>
      </div>
    );

  }
}

export default AppointmentList;