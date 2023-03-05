import './App.css';
import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom";
import { FirstPage } from './pages/FirstPage';
import { SecondPage } from './pages/SecondPage';
import { ThirdPage } from './pages/ThirdPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <header>
        <NavLink to="/">Page 1</NavLink>
        <NavLink to="/secondPage">Page 2</NavLink>
        <NavLink to="/thirdPage">Page 3</NavLink>
      </header>
        <Routes>
          <Route path="/" element={<FirstPage />}/>
          <Route path="/secondPage" element={<SecondPage />}/>
          <Route path="/thirdPage" element={<ThirdPage />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
