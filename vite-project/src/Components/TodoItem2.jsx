import React from 'react'

export default function TodoItem2() {
  return (
    <>
    <tr>
      <th className="col-2">2</th>
      <td className="col-4">Buy bread</td>
      <td className="col-6">
        <div className="row">
          <div className="col-8">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Asperiores, architecto.
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
