import React, {Component} from 'react';
import PropTypes from 'prop-types'
import {connect} from "react-redux";
import {addFirstName, addLastName, addPass, createUser, addEmail, addConfirmPass} from "../../../actions/login";
import '../Login.scss'

class CreateUser extends Component {

    constructor(props) {
        super(props);
    }

    submitForm = (ev) => {
        ev.preventDefault();
        this.props.createUser();
    };

    setFirstName = (value) => {
        this.props.addFirstName(value);
    };

    setLastName = (value) => {
        this.props.addLastName(value);
    };

    setPass = (value) => {
        this.props.addPass(value);
    };

    setEmail = (value) => {
        this.props.addEmail(value);
    };

    setConfirmPass = (value) => {
        this.props.addConfirmPass(value);
    };

    componentDidUpdate(prevProps, prevState) {
        if (this.props.username) {
            this.navigateToHomePage()
        }
    }

    navigateToHomePage = () => {
        this.props.history.push('/home')
    };

    render() {
        const {email, pass, firstName, lastName, confirmPass} = this.props;
        const {setFirstName, setLastName, setPass, submitForm, setConfirmPass, setEmail} = this;
        return (
            <div className="login">
                <form className="login-form" onSubmit={(ev) => submitForm(ev)}>
                    <input type="text"
                           value={email}
                           placeholder="enter email"
                           onChange={(ev) => setEmail(ev.target.value)}/>
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
                    <input type="password"
                           value={confirmPass}
                           placeholder="confirm password"
                           onChange={(ev) => setConfirmPass(ev.target.value)}/>
                    <input type="submit" value="submit"/>
                </form>
            </div>

        );
    }
}

// Login.propTypes = {
//     email: PropTypes.string.isRequired,
//     pass: PropTypes.string.isRequired,
// };

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
        },
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
