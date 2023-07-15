import { useState } from 'react';
import Header from './components/Header';
import Login from './components/Login';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
	return (
		<>
			<Header />

			<Login></Login>
		</>
	);
}

export default App;
