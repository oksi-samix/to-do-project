import React, {Component} from 'react';
import PropTypes from 'prop-types'
import { connect } from "react-redux";
import {addEmail, addPass, submitForm} from "../../../actions/login";
import '../Login.scss'


class SignIn extends Component {

    constructor(props){
        super(props);
        this.state = {
            errors:{
                email: false,
                pass: false
            }
        }
    }

    submitForm = () => {
        const { email, password } = this.props;
        if( !this.state.errors.email && !this.state.errors.pass){
            this.props.submitForm(email, password);
        }
    };

    validateData = (ev) => {
        ev.preventDefault();
        this.setState({
            errors:{
                email: this.props.email.length === 0,
                pass: this.props.email.length === 0
            }
        }, () => this.submitForm())
    };

    setEmail = (value) => {
        this.props.addEmail(value);
    };

    setPass = (value) => {
        this.props.addPass(value);
    };

    componentDidUpdate(prevProps, prevState) {
        if(this.props.username){this.navigateToHomePage()}
    }

    navigateToHomePage = () => {
        this.props.history.push('/home')
    };

    render() {
        const {email, pass} = this.props;
        const {errors} = this.state;
        const {setEmail, setPass, validateData} = this;
        return (
            <div className="login">
                <form className="login-form" onSubmit={(ev) => validateData(ev)}>
                    <input type="text"
                           value={email}
                           placeholder="enter email"
                           onChange={(ev) => setEmail(ev.target.value)}/>
                    {errors.email ?  <span>Please, enter email</span> : null }
                    <input type="password"
                           value={pass}
                           placeholder="enter password"
                           onChange={(ev) => setPass(ev.target.value)}/>
                    {errors.pass ?  <span>Please, enter password</span> : null }
                    <input type="submit" value="submit"/>
                </form>
            </div>

        );
    }
}

SignIn.propTypes = {
    email: PropTypes.string.isRequired,
    pass: PropTypes.string.isRequired,
};

const mapDispatchToProps = (dispatch) => {
    return {
        addEmail: (email) => {dispatch(addEmail(email))},
        addPass: (pass) => {dispatch(addPass(pass))},
        submitForm: (email, password) => {dispatch(submitForm(email, password))},
    }
};

const mapStateToProps = (state) => {
    return {
        email: state.login.email,
        pass: state.login.pass,
        username: state.user.user.firstName
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
