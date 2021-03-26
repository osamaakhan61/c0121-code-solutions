import React from 'react';

class CustomButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonClicked: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }

  getCssClass() {
    const { buttonClicked } = this.state;
    if (buttonClicked < 4) return 'cold';
    if (buttonClicked < 7) return 'cool';
    if (buttonClicked < 10) return 'warm';
    if (buttonClicked < 13) return 'hot';
    if (buttonClicked < 16) return 'hotter';
    return 'hottest';

  }

  handleClick() {
    this.setState({
      buttonClicked: this.state.buttonClicked + 1
    });
  }

  render() {
    const cssClass = this.getCssClass();
    return (
      <button className={`${cssClass}`} onClick={this.handleClick}>Click Me!</button>
    );
  }
}

export default CustomButton;
