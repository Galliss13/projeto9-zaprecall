import Question from "./Question"

export default function Container(props) {
  const {deck} = props
  const layout = []
  return (
    <>
      {deck.map((p, index) => layout.push(<Question key={index} Q={deck.Q} R={deck.R} index={index}/>))}
      {layout}
    </>
  );
}

