import React from "react";

export class Counter extends React.Component {
  // state = {
  //   score: 11,
  //   timer: 5
  // }

  incrementScore = () => {
    // this.setState(prevState => ({score: prevState.score + 1}));
    this.props.changeScore();
  }

  decrementScore = () => {
    this.setState(prevState => ({score: prevState.score - 1}));
  }

  render() {
    return (
      <div className="counter">
        <button className="counter-action decrement"
                onClick={()=>this.props.changeScore(this.props.id, -1)}
        > -</button>
        <span className="counter-score">{this.props.score}</span>
        <button className="counter-action increment"
                onClick={()=>this.props.changeScore(this.props.id, 1)}
        > +</button>
      </div>
    )
  }
}