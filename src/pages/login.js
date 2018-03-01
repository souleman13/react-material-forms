import React, { Component } from 'react';
import LoginForm from '../components/forms/Login'

export default class extends Component {
  render() {
    return (
      <main className='force-col'>
        <h2>Please Login!</h2>
        <LoginForm />
        <a href='/user/reset'>Reset Password</a>
        <a href='/user/signup'>Sign-Up</a>
      </main>
    )
  }
}