import React, {Component} from 'react';
import { connect } from "react-redux";
import { Redirect } from 'react-router';

import SignIn  from './signIn';
import CreateUser  from './create';


class Login extends Component {



    componentDidUpdate(prevProps, prevState, snapshot) {
        if( prevProps.username !== this.props.username){
            console.log('here');
            return  <Redirect to='/home' />;
        }
    }

    render() {
        return (
            <>
                {
                    this.props.isLogin ?
                        <SignIn/> : <CreateUser/>
                }
            </>

        );
    }
}


const mapStateToProps = (state) => {
    return {
        isLogin: state.login.isLogin,
        username: state.user.user.firstName
    }
};

export default connect(mapStateToProps, null)(Login);
