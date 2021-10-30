import React, { Component } from 'react';
import MissionCard from './MissionCard';
import Title from './Title';
import missions from '../data/missions';

class Missions extends Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        <ul className="missions">
          {missions.map(({ name, year, country, destination }) => (
            <li key={ name }>
              <MissionCard
                name={ name }
                year={ year }
                country={ country }
                destination={ destination }
              />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Missions;
