import React from 'react'

export default function TodoItem(props) {
  let todo = props.todo;
  let inx= parseInt(props.indx) +1

  return (
    <>
          <tr>
            <th className="col-2">{inx}</th>
            <td className="col-4">{todo.name}</td>
            <td className="col-6">
              <div className="row">
                <div className="col-8">
                  <p>
                    {todo.desc}
                  </p>
                </div>
                <div className="col-4">
                  <button type="button" class="btn btn-outline-dark">
                    Delete
                  </button>
                </div>
              </div>
            </td>
          </tr>
          
    </>
  )
}
