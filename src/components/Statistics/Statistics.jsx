import React from 'react';
import PropTypes from 'prop-types';

const Statistics = ({ onGood, onBad, onNeutral, total, positivFeedback }) => (
  <div>
    <h2>Statistics</h2>
    <ul>
      <li>Good: {onGood}</li>
      <li>Neutral: {onNeutral}</li>
      <li>Bad: {onBad}</li>
      <li>Total: {total} </li>
      <li>Positiv feedback: {positivFeedback || 0}%</li>
    </ul>
  </div>
);

export default Statistics;

Statistics.propTypes = {
  onGood: PropTypes.number.isRequired,
  onNeutral: PropTypes.number.isRequired,
  onBad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivFeedback: PropTypes.number.isRequired,
};
