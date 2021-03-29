import React from 'react';
import ReactDOM from 'react-dom';

class Stopwatch extends React.Component {
  constructor() {
    super();
    this.state = {
      isPlaying: false,
      seconds: 0,
      iconUrl: 'fas fa-pause'
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.setState({
      isPlaying: !event.isPlaying,
      seconds: setInterval(() => {
        return this.state.seconds + 1;
      }, 1000),
      iconUrl: 'fas fa-play'
    });
  }

  render() {
    return (
      <>
        <div className="circle">
          <div className="time">
            {this.state.seconds}
          </div>
        </div>
        <div className="icon">
          <i onClick={this.handleClick} className={this.state.iconUrl}></i>
        </div>
      </>
    );
  }
}

export default Stopwatch;
