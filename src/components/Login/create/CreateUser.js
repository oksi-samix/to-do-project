import React, {Component} from 'react';
import PropTypes from 'prop-types'
import { connect } from "react-redux";
import {addName, addPass, submitForm} from "../../../actions/login";
import '../Login.scss'

class CreateUser extends Component {

    constructor(props){
        super(props);
    }

    submitForm = (ev) => {
        const { email, password } = this.props;
        ev.preventDefault();
        this.props.submitForm(email, password);
    };

    setName = (value) => {
        this.props.addName(value);
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
        const {setName, setPass, submitForm} = this;
        return (
            <div className="login">
                <form className="login-form" onSubmit={(ev) => submitForm(ev)}>
                    <input type="text"
                           value={email}
                           placeholder="enter email"
                           onChange={(ev) => setEmail(ev.target.value)}/>
                    <input type="text"
                           value={email}
                           placeholder="enter name"
                           onChange={(ev) => setName(ev.target.value)}/>
                    <input type="text"
                           value={email}
                           placeholder="enter password"
                           onChange={(ev) => setPass(ev.target.value)}/>
                    <input type="password"
                           value={pass}
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
        addName: (email) => {dispatch(addName(email))},
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

export default connect(mapStateToProps, mapDispatchToProps)(CreateUser);
