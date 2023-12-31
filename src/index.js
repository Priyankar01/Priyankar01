import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Experience from './components/Experience/Experience';
import Footer from './components/Footer/Footer';
import Landing from './components/Landing/Landing';
import Projects from './components/Projects/Project';
import Navbar from './components/Navbar/Navbar';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Navbar />
		<Landing />
		<About />
		<Projects />
		<Experience />
		<Contact />
		<Footer />
	</React.StrictMode>
);
