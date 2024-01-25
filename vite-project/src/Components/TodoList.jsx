import React from "react";
import TodoItem from "./TodoItem";


export default function TodoList({todolist}) {
  return (
    <div className="container mt-2">
      <table class="table">
        <thead>
          <tr>
            <th scope="col-2">S.No</th>
            <th scope="col-4">Title</th>
            <th scope="col-6">Description</th>
          </tr>
        </thead>
        <tbody>
            {todolist.map((item,index)=>{
              return <TodoItem todo={item} indx ={index}/>
            })}

            {/* <TodoItem/> */}
            
        </tbody>
      </table>
    </div>
  );
}
