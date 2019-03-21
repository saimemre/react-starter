import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { loginRequest as loginRequestAction } from '../actions';

import backgroundImage from '../assets/images/loginBg.png';

class Login extends Component {

    constructor(props) {
        super(props);
    
        this.login = this.login.bind(this);
    
        this.email = React.createRef();
        this.password = React.createRef();
        
    }

    isFilled() {
        return this.email.current.value !== '' && this.password.current.value !== '';
    }

    login() {
        const { loginRequest } = this.props;
        
        const email = this.email.current.value;
        const password = this.password.current.value;
        
        if (this.isFilled) {
          loginRequest(email, password);
        }
        
      }


    render(){
        
        return (
            <div class="auth-wrapper aut-bg-img" style={authStyle}>
                <div class="auth-content">
                    <div class="text-white">
                        <div class="card-body text-center">
                            <div class="mb-4">
                                <image style={logoStyle} />
                            </div>
                            <h3 class="mb-4 text-white">Giriş Yap</h3>
                            <div class="input-group mb-3">
                                <input type="email" class="form-control" placeholder="Email" ref={this.email} />
                            </div>
                            <div class="input-group mb-4">
                                <input type="password" class="form-control" placeholder="password" ref={this.password} />
                            </div>
                            <div class="form-group text-left">
                                <div class="checkbox checkbox-fill d-inline">
                                    <input type="checkbox" name="checkbox-fill-1" id="checkbox-fill-a1" checked="" />
                                    <label for="checkbox-fill-a1" class="cr"> Save credentials</label>
                                </div>
                            </div>
                            <button class="btn btn-success shadow-2 mb-4" onClick={this.login}>Giriş Yap</button>
                            <p class="mb-2 text-muted"><a class="text-white" href="auth-reset-password-v3.html">Şifremi unuttum.</a></p>
                            <p class="mb-0 text-muted"> <a class="text-white" href="auth-signup-v3.html">Hesbaınız yok mu? Kayıt olun.</a></p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

var authStyle = {
    width: "100%",
    height: "100%",
    backgroundImage: `url(${backgroundImage})`
};

var logoStyle = {
    width: "300",
    height: "100"
};


Login.propTypes = {
    navigation: PropTypes.shape({
      push: PropTypes.func.isRequired
    }).isRequired
};
  
Login.defaultProps = {
  
};
  
const mapDispatchToProps = {
    loginRequest: loginRequestAction
};

export default connect(null, mapDispatchToProps)(Login);
