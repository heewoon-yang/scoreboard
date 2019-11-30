import React from 'react';

export class Stopwatch extends React.Component {

  tickRef;//클래스의 맴버변수로 정의
  state = {
    isRunning : false,
    timer: 0
  }

  handleStopwatch() {
    this.setState(prevState => ({isRunning: !prevState.isRunning}));
  }

  render() {
    return (
      <div className="stopwatch">
        <h1 className='h1'>StopWacth</h1>
        <span className='stopwatch-time'>{this.state.timer}</span>
        <button onClick={this.handleStopwatch.bind(this)}>{this.state.isRunning ? 'Stop' : 'Start'}</button>
        <button onClick={() => this.setState({timer : 0})}>Reset</button>
      </div>
    );
  }//end render

  tick = () => {
    if(this.state.isRunning){
      this.setState(prevState => ({timer:prevState.timer + 1})); //JSON 데이터를 리턴하기위해 => ({}) 이렇게 표한함
    }
  };

  //네트워크로 데이터를 fatch, 3rd 라이브러리 초기화
  //렌더링된 직후에 한번만 호출됨
  componentDidMount() {
    console.log('componentDidMount');
    this.tickRef = setInterval(this.tick, 1000);
  };

  //DOM이 파괴되기 직전 실행
  componentWillUnmount() {
    clearInterval(this.tickRef);
  };



}//end