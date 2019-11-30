import React from 'react';

export class AddPlayerForm extends React.Component {

  state = {
    value:''
  }

  // handleValueChange(e){
  //   this.setState({value:e.target.value})
  // }

  handleValueChange = (e) => {
    console.log(e.target.value);
    this.setState({value:e.target.value})
  }

  handleSubmit(e){
    e.preventDefault();//전파이벤트를 막는다.
    // e.stopPropagation();
    this.props.addPlayer();
  }

  render() {
    return(
        <form className="form" onSubmit={this.handleSubmit.bind(this)}>
          <input type="text"
                 className="input"
                 placeholder="enter a player's name"
                 value = {this.state.value}
                 // onChange={this.handleValueChange.bind(this)}
                 onChange={this.handleValueChange}
          />
          <input type="submit" className="input" value="Add Player"/>
        </form>
      )

  }
}