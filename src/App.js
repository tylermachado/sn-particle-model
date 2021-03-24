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
        type: "Standard model of particle physics",
        text: "Tap the surrounding sections for more on each category."
      },
      "substance": "matter"
    };
  }

  changeActive(x) {
    if (this.state.substance === "matter") {
      let findActive = data.default.filter(d => (d.type.toString().toLowerCase() === x.toString().toLowerCase()))[0];
      this.setState({
        active: findActive
      })
    }
  }

  changeMode() {
    if (this.state.substance === "matter") {
      this.setState({
        substance: "antimatter",
        active: {
          type: "Antimatter",
          text: "Each type of matter particle has an antimatter partner. Antiparticles have the opposite electric charge, but are otherwise identical to their alter-egos. Physicists are still <a href='https://www.sciencenews.org/article/mounting-evidence-suggests-neutrinos-are-key-why-antimatter-is-rare'>trying to understand</a> why matter is more prevalent than antimatter. For example, negatively charged electrons are much more prevalent in our cosmos than their positively-charged antiparticle, positrons. Because neutrinos have no electric charge, scientists are puzzling over whether neutrinos and antineutrinos are <a href='https://www.sciencenews.org/article/quest-identify-nature-neutrinos-alter-ego-heating'>distinct particles</a>, or the same thing."
        }
      })
    } else {
      this.setState({
        substance: "matter",
        active: {
          type: "",
          text: ""
        }
      })
    }
  }

  render() {
    let particlesrendered;
    // if (this.state.substance === "matter") {
      particlesrendered = particles.default.map(p => (
        <section className={
          (
            (this.state.active["type"].toLowerCase() === p.particle.toLowerCase()) ||
            (this.state.active["type"] == "Standard model of particle physics")
          ) ?
            "area-" + p.particle.split(' ').join('-') + " zone active" :
            "area-" + p.particle.split(' ').join('-') + " zone"
          } onMouseOver={() => this.changeActive(p.particle)}>
            {p.subtypes.map(subt => (
              <div className="particle">
                <div className="particle-content">
                  <div className="symbol" dangerouslySetInnerHTML={{ __html: subt.symbol}}></div>
                  <div className="name">{subt.name}</div>
                </div>
              </div>
            ))}
          </section>
        ))
      
    // } else {
    //   particlesrendered = antiparticles.default.map(p => (
    //       <section className={"area-" + p.particle.split(' ').join('-') + " zone"}>
    //         {p.subtypes.map(subt => (
    //           <div className="particle">
    //             <div className="particle-content">
    //               <div className="symbol"><span className="symbol-text">{subt.symbol}</span></div>
    //               <div className="name">{subt.name}</div>
    //             </div>
    //           </div>
    //         ))}
    //       </section>
    //     ))
      
    // }
    return (
      <div className="App">
        
        <div className={"grid-container mode-" + this.state.substance}>
          {particlesrendered}
          <section className="controller" onClick={() => this.changeMode()}>
            <div className={this.state.substance === "matter" ? 'controller-item active' : 'controller-item'}>matter</div>
            <div className={this.state.substance === "antimatter" ? 'controller-item active' : 'controller-item'}>antimatter</div>
          </section>
          <section className={
              (
                (this.state.active["type"].toLowerCase() === "higgs boson") ||
                (this.state.active["type"] == "Standard model of particle physics")
              ) ?
              "area-higgs-boson zone active" :
              "area-higgs-boson zone"
           } onMouseOver={() => this.changeActive("higgs boson")}>
            <div className="particle">
              <div className="particle-content">
                <div className="symbol">H</div>
                <div className="name">Higgs Boson</div>
              </div>
            </div>
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
