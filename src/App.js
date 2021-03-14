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
        <section className="area-higgs-boson particle" onMouseOver={() => this.changeActive("higgs boson")}>
          H
        </section>
        <div className="grid-container">
          <section className="area-quarks zone" onMouseOver={() => this.changeActive("quarks")}>
            <div class="particle">u</div>
            <div class="particle">c</div>
            <div class="particle">t</div>
            <div class="particle">d</div>
            <div class="particle">s</div>
            <div class="particle">b</div>
          </section>
          <section className="area-charged-leptons zone" onMouseOver={() => this.changeActive("charged leptons")}>
            <div class="particle">e</div>
            <div class="particle">μ</div>
            <div class="particle">τ</div>
          </section>
          <section className="area-neutrinos zone" onMouseOver={() => this.changeActive("neutrinos")}>
            <div class="particle">ν<sub>e</sub></div>
            <div class="particle">ν<sub>μ</sub></div>
            <div class="particle">ν<sub>τ</sub></div>
          </section>
          <section className="area-force-carrying-particles zone" onMouseOver={() => this.changeActive("force-carrying particles")}>
            <div class="particle">γ</div>
            <div class="particle">g</div>
            <div class="particle">W+</div>
            <div class="particle">Z</div>
          </section>
          <section className="infobox">
            <h3>{this.state.active.type}</h3>
            <p dangerouslySetInnerHTML={ { __html: this.state.active.text} }></p>
          </section>
        </div>
      </div>
    );
  }
}

export default App;
