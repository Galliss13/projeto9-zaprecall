import Header from "./Header";
import Container from "./Container";
import Footer from "./Footer";

import styled from "styled-components";
import deck_standard from "../decks.js";

export default function App() {
    console.log(deck_standard);
  return (
    <ScreenContainer>
      <Header />
      <Container deck={deck_standard} />
      <Footer />
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
