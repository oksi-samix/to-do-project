import React from 'react';
import {addName, addPass, submitForm} from "../../actions/login";
import connect from "react-redux/es/connect/connect";

import Dashboard from '../dashboard';
import ToDoComponent from '../todoComponent';
import {Tabs, Tab} from '../tabs';

const tabs = [
    {id: 0, title: 'Tab 1', content: 'Some text is here'},
    {id: 1, title: 'Tab 2', content: 'Another content'},
    {id: 2, title: 'Tab 1', content: 'Third text'}
];

const Home = (props) => {
        return (<div>
            <Dashboard
                user={props.user}
                products={50}
                url='linkUrl'
                tasks={{total: 50, published: 3}}
            />
            <ToDoComponent/>
            <Tabs tabs={tabs}/>
        </div>)
    }
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
