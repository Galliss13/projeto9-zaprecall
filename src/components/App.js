import Header from "./Header";
import Container from "./Container";
import Footer from "./Footer";

import React from "react";
import styled from "styled-components";
import deck_standard from "../decks";

import seta_play from "../img/seta_play.png"

export default function App() {
  const arrayChange = deck_standard.map((q) => "closed");
  const [questionChange, setQuestionChange] = React.useState(arrayChange);

  console.log(arrayChange, questionChange);

  const arrayIconeChange = deck_standard.map((i) => seta_play);
  const [iconeChange, setIconeChange] = React.useState(arrayIconeChange);
  return (
    <ScreenContainer>
      <Header />
      <Container
        questionChange={questionChange}
        setQuestionChange={setQuestionChange}
        deck={deck_standard}
        iconeChange={iconeChange}
        setIconeChange={setIconeChange}
      />
      <Footer
        questionChange={questionChange}
        setIconeChange={setIconeChange}
      />
    </ScreenContainer>
  );
}

const ScreenContainer = styled.div`
  background-color: #fb6b6b;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px;
  padding: 0px;
  padding-bottom: 200px;
`;
