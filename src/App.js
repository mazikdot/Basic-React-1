import logo from "./logo.svg";
import "./App.css";
import Header from './components/Header';
import TattooItem from "./components/TattooItem";
import TattooPost from "./components/TattooPost";
import ReactDOM from 'react-dom'
import tattoos from "./data/tattoos";
import { useState } from "react";
function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
 // ReactDOM.render(element, document.getElementById('root'));
}
function test(){
  
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
 
  //ReactDOM.render(element, document.getElementById('test'));
  setInterval(test, 1000);
}
const element = (
  <div>
    <h1>Hello, world!</h1>
    <h2>It is {new Date().toLocaleTimeString()}.</h2>
  </div>
  
);
function App() {
  
  // text ข้อมูลที่สามารถเอาไปใช้ต่อข้างใน App ได้
  // setText เปลี่ยนแปลงข้อมูลใหม่
 // const textInput = <input type="text" />;
  // const okButton = <button>สักหน่อยมั้ยหล่ะ</button>;
  //const okButton = <button>สักหน่อยมั้ยหล่ะ</button>;
  // jsx อะไรก็ตามที่อยู๋ใน () ต้องมี html เป็นแท็กแม่ได้แค่อันเดียว
  //แต่แท็กลูกข้างในเท่าไหร่ก็ได้
  //ReactDOM.render(element, document.getElementById('root'));
 // setInterval(App, 1000);

 const [selectedTattoo,setTSelectedTattoo] = useState(tattoos[1])
  const tatooElements = tattoos.map((tattoo,index) => {
    return  <TattooItem key={index} tattoo = {tattoo}/>
  })

  let tattooPost = null;
  if(!!selectedTattoo) {
    tattooPost = <TattooPost tattoo={selectedTattoo}/>
  }
  // state คือ ข้อมูลที่สามารถเปลี่ยนแปลงได้ แต่ props คือ รับเข้ามาใช้งานได้ ไม่มีสิทธิ์เปลี่ยนแปลง

  return (
    <div className="App">
      {/* <h2>Muhammad Puteela</h2>
      <p>COE</p>
      <p>{textInput}</p>
      <p>{okButton}</p> */}
    
      <Header/>
        <div className="app-grid">
        {tatooElements}
        </div>
        {tattooPost}
    </div>
  );
}

export default App;
