import React from 'react'
import styled from 'styled-components';
import AddTaskForm from './components/AddTaskForm';
import TodoList from './components/TodoList';

const AppWrap = styled.div`
    display: flex;
    flex-direction: column;
    max-width:800px;
    margin: 0 auto;
    row-gap: 30px;

`

function App() {
  return (
    <AppWrap>
      <AddTaskForm />
      <TodoList />
    </AppWrap>
  );
}

export default App;
