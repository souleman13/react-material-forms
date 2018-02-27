import React, { Component } from 'react';

import AppBar from 'material-ui/AppBar';
import MenuItem from 'material-ui/MenuItem';
import Drawer from 'material-ui/Drawer';
import { DrawerButton, ModalButton } from './Buttons'
import LoginForm from './forms/Login'

export default class extends Component {
    constructor(props) {
        super(props);
        this.state = { open: false }
    }
    toggleDrawer = () => { this.setState({ open: !this.state.open }) }

    redirect = (route) => { window.location.replace(route) }

    render() {


        return (
            <header>
                <AppBar title="React-Forms"
                    onLeftIconButtonClick={this.toggleDrawer}
                    iconElementRight={
                        <span className="force-row">
                            <DrawerButton secondary={true} label='Drawer' display={<LoginForm />} />
                            <ModalButton secondary={true} label='Modal' display={<LoginForm />} />
                        </span>
                    }
                />
                <Drawer docked={false} open={this.state.open} onRequestChange={this.toggleDrawer}>
                    <MenuItem onClick={() => this.redirect('/')}>Home</MenuItem>
                    <MenuItem onClick={() => this.redirect('/login')}>Login</MenuItem>
                    <MenuItem onClick={() => this.redirect('/user/signup')}>Register</MenuItem>
                </Drawer>
            </header>
        );
    }
}