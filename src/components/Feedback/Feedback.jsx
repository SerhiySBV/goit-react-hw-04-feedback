import React, { Component } from 'react';
import Statistics from 'components/Statistics/Statistics';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  onLeaveFeedback = option => {
    this.setState({ [option]: this.state[option] + 1 });
  };

  render() {
    const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state);

    // Totatl
    let countTotalFeedback = good + neutral + bad;

    //   Positiv feedbacks
    let countPositiveFeedbackPercentage = Math.round(
      (good / countTotalFeedback) * 100
    );

    return (
      <div>
        <h1>Please leave feedback</h1>
        <FeedbackOptions
          options={options}
          onLeaveFeedback={this.onLeaveFeedback}
        />
        <Statistics
          positivFeedback={countPositiveFeedbackPercentage}
          total={countTotalFeedback}
          onGood={good}
          onBad={bad}
          onNeutral={neutral}
        />
      </div>
    );
  }
}

export default Feedback;
