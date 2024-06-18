import React, { useState }  from "react";

const App= () =>{
  const [data,setData] = useState([])

  const addTask = () =>{
    var tk = document.getElementById("task").value 
    setData([...data,tk])

    
  }

  const dltTask = (index) =>{
      setData(data.filter((task,i)=> i !== index))
  }

  return <>
  <h1  className='text-center mt-5 bg-primary text-white'>To Do List</h1><hr/>
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-4 col-sm-4">
        <input type="text" placeholder="Enter Your Text" id="task" className="form-control"/>
        </div>
        <div className="col-lg-2 col-sm-2">
       <button className="btn btn-lg btn-success" onClick={addTask}>ADD TASK</button>
        </div>
      

      </div>
    </div>
    <hr/>

    <div className="container d-flex justify-content-center">
  <table className="table table-bordered stripped">
    <thead>
      <tr>
        <th>S.no</th>
        <th>Task Name</th>
        <th>Delete</th>
        <th>EDIT</th>
      </tr>
    </thead>
    <tbody>
      {data.map((task, index) => (
        <tr key={index}>
          <td>{index + 1}</td>
          <td>{task}</td>
          <td className="text-center">
            <button className="btn btn-lg btn-danger" onClick={() => dltTask(index)}>DELETE</button>
          </td>
          <td className="text-center">
            <button className="btn btn-lg btn-warning">EDIT</button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

  
  </>
}

export default App;