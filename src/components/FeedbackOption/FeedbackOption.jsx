import { ButtonContainer,ButtonGood,ButtonNeutral,ButtonBad } from "./FeedbackOption.styled";

export default function FeedbackOption({
  handleGood,
  handleNeutral,
  handleBad,
}) {
  return (
    <ButtonContainer>
      <ButtonGood onClick={handleGood}>Good</ButtonGood>
      <ButtonNeutral onClick={handleNeutral}>Neutral</ButtonNeutral>
      <ButtonBad onClick={handleBad}>Bad</ButtonBad>
    </ButtonContainer>
  );
}