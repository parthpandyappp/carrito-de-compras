import React, { Component } from "react";

class Counter extends Component {
  // constructor(props) {
  //   super(props);
  //   // this.handleIncrement = this.handleIncrement.bind(this);
  // }

  // state = {
  //   value: this.props.value,
  //   tags: ["tag1", "tag2", "tag3"],
  // };

  // handleIncrement() {
  //   // console.log("Increment clicked!", this.state.count)
  //   // console.log(this.props.value)
  //   this.setState({ value: this.state.value + 1 });
  // }

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.props.counter;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
