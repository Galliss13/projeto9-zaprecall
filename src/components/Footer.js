import styled from "styled-components";

export default function Footer(props) {
  return (
    <ContainerFooter>
      <ContainerButtons>
        <Button cor = '#FF3030'>Não lembrei</Button>
        <Button cor = '#FF922E'>Quase Lembrei</Button>
        <Button cor = '#2FBE34'>Zap!</Button>
      </ContainerButtons>
      <p>CONCLUÍDOS</p>
    </ContainerFooter>
  );
}

const ContainerFooter = styled.div`
  width: 100%;
  min-height: 50px;
  background-color: #ffffff;
  position: fixed;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "Recursive";
  font-weight: 400;
  font-size: 18px;
  color: #333333;
  padding: 10px;
`;

const ContainerButtons = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-between;
  margin: 20px;
`;

const Button = styled.button `
  width: 95px;
  height: 40px;
  font-family: "Recursive";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #ffffff;
  background: ${props => props.cor};
  border-radius: 5px;
  border: 1px solid;
  padding: 5px;
`
