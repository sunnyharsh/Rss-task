import React, { Component } from "react";
import { connect } from "react-redux";

import "./App.css";
import LeftChild from "./components/leftChild";
import { apiCall } from "./store/actions/index.actions";
class App extends Component {
    componentDidMount() {
        this.props.$apiCall();
    }
    render() {
        //console.log("_apiCall", this.props._apiCall);
        return (
            <div>
                <LeftChild
                    data={this.props._apiCall && this.props._apiCall.items}
                />
            </div>
        );
    }
}
const mapState = ({ apiCall }) => {
    return {
        _apiCall: apiCall
    };
};
const mapDispatch = dispatchEvent => ({
    $apiCall: () => dispatchEvent(apiCall())
});

export default connect(
    mapState,
    mapDispatch
)(App);
