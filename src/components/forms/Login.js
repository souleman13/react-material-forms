import React, { Component } from 'react';
import TextField from 'material-ui/TextField'
import { SubmitButton } from '../Buttons'

export default class extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            pw: ''
        }
    }
    submitForm = (e) => {
        e.preventDefault() //this stops the page from redireting when you hit submit
        alert(`Email: ${this.state.email} - PW: ${this.state.pw}`)
    }

    render() {
        return (
            <form onSubmit={e => { this.submitForm(e) }}>
                <TextField required floatingLabelText={`Email`} onChange={(e) => this.setState({ pw: e.target.value })} />
                <TextField required floatingLabelText={`Password`} onChange={(e) => this.setState({ pw: e.target.value })} />
                <SubmitButton />
            </form>
        )
    }
}