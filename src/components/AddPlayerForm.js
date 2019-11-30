import React from 'react';

export class AddPlayerForm extends React.Component {

  state = {
    value:''
  };

  // handleValueChange(e){
  //   this.setState({value:e.target.value})
  // }

  handleValueChange = (e) => {
    console.log(e.target.value);
    this.setState({value:e.target.value})
  };

  handleSubmit(e){
    e.preventDefault();//전파이벤트를 막는다.
    // e.stopPropagation();

    //유효성 체크
    // const form = document.getElementById('form');
    // const player = document.getElementById('player');
    //
    // console.log(form.checkValidity());
    // console.log(player.validity.valid);

    const playNode = document.getElementById('player');
    // console.log(playNode.validity.valueMissing);
    console.log(playNode.validity.valid);
    if(!playNode.validity.valid){//9가지 모두 체크
      //isNameValid = true;//에러문구 건디션널 렌더링
      return;
    }

    this.props.addPlayer(this.state.value);
    //폼 초기화
    this.setState({value: ''});
  }

  render() {
    return(
        <form className="form" onSubmit={this.handleSubmit.bind(this)} noValidate>
          <input type="email"
                 id = 'player'
                 className="input"
                 minLength='5'
                 placeholder="enter a player's name"
                 value = {this.state.value}
                 // onChange={this.handleValueChange.bind(this)}
                 onChange={this.handleValueChange}
                 required
          />{/* required : bool값이기 때문에 단독으로 표기함 */}
          <input type="submit" className="input" value="Add Player"/>
        </form>
      )

  }
}