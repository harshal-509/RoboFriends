import React, { Component } from "react";
class Searchbox extends Component {
    constructor(props) {
        super(props);
        this.onsearch = props.onsearch;
    }
    render() {
        return (
            <div className="pa2">
                <input className="pa3 ba b--green bg-lightest-blue"
                    type="search" placeholder="Search robots"
                    onChange={this.onsearch}
                />
            </div>
        )
    }
}
export default Searchbox;