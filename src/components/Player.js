import {Counter} from "./Counter";
import React from "react";

//class component
export class Player extends React.PureComponent{
  render() {
    console.log(this.props.name, 'rendered');

    const {removePlayer, id, name, score, changeScore} = this.props;

    return (
      <div className="player">
        <span className="player-name">
          <button className="remove-player" onClick={() => removePlayer(id)}> x </button>
          {name}
        </span>
        <Counter
          score={score}
          changeScore = {changeScore}
          id = {id}
        />
      </div>
    )
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    console.log(nextProps);
    if(JSON.stringify(nextProps) !== JSON.stringify(this.props)){
      return true;
    }else{
      return false;
    }
  }
}

// function component
// export const Player = (props) => {
//
//   console.log(props.name, 'rendered');
//
//
// };