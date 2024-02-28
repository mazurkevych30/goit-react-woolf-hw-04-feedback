import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';
import { useState } from 'react';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const options = ['good', 'neutral', 'bad'];

  const onLeaveFeedback = option => {
    if (option === options[0]) setGood(prev => prev + 1);
    if (option === options[1]) setNeutral(prev => prev + 1);
    if (option === options[2]) setBad(prev => prev + 1);
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((100 * good) / countTotalFeedback());
  };

  return (
    <>
      <Section title="Please leave feedback" />
      <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback} />

      <Section title="Statistics" />
      {good || neutral || bad ? (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
        />
      ) : (
        <Notification message="There is no feedback" />
      )}
    </>
  );
};

export default App;
