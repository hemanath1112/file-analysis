import { Routes, Route } from 'react-router-dom';
import './App.css';
import LoginHeader from './Component/LoginHeader/LoginHeader'
import Abstart from './Component/AbstartHome/Abstart';
import AbstartDetails from './Component/AbstartHome/ProjectDetails'
import Login from './Component/Login/Login'
import Header from './Component/Header/Header'

function App() {
  return (
    <div className="App">
    {/* <Routes>
      <Route path='/' element={
        <>
        <LoginHeader/>
        <Abstart/>
        </>
      }/>
      <Route path='/details' element={
        <>
          <LoginHeader/>
          <Abstart/>
          <AbstartDetails/>
        </>
      }/>
      <Route path='/login' element={
        <>
          <LoginHeader/>
          <Login/>

        </>
      }/>
    </Routes> */}
    <Header/>
      
    </div>
  );
}

export default App;
