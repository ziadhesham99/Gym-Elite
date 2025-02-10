import {Link} from "react-router-dom";
import {useEffect, useState} from "react";

export default function NavBar (){
    const [scrolled, setScrolled] = useState(false);

    // Effect to detect scroll position
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Clean up event listener
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return(
    <nav className={`z-20  lg:text-2xl flex fixed w-full top-0 left-0 transition-all duration-300 ${
        scrolled ? 'bg-stone-700 p-3 px-6 lg:px-10' : 'bg-transparent p-6 px-4 md:px-8 lg:px-14'
    }`}
    >
        <div className={`font-semibold text-2xl lg:text-3xl text-yellow-400`}> Gym Elite</div>
        <div className={`text-stone-50 ml-auto gap-2 lg:gap-3 flex`}>
        <Link className={`hover:text-yellow-400`} to ='/'>Home</Link>
        <Link className={`hover:text-yellow-400`} to ='/about'>About</Link>
        <Link className={`hover:text-yellow-400`} to ='/services'>Services</Link>
       </div>
    </nav>
    );
}