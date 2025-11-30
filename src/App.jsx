import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import F1Test from './pages/F1Test';
import BaseballTest from './pages/BaseballTest';
import Result from './pages/Result';
import Compare from './pages/Compare';
import Statistics from './pages/Statistics';
import Layout from './Layout';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
          <Route path="/statistics" element={<Statistics />}></Route>
        </Route>
      </Routes>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
