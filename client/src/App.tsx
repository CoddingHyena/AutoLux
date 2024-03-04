
import { useEffect } from 'react';
import './App.css'
import axios from 'axios';
import {  Actions } from '@reduxjs/toolkit';
import { Route, Routes } from 'react-router-dom';
import Auth from '../components/Auth';

function App() {

  const dispatch = useAppDispatch();

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_APP_URL}/users/checkSession`, {withCredentials: true})
    .then((res) => dispatch(Actions.auth(res.data)))
    .catch((error) => console.log(error));
  },[]);

  return (
    <>
  <Routes>
    <Route path='auth' element={<Auth/>}/> 
  </Routes>
    </>
  )
}

export default App;