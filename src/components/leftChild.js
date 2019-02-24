import React, { Component } from "react";
import { connect } from "react-redux";
import RightChild from "./rightChild";
import search from "../assests/images/search.png";
class LeftChild extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            btnCls: "btn urlBtn",
            contentData: {},
            key: ""
        };
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps && nextProps.data) {
            this.setState({ data: nextProps.data });
        }
        if (nextProps && nextProps._apiCall && nextProps._apiCall.items) {
            this.setState({
                contentData: {
                    obj: nextProps._apiCall.items[0],
                    index: "URL 1"
                }
            });
        }
    }
    selectedUrl(obj, index) {
        this.setState({
            contentData: { obj: obj, index: index }
        });
    }
    search = () => {
        let key = this.refs.searchKey.value.toUpperCase();

        const { _apiCall } = this.props;
        if (_apiCall && _apiCall.items) {
            _apiCall.items.map((obj, index) => {
                // console.log(`URL_${index+1}`)
                if (key === `URL_${index + 1}`) {
                    this.setState({
                        contentData: { obj: obj, index: `URL_${index + 1}` }
                    });
                }
            });
        }
    };

    changeBackgroundColor() {
        return "active";
    }
    render() {
        return (
            <React.Fragment>
                <div className="container-fluid">
                    <div className="container">
                        <div className="left_child">
                            <div className="div_input">
                                <div className="form-group col-sm-8">
                                    <input
                                        ref="searchKey"
                                        type="text"
                                        className="form-control"
                                        placeholder="text/url"
                                    />
                                </div>
                                <div className="serch_div">
                                    <div className="search_icon">
                                        <button onClick={this.search}>
                                            <img src={search} alt="" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="btns">
                                {this.state.data &&
                                    this.state.data.map((obj, index) => (
                                        <div className="btnContain" key={index}>
                                            <button
                                                className={`${
                                                    this.state.btnCls
                                                } ${this.changeBackgroundColor(
                                                    index
                                                )} `}
                                                onClick={() =>
                                                    this.selectedUrl(
                                                        obj,
                                                        `URL_${index + 1}`
                                                    )
                                                }
                                            >
                                                URL {index + 1}
                                            </button>
                                        </div>
                                    ))}
                            </div>
                        </div>
                        <div className="right_child">
                            <RightChild
                                data={
                                    this.state.contentData &&
                                    this.state.contentData
                                }
                            />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
const mapState = ({ apiCall }) => {
    return {
        _apiCall: apiCall
    };
};

export default connect(mapState)(LeftChild);
