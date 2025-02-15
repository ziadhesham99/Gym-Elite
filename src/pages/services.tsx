import { useState, useEffect } from "react";
import { FaHeartbeat, FaRunning, FaDumbbell } from "react-icons/fa";
import {Link} from "react-router-dom";

export default function Services() {
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
                        src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        className="w-full h-full object-cover"
                        alt="Parallax"
                        style={{ transform: `translateY(${offsetY * 0.5}px)` }}
                    />
                    <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"/>
                </div>
                <div className="relative flex flex-col justify-center items-center h-full px-4 text-center">
                    <h1 className="text-white text-4xl font-bold drop-shadow-lg">
                        OUR <span className="text-yellow-500">SERVICES</span>
                    </h1>
                    <p className="text-stone-300 text-lg mt-4 max-w-2xl">
                        We offer specialized training programs designed to enhance strength, endurance, and overall fitness.
                    </p>
                </div>
            </div>

            <div className="bg-stone-100 py-16 px-6">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-stone-900">
                        What We <span className="text-yellow-500">Offer</span>
                    </h2>
                    <p className="text-stone-700 mt-4 text-lg">
                        Our services are designed to cater to all fitness levels, ensuring personalized and goal-driven results.
                    </p>
                </div>

                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    <div className="bg-white p-6 rounded-lg shadow-md text-center">
                        <FaDumbbell className="text-yellow-500 text-4xl mx-auto mb-4"/>
                        <h3 className="text-xl font-semibold text-stone-900">Strength Training</h3>
                        <p className="text-stone-600 mt-2">
                            Improve your muscle strength and endurance with our expert-designed strength training programs.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md text-center">
                        <FaRunning className="text-yellow-500 text-4xl mx-auto mb-4"/>
                        <h3 className="text-xl font-semibold text-stone-900">Cardio & Endurance</h3>
                        <p className="text-stone-600 mt-2">
                            Boost your stamina and cardiovascular health with our high-energy endurance training.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md text-center">
                        <FaHeartbeat className="text-yellow-500 text-4xl mx-auto mb-4"/>
                        <h3 className="text-xl font-semibold text-stone-900">Personalized Coaching</h3>
                        <p className="text-stone-600 mt-2">
                            Receive one-on-one coaching tailored to your fitness goals and needs.
                        </p>
                    </div>
                </div>
                <div className="mt-12 flex justify-center">
                    <button
                        onClick={()=>window.scrollTo({ top: 0, behavior: "smooth" })}
                        className="bg-yellow-500 text-white text-lg font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-yellow-600 transition">
                        <Link to={`/contactUs`}>Join Now</Link>
                    </button>
                </div>
            </div>
        </div>
    );
}
