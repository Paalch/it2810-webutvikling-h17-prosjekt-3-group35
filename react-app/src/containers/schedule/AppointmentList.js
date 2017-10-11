import React, {Component} from 'react'
import Appointment from "./Appointment";
import moment from 'moment'


const firstBy = require('thenby');


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
    const appointments = (this.state.appointments).sort(
        firstBy((a, b) => a[0].isAfter(b[0])).
        thenBy((a, b) => a[1].isAfter(b[1]))).map((apps, i) =>
      <Appointment
          content={apps}
        text={apps[2]} moment={apps[2]} key={i} id={apps[3]} time={apps[0].format("DD.MM.YYYY") + " " + apps[1].format("HH:mm")} color={apps[4]} appointments={this.state.appointments}
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