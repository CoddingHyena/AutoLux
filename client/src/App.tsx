import '@/assets/css/style.css';
import '@fontsource/rubik/300.css';
import '@fontsource/rubik/400.css';
import '@fontsource/rubik/500.css';
import '@fontsource/rubik/700.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import StoreProvider from './store';

import { Provider as SnackbarProvider } from './components/snackbar';

import MUITheme from './utils/theme';
import Router from './utils/routes';
import CustomizationLayout from './components/layouts/customization';

function App() {
	return (
		<StoreProvider>
			<MUITheme>
				<SnackbarProvider>
					<CustomizationLayout />
					<Router />
				</SnackbarProvider>
			</MUITheme>
		</StoreProvider>
	);
}

export default App;

<!-- import { useEffect } from 'react';
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

export default App; -->