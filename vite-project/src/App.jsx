import React from 'react'
import Title from './Components/Title'
import AddToDo from './Components/AddToDo'
import TodoList from './Components/TodoList'

export default function App() {
  return(
  <>
  <div className="container shadow p-3 mb-5 bg-body-tertiary rounded">
  <center>
    <Title/>
    <AddToDo/>
    <TodoList/>
    
  </center>
  </div>
  </>
  )
}
