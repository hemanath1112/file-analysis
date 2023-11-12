import { Routes, Route } from 'react-router-dom';
import './App.css';
import LoginHeader from './Component/LoginHeader/LoginHeader'
import Abstart from './Component/AbstartHome/Abstart';
import AbstartDetails from './Component/AbstartHome/ProjectDetails'
import Login from './Component/Login/Login'
import Header from './Component/Header/Header'
import Home from './Component/Home/Home'
import File from './Component/File/File'
import Document1 from './Component/Document/Document1';
import SearchFile1 from './Component/File/SearchFile1';
import Document2 from './Component/Document/Document2'
import Document3 from './Component/Document/Document3'
import Document4 from './Component/Document/Document4'
import Document5 from './Component/Document/Document5'

function App() {
  return (
    <div className="App">
     <Routes>
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
      <Route path='/home' element={
        <>
        <Header/>
        <Home/>
        </>
      }/>
      <Route path='/process' element={
        <>
         <Header/>
          <File/>
        </>
      }/>
      <Route path='/file' element={
        <>
        <Header/>
        <Document1/>
        </>
      }/>
      <Route path='/file2' element={
        <>
        <Header/>
        <Document2/>
        </>
      }/>
      <Route path='/file3' element={
        <>
        <Header/>
        <Document3/>
        </>
      }/>
      <Route path='/file4' element={
        <>
        <Header/>
        <Document4/>
        </>
      }/>
      <Route path='/file5' element={
        <>
        <Header/>
        <Document5/>
        </>
      }/>
      <Route path='password' element={
        <>
        <Header/>
        <SearchFile1/>
        </>
      }/>
    </Routes>
    </div>
  );
}

export default App;
