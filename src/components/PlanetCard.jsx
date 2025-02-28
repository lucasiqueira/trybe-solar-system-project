import { Component } from 'react';
import PropTypes from 'prop-types';
import './PlanetCard.css';

class PlanetCard extends Component {
  render() {
    const { planetName, planetImage } = this.props;
    const lower = planetName.toLowerCase();
    return (
      <div data-testid="planet-card" id={ lower } className={ `planet ${lower}` }>
        <img src={ planetImage } alt={ `Planeta ${planetName}` } id="line" />
        <p data-testid="planet-name">{ planetName }</p>
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
};

export default PlanetCard;
