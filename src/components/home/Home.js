import React from 'react';
import {addName, addPass, submitForm} from "../../actions/login";
import connect from "react-redux/es/connect/connect";

import Dashboard from '../dashboard';
import ToDoComponent from '../todoComponent';

const Home = (props) => {
    return(<div>
        <Dashboard
            user={props.user}
            products={50}
            url='linkUrl'
            tasks={{total: 50, published: 3}}
        />
        <ToDoComponent />
    </div>)}
;


const mapDispatchToProps = (dispatch) => {
    return {
        // addName: (email) => {dispatch(addName(email))},
        // addPass: (pass) => {dispatch(addPass(pass))},
        // submitForm: (email, password) => {dispatch(submitForm(email, password))},
    }
};

const mapStateToProps = (state) => {
    return {
        user: state.user.user
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
