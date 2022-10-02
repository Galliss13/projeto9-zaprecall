import styled from "styled-components";
import seta_play from "../img/seta_play.png";
import seta_virar from "../img/seta_virar.png"

export default function Question(props) {
  const { questionChange, setQuestionChange, deck, index } = props;

  if (questionChange[index] === "closed") {
    return (
      <ContainerQuestion >
        <p>Pergunta {props.index + 1}</p>
        <img src={seta_play} alt="play" />
      </ContainerQuestion>
    );
  } else if (questionChange[index] === "opened_Q") {
    return (
      <ContainerQuestionOpened>
        <p>{deck[index].Q}</p>
        <img src={seta_virar} alt="play" />
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
