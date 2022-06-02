import React from 'react';
class Card extends React.Component {
    render() {
        return (
            <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
                <img src={`https://robohash.org/${this.props.id}?size=200x200`} alt="" />
                <h4>{this.props.name}</h4>
                <p>{this.props.email}</p>
            </div>
        );
    }
}
export default Card;