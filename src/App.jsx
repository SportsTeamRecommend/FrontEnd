import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import F1Test from './pages/F1Test';
import BaseballTest from './pages/BaseballTest';
import Result from './pages/Result';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/test/f1" element={<F1Test />}></Route>
        <Route path="/test/baseball" element={<BaseballTest />}></Route>
        <Route path="/result" element={<Result />}></Route>
      </Routes>
    </>
  );
}

export default App;
