import React from 'react';
import Image from 'next/image';

import hom from './hom.png'
import wit from './wit.png'

const Home=()=>{
    return(<div>
        <br/><div  className='text-center text-blue-500  outline-8 bg-blue-200  hue-rotate-30  text-4xl'><b className=' text-blue-500  outline-8 bg- blue-200  hue-rotate-30  text-4xl'></b>HOME</div>
        <div className='bg-gray-200 flex text-rose-300 text-center outline-blue-400 outline outline-10 px-50 text-4xl font-mono'><div className='bg-gray-200 flex text-blue-500 text-center outline-blue outline outline-10 px-50 text-4xl font-mono'><Image className="w-48 h-48 text-center text-blue-500  outline-8 bg-rose-200  hue-rotate-30  text-4xl" src={hom}
          alt="TESTIMAG"/><p><b><br/><br /><br/><br /><br/><i  className='text-end text-violet-500   bg-gray-200 border-4 outline outline-gray  text-2xl ' >This is for you!!!!</i></b></p></div><p className='bg-blue-100 text-blue-500 text-2xl font-sans outline-gray-200 outline outline-10'><b><i>Shoes are one way to reflect your personality..<br/><br/>Colours, designs and the way you carry them says it all<br/><br/>but wait??!! <br/><br/>Does it bother you to go shop to shop and finding no best fit after all that  tiring drill??!!<br/><br/>No more worries!! we have just launched an onine shop to fit the best to every one!!</i></b></p><div className='bg-gray-200 flex text-blue-500 text-center outline-blue outline outline-10 px-50 text-4xl font-mono'><p className='bg-gray-200 flex text-blue-500 text-center outline-blue outline outline-10 px-50 text-4xl font-mono flex'>We are here <br/><br/><br/><br/><Image className="w-48 h-48  text-blue-500  outline outline-8 bg-blue-200   text-4xl"
          src={wit}
          alt="TESTIMAG"/></p></div>
</div><br/><br/>
        </div>
    )
}
export default Home;