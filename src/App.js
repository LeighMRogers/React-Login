import React from 'react';
import './App.css';
import Navbar from '../src/nav/Navbar'
import ApplicationViews from './components/ApplicationViews'
import Login from './components/auth/Login'
import { Component } from 'react';

class App extends Component {

  state={
    user: sessionStorage.getItem("credentials") !== null
  }

  // Check if credentials are in local storage
  //returns true/false
  isAuthenticated = () => sessionStorage.getItem("credentials") !== null

  setUser = (authObj) => {
    /*
      For now, just store the email and password that
      the customer enters into local storage.
    */
    sessionStorage.setItem(
      "credentials",
      JSON.stringify(authObj)
    )
    this.setState({
      user: this.isAuthenticated()
    });
  }

  clearUser = () => {
    sessionStorage.clear()

    this.setState({
        user: this.isAuthenticated()
    });

  }

  componentDidMount(){
    this.setState({
      user: this.isAuthenticated()
    })
  }

  render() {
    return (
      <>
        {this.state.user ? (
          <>
          <ApplicationViews/>
          <Navbar/>
          </>
          )
         : (
          <Login setUser={this.setUser}/>
         )}
      </>
    )
  }
}

export default App;
