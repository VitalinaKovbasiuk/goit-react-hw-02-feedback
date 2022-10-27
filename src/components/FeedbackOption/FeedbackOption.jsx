import {
  ButtonContainer,
  ButtonGood,
  ButtonNeutral,
  ButtonBad,
} from './FeedbackOption.styled';

export default function FeedbackOption({
  handleGood,
  handleNeutral,
  handleBad,
}) {
  return (
    <ButtonContainer>
      <ButtonGood onClick={handleGood}>😆 Good ᕙ(`▿´)ᕗ</ButtonGood>
      <ButtonNeutral onClick={handleNeutral}>
        😐 Neutral v( ‘.’ )v
      </ButtonNeutral>
      <ButtonBad onClick={handleBad}>😡 Bad ᕙ( ︡'︡益'︠)ง</ButtonBad>
    </ButtonContainer>
  );
}
