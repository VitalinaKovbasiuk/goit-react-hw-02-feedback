import { ButtonContainer, Button } from './FeedbackOption.styled';

export default function FeedbackOption({ options, onLeaveFeedback }) {
  return (
    <ButtonContainer>
      {options.map(option => (
        <Button
          key={option}
          type="button"
          name={option}
          onClick={onLeaveFeedback}
        >
          {option}
        </Button>
      ))}
      {/* <ButtonGood onClick={handleGood}>๐ Good แ(`โฟยด)แ</ButtonGood>
      <ButtonNeutral onClick={handleNeutral}>
        ๐ Neutral v( โ.โ )v
      </ButtonNeutral>
      <ButtonBad onClick={handleBad}>๐ก Bad แ( ๏ธก'๏ธก็'๏ธ )เธ</ButtonBad> */}
    </ButtonContainer>
  );
}
