import React from "react";

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
          <tr>
            <th className="col-2">1</th>
            <td className="col-4">Yuvi</td>
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
          <tr>
            <th className="col-2">2</th>
            <td className="col-4">Anu</td>
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
        </tbody>
      </table>
    </div>
  );
}
