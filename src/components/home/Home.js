import React, {Component} from 'react';
import {addName, addPass, submitForm} from "../../actions/login";
import connect from "react-redux/es/connect/connect";
import {getShopInfo} from "../../services";

import Dashboard from '../dashboard';
import ToDoComponent from '../todoComponent';
import Product from '../product';
import {Tabs, Tab} from '../tabs';

class Home extends Component {

    render() {
        return (<div>
            {/*<Dashboard*/}
            {/*user={props.user}*/}
            {/*products={50}*/}
            {/*url='linkUrl'*/}
            {/*tasks={{total: 50, published: 3}}*/}
            {/*/>*/}
            {/*<ToDoComponent/>*/}
            <Tabs>
                <Tab title='Tab 1'>
                    <h3>Tab header 1</h3>
                    <p>Some content is here</p>
                </Tab>

                <Tab title='Tab 2'>
                    <h3>Tab header 2</h3>
                    <p>Some content is here</p>
                    <time>{new Date().toLocaleDateString()}</time>
                </Tab>
            </Tabs>

            <Product/>

        </div>)
    }

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
