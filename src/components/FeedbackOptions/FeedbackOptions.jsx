import PropTypes from 'prop-types';
import { FeedbackOptionslist } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <FeedbackOptionslist>
      {options.map((option, idx) => (
        <li key={idx}>
          <button onClick={() => onLeaveFeedback(option)}>
            {option[0].toUpperCase() + option.slice(1, option.length)}
          </button>
        </li>
      ))}
    </FeedbackOptionslist>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
export default FeedbackOptions;
