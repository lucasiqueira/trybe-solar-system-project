import { Component } from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';

class Missions extends Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
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
    );
  }
}

export default Missions;
