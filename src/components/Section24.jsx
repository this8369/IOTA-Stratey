import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Section24({ isActive }) {
    const { lang } = useLanguage();
    const [step, setStep] = useState(0);

    useEffect(() => {
        if (!isActive) {
            setStep(0);
            return;
        }
        
        const t1 = setTimeout(() => setStep(1), 300); // Small text
        const t2 = setTimeout(() => setStep(2), 900); // Big text
        
        return () => { clearTimeout(t1); clearTimeout(t2); };
    }, [isActive]);

    return (
        <section className="section w-full h-full bg-[#1d1d1f] flex flex-col items-center justify-center relative px-6 md:px-16 overflow-hidden">
            
            <style>{`
                .gradient-text-ch3 {
                    background: linear-gradient(90deg, #fcd34d, #b45309);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
            `}</style>

            <div className="w-full max-w-[1400px] mx-auto flex flex-col items-center text-center">
                
                {/* Top Small Text */}
                <div className={`transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${step >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <span className="inline-block text-[24px] md:text-[32px] font-bold text-white mb-[18px]">
                        Chapter 3.
                    </span>
                </div>

                {/* Main Text */}
                <h2 className={`text-[46px] md:text-[64px] lg:text-[76px] font-black leading-[calc(1.3em-6px)] break-keep transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${step >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <span className="gradient-text-ch3">
                        {lang === 'kr' ? (
                            <>자본시장 구조의 변화<br/>KOSPI 2,000에서 5,000으로</>
                        ) : (
                            <>Structural Changes in the Capital Market<br/>From KOSPI 2,000 to 5,000</>
                        )}
                    </span>
                </h2>

            </div>
        </section>
    );
}
