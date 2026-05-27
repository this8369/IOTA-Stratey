import React, { useState, useEffect } from 'react';

export default function Section48({ isActive }) {
    const [step, setStep] = useState(0);

    useEffect(() => {
        if (!isActive) { setStep(0); return; }
        const t1 = setTimeout(() => setStep(1), 300);
        return () => clearTimeout(t1);
    }, [isActive]);

    return (
        <section className="section w-full h-full bg-[#fdfdfd] flex flex-col items-center justify-center relative px-6 md:px-16 overflow-hidden">
            <div className="w-full max-w-[1400px] mx-auto flex flex-col items-center text-center">
                <h2 className={`text-[48px] md:text-[64px] lg:text-[72px] font-extrabold leading-[calc(1.3em-4px)] text-[#1d1d1f] break-keep tracking-[-0.02em] transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${step >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    핵심 산업 모멘텀 시나리오별 전망
                </h2>
                <div className={`w-24 h-2 bg-[#1e3a8a] mt-12 transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] delay-300 ${step >= 1 ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}></div>
            </div>
        </section>
    );
}
