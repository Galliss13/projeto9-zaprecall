import Question from "./Question";

export default function Container(props) {
  const { questionChange, setQuestionChange, deck } = props;
  const layout = [];
  return (
    <>
      {deck.map((p, index) =>
        layout.push(
          <Question 
          key={index + 1} 
          questionChange={questionChange}
          setQuestionChange={setQuestionChange}
          deck={deck}
          index={index} 
          />
        )
      )}
      {layout}
    </>
  );
}
