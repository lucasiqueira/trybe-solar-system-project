import { Component } from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';
import './SolarSystem.css';

class SolarSystem extends Component {
  render() {
    return (
      <div data-testid="solar-system" id="solar-system">
        <Title headline="Planetas" />
        <section className="planets-section">
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
