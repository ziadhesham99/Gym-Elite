import { useState, useEffect } from "react";
import { FaDumbbell, FaRunning, FaUsers } from "react-icons/fa";
import {Link} from "react-router-dom";

export default function Home() {
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
                        src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        className="w-full h-full object-cover"
                        alt="Parallax"
                        style={{
                            transform: `translateY(${offsetY * 0.5}px)`,
                        }}
                    />
                    <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"/>
                </div>
                <div className="relative flex flex-col justify-center items-center h-full px-4 text-center">
                    <h1 className="text-white text-4xl font-bold drop-shadow-lg">
                        UNLEASH YOUR POTENTIAL – TRAIN HARD, <span className="text-yellow-500">STAY STRONG</span>!
                    </h1>
                    <button
                        onClick={()=>window.scrollTo({ top: 0, behavior: "smooth" })}
                        className="mt-8 px-8 py-3 text-lg font-bold text-black bg-yellow-500 rounded-full shadow-lg transition-all duration-300 hover:scale-105 hover:bg-yellow-400 focus:outline-none focus:ring-4 focus:ring-yellow-300"
                    >
                        <Link to={'/contactUs'}>Join Now</Link>
                    </button>
                </div>
            </div>


            <div className="bg-stone-200 py-16 px-6">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-stone-900">
                        Why Choose <span className="text-yellow-500">Elite Fitness?</span>
                    </h2>
                    <p className="text-stone-700 mt-4 text-lg">
                        At Elite Fitness, we provide top-notch training facilities, expert coaching, and a community that pushes you to be your best.
                    </p>
                </div>


                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {/* Strength Training */}
                    <div className="bg-white p-6 rounded-lg shadow-md text-center">
                        <FaDumbbell className="text-yellow-500 text-4xl mx-auto mb-4"/>
                        <h3 className="text-xl font-semibold text-stone-900">Strength & Conditioning</h3>
                        <p className="text-stone-600 mt-2">
                            Build muscle and power with our expert-designed programs for all levels.
                        </p>
                    </div>


                    <div className="bg-white p-6 rounded-lg shadow-md text-center">
                        <FaRunning className="text-yellow-500 text-4xl mx-auto mb-4"/>
                        <h3 className="text-xl font-semibold text-stone-900">Endurance & Cardio</h3>
                        <p className="text-stone-600 mt-2">
                            Increase stamina and performance with tailored cardio workouts.
                        </p>
                    </div>


                    <div className="bg-white p-6 rounded-lg shadow-md text-center">
                        <FaUsers className="text-yellow-500 text-4xl mx-auto mb-4"/>
                        <h3 className="text-xl font-semibold text-stone-900">Supportive Community</h3>
                        <p className="text-stone-600 mt-2">
                            Train with a like-minded community that keeps you motivated and accountable.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
