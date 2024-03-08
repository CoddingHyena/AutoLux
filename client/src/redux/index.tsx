// Импортируем необходимые зависимости
import { configureStore } from '@reduxjs/toolkit';
import { Provider as ReduxProvider, useSelector, useDispatch } from 'react-redux'; // Импорт useSelector и useDispatch
import userSlice from './User/userSlice'; // Путь к вашему userSlice
import themeReducer from '../redux/theme'; // Путь к вашему themeReducer
import lkSlice from '../redux/lk/lkSlice';
import adminSlice from '../redux/admin/adminSlice';
import managerSlice from '../redux/manager/managerSlice';

// Определяем тип стора, если вам нужно строгая типизация
type StoreType = {
    user: ReturnType<typeof userSlice>;
    theme: ReturnType<typeof themeReducer>;
    lkSlice: ReturnType<typeof lkSlice>;
    adminSlice: ReturnType<typeof adminSlice>;
    managerSlice: ReturnType<typeof managerSlice>
};

// Создаем конфигурацию стора с объединением редьюсеров
const store = configureStore({
    reducer: {
        userSlice, // userSlice теперь отвечает за раздел 'user' в глобальном состоянии
        theme: themeReducer, // themeReducer отвечает за раздел 'theme'
        lkSlice,
        adminSlice,
        managerSlice,
    },
});

// Экспортируем типы для использования в приложении, если необходимо
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Экспортируем компонент Provider для оборачивания вашего приложения
function Provider({ children }) {
	return <ReduxProvider store={store}>{children}</ReduxProvider>;
}

// Экспорт готового к использованию стора и Provider
export { useSelector, useDispatch, Provider };
export default store;