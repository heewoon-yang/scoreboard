import React from 'react';
import './App.css';
import {Header} from "./components/Header";
import {Player} from "./components/Player";
import {AddPlayerForm} from "./components/AddPlayerForm";

let maxId = 4;

class App extends React.Component {
  state = {
    players: [
      { id: 1, name: 'LDK', score:10 },
      { id: 2, name: 'PARK', score:20 },
      { id: 3, name: 'KIM', score:30 },
      { id: 4, name: 'HONG', score:40 },
    ]
  }

  render() {
    return (
      <div className="scoreboard">
        <Header title="My Scoreboard"
                players={this.state.players}
        />
        {
          this.state.players.map((player) => (
            <Player
              key={player.id}
              name={player.name}
              id={player.id}
              score = {player.score}
              changeScore = {this.handleChangeScore}
              removePlayer={this.handleRemovePlayer}
            />
          ))
        }
        <AddPlayerForm
          addPlayer={this.handleAddPlayer}
        />
      </div>
    )
  }
  handleRemovePlayer = (id) => {
    console.log('removePlayer: ', id);
    const players = this.state.players.filter(player => player.id !== id)
    // this.state.players = players;
    console.log(players)
    this.setState(prevState => {
      const players = prevState.players.filter(player => player.id !== id)
      // Immutable 함수 = 새로운 배열을 리턴 = shallow comparison
      // 키와 변수가 같을 경우 한쪽을 생략: shorthand property
      return { players }
    })
  }

  handleChangeScore = (id, delta) => {
    console.log('handleChangeScore',id,' ',delta);
    this.setState(prevState => {
      // 새로운 배열을 리턴 : deep copy
      const players = [...prevState.players];
      players.forEach(player => {
        if(player.id === id){
          player.score += delta;
        }
      })
      return { players }
    })
  }

  handleAddPlayer = (name) => {
    console.log('handleAddPlayer: ', name);
    this.setState(prevState => {
      const players = [ ...prevState.players ]; //deep copy됨
      players.push({id:++maxId, name: name, score: 0});//push는 none Immutable임
      // return { players: players };
      return { players };
    })
  }

}

export default App;
