import React from 'react';
import './Counter.css';

class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      number: 0
    };
  }

  handleClick = () => {
    this.setState({
      number: this.state.number + 1
    });
  };

  handleReset = () => {
    this.setState({
      number: 0
    });
  };

  handleDecrease = () => {
    this.setState({
      number: this.state.number - 1
    });
  };

  render() {
    const { number } = this.state;

    return (
      <div className="counter">
        <h1 className="counter-title">Bộ Đếm</h1>
        
        <div className="counter-display">
          {number}
        </div>

        <div className="counter-buttons">
          <button onClick={this.handleDecrease} className="btn btn-decrease">
            Giảm
          </button>
          
          <button onClick={this.handleReset} className="btn btn-reset">
            Đặt lại
          </button>

          <button onClick={this.handleClick} className="btn btn-increase">
            Tăng
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;