import React, { Component } from 'react';
import TextField from 'material-ui/TextField'
import { SubmitButton } from '../Buttons'

export default class extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Firstname: '',
            Lastname: '',
            email: '',
            pw:''
        }
    }
    submitForm = (e) => {
        e.preventDefault() //this stops the page from redireting when you hit submit
        console.log(this.state)
        alert(`Thanks for creating an account!`)
        window.location.replace('/login')
    }

    render() {
        return (
            <form onSubmit={e => { this.submitForm(e) }}>
                <TextField required floatingLabelText={`Firstname`} onChange={(e) => this.setState({ Firstname: e.target.value })} />
                <TextField required floatingLabelText={`Lastname`} onChange={(e) => this.setState({ Lastname: e.target.value })} />
                <TextField required floatingLabelText={`Email`} onChange={(e) => this.setState({ email: e.target.value })} />
                <TextField required floatingLabelText={`Password`} onChange={(e) => this.setState({ pw: e.target.value })} />
                {/* DoB datepicker */}
                {/* country dropdown */}
                <SubmitButton />
            </form>
        )
    }
}