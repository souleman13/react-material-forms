import React, { Component } from 'react';
//material components
import TextField from 'material-ui/TextField'
import DatePicker from 'material-ui/DatePicker'
import MenuItem from 'material-ui/MenuItem'
import SelectField from 'material-ui/SelectField'
//my components
import { SubmitButton } from '../Buttons'
//data
import states from '../../data/states'

export default class extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Firstname: '',
            Lastname: '',
            email: '',
            pw: '',
            dob: '',
            S: ''
        }
    }

    submitForm = () => {
        console.log(this.state)
        alert(`Thanks for creating an account!`)
        //uncomment the next line to redirect to login post submit
        // window.location.replace('/login')
    }

    render() {
        return (
            <form onSubmit={e => {
                e.preventDefault() //this stops the page from redireting when you hit submit
                this.submitForm()
            }}>
                <TextField required floatingLabelText={`Firstname`} onChange={e => this.setState({ Firstname: e.target.value })} />
                <TextField required floatingLabelText={`Lastname`} onChange={e => this.setState({ Lastname: e.target.value })} />
                <TextField required floatingLabelText={`Email`} onChange={e => this.setState({ email: e.target.value })} />
                <TextField required type='password' floatingLabelText={`Password`} onChange={(e) => this.setState({ pw: e.target.value })} />
                {/* DoB datepicker, note this saves the date as a dateTime object type
                this value is usable, but for this example i use .toString() method to change
                the data type to string just before it is assigned to state*/}
                <DatePicker hintText="Date of Birth" mode="landscape" onChange={(e, date) => this.setState({ dob: date.toString() })} />

                {/* country dropdown, onChange func is slightly different here,
                cant use 'state' as variable name here, it is an overloaded word */}
                <SelectField
                    floatingLabelText="State"
                    value={this.state.S}
                    onChange={(e, i, value) => this.setState({ S: value })}>
                    <MenuItem value={null} primaryText="Click to Select" />
                    {states.map(s => <MenuItem key={s.abbreviation} value={s.name} primaryText={s.name} />)}
                </SelectField>
                <SubmitButton />
            </form>
        )
    }
}