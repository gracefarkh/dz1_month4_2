import React from 'react';
import './App.css';


function Welcome(props){
  return(
    <h1>Привет , {props.name} </h1>
  )
}
function App (){
  return(
    <div>
      <Welcome name='sarah'/>
      <Welcome name='armi'/>
      <Welcome name='lily'/>
    </div>
  )
}
export default App


