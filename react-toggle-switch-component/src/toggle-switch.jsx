import React from 'react';
import ReactDOM from 'react-dom';

class ToggleButton extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = {
      toggleState: false
    };
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggleOn() {
    this.setState({ toggleState: true });
  }

  handleToggleOff() {
    this.setState({ toggleState: false });
  }

  render() {
    return (
      <button></button>
    );
  }
}

export default ToggleButton;
