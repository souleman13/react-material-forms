import React, { Component } from 'react'

import RaisedButton from 'material-ui/RaisedButton'
import FlatButton from 'material-ui/FlatButton'
import Drawer from 'material-ui/Drawer'
import Dialog from 'material-ui/Dialog'

//submit button for forms 
export const SubmitButton = () => <RaisedButton type='submit' label='Submit' />

//knows how to open/close a modal
//as well as pass another component
//to display on the modal
export class DrawerButton extends Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false
        }
    }
    render() {
        return (
            <div>
                <FlatButton label={this.props.label} onClick={e => this.setState({ open: !this.state.open })} />
                <Drawer openSecondary={this.props.secondary} docked={false} open={this.state.open} onRequestChange={e => this.setState({ open: !this.state.open })}>
                    <div>{this.props.display}</div>
                </Drawer>
            </div>
        )
    }
}

export class ModalButton extends Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false
        }
    }
    render() {
        return (
            <div>
                <FlatButton label={this.props.label} onClick={e => this.setState({ open: !this.state.open })} />
                <Dialog
                    actions={<RaisedButton label='Close' onClick={e => this.setState({open: !this.state.open})}/>}
                    open={this.state.open}
                    onRequestClose={e => this.setState({open: !this.state.open})}
                >
                    <div>{this.props.display}</div>
                </Dialog>
            </div>
        )
    }
}