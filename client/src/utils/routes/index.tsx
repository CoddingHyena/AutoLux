import { lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import ScrollToTopOnRouteChange from '../hocs/withScrollTopOnRouteChange';
import withLazyLoadably from '../hocs/withLazyLoadably';

import MinimalLayout from '../../components/layouts/minimalLayout';
import MainLayout from '../../components/layouts/mainLayout';


const SamplePage = withLazyLoadably(lazy(() => import('../../pages/sample')));
const BossPage = withLazyLoadably(lazy(() => import('../../pages/bossPage/bossPage')));
const LoginPage = withLazyLoadably(lazy(() => import('../../pages/loginPage/loginPage')));
const MainPage = withLazyLoadably(lazy(() => import('../../pages/mainPage/mainPage')));
const ManagerPage = withLazyLoadably(lazy(() => import('../../pages/managerPage/managerPage')));
const ProfilePage = withLazyLoadably(lazy(() => import('../../pages/profilePage/profilePage')));
const RegisterPage = withLazyLoadably(lazy(() => import('../../pages/registerPage/registerPage')));
const AdminPage = withLazyLoadably(lazy(() => import('../../pages/adminPage/adminPage')));
const ContactsPage = withLazyLoadably(lazy(() => import('../../pages/contactsPage/contactsPage')));



function Router() {
	return (
		<BrowserRouter>
			<ScrollToTopOnRouteChange>
				<Routes>
					<Route path="/" element={<MainLayout />}>
						<Route path="" index element={<MainPage />} />
						<Route path="boss" element={<BossPage />} />
						<Route path="manager" element={<ManagerPage />} />
						<Route path="admin" element={<AdminPage />} />
						<Route path="profile" element={<ProfilePage />} />
						<Route path="contacts" element={<ContactsPage />} />
						<Route path="login" element={<LoginPage />} />
						<Route path="register" element={<RegisterPage />} />
					</Route>
				</Routes>
			</ScrollToTopOnRouteChange>
		</BrowserRouter>
	);
}

export default Router;
