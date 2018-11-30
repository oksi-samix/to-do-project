import React, {Component} from 'react';
import connect from "react-redux/es/connect/connect";

class App extends Component {

    render() {
        const {error} = this.props;
        return (
            <div>
                {error ?
                    <div className="error">
                        {error.toString()}
                    </div> : null}
                {this.props.children}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        error: state.errors.msg,
    }
};

export default connect(mapStateToProps, null)(App);

