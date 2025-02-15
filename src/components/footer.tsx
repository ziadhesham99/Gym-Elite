import {Link} from "react-router-dom";

export default function Footer() {
    return (
        <footer className="bg-stone-900 text-white py-10">
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="flex flex-col space-y-3">
                        <h2 className="text-2xl font-bold text-yellow-500">Elite Fitness</h2>
                        <p className="text-stone-400">
                            Unlock your strength. Train harder, feel better, and live stronger!
                        </p>
                    </div>
                    <div className="flex flex-col space-y-2">
                        <h3 className="text-lg font-semibold text-yellow-500">Quick Links</h3>
                        <Link onClick={()=>window.scrollTo({ top: 0, behavior: "smooth" })} to="/" className="text-stone-400 hover:text-yellow-400 transition">Home</Link>
                        <Link  onClick={()=>window.scrollTo({ top: 0, behavior: "smooth" })} to="/about" className="text-stone-400 hover:text-yellow-400 transition">About</Link>
                        <Link  onClick={()=>window.scrollTo({ top: 0, behavior: "smooth" })} to="/services" className="text-stone-400 hover:text-yellow-400 transition">Services</Link>
                        <Link  onClick={()=>window.scrollTo({ top: 0, behavior: "smooth" })} to="/contactUs" className="text-stone-400 hover:text-yellow-400 transition">Contact Us</Link>
                    </div>
                    <div className="flex flex-col space-y-2">
                        <h3 className="text-lg font-semibold text-yellow-500">Get in Touch</h3>
                        <p className="text-stone-400">📍 123 Fitness St, Cairo, Egypt</p>
                        <p className="text-stone-400">📞 +20 100 000 0000</p>
                        <p className="text-stone-400">📧 info@elitefitness.com</p>
                    </div>
                </div>

                <div className="border-t border-stone-700 mt-8 pt-4 text-center text-stone-500 text-sm">
                    © {new Date().getFullYear()} Elite Fitness. All Rights Reserved.
                </div>
            </div>
        </footer>
    );
}
