import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {addFirstName, addLastName, addPass, createUser, addEmail, addConfirmPass} from "../../../actions/login";
import {resetError} from "../../../actions/errors";
import '../Login.scss'

class CreateUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            errors: {
                email: false,
                pass: false,
                confirmPass: false
            }
        }
    }
    submitForm = () => {
        if (!this.state.errors.email && !this.state.errors.pass && !this.state.errors.confirmPass) {
            this.props.createUser();
        }
    };

    validateData = (ev) => {
        ev.preventDefault();
        this.setState({
            errors: {
                email: this.props.email.length === 0,
                pass: this.props.email.length === 0,
                confirmPass: this.props.pass !== this.props.confirmPass,
            }
        }, () => this.submitForm())
    };

    setFirstName = (value) => {
        this.resetErrors();
        this.props.addFirstName(value);
    };

    setLastName = (value) => {
        this.resetErrors();
        this.props.addLastName(value);
    };

    setPass = (value) => {
        this.resetErrors();
        this.props.addPass(value);
    };

    setEmail = (value) => {
        this.resetErrors();
        this.props.addEmail(value);
    };

    setConfirmPass = (value) => {
        this.resetErrors();
        this.props.addConfirmPass(value);
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
        const {email, pass, firstName, lastName, confirmPass} = this.props;
        const {errors} = this.state;
        const {setFirstName, setLastName, setPass, validateData, setConfirmPass, setEmail} = this;
        return (
            <div className="login">
                <form className="login-form" onSubmit={(ev) => validateData(ev)}>
                    <input type="text"
                           value={email}
                           placeholder="enter email"
                           onChange={(ev) => setEmail(ev.target.value)}/>
                    {errors.email ? <span>Please, enter email</span> : null}
                    <input type="text"
                           value={firstName}
                           placeholder="enter first name"
                           onChange={(ev) => setFirstName(ev.target.value)}/>
                    <input type="text"
                           value={lastName}
                           placeholder="enter last name"
                           onChange={(ev) => setLastName(ev.target.value)}/>
                    <input type="password"
                           value={pass}
                           placeholder="enter password"
                           onChange={(ev) => setPass(ev.target.value)}/>
                    {errors.pass ? <span>Please, enter pass</span> : null}
                    <input type="password"
                           value={confirmPass}
                           placeholder="confirm password"
                           onChange={(ev) => setConfirmPass(ev.target.value)}/>
                    {errors.confirmPass ? <span>Password and confirm password should be the same</span> : null}
                    <input type="submit" value="submit"/>
                </form>
            </div>

        );
    }
}

CreateUser.propTypes = {
    email: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    pass: PropTypes.string.isRequired,
    confirmPass: PropTypes.string.isRequired,
};

const mapDispatchToProps = (dispatch) => {
    return {
        addEmail: (email) => {
            dispatch(addEmail(email))
        },
        addFirstName: (firstName) => {
            dispatch(addFirstName(firstName))
        },
        addLastName: (lastName) => {
            dispatch(addLastName(lastName))
        },
        addPass: (pass) => {
            dispatch(addPass(pass))
        },
        addConfirmPass: (pass) => {
            dispatch(addConfirmPass(pass))
        },
        createUser: () => {
            dispatch(createUser())
        }
    }
};

const mapStateToProps = (state) => {
    return {
        email: state.login.email,
        firstName: state.login.firstName,
        lastName: state.login.lastName,
        pass: state.login.pass,
        name: state.login.name,
        confirmPass: state.login.confirmPass,
        username: state.user.user.firstName
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateUser);
