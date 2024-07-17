import React, { useState } from 'react';
import btn from "./../../../public/icon-dice.svg";
import divider from "./../../../public/pattern-divider-desktop.svg";

const Home = () => {
    const [advice, setAdvice] = useState(""); // State to store individual advice

    const handleFetch = async () => {
        try {
            // Fetch random advice
            let fetchApi = await fetch(`https://api.adviceslip.com/advice`);
            let res = await fetchApi.json();
            console.log(res);
            if (res && res.slip) {
                setAdvice(res.slip);
            } else {
                setAdvice("No advice found");
            }
        } catch (error) {
            console.error("Error fetching advice:", error);
            setAdvice("Error fetching advice");
        }
    }

    return (
        <div className='bg-[#1F2A39] min-h-screen flex justify-center items-center'>
            <div className='container mx-auto p-4'>
                <div className='max-w-lg mx-auto p-8 relative'>
                    {advice && (
                        <div className='mt-4 p-10 sm:p-16 bg-[#2C3546] shadow-md rounded-md text-center '>
                            <h2 className='text-lg font-semibold text-[#2AF598] uppercase'>Advice #{advice.id}</h2>
                            <p className='text-white text-center mt-5'>{advice.advice}</p>
                            <div className='mt-10'>
                                <img src={divider} alt="Divider" className="w-full" />
                            </div>
                        </div>
                    )}
                    <div className='flex justify-center items-center mt-4 absolute bottom-0 left-[40%] sm:left-[45%]'>
                        <button
                            className='flex items-center px-4 py-2 bg-[#2AF598] text-white rounded-[50%] h-14 w-14 hover:[#2AF598] focus:outline-none focus:ring-2  focus:ring-opacity-50'
                            onClick={handleFetch}
                        >
                            <img src={btn} alt="button" className="w-6 h-6 mr-2" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
