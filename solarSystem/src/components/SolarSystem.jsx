import React, { Component } from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import planets from '../data/planets';

class SolarSystem extends Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        <ul className="planets">
          {planets.map(({ name, image }) => (
            <li key={ name }>
              <PlanetCard planetName={ name } planetImage={ image } />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default SolarSystem;
