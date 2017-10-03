import React, {Component, PropTypes} from 'react'
import moment from 'moment'
import DatePicker from 'react-datepicker'

import './appointment.css'
import 'react-datepicker/dist/react-datepicker.css';


class CreateAppointment extends Component {

    constructor(props){
        super(props);
        this.state = {
            date: moment,
            time: moment,
            details: "",
            label: ""
        }
    }

    render(){
        return(
            <div className={'appointment-container'}>
                <DatePicker/>
                <button>create</button>

            </div>
        )
    }
}

export default CreateAppointment;