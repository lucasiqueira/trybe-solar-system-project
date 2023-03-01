import { Component } from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        {
          planets.map((planet) => {
            const { name, image } = planet;
            return <PlanetCard planetName={ name } planetImage={ image } key={ name } />;
          })
        }
      </div>
    );
  }
}

export default SolarSystem;
