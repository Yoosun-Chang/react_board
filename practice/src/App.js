import React from "react";
import TodoListContainer from "./components/TodoListContainer.jsx";
import styled from "styled-components";
import AddForm from "./components/AddForm.jsx";

const App = () => {
  return (
    <StContainer>
      <AddForm />
      <TodoListContainer />
    </StContainer>
  );
};

export default App;

const StContainer = styled.section`
  max-width: 1440px;
  margin: 0 auto;
`;