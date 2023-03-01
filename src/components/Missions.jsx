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
          missions.map((mis) => <MissionCard mission={ mis } key={ mis.name } />)
        }
      </div>
    );
  }
}

export default Missions;
