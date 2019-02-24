import React, { Component } from "react";
import format from "date-fns/format";
class RightChild extends Component {
    state = {
        data: []
    };
    componentWillReceiveProps(nextProps) {
        if (nextProps && nextProps.data) {
            this.setState({ data: nextProps.data }, () => {
                console.log(this.state.data);
            });
        }
    }
    render() {
        const { data } = this.state;
        const regex = /(<([^>]+)>)/gi;

        return (
            <div className="child_right">
                <div className="heading">
                    <h1>{data.index}</h1>
                </div>
                <div className="child_right_data">
                    <div>
                        <h6>
                            titile -
                            {data.obj && format(data.obj.pubDate, "D/MM/YYYY")}
                        </h6>
                    </div>
                    <div className="url_data">
                        {data.obj && data.obj.description.replace(regex, "")}
                    </div>
                </div>
            </div>
        );
    }
}

export default RightChild;
