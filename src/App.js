// import logo from './logo.svg';
import './App.css';
import Sidebar from './Sidebar'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Sidebar />}/>
      </Routes>
      </BrowserRouter>
      {/* <Sidebar /> */}
    </div>
  );
}

export default App;
