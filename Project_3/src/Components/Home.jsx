import styled from "styled-components";
import { Button } from "../Styled/Button";
function Home({ toggle }) {
  return (
    <>
      <Container>
        <div>
          <img src="/Images/dices.png" />
        </div>
        <div className="content">
          <h1>Dice Game </h1>

          <div>
            <Button onClick={toggle}>Play Game</Button>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Home;

const Container = styled.div`
  max-width: 1180px;
  display: flex;
  margin: 0 auto;
  height: 100vh;
  align-items: center;
  .content {
    display: flex;
    flex-direction: column;
    justify-content: end;
    h1 {
      font-size: 96px;
      white-space: nowrap;
    }
  }
`;
