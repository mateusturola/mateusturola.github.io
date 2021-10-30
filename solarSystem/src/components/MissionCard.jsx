import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MissionCard extends Component {
  render() {
    const { name, year, country, destination } = this.props;

    return (
      <div className="mission-card">
        <h4 className="name-planet">{name}</h4>
        <p className="mission-info"><i class="fas fa-star"></i> {year}</p>
        <p className="mission-info"><i class="fas fa-flag"></i> {country}</p>
        <p className="mission-info"><i class="fas fa-space-shuttle"></i> {destination}</p>

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
