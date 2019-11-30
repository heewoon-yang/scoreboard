import React from 'react';
import _ from 'lodash';

export const Stats = (props) => {
  const totalPlayers = props.players.length;
  // let totalPoints = 0;
  // props.players.forEach(player =>
  //   totalPoints += player.score
  // );
  // const totalScore = props.players.reduce((total,players) => total+players.score, 0);

  let totalPoints = _.sumBy(props.players, 'score');

  console.log(totalPoints);
  return (
    <table className="stats">
      <tbody>
      <tr>
        <td>Players:</td>
        <td>{totalPlayers}</td>
      </tr>
      <tr>
        <td>Total Points:</td>
        <td>{totalPoints}</td>
      </tr>
      </tbody>
    </table>
  );
}