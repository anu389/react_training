import React from 'react'

export default function AddToDo() {
  return (
    <div className ='container'>
        <form className='row'>
            <div className='col-5'>
                <input class="form-control" type="text" id ="exampleinput" aria-label="default input example" defaultValue="Add Task"></input>
            </div>
            <div className='col-5 pe-0'>
                <input class="form-control" type="date" id ="exampleinput" aria-label="default input example" defaultValue="Add Task"></input>
            </div>
            <div className='col ms-0'>
                <button type ="button" class="btn btn-success"> Success </button>
            </div>
        

        </form>
    </div>    


  )
}
