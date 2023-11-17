import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
//class College extends React.Component{
  function College(){
    function Clicking(){
      alert("Button is clicked")
    }
  
  //render(){
    //return <h1>Shridevi Institute of Engineering and Technology</h1>
    //return <button onClick={()=>alert("Button is clicked")}>Click here</button>
    return <button onClick={Clicking}>Click here</button>
  }
//}
//}
const root1=ReactDOM.createRoot(document.getElementById('root'))
root1.render(<College/>)

function Department() {
  return (<div>
    <College/>
    <h2>ECE department</h2>
  </div>)
}
const root2=ReactDOM.createRoot(document.getElementById('root'))
root2.render(<Department/>)

function Section(props){
  return(
    <div>
    <College/>
    <Department/>
    <p>Name is {props.sec.name}</p>
    </div>
    )
}
//const root3=ReactDOM.createRoot(document.getElementById('root'))
//root3.render(<div>
  //<Section sec="A"/>
 // <Section sec="B"/>
//</div>)

function Student(){
const a={
  name:"Divyashree S S",
  roll:40
}

return(
  <div>
    <Section sec={a}/>
  </div>
)
}
const root4=ReactDOM.createRoot(document.getElementById('root'))
root4.render(<Student/>)

reportWebVitals();