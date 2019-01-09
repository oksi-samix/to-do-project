import React, {Component} from 'react';
import {addName, addPass, submitForm} from "../../actions/login";
import connect from "react-redux/es/connect/connect";
import {getShopInfo} from "../../services";

import Dashboard from '../dashboard';
import ToDoComponent from '../todoComponent';
import Product from '../product';
import {Tabs, Tab} from '../tabs';
import {data} from './task'


const week = ['пн', 'вт', 'ср', 'чт', 'пт', 'cб', 'вс'];
const currentDay = new Date().getDay();

class Home extends Component {
    state = {currentTab: currentDay - 1};

    setCurrentTab = (index) => {
        this.setState({
            currentTab: index
        })
    };

    render() {
        const {currentTab} = this.state;
        return (<div>
            {currentTab}
            {/*<Dashboard*/}
            {/*user={props.user}*/}
            {/*products={50}*/}
            {/*url='linkUrl'*/}
            {/*tasks={{total: 50, published: 3}}*/}
            {/*/>*/}
            {/*<ToDoComponent/>*/}
            <Tabs selectedIndex={currentDay - 1} currentTab={this.setCurrentTab}>
                {week.map((item, index) =>
                    <Tab title={item} key={item}>
                        <ToDoComponent list={data[currentTab]} key={currentTab}/>
                    </Tab>
                )}
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
