import React from 'react';
import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div className={css.buttonContainer}>
    <button
      className={css.button}
      onClick={onLeaveFeedback(options[0])}
      type="button"
    >
      Good
    </button>
    <button
      className={css.button}
      onClick={onLeaveFeedback(options[1])}
      type="button"
    >
      Neutral
    </button>
    <button
      className={css.button}
      onClick={onLeaveFeedback(options[2])}
      type="button"
    >
      Bad
    </button>
  </div>
);

FeedbackOptions.propTypes = {
  options: PropTypes.array,
  leaveFeedback: PropTypes.func,
};

export default FeedbackOptions;
