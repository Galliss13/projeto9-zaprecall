import styled from "styled-components";
import seta_play from "../img/seta_play.png";
import seta_virar from "../img/seta_virar.png";
import icone_certo from "../img/icone_certo.png";
import icone_erro from "../img/icone_erro.png";
import icone_quase from "../img/icone_quase.png"

export default function Question(props) {
  const { questionChange, setQuestionChange, iconeChange, setIconeChange, deck, index } = props;


  function OpenQuestion(i) {
    if (!questionChange.includes("opened_Q")) {
      const newChange = [...questionChange]
      newChange[i] = "opened_Q"
      setQuestionChange(newChange)
  
      const newIconeChange = [...iconeChange]
      newIconeChange[i] = seta_virar
      setIconeChange(newIconeChange)
    }
  }

  function TurnFlashcard(i) {
    const newChange = [...questionChange]
    newChange[i] = "opened_R"
    setQuestionChange(newChange)

  }

  if (questionChange[index] === "closed") {
    return (
      <ContainerQuestion>
        <p>Pergunta {index + 1}</p>
        <img onClick={() => OpenQuestion(index)} src={iconeChange[index]} alt="play" />
      </ContainerQuestion>
    );
  } else if (questionChange[index] === "opened_Q") {
    return (
      <ContainerQuestionOpened>
        <p>{deck[index].Q}</p>
        <img onClick={() => TurnFlashcard(index)} src={iconeChange[index]} alt="flashcard question" />
      </ContainerQuestionOpened>
    );
  } else if (questionChange[index] === "opened_R") {
    return (
      <ContainerQuestionOpened>
        <p>{deck[index].R}</p>
      </ContainerQuestionOpened>
    );
  }
}

const ContainerQuestion = styled.div`
  width: 300px;
  height: 35px;
  background-color: #ffffff;
  margin: 12px;
  padding: 15px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    font-family: "Recursive";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #333333;
  }
`;

const ContainerQuestionOpened = styled(ContainerQuestion) `
  min-height: 100px;
  background: #FFFFD5;
  font-family: 'Recursive';
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  position: relative;
  flex-direction: column;

  img {
    position: absolute;
    bottom: 10px;
    right: 10px;
  }
`
