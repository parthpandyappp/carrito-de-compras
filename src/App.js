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

  currentDate() {
    return new Date().getFullYear();
  }

  render() {
    const someStyle = {
      marginTop: "180px", marginLeft: "100px", marginRight: "100px",
    }

    return (
      <React.Fragment className="text-center" >
        <NavBar totalCounts={this.state.counters.filter(c => c.value > 0).length} />
        <main className="Container">
          <Counters counters={this.state.counters} onReset={this.handleReset} onIncrement={this.handleIncrement} onDelete={this.handleDelete} />
        </main>
        <footer>
          <hr style={someStyle} />

          <p className="text-center" style={{ fontFamily: "Roboto Mono", lineHeight: 0.5, marginTop: "30px" }}>Copyright ©️ {this.currentDate()} Parth Pandya </p>

          <p className="text-center" style={{ fontFamily: "Roboto Mono", fontSize: 10, lineHeight: 0.5 }}>Some rights reserved.</p>
        </footer>
      </React.Fragment>

    );
  }

}

export default App;
