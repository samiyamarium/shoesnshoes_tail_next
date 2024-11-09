
import Home1 from '../Home/page';
import About1 from '../About/page';
import Contact1 from '../Contact/page'



const Navbar=()=>{
    return(<div>
        <div  className='text-center text-blue-500  outline-8 bg-blue-200  hue-rotate-30  text-4xl'><b className=' text-blue-500  outline-8 bg- blue-200  hue-rotate-30  text-4xl'></b>WELCOME TO YOUR SHOE OUTLET!!</div>
       <br/> <div className="p-2 text-center text-blue-500  outline-8 bg-indigo-400  hue-rotate-30  text-4xl "><a className="outline outline-blue-500 text-center text-blue-500  outline-4 bg-blue-200  hue-rotate-30  text-4xl" href="#H" target='blank'>Home</a>&nbsp;&nbsp;<a className="outline outline-blue-500 text-center text-blue-500  outline-4 bg-blue-200  hue-rotate-30  text-4xl" href="#A" target='blank'>About</a>&nbsp;&nbsp;<a className="outline outline-blue-500 text-center text-blue-500  outline-4 bg-blue-200  hue-rotate-30  text-4xl"  href="#C" target='blank'>Contact</a></div>
<div ><h1 className="flex" id="H"><Home1/></h1><h1 className="flex" id="A"><About1/></h1><h1  id="C"><Contact1/></h1>
</div><br/>
</div>
    )
}
export default Navbar;