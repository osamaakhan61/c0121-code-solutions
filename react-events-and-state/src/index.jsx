import React from 'react';
import ReactDOM from 'react-dom';

class CustomButton extends React.Component {
  constructor() {
    super();
    this.state = {
      isClicked: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isClicked: true
    }));
  }

  render() {
    if (this.state.isClicked === true) {
      return <button>Thanks!</button>;
    } else {
      return <button onClick={this.handleClick}>Click Me!</button>;
    }
  }
}

const element = <CustomButton />;
ReactDOM.render(
  element,
  document.getElementById('root')
);
