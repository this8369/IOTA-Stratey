import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Section119({ isActive }) {
    const { lang } = useLanguage();
    const [step, setStep] = useState(0);

    useEffect(() => {
        if (!isActive) {
            setStep(0);
            return;
        }

        const timers = [
            setTimeout(() => setStep(1), 184),
            setTimeout(() => setStep(2), 551),
        ];

        return () => timers.forEach(clearTimeout);
    }, [isActive]);

    return (
        <section className="section w-full h-full bg-[#111111] flex flex-col items-center justify-center relative px-6 md:px-16 overflow-hidden">
            <div className="w-full max-w-[1400px] mx-auto flex flex-col justify-center h-full relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end w-full">
                    
                    {/* Left content */}
                    <div className="flex-1">
                        <div className={`transition-all duration-[612ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${step >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                            <h3 className="text-[#3b82f6] text-[20px] md:text-[24px] font-bold tracking-widest uppercase mb-4 md:mb-6">
                                Part 4. IOTA Seoul Role & Positioning
                            </h3>
                        </div>
                        
                        <div className={`transition-all duration-[612ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${step >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                            <h2 className="text-[42px] md:text-[64px] lg:text-[76px] font-black text-white leading-[1.1] tracking-[-0.02em] break-keep">
                                Chapter 2.<br />
                                {lang === 'kr' ? '자본 구조와 실행 변수' : 'Capital Structure & Execution Variables'}
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[60vw] h-full bg-gradient-to-l from-[#1e3a8a]/20 to-transparent z-0 opacity-50"></div>
            <div className="absolute bottom-[-10vh] left-[-10vw] w-[40vw] h-[40vw] rounded-full bg-[#3b82f6]/10 blur-[120px] z-0"></div>
        </section>
    );
}
