export default function Options({ updateFeedback }) {
  const handleFeedbackClick = (feedbackType) => {
    updateFeedback(feedbackType);
  };

  return (
    <div>
      <button onClick={() => handleFeedbackClick("good")}>Good</button>
      <button onClick={() => handleFeedbackClick("neutral")}>Neutral</button>
      <button onClick={() => handleFeedbackClick("bad")}>Bad</button>
    </div>
  );
}
