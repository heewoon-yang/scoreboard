import React, {useState, useEffect, useRef} from 'react';

export function Stopwatch() {
	let tickRef;
	let [isRunning, setIsRunning] = useState(false);
	let [timer, setTimer] = useState(0);

	// useEffect(() => {
	// 	//Dom이 렌더링된 후 side effect
	// 	tickRef = setInterval(tick, 1000);
	//
	// 	//componentWillUnmount는 return 펑션
	// 	return () => {
	// 		clearInterval(tickRef)
	// 	}
	// }, []);//mount될때 한번만 실행시키기 위해 ",[]" 넣어줌

	//useInterval = useEffect + setInterval 합친거
	useInterval(() => {
		// Your custom logic here
		if (isRunning) {
			setTimer(timer + 1);
		}
	}, 1000);

	function tick() {
		if (isRunning) {
			// this.setState(prevState => ({timer: prevState.timer + 1}));
			setTimer(timer + 1);
		}
	}

	return (
		<div className="stopwatch">
			<h1 className="h1">StopWatch</h1>
			<span className="stopwatch-time">{timer}</span>
			<button onClick={() => setIsRunning(!isRunning)}>{isRunning ? 'Stop' : 'Start'}</button>
			<button onClick={() => setTimer(0) }>Reset</button>
		</div>
	);

	function useInterval(callback, delay) {
		const savedCallback = useRef();

		// Remember the latest callback.
		useEffect(() => {
			savedCallback.current = callback;
		}, [callback]);

		// Set up the interval.
		useEffect(() => {
			function tick() {
				savedCallback.current();
			}
			if (delay !== null) {
				let id = setInterval(tick, delay);
				return () => clearInterval(id);
			}
		}, [delay]);
	}

}

