import React from "react";

class Smile extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick = () => {
        this.setState({ count: this.state.count + 1 });
        this.props.handler({
            symbol: this.props.symbol,
            count: this.state.count + 1
        });
    }

render() {
    return (
        <div>
            <button onClick={this.handleClick}>
                <p>{this.props.symbol}</p>
            </button>
            <span>{this.state.count}</span>
        </div>
    );
}}


export default Smile;