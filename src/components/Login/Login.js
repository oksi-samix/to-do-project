import React, {Component} from 'react';
import PropTypes from 'prop-types'
import { connect } from "react-redux";

import SignIn  from './signIn';
import CreateUser  from './create';


class Login extends Component {

    render() {
        return (
            <>
                {
                    !this.props.isLogin ?
                        <SignIn/> : <CreateUser/>
                }
            </>

        );
    }
}


const mapDispatchToProps = (dispatch) => {
    // return {
    //     addName: (email) => {dispatch(addName(email))},
    //     addPass: (pass) => {dispatch(addPass(pass))},
    //     submitForm: (email, password) => {dispatch(submitForm(email, password))},
    // }
};

const mapStateToProps = (state) => {
    return {
        isLogin: state.login.isLogin,
    }
};

export default connect(mapStateToProps, null)(Login);
