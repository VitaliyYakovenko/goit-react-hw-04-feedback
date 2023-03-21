import React, { useState } from "react";
import PropTypes from 'prop-types';
import Section from "./Section/Section";
import FeedbackOptions from "./FeedbackOption/FeedbackOption";
import Statistics from "./Statistics/Statistics";
import Notification from "./Notification/Notification";
import css from "./App.module.css"



export default function App({ initialValue }) {
    const [good, setGood] = useState(initialValue);
    const [neutral, setNeutral] = useState(initialValue);
    const [bad, setBad] = useState(initialValue);

    const option = ["good", "neutral", "bad"];
    

    const onGetFeedback = (option) => {
        switch (option) {
            case 'good':
                setGood(prev => prev + 1);
                break;
            case 'neutral':
                setNeutral(prev => prev + 1);
                break;
            case 'bad':
                setBad(prev => prev + 1);
            default:
                console.log(option);
        }

    };

    const countTotalFeedback = () => {
        const total = good + bad + neutral
        return total;     
    };

    const countPositiveFeedbackPercentage = () => {
        const total = good + bad + neutral;
        return Math.round(good / total * 100);
     };
    
    return (
          <div className={css.feedback}>
            <Section title="Please leave feedback">
            <FeedbackOptions
             option = {option}
             onLeaveFeedback={onGetFeedback}             
            />  
            </Section>
            <Section title="Statistics">
            {good || bad || neutral > 0
            ? <Statistics            
            good={good}
            neutral={neutral}
            bad={bad}
             total = {countTotalFeedback()}
             positiveFeedback = {countPositiveFeedbackPercentage()}
            />    
            : <Notification message="There is no feedback"/>
            }
            </Section>
          </div>
    )
}

App.propTypes = {
 initialValue: PropTypes.number.isRequired,
    }
