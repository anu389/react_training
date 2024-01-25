import React from 'react'
import Title from './Components/Title'
import AddToDo from './Components/AddToDo'
import TodoList from './Components/TodoList'

export default function App() {
  const todolist=[{name:"Computer",
                   desc:"It is an electronic device"},
                  {name:"Software",
                  desc:"Software is a set of instructions"}]
  return(
  <>
  <div className="container shadow p-3 mb-5 bg-body-tertiary rounded">
  <center>
    <Title/>
    <AddToDo/>
    <TodoList todolist={todolist}/>
  </center>
  </div>
  </>
  )
}
