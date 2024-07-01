import React, { useState } from 'react';
import "../App.css";
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCirclePlus, } from '@fortawesome/free-solid-svg-icons';
import { faCirclePlus,faCalendarXmark } from '@fortawesome/free-solid-svg-icons';


export default function Todo() {
  
  const [input, setInput] = useState(["buy apple"]);

  const addItem = ()=>{
      const it = document.getElementById('item').value;
      setInput([...input,it])
    
  }

  const dltItem = (index)=>{
    setInput(input.filter((item, i) => i !== index));
  }
 
  return (
    <>
          <div className="container">
          <div className="row justify-content-center">
          <h1 className='text-center mt-5 bg-secondary text-white'>To Do List</h1>
          <div className="col-lg-4 col-sm-4">
          <input type="text" placeholder="Add an Item" id='item'  className="form-control"/>&nbsp;&nbsp;
          </div>
          <div className="col-lg-2 col-sm-2">
          <Button onClick={addItem}>
            <FontAwesomeIcon  icon={faCirclePlus} />
          </Button>
          </div>
          </div>
          <ol>
           {input.map((item,index)=>{
            return<li key={index}>{item}&nbsp;&nbsp;  <Button onClick={() => dltItem(index)}><FontAwesomeIcon icon={faCalendarXmark}/></Button> </li>
           })}
          </ol>
    
     </div>
    </>
  );
}
