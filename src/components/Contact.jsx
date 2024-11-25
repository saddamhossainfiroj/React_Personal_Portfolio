import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { CgMail } from "react-icons/cg";

const Contact = () => {
  return (
    <>
		<div className="container contact" id="contact">
			<div className="contact-icon"
			data-aos="zoom-in-up"
			data-aos-duration="1000"
			>
				<a href='https://www.instagram.com/saddamhfiroj/' target='_blank' className="items"><FaInstagram className='icon' /></a>
				<a href='https://www.facebook.com/saddamhfiroj' target='_blank' className="items"><CiFacebook className='icon' /></a>
				<a href='https://www.linkedin.com/in/saddamhossainfiroj/' target='_blank' className="items"><CiLinkedin className='icon' /></a>
				<a href='https://www.x.com' target='_blank' className="items"><FaXTwitter className='icon' /></a>
				<a href='https://github.com/saddamhossainfiroj' target='_blank' className="items"><FaGithub className='icon' /></a>
				<a href='https://www.google.com' target='_blank' className="items"><CgMail className='icon' /></a>
			</div>
		</div>
    </>
  )
}

export default Contact;
