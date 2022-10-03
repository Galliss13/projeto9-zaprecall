import Question from "./Question";

export default function Container(props) {
  const { questionChange, setQuestionChange, iconeChange, setIconeChange, deck } = props;
  const layout = [];
  deck.map((p, index) =>
    layout.push(
      <Question 
      key={index + 1} 
      questionChange={questionChange}
      setQuestionChange={setQuestionChange}
      iconeChange={iconeChange}
      setIconeChange={setIconeChange}
      deck={deck}
      index={index} 
      />
    )
  )
  return (
    <>
      {layout}
    </>
  );
}
