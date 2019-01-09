import React, {Component} from 'react';
import connect from "react-redux/es/connect/connect";

import CustomeInput from '../customeInput';
import ToDoComponent from '../todoComponent';
import {Tabs, Tab} from '../tabs';


class Product extends Component {
    state = {
        data: {
            price: 45,
            title: "My super product",
            descr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus massa nibh, ac congue purus suscipit eget. Vestibulum dignissim elit scelerisque ligula sodales, eu vehicula elit posuere. Sed malesuada sodales consequat. In laoreet, sapien vitae commodo malesuada, augue urna tristique diam, nec rhoncus tortor lorem nec ipsum. Morbi eu ante elit. Pellentesque ipsum eros, aliquet et urna sed, mattis rhoncus mi. Nunc dictum nisi eu diam aliquam, non posuere mauris eleifend."
        }
    };

    changeVal = (value, name) => {
        console.log(value, name);
        this.setState({
            data: {
                ...this.state.data,
                [name]: value
            }

        });
    };

    render() {
        const {data} = this.state;
        return (
            <div>
                <h2>TITLE :
                    <CustomeInput
                        value={data.title}
                        name="title"
                        changeVal={this.changeVal}
                        onLoose={this.onLoose}/>
                </h2>
                <CustomeInput
                    value={data.price}
                    name="price"
                    onLoose={this.onLoose}
                    changeVal={this.changeVal}
                />
                <CustomeInput
                    value={data.descr}
                    name="descr"
                    textarea={true}
                    changeVal={this.changeVal}
                    onLoose={this.onLoose}
                />
                <button>Save</button>

            </div>)
    }
}


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

export default connect(mapStateToProps, mapDispatchToProps)(Product);
