import logo from './logo.svg';
import './App.css';
import { Outlet } from 'react-router-dom';

import Navbar from './Navbar';

function App() {
  return (
    <div>
        <Navbar></Navbar>
        <Outlet></Outlet>
        
    </div>
  );
}

export default App;
