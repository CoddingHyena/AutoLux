import { useEffect } from 'react';
import { fetchCheckUser } from '../src/redux/User/userThunkAction';
import { useAppDispatch } from '../src/redux/hooks';

import '@/assets/css/style.css';
import '@fontsource/rubik/300.css';
import '@fontsource/rubik/400.css';
import '@fontsource/rubik/500.css';
import '@fontsource/rubik/700.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { Provider as SnackbarProvider } from './components/snackbar';

import MUITheme from './utils/theme';
import Router from './utils/routes';
import CustomizationLayout from './components/layouts/customization';
function App() {

  const dispatch = useAppDispatch();

  useEffect(() => {
    void dispatch(fetchCheckUser())
    console.log('useEEffect отрабатывает')
  }, []);

  return (

      <MUITheme>
        <SnackbarProvider>
          <CustomizationLayout />
          <Router />
        </SnackbarProvider>
      </MUITheme>

  );
}

export default App;
