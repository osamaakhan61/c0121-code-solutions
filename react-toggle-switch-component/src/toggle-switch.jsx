import React from 'react';

class ToggleSwitch extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = {
      toggleState: false
    };
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle(event) {
    this.setState({ toggleState: event.target.checked });
  }

  render() {
    return (
      <div className="container">
        <label className="switch-box">
        <input onChange={this.handleToggle} type="checkbox" />
        <span className="circle"></span>
        </label>
        <p>{this.state.toggleState ? 'on' : 'off'}</p>
      </div>
    );
  }
}

export default ToggleSwitch;
