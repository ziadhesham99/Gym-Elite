import { useState, useEffect } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactUs() {
    const [offsetY, setOffsetY] = useState(0);

    const handleScroll = () => {
        setOffsetY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div>
            <div className="relative h-screen bg-stone-900">
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                    <img
                        src="https://media.istockphoto.com/id/615883260/photo/difficult-doesnt-mean-impossible.jpg?s=612x612&w=0&k=20&c=cAEJvjTFRuF9H9gRov1Aj4X4I6xV6DSvMwWsf-2IW-0="
                        className="w-full h-full object-cover"
                        alt="Parallax"
                        style={{ transform: `translateY(${offsetY * 0.5}px)` }}
                    />
                    <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"/>
                </div>
                <div className="relative flex flex-col justify-center items-center h-full px-4 text-center">
                    <h1 className="text-white text-4xl font-bold drop-shadow-lg">
                        CONTACT <span className="text-yellow-500">US</span>
                    </h1>
                    <p className="text-stone-300 text-lg mt-4 max-w-2xl">
                        Get in touch with us through any of the following methods.
                    </p>
                </div>
            </div>

            <div className="bg-stone-100 py-16 px-6">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-stone-900">
                        Get In <span className="text-yellow-500">Touch</span>
                    </h2>
                    <p className="text-stone-700 mt-4 text-lg">
                        We'd love to hear from you! Reach out via email, phone, or visit us.
                    </p>
                </div>

                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    <div className="bg-white p-6 rounded-lg shadow-md text-center">
                        <FaEnvelope className="text-yellow-500 text-4xl mx-auto mb-4"/>
                        <h3 className="text-xl font-semibold text-stone-900">Email</h3>
                        <p className="text-stone-600 mt-2">contact@example.com</p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md text-center">
                        <FaPhone className="text-yellow-500 text-4xl mx-auto mb-4"/>
                        <h3 className="text-xl font-semibold text-stone-900">Phone</h3>
                        <p className="text-stone-600 mt-2">+1 (234) 567-890</p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md text-center">
                        <FaMapMarkerAlt className="text-yellow-500 text-4xl mx-auto mb-4"/>
                        <h3 className="text-xl font-semibold text-stone-900">Location</h3>
                        <p className="text-stone-600 mt-2">123 Street Name, City, Country</p>
                    </div>
                </div>

                <div className="mt-12 max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-2xl font-bold text-stone-900 text-center mb-6">Send Us a Message</h3>
                    <form action="https://formspree.io/f/example" method="POST" className="flex flex-col gap-4">
                        <input type="text" name="name" placeholder="Your Name" className="border p-3 rounded-lg w-full" required />
                        <input type="email" name="email" placeholder="Your Email" className="border p-3 rounded-lg w-full" required />
                        <textarea name="message" rows={4} placeholder="Your Message" className="border p-3 rounded-lg w-full" required></textarea>
                        <button type="submit" className="bg-yellow-500 text-white text-lg font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-yellow-600 transition">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
