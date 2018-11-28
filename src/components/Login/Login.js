import React, {Component} from 'react';
import PropTypes from 'prop-types'
import { connect } from "react-redux";
import {addName, addPass, submitForm} from "../../actions/login";
import './Login.scss'

class Login extends Component {

    constructor(props){
        super(props);
        console.log(this.props.userName);
    }

    submitForm = (ev) => {
        const { email, password } = this.props;
        ev.preventDefault();
        this.props.submitForm(email, password);
        // fetch('http://localhost:8086/public/login', {
        //     method: 'POST',
        //     credentials: 'include',
        //     headers: {
        //         'Content-type': 'application/json; charset=utf-8'
        //     },
        //     body: JSON.stringify({email: 'admin@a.com', password: 'admin'})
        // }).then(data => data.json()).then(data => console.log(data))
    };

    setName = (value) => {
        this.props.addName(value);
    };

    setPass = (value) => {
        this.props.addPass(value);
    };

    static getDerivedStateFromProps(nextProps, prevState){
        console.log(nextProps, prevState);
    // else return null;
    }

    render() {
        const {email, pass} = this.props;
        const {setName, setPass, submitForm} = this;
        console.log(this.props);
        return (
            <div className="login">
                <form className="login-form" onSubmit={(ev) => submitForm(ev)}>
                    <input type="text"
                           value={email}
                           onChange={(ev) => setName(ev.target.value)}/>
                    <input type="password"
                           value={pass}
                           onChange={(ev) => setPass(ev.target.value)}/>
                    <input type="submit" value="submit"/>
                </form>
            </div>

        );
    }
}

Login.propTypes = {
    email: PropTypes.string.isRequired,
    pass: PropTypes.string.isRequired,
};

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
        username: state.user
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
