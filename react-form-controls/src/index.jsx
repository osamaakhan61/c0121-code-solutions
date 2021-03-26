import React from 'react';
import ReactDOM from 'react-dom';

class NewsletterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    console.log(this.state);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Email
          <input type="text" onChange={this.handleChange} />
        </label>
        <button>Sign up</button>
      </form>
    );
  }
}

const element = <NewsletterForm />;

ReactDOM.render(
  element,
  document.getElementById('root')
);
