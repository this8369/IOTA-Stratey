import React, { useState, useEffect } from 'react';

export default function Section62({ isActive }) {
    const [step, setStep] = useState(0);

    useEffect(() => {
        if (!isActive) { setStep(0); return; }
        const timers = [
            setTimeout(() => setStep(1), 300),
            setTimeout(() => setStep(2), 1000),
        ];
        return () => timers.forEach(clearTimeout);
    }, [isActive]);

    return (
        <section className="section w-full h-full bg-[#1d1d1f] flex flex-col items-center justify-center relative px-6 md:px-16 overflow-hidden">
            <div className="absolute inset-0 bg-[url('/assets/noise.png')] opacity-10 mix-blend-overlay pointer-events-none"></div>
            
            <div className="w-full max-w-[1200px] mx-auto flex flex-col items-center text-center relative z-10">
                <div className={`transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${step >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <span className="inline-block text-[24px] md:text-[30px] font-medium text-gray-400 tracking-[0.2em] mb-[20px] uppercase">
                        Chapter 4
                    </span>
                </div>

                <h1 className={`text-[46px] md:text-[70px] lg:text-[85px] font-black leading-[1.1] text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500 tracking-[-0.03em] break-keep transition-all duration-1000 delay-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${step >= 2 ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'}`}>
                    서울 오피스 시장<br/>2030~2040 전망
                </h1>
                
                <div className={`w-[80px] h-[4px] bg-blue-600 mt-[40px] transition-all duration-1000 delay-700 ${step >= 2 ? 'opacity-100 w-[80px]' : 'opacity-0 w-0'}`}></div>
            </div>
        </section>
    );
}
