// import logo from './logo.svg';
import './App.css';
import Landing from './Landing';
import Play from './Play';
import {BrowserRouter,Routes,Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Landing/>}/>
      <Route exact path="/play" element={<Play/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
