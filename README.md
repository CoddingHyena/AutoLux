# AutoLux
Это история про самый крутой автосалон!




				<Routes>
					<Route path="/" element={<MainLayout />}>
						<Route index element={<SamplePage />} />
						<Route path="boss" element={<SamplePage />} />
						<Route path="manager" element={<SamplePage />} />
						<Route path="admin" element={<SamplePage />} />
						<Route path="user" element={<SamplePage />} />
						<Route path="contacts" element={<SamplePage />} />
						<Route path="login" element={<SamplePage />} />
						<Route path="register" element={<SamplePage />} />
					</Route>
				</Routes>










                
{
  "name": "client",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview"
  },
  "dependencies": {
    "@emotion/react": "^11.11.4",
    "@emotion/styled": "^11.11.0",
    "@fontsource/roboto": "^5.0.12",
    "@mui/icons-material": "^5.15.11",
    "@mui/material": "^5.15.11",
    "@mui/styled-engine-sc": "^6.0.0-alpha.17",
    "@reduxjs/toolkit": "^2.2.1",
    "axios": "^1.6.7",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-redux": "^9.1.0",
    "react-router-dom": "^6.22.2",
    "styled-components": "^6.1.8"
  },
  "devDependencies": {
    "@types/react": "^18.2.56",
    "@types/react-dom": "^18.2.19",
    "@typescript-eslint/eslint-plugin": "^7.0.2",
    "@typescript-eslint/parser": "^7.0.2",
    "@vitejs/plugin-react": "^4.2.1",
    "eslint": "^8.56.0",
    "eslint-plugin-react-hooks": "^4.6.0",
    "eslint-plugin-react-refresh": "^0.4.5",
    "typescript": "^5.2.2",
    "vite": "^5.1.4"
  }
}