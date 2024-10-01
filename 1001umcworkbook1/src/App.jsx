import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
  background-color: #f1f1f1;
  width: 100vw;
  height: 100vh;
`;

const Title = styled.h1`
  font-size: 2em;
  margin-bottom: 20px;
  color: black;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  width: 400px;
  margin-bottom: 30px;
  border: 2px solid #ccc;
  border-radius: 5px;
`;

const Section = styled.div`
  width: 500px;
  margin-bottom: 30px;
  color: black;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 10px;
  background-color: #fff;
  color: black;
`;

const Button = styled.button`
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  
  &:hover {
    background-color: #45a049;
  }
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 5rem;
`;

const App = () => {
  const [todoInput, setTodoInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [completedTodos, setCompletedTodos] = useState([]);

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && todoInput) {
      setTodos([...todos, { text: todoInput, id: Date.now() }]);
      setTodoInput("");
    }
  };

  const handleComplete = (id) => {
    const completed = todos.find((todo) => todo.id === id);
    setTodos(todos.filter((todo) => todo.id !== id));
    setCompletedTodos([...completedTodos, completed]);
  };

  const handleDelete = (id) => {
    setCompletedTodos(completedTodos.filter((todo) => todo.id !== id));
  };

  return (
    <Container>
      <Title>UMC Study Plan</Title>
      <Input
        type="text"
        value={todoInput}
        onChange={(e) => setTodoInput(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="해야 할 일을 입력하세요"
      />

      <Row>
        <Section>
          <h2>해야 할 일</h2>
          <List>
            {todos.map((todo) => (
              <ListItem key={todo.id}>
                {todo.text}
                <Button onClick={() => handleComplete(todo.id)}>완료</Button>
              </ListItem>
            ))}
          </List>
        </Section>
        <Section>
          <h2>해낸 일</h2>
          <List>
            {completedTodos.map((todo) => (
              <ListItem key={todo.id}>
                {todo.text}
                <Button onClick={() => handleDelete(todo.id)}>삭제</Button>
              </ListItem>
            ))}
          </List>
        </Section>
      </Row>
    </Container>
  );
};

export default App;
