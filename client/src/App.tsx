import { useEffect } from 'react';
import './App.css'
import { Route, Routes } from 'react-router-dom';
import Auth from '../components/Auth/Auth';
import { fetchCheckUser } from '../redux/User/userThunkAction';
import { useAppDispatch } from '../redux/hooks';



function App() {

  const dispatch = useAppDispatch();

  useEffect(() => {
    void dispatch(fetchCheckUser())
  }, []);

  return (
    <>
    <Auth/>
  {/* <Routes>
    <Route path='auth' element={<Auth/>}/> 
  </Routes> */}
    </>
  )
}

export default App;