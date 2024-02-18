import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Landing from './components/Landing';
import WorkerReg from './components/WorkerReg';

function App() {
  return (
    <div>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home method='post' />}></Route>
      <Route path='/login' element={<Login method='post' />}></Route>
      <Route path='/signup' element={<Signup method='post' />}></Route>
      <Route path='/land' element={<Landing method='post' />}></Route>
      <Route path='/WorkerReg' element={<WorkerReg method='post' />}></Route>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
