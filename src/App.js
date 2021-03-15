import './App.scss';
import React, { Component } from 'react'
import * as data from './data/text.json';
import * as particles from './data/particles.json';
import * as antiparticles from './data/antiparticles.json';

class App extends Component {
  constructor(props) {
    super(props);
    this.changeActive = this.changeActive.bind(this);
    this.state = { 
      "active": {
        type: "Active",
        text: "this will disappear"
      },
      "substance": "matter"
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
          <div className="symbol">H</div>
          <div className="name">Higgs Boson</div>
        </section>
        <div className={"grid-container mode-" + this.state.substance}>
          {particles.default.map(p => (
            <section className={"area-" + p.particle.split(' ').join('-') + " zone"} onMouseOver={() => this.changeActive(p.particle)}>
              {p.subtypes.map(subt =>(
                <div className="particle">
                  <div className="symbol">{subt.symbol}</div>
                  <div className="name">{subt.name}</div>
                </div>
              ))}
            </section>
          ))}
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
