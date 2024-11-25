import React, { useEffect } from 'react';
import Home from './components/Home.jsx';
import Navbar from './components/Navbar.jsx';
// import About from './components/About.jsx';
import Experience from './components/Experience.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import Aos from 'aos';
import 'aos/dist/aos.css'

function App() {
	useEffect(() => {
		Aos.init();
	},[])
  	return (
		<>
		<Navbar />
		<Home />
		<Experience />
		<Skills />
		<Projects />
		<Contact />
		</>
  	);
}

export default App;
