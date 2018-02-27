import React, { Component } from 'react';
import TextField from 'material-ui/TextField'
import { SubmitButton } from '../Buttons'

export default class extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: ''
        }
    }
    submitForm = (e) => {
        e.preventDefault() //this stops the page from redireting when you hit submit
        alert(`Password Reset Sent: ${this.state.email}`)
        window.location.replace('/login')
    }

    render() {
        return (
            <form onSubmit={e => { this.submitForm(e) }}>
                <TextField required floatingLabelText={`Email`} onChange={(e) => this.setState({ email: e.target.value })} />
                <SubmitButton />
            </form>
        )
    }
}