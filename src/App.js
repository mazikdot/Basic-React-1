import logo from "./logo.svg";
import "./App.css";
import Header from './components/Header';
import TattooItem from "./components/TattooItem";
import TattooPost from "./components/TattooPost";
function App() {
 // const textInput = <input type="text" />;
  // const okButton = <button>สักหน่อยมั้ยหล่ะ</button>;
  //const okButton = <button>สักหน่อยมั้ยหล่ะ</button>;
  // jsx อะไรก็ตามที่อยู๋ใน () ต้องมี html เป็นแท็กแม่ได้แค่อันเดียว
  //แต่แท็กลูกข้างในเท่าไหร่ก็ได้
  return (
    <div className="App">
      {/* <h2>Muhammad Puteela</h2>
      <p>COE</p>
      <p>{textInput}</p>
      <p>{okButton}</p> */}
      <Header/>
        <div className="app-grid">
         <TattooItem/>
         <TattooItem/>
         <TattooItem/>
         <TattooItem/>
        </div>
      {/* <TattooPost/> */}
    </div>
  );
}

export default App;
