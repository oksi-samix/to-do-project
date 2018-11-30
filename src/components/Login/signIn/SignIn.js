import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {addEmail, addPass, submitForm, goToCreateUser} from "../../../actions/login";
import {resetError} from '../../../actions/errors'
import '../Login.scss'


class SignIn extends Component {

    constructor(props) {
        super(props);
        this.state = {
            errors: {
                email: false,
                pass: false
            }
        }
    }

    submitForm = () => {
        const {email, password} = this.props;
        if (!this.state.errors.email && !this.state.errors.pass) {
            this.props.submitForm(email, password);
        }
    };

    validateData = (ev) => {
        ev.preventDefault();
        this.setState({
            errors: {
                email: this.props.email.length === 0,
                pass: this.props.email.length === 0
            }
        }, () => this.submitForm())
    };

    setEmail = (value) => {
        this.resetErrors();
        this.props.addEmail(value);
    };

    setPass = (value) => {
        this.resetErrors();
        this.props.addPass(value);
    };

    createUser = () => {
        return this.props.goToCreateUser();
    };

    resetErrors = () => {
        this.setState({
            errors: {
                email: false,
                pass: false
            }
        })
    };

    render() {
        const {email, pass} = this.props;
        const {errors} = this.state;
        const {setEmail, setPass, validateData, createUser} = this;
        return (
            <div className="login">
                <form className="login-form" onSubmit={(ev) => validateData(ev)}>
                    <input type="text"
                           value={email}
                           placeholder="enter email"
                           onChange={(ev) => setEmail(ev.target.value)}/>
                    {errors.email ? <span>Please, enter email</span> : null}
                    <input type="password"
                           value={pass}
                           placeholder="enter password"
                           onChange={(ev) => setPass(ev.target.value)}/>
                    {errors.pass ? <span>Please, enter password</span> : null}
                    <input type="submit" value="submit"/>
                </form>
                <a href="#" rel="nofollow" onClick={() => createUser()}>Create a new user</a>
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
        addEmail: (email) => {
            dispatch(addEmail(email))
        },
        addPass: (pass) => {
            dispatch(addPass(pass))
        },
        submitForm: (email, password) => {
            dispatch(submitForm(email, password))
        },
        goToCreateUser: () => {
            dispatch(goToCreateUser())
        }
    }
};

const mapStateToProps = (state) => {
    return {
        email: state.login.email,
        pass: state.login.pass,
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
