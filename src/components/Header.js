import React from 'react';
import {Stats} from "./Stats";
import {Stopwatch} from "./Stopwatch";

export const Header = ({title, players}) => {
  // console.log(props);
  // const {players, title} = props;
  return (
    <header className="header">
      <Stats players = {players}/>
      <h1 className="h1">{title}</h1>
      {/*<span className="stats">Player: {props.totalPlayers}</span>*/}
      <Stopwatch/>
    </header>
  )
};