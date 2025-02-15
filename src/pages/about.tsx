import { useState, useEffect } from "react";
import { FaUserTie, FaDumbbell, FaMedal } from "react-icons/fa";

export default function About() {
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
                        src="https://media.istockphoto.com/id/481686206/photo/boxing-power.jpg?s=612x612&w=0&k=20&c=-zms0hnbqMWKd4oCRY_-99_aYNtvrEweZEMsgCgl_wE="
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
                        ABOUT <span className="text-yellow-500">ELITE FITNESS</span>
                    </h1>
                    <p className="text-stone-300 text-lg mt-4 max-w-2xl">
                        Our mission is to empower individuals through strength, endurance, and community support.
                    </p>
                </div>
            </div>
            <div className="bg-stone-100 py-16 px-6">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-stone-900">
                        Our <span className="text-yellow-500">Mission & Values</span>
                    </h2>
                    <p className="text-stone-700 mt-4 text-lg">
                        At Elite Fitness, we believe in providing top-tier training, expert guidance, and a community-driven approach to fitness.
                    </p>
                </div>

                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">

                    <div className="bg-white p-6 rounded-lg shadow-md text-center">
                        <FaDumbbell className="text-yellow-500 text-4xl mx-auto mb-4"/>
                        <h3 className="text-xl font-semibold text-stone-900">Strength & Power</h3>
                        <p className="text-stone-600 mt-2">
                            We help our members build muscle, confidence, and mental resilience through top-notch training.
                        </p>
                    </div>


                    <div className="bg-white p-6 rounded-lg shadow-md text-center">
                        <FaMedal className="text-yellow-500 text-4xl mx-auto mb-4"/>
                        <h3 className="text-xl font-semibold text-stone-900">Performance & Endurance</h3>
                        <p className="text-stone-600 mt-2">
                            Our programs focus on enhancing endurance, agility, and cardiovascular health.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md text-center">
                        <FaUserTie className="text-yellow-500 text-4xl mx-auto mb-4"/>
                        <h3 className="text-xl font-semibold text-stone-900">Commitment & Community</h3>
                        <p className="text-stone-600 mt-2">
                            Join a passionate fitness community that supports and motivates you every step of the way.
                        </p>
                    </div>
                </div>
            </div>


            <div className="bg-stone-900 text-white py-16 px-6">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-3xl font-bold">
                        Meet Our <span className="text-yellow-500">Expert Trainers</span>
                    </h2>
                    <p className="text-stone-300 mt-4 text-lg">
                        Our certified trainers bring years of experience to help you achieve your fitness goals.
                    </p>
                </div>

                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    <div className="bg-stone-800 p-6 rounded-lg shadow-md text-center">
                        <img
                            src="https://images.generated.photos/77lDOYGGyxmkV_bBBIDamNlwqutdbqgknetiQeSuQR8/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NDMwNDgwLmpwZw.jpg"
                            className="w-24 h-24 mx-auto rounded-full mb-4"
                            alt="Trainer 1"
                        />
                        <h3 className="text-xl font-semibold">James Carter</h3>
                        <p className="text-yellow-400 text-sm">Strength & Conditioning Coach</p>
                        <p className="text-stone-300 mt-2">
                            With over 10 years of experience, James specializes in building strength and resilience.
                        </p>
                    </div>
                    <div className="bg-stone-800 p-6 rounded-lg shadow-md text-center">
                        <img
                            src="https://images.generated.photos/T-At-ZMSJA19jwtk79_ZsS1EKsJf5Ja_b2BJm7PdPnI/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MjIxODcwLmpwZw.jpg"
                            className="w-24 h-24 mx-auto rounded-full mb-4"
                            alt="Trainer 2"
                        />
                        <h3 className="text-xl font-semibold">Sarah Adams</h3>
                        <p className="text-yellow-400 text-sm">Cardio & Endurance Specialist</p>
                        <p className="text-stone-300 mt-2">
                            Sarah's high-energy training focuses on improving stamina and overall fitness.
                        </p>
                    </div>

                    <div className="bg-stone-800 p-6 rounded-lg shadow-md text-center">
                        <img
                            src="https://images.generated.photos/O8sY1roO0yK77FFgkuKIAssBrGYsCxmRtRh4dDYjkOU/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NTU0MjUyLmpwZw.jpg"
                            className="w-24 h-24 mx-auto rounded-full mb-4"
                            alt="Trainer 3"
                        />
                        <h3 className="text-xl font-semibold">Michael Lee</h3>
                        <p className="text-yellow-400 text-sm">Flexibility & Recovery Coach</p>
                        <p className="text-stone-300 mt-2">
                            Michael helps athletes stay flexible, recover faster, and prevent injuries.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
