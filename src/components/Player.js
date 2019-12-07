import Counter from "./Counter";
import React from 'react';
import {removePlayer} from "../redux/actions";
import {connect} from "react-redux";

export class Player extends React.PureComponent {
	render() {
		console.log(this.props.name, ' rendered');
		const {removePlayer, id, name, score} = this.props;
		return (
			<div className="player">
		    <span className="player-name">
			  <button className="remove-player" onClick={() => removePlayer(id)}> x </button>
					{this.props.children}
					{name}
		    </span>
				<Counter id={id} score={score}/>
			</div>
		)
	}

	// shouldComponentUpdate(nextProps, nextState, nextContext) {
	// 	console.log(nextProps);
	// 	if (nextProps.score !== this.props.score) {
	// 		return true;
	// 	} else {
	// 		return false;
	// 	}
	// }
}

const mapActionToProps = (dispatch) => ({
	// 왼쪽이 props, 오른쪽 (액션을 디스패치하는)펑션
	removePlayer: (id) => dispatch(removePlayer(id))
})

// 문법: 커링, 개념: HoC: 입력파라메터에 컴포넌트를 넣어서 새로운 기능의 컴포넌트를 리턴하는 펑션
export default connect(null, mapActionToProps)(Player);