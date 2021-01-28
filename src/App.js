import React, { Component } from "react";
import NavBar from './components/navbar.jsx'
import Counters from './components/counters.jsx'
import './App.css';

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  handleIncrement = (counter) => {
    const counters = [...this.state.counters]
    const index = counters.indexOf(counter)
    counters[index] = { ...counter }
    counters[index].value++
    this.setState({ counters })
  }

  handleDelete = (counterId) => {
    // console.log("Event handler called!", counterId);
    const counter = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters: counter });
  };

  handleReset = () => {
    // const counter = this.state.counters.map((c) => {
    //   c.value = 0;
    //   return c;
    // });

    // this.setState({ counter })
    this.setState({
      counters: [
        { id: 1, value: 0 },
        { id: 2, value: 0 },
        { id: 3, value: 0 },
        { id: 4, value: 0 },
      ],
    })
  };
  render() {
    return (
      <React.Fragment className="text-center">
        <NavBar totalCounts={this.state.counters.filter(c => c.value > 0).length} />
        <main className="Container">
          <Counters counters={this.state.counters} onReset={this.handleReset} onIncrement={this.handleIncrement} onDelete={this.handleDelete} />
        </main>
      </React.Fragment>

    );
  }

}

export default App;
