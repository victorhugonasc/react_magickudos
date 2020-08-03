
import * as firebase from 'firebase';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LoginForm extends Component{

    auth = undefined;

    INICIAL_STATE = {
        loginMsg: "Sign in",
        user: this.props.user,
        email: "",
        password:"",
        usuario:{}
    };

    constructor (props) {
        super(props);

        const firebaseConfig = {
            apiKey: "AIzaSyByU3WToC7zsog-a88sVYwAVTKPavZnNdM",
            authDomain: "magickudos-auth-firebase.firebaseapp.com",
            databaseURL: "https://magickudos-auth-firebase.firebaseio.com",
            projectId: "magickudos-auth-firebase",
            storageBucket: "magickudos-auth-firebase.appspot.com",
            messagingSenderId: "833527400179",
            appId: "1:833527400179:web:923100e51400228f92d986",
            measurementId: "G-P32K74R2VD"
          };

        this.state = this.INICIAL_STATE;
    }

    componentDidMount() {
        firebase.initializeApp(this.firebaseConfig);
        this.auth = firebase.auth();

        this.auth.onAuthStateChanged((response) => {
            if(response) {
                this.setState({
                    usuario: response
                });
                console.log(response.email, ' - ', response.uid);
                localStorage.setItem('firebaseAuth',this.state.usuario);
            }
           
            else{
                this.setState({
                    usuario: undefined
                });
                localStorage.removeItem('firebaseAuth');
            }
        });
    }

    isValid = () => {
        
        if (!this.state.user.email) {

            this.setState((prevState) => ({
                user: {
                    ...prevState.user,
                    error: "Email field can't be empty!",
                }
            }));
            return false;
        }
        
        if (!this.state.user.password) {

            this.setState((prevState) => ({
                user: {
                    ...prevState.user,
                    error: "Password field can't be empty!",
                }
            }));
            return false;
        }
        
        return true;
    }

    updateEmail = (value) => {
        this.setState({
            email:value
        });
    };

    updatePassword = (value) => {
        this.setState({
            password:value
        });
    };


    onSubmit = (event) => {
        event.preventDefault();
        if(this.isValid())
        {

            this.auth.signInWithEmailAndPassword(this.state.email,this.state.password).then(response => {
                console.log(response.email, ' - ', response.uid);
                this.setState({
                    usuario: response
                })
            })
            .catch(function(error){
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorCode,' - ',errorMessage);
            });

           this.props.createUser(this.state.user);
           this.setState(this.INICIAL_STATE);
        }
    };

    render()
    {
        return(
            <div>
                <form method="post" noValidate>
                    <div className="login-default">
                        <h5 className="form-welcome-msg">{this.state.loginMsg}</h5>
                        <div className="fields">
                            <input id="inputEmail" placeholder="email" type="text" value={this.state.email} required onChange={event => this.updateEmail(event.target.value)}/>
                            <input id="inputPassword" placeholder="password" type="password" value={this.state.password} required onChange={event => this.updatePassword(event.target.value)}/>
                            <button className="createButton" onClick={this.onSubmit}>Login!</button>
                            <h5 className="inputError">{this.state.user.error}</h5>
                        </div>
                        
                    </div>
                </form>
            </div> 
        );
    }
}

LoginForm.propTypes = {
    user: PropTypes.object.isRequired,
    createUser: PropTypes.func.isRequired
}

export default LoginForm;