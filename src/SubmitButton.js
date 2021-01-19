import React from 'react';

class SubmitButton extends React.Component {
render () {
  return (
    <div className="App">
      <div className="submitButton">
            <button
                className='btn'
                disabled={this.props.disabled}
                onClick={() => this.props.onClick()}
            >
             {this.props.text}
            </button>
      </div>
    </div>
  );
  }
}

export default SubmitButton;
