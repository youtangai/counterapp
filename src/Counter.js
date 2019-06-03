import React from 'react';

export default class Counter extends React.Component { 
    constructor(props) {
        super(props);
        this.state = {
            number: 0,
        };

        this.plus = this.plus.bind(this)
        this.minus = this.minus.bind(this)
    }

    plus() {
        this.setState({
            number: this.state.number+1
        })
    }

    minus() {
        this.setState({
            number: this.state.number-1
        })
    }

    render() {
        return ( 
            <div>
                <button onClick={this.minus}>マイナス</button>
                {this.state.number}
                <button onClick={this.plus}>プラス</button>
            </div>
        )
    }
}