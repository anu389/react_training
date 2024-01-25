import React from "react";
import TodoItem1 from "./TodoItem1";
import TodoItem2 from "./TodoItem2";

export default function TodoList() {
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
            <TodoItem1/>
            <TodoItem2/>
        </tbody>
      </table>
    </div>
  );
}
