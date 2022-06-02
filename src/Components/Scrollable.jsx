import React, { Component } from "react";
class Scrollable extends Component {
    constructor(props) {
        super()
        this.props = props
    }
    render() {
        return (
            <div style={{ overflow: 'scroll', border: '5px solid black', height: '800px' }}>
                {this.props.children}
            </div>
        )
    }
}
export default Scrollable