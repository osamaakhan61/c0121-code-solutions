import React from 'react';
import ReactDOM from 'react-dom';

class CustomButton extends React.Component {
  render() {
    return <button>Click Me!</button>;
  }
}

const element = <CustomButton />;
ReactDOM.render(
  element,
  document.getElementById('root')
);
