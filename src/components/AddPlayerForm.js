import React from 'react';
import {addPlayer} from "../redux/actions";
import {connect} from "react-redux";

export class AddPlayerForm extends React.Component {
	handleSubmit(e) {
		e.preventDefault();
		// e.stopPropagation();

		// 유효성 체크
		const playNode = document.getElementById('player');
		// console.log(playNode.validity.valueMissing);
		console.log(playNode.validity.valid);
		if (!playNode.validity.valid) {
			// isNameValid = true; 에러문구 컨디션널 렌더링
			return;
		}

		this.props.addPlayer(playNode.value);
		// 폼 초기화
		playNode.value = '';
	}

	render() {
		return (
			<form className="form" onSubmit={this.handleSubmit.bind(this)} noValidate>
				<input id="player" type="text" className="input"
							 placeholder="enter a player's name" required/>
				<input type="submit" className="input" value="Add Player"/>
			</form>
		);
	}
}

const mapActionToProps = (dispatch) => ({
	// 왼쪽이 props, 오른쪽 (액션을 디스패치하는)펑션
	addPlayer: (name) => dispatch(addPlayer(name))
})

// 문법: 커링, 개념: HoC: 입력파라메터에 컴포넌트를 넣어서 새로운 기능의 컴포넌트를 리턴하는 펑션
export default connect(null, mapActionToProps)(AddPlayerForm);