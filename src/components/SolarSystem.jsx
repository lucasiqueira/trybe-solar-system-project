import { Component } from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';
import './SolarSystem.css';
// import line from '../images/Line.png';

class SolarSystem extends Component {
  render() {
    return (
      <div data-testid="solar-system" id="solar-system">
        <Title headline="Planetas" />
        <section id="planets-section">
          {/* <img src={ line } alt="Line" /> */}
          {
            planets.map((planet) => {
              const { name, image } = planet;
              return (<PlanetCard
                planetName={ name }
                planetImage={ image }
                key={ name }
              />);
            })
          }
        </section>
      </div>
    );
  }
}

export default SolarSystem;
