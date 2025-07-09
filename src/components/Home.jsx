import React,{ useEffect,useRef } from 'react'
import pdf from '../media/CV of saddam hossain.pdf'
import hero from './Data/hero.json'
import Typed from 'typed.js';

const Home = () => {
  const typedRef = useRef(null);
  useEffect(() => {
    const options = {
      strings:["Welcome To My Profile", "This is Saddam Hossain", "I am a full stack software developer","I have more than 5 year's experience in tech industry."],
      typeSpeed:50,
      backSpeed:50,
      loop:true,
    }
    const typed = new Typed(typedRef.current, options);

    return() => {
      typed.destroy();
    }
  }, [])
  return (
    <>
      <div className="container home" id="home">
        <div className="left"
        data-aos="fade-up-right"
        data-aos-duration="1000"
        >
          <h1 ref={typedRef}></h1>
          <a href={pdf} download="CV of Saddam.pdf" className="btn btn-outline-warning">Download Resume</a>
        </div>
        <div className="right"
			data-aos="fade-up-left"
			data-aos-duration="1000"
			>
			<div className="img">
				<img 
					src={`/assets/${hero.imgSrc || 'default.png'}`} 
					alt="Saddam Hossain" 
					aria-label="Profile Picture"
				/>
			</div>
        </div>
      </div>
    </>
  )
}

export default Home;
