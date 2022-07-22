import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Counter = () => {
  const [count, setCount] = useState();

  useEffect(() => {
    setCount(0);
  }, []);

  return (
    <Container>
      <Content>
        <h1>Counter App</h1>
        <Count>
          <h1>{count}</h1>
        </Count>
        <Buttons>
          <button type="button" onClick={() => setCount(count + 1)}>
            Increment
          </button>
          <button
            type="button"
            onClick={() => setCount(count - 1)}
            disabled={count === 0}
          >
            Decrement
          </button>
          <button type="button" onClick={() => setCount(0)}>
            Reset
          </button>
        </Buttons>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  max-width: 1128px;
  margin: auto;
  text-align: center;
  padding: 0;

  h1 {
    :first-child {
      color: red;
    }
  }
`;

const Content = styled.div`
  width: 400px;
  height: 400px;
  background-color: lightcoral;
  border-radius: 20px;
  margin: auto;
  margin-top: 4rem;
`;

const Buttons = styled.div`
  margin: 10px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  button {
    margin: 10px;
    border: none;
    color: white;
    padding: 10px;
    border-radius: 20px;
    background-color: green;
    cursor: pointer;
    text-transform: uppercase;
    font-weight: 700px;
    letter-spacing: 1px;
    transition: all 0.5s ease-in-out;
    :hover {
      background-color: lightgreen;
      color: black;
      letter-spacing: 1.5px;
    }
  }
`;

const Count = styled.div`
  color: red;
`;

export default Counter;
