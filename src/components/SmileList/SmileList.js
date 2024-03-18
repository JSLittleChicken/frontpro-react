import Smile from "../Smile/Smile"
import React from "react";

class SmileList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            winner: null,
            showWinner: false
        };
        this.handler = this.handler.bind(this);
        this.findWinner = this.findWinner.bind(this);
        this.showWinner = this.showWinner.bind(this);
    }

    handler(smile) {
        this.setState((prevState) => {
            if (!prevState.winner || smile.count > prevState.winner.count) {
                return {
                    winner: {
                        symbol: smile.symbol,
                        count: smile.count,
                    },
                };
            }
            return null;
        });
    }

    findWinner() {
        if (this.state.winner) {
            return (
                <div>
                    <h2>Наш чемпіон:</h2>
                    <p>{this.state.winner.symbol}</p>
                    <p>з {this.state.winner.count} голосами</p>
                </div>
            );
        } else {
            return null;
        }
    }

    showWinner() {
        this.setState({ showWinner: true })
    }

    render() {
        return (
            <div id="smiles">
                {this.props.smileList.map((item) => {
                    return (
                        <Smile handler={this.handler} 
                        symbol={item.symbol} 
                        count={item.count}
                        key={item.id} />
                    );
                })}
                <button onClick={this.showWinner} className="show-result">show result</button>
                {this.state.showWinner && this.findWinner()}
            </div>
        );
    }
}

export default SmileList;