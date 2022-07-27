import logo from './logo.svg';
import './App.css';
import Login from './Component/Login';
import Form from './Component/Form';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <div>
  
    <Router>
    <div className="App">
      <div className="auth-wrapper">
        <div className="auth-inner">-
          <Routes>
           <Route exact path="/" element={<Login />} />
           <Route path="/Login" element={<Login />} />
            <Route path="/Form" element={<Form />} />
            
         
          </Routes>
        </div>
      </div>
    </div>
  </Router>
  </div>
  );
}

export default App;
