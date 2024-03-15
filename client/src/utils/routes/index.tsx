import { lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import ScrollToTopOnRouteChange from '../hocs/withScrollTopOnRouteChange';
import withLazyLoadably from '../hocs/withLazyLoadably';

import MinimalLayout from '../../components/layouts/minimalLayout';
import MainLayout from '../../components/layouts/mainLayout';
import ResetPWDEmail from '../../pages/Auth/ResetPWDEmail';
import ResetPWD from '../../pages/Auth/ResetPWD';


const SamplePage = withLazyLoadably(lazy(() => import('../../pages/sample')));
const BossPage = withLazyLoadably(lazy(() => import('../../pages/Boss/Boss')));
const ProfilePage = withLazyLoadably(lazy(() => import('../../pages/Profile/Profile')));
const MainPage = withLazyLoadably(lazy(() => import('../../pages/Main/Main')));
const ManagerPage = withLazyLoadably(lazy(() => import('../../pages/Manager/Manager')));
const Auth = withLazyLoadably(lazy(() => import('../../pages/Auth/Auth')));
const AdminPage = withLazyLoadably(lazy(() => import('../../pages/Admin/Admin')));
const ContactsPage = withLazyLoadably(lazy(() => import('../../pages/Contacts/Contacts')));
const SellCars = withLazyLoadably(lazy(() => import('../../pages/SellCars/SellCars')));



function Router() {
	return (
		<BrowserRouter>
			<ScrollToTopOnRouteChange>
				<Routes>
					<Route path="/" element={<MainLayout />}>
						<Route path="" index element={<MainPage />} />
						<Route path="boss" element={<BossPage />} />
						<Route path="manager" element={<ManagerPage />} />
						<Route path="sellCars" element={<SellCars />} />
						<Route path="admin" element={<AdminPage />} />
						<Route path="profile" element={<ProfilePage />} />
						<Route path="contacts" element={<ContactsPage />} />
						<Route path="auth" element={<Auth />} />
						<Route path='reset-password-email' element={<ResetPWDEmail/>}/>
						<Route path='resetPassword/:token' element={<ResetPWD/>}/>
						
					</Route>
				</Routes>
			</ScrollToTopOnRouteChange>
		</BrowserRouter>
	);
}

export default Router;
