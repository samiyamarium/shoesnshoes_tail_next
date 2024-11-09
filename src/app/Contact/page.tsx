import React from 'react';
import Image from 'next/image';
import './App.css';
import email from './email.png';
import inn from './inn.png'

const Contact=()=>{
    return(
        <div>
        <div  className='text-center text-blue-500  outline-8 bg-blue-200  hue-rotate-30  text-4xl'><b className=' text-blue-500  outline-8 bg- blue-200  hue-rotate-30  text-4xl'></b>CONTACT US</div>
         <div className='text-center text-blue-500  outline-8 bg-blue-200  hue-rotate-30  text-4xl'><p><Image className='w-12 text-center text-blue-500  outline-8 bg-blue-200  hue-rotate-30  text-4xl' src={email} width={48} alt="email"/><a className='hover:bg-pink-400 text-center text-blue-500  outline-8 bg-blue-200  hue-rotate-30  text-4xl' href="mailto:samiyamarium8@gmail.com">SEND US AN EMAIL!!</a></p><br/><hr/><br/><a className='hover:bg-pink-300 text-center text-blue-500  outline-8 bg-blue-200  hue-rotate-30  text-4xl' href='https://www.linkedin.com/in/samiya-marium-893192a8/'>CONNECT WITH US ON LINKEDIN!!</a><Image className='w-12 text-center text-blue-500  outline-8 bg-blue-200  hue-rotate-30  text-4xl' src={inn}  alt="linkedin"/></div>
    </div>
    )
}

export default Contact;