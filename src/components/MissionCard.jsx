import { Component } from 'react';
import PropTypes from 'prop-types';
import './MissionCard.css';
import divisoria from '../images/divisoria.png';
import calendar from '../images/calendar.png';
import local from '../images/local.png';
import destinationFlag from '../images/destinationFlag.png';

class MissionCard extends Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <div data-testid="mission-card" className="mission-card">
        <div>
          <p data-testid="mission-name" className="mission-name">{ name }</p>
        </div>
        <img src={ divisoria } alt="" className="divisoria" />
        <div className="mission-data">
          <div className="mission-year-country">
            <img src={ calendar } alt="" className="icon" />
            <p data-testid="mission-year" className="mission-year">{ year }</p>
            <img src={ local } alt="" className="icon local-pin" />
            <p data-testid="mission-country" className="mission-country">{ country }</p>
          </div>
          <div className="destination-div">
            <img src={ destinationFlag } alt="" className="icon" />
            <p data-testid="mission-destination" className="mission-destination">
              { destination }
            </p>
          </div>
        </div>
      </div>
    );
  }
}

MissionCard.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
};

export default MissionCard;
