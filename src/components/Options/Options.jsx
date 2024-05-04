export default function Options({
  updateFeedback,
  totalFeedback,
  resetFeedback,
}) {
  const handleFeedbackClick = (feedbackType) => {
    updateFeedback(feedbackType);
  };

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <button onClick={() => handleFeedbackClick("good")}>Good</button>
      <button onClick={() => handleFeedbackClick("neutral")}>Neutral</button>
      <button onClick={() => handleFeedbackClick("bad")}>Bad</button>
      {totalFeedback > 0 && <button onClick={resetFeedback}>Reset</button>}
    </div>
  );
}
