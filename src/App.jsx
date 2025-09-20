import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import F1Test from './pages/F1Test';
import BaseballTest from './pages/BaseballTest';
import Result from './pages/Result';
import Compare from './pages/Compare';
import Layout from './Layout';

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/test/f1" element={<F1Test />}></Route>
          <Route path="/test/baseball" element={<BaseballTest />}></Route>
          <Route path="/result" element={<Result />}></Route>
          <Route path="/compare" element={<Compare />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
