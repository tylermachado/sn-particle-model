import './App.scss';
import React, { Component } from 'react'
import * as data from './data/text.json';

class App extends Component {
  constructor(props) {
    super(props);
    this.changeActive = this.changeActive.bind(this);
    this.state = { 
      "active": {
        type: "Active",
        text: "this will disappear"
      }
    };
  }

  changeActive(x) {
    console.log(x.toString().toLowerCase())
    let findActive = data.default.filter(d => (d.type.toString().toLowerCase() === x.toString().toLowerCase()))[0];
    this.setState({
      active: findActive
    })
  }

  render() {
    return (
      <div className="App">
        <section className="controller">
          matter .. antimatter
        </section>
        <div className="grid-container">
          <section className="area-quarks zone" onMouseOver={() => this.changeActive("quarks")}>
          </section>
          <section className="area-charged-leptons zone" onMouseOver={() => this.changeActive("charged leptons")}>
          </section>
          <section className="area-neutrinos zone" onMouseOver={() => this.changeActive("neutrinos")}>
          </section>
          <section className="area-force-carrying-particles zone" onMouseOver={() => this.changeActive("force-carrying particles")}>
          </section>
          <section className="infobox">
            <h3>{this.state.active.type}</h3>
            <p>{this.state.active.text}</p>
          </section>
        </div>
      </div>
    );
  }
}

export default App;
