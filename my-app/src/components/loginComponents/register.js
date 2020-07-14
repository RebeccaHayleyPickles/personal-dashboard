import React from "react";
import { registerUser } from "../../utils/registerUser";
import { Redirect } from "react-router";
import './style.scss';

class Register extends React.Component {
    state = {
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        toLanding: false
      };
    
      handleChange = event => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({ [name]: value });
      };
    
      submitRequest = event => {
        event.preventDefault();
        let password = this.state.password,
          confirmPassword = this.state.confirmPassword;
        if (password === confirmPassword) {
          let params = {
            username: this.state.username,
            email: this.state.email,
            password
          };
          registerUser("./register", params).then(response => {
            if (response.result === "success") {
              alert(`${params.username}, now please log in`);
              this.setState({ toLanding: true });
            } else {
              alert("This username or email already registered");
            }
          });
        } else {
          alert("Confirm Password is not the same as password");
        }
      };

  render() {
    if (this.state.toLanding) {
        return <Redirect to="/" />;
    }
    return (
      <div className="base-container">
        <div className="head">Register</div>
        <div className="content">
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" name="username" placeholder="username" value={this.state.username} onChange={this.handleChange}/>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" placeholder="email" value={this.state.email} onChange={this.handleChange}/>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="text" name="password" placeholder="password" value={this.state.password} onChange={this.handleChange}/>
            </div>
            <div className="form-group">
            <input className="form-group" name="confirmPassword" placeholder="Confirm password" value={this.state.confirmPassword} onChange={this.handleChange}/>
            </div>
          </div>
        </div>
        <div className="foot">
          <button className="regbtn" onClick={this.submitRequest} />
        </div>
      </div>
    );
  }
};

export default Register;