import React from "react";
import Card from "./Card";
class CardList extends React.Component {
    constructor(props) {
        super(props);
        this.props = props
    }
    render() {
        const card_component = this.props.robots.map((item, i) => {
            return <Card key={this.props.robots[i].id} id={this.props.robots[i].id} name={this.props.robots[i].name} email={this.props.robots[i].email} />
        })
        return (
            <div>
                {card_component}
            </div>
        )
    }
}

export default CardList