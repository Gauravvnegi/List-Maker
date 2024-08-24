import React, {useState} from  'react';

const App = ()=>{
  const [currentData, setValue] = useState('');
  const [data , storeElement] = useState([]);
  function storeValue(){
    // setValue(value);
    // storeElement([...data , currentData])
    storeElement((data)=>{
      let updatedData = [...data , currentData];
      setValue('');
      return updatedData;
    })
  }
  function showTextData(e){
    setValue(e.target.value);
    
  }
  function delText(i){
      const updatedData = data.filter((ele,id)=>{
        return id!== i;
      })
      storeElement(updatedData);
  }
  
  return (
    <>
      <h1>WELCOME TO TODOLIST</h1>
      <div className="card-container">
        <input type="text" 
        className="input-text"
         placeholder=
        "Enter Text"
         value = {currentData} 
         onChange={showTextData}>
        </input>
        <button className="add-button" onClick={storeValue}>ADD</button>
        {data.length > 0 && (
          <ul>
            {data.map((item, index) => (
              <li key={index}>{item}
              <button className='del-button' onClick={()=>{
                delText(index)
              }}>DEL</button>
              </li>
              
            ))}
          </ul>
        )}
      </div>


    </>
  )
}
export default App;