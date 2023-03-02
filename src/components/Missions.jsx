import { Component } from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';
import './Missions.css';

class Missions extends Component {
  render() {
    return (
      <div data-testid="missions" className="missions">
        <Title headline="Missões" />
        <div className="missions-container">
          {
            missions.map((mis) => {
              const { name, year, country, destination } = mis;
              return (
                <MissionCard
                  name={ name }
                  year={ year }
                  country={ country }
                  destination={ destination }
                  key={ name }
                />
              );
            })
          }
        </div>
      </div>
    );
  }
}

export default Missions;
