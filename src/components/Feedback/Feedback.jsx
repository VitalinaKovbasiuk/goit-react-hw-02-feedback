import React, { Component } from "react";
import Statistics from "components/Statistics/Statistics";
import Notification from "components/Notification/Notification";
import FeedbackOption from "components/FeedbackOption/FeedbackOption";
import Section from "components/Section/Section";
import { FeedbackContainer } from "./Feedback.styled"; 

export default class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  clickOnGood = () => {
    this.setState({
      good: this.state.good + 1,
    });
  };

  clickOnNeutral = () => {
    this.setState({
      neutral: this.state.neutral + 1,
    });
  };

  clickOnBad = () => {
    this.setState({
      bad: this.state.bad + 1,
    });
  };

  totalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  goodPercent = () => {
    return parseInt((this.state.good / this.totalFeedback()) * 100);
  };

  render() {
    return (
      <FeedbackContainer>
        <Section title='Please leave feedback'>
            <FeedbackOption
              handleGood={this.clickOnGood}
              handleNeutral={this.clickOnNeutral}
              handleBad={this.clickOnBad}
            />
        </Section>

        {this.totalFeedback() ? (
          <section>
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.totalFeedback()}
              goodPercent={this.goodPercent()}
            />
          </section>
        ) : (
          <Notification message="There is no feedback" />
        )}
      </FeedbackContainer>
    );
  }
}