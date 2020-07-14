import React from "react";
import { Redirect } from "react-router";
import { connect } from "react-redux";
import './style.scss';

import { loginUserAction } from "../../utils/loginUser";

class Login extends React.Component {
    state = { username: '', password: '', toRegister: false };
    
      handleChange = event => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({ [name]: value });
      };
    
      redirectSignup = event => {
        this.setState({ toRegister: true });
      };
    
      submitRequest = event => {
        event.preventDefault();
        let params = {
          username: this.state.username,
          password: this.state.password
        };
        this.props.loginUserAction(params);
      };

  render() {
    if (this.state.toRegister) {
        return <Redirect to="/signup" />;
    }
    if (this.props.isLoggedin) {
        return <Redirect to="/" />;
    }
    return (
      <div className="base-container">
        <div className="head">Login</div>
        <div className="content">
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" name="username" placeholder="username" value={this.state.username} onChange={this.handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" placeholder="password" value={this.state.password} onChange={this.handleChange}/>
            </div>
          </div>
          <div className="foot">
            <button className="logbtn" onClick={this.submitRequest} />
          </div>
        </div>
        <p className="login-signup-link">
          <a href="/register">Don't have an account?</a>
        </p>
      </div>
    );
  }
};

const mapStateToProps = state => {
    return {
      isLoggedin: state.isLoggedin,
      username: state.username
    };
  };
  
export default connect(mapStateToProps, { loginUserAction })(Login);