import React, { useState, useEffect } from 'react';

const Section138 = ({ isActive }) => {
    const [step, setStep] = useState(0);

    useEffect(() => {
        if (!isActive) { setStep(0); return; }
        const t1 = setTimeout(() => setStep(1), 184);
        const t2 = setTimeout(() => setStep(2), 551);
        const t3 = setTimeout(() => setStep(3), 918);
        return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
    }, [isActive]);

    return (
        <div className="w-full h-full flex items-center justify-center bg-gray-50 relative overflow-hidden">
            {/* Background Map Graphic (Subtle) */}
            <div className="absolute inset-0 z-0 flex items-center justify-center opacity-10">
                <svg className="w-full h-full max-w-[1200px]" viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100,300 C200,200 300,400 400,300 C500,200 600,400 700,300" fill="none" stroke="#1e3a8a" strokeWidth="2" strokeDasharray="5,5" />
                    <circle cx="100" cy="300" r="8" fill="#1e3a8a" />
                    <circle cx="400" cy="300" r="12" fill="#1e3a8a" />
                    <circle cx="700" cy="300" r="8" fill="#1e3a8a" />
                </svg>
            </div>

            {/* Central Content */}
            <div className="relative z-10 w-full max-w-[1000px] flex flex-col items-center justify-center text-center">
                
                {/* Chapter Label */}
                <div className={`transition-all duration-1000 ease-out ${step >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                    <div className="inline-flex items-center gap-4 mb-8">
                        <div className="w-12 h-1 bg-[#1e3a8a]"></div>
                        <span className="text-[24px] font-bold text-[#1e3a8a] tracking-widest uppercase">Chapter 7</span>
                        <div className="w-12 h-1 bg-[#1e3a8a]"></div>
                    </div>
                </div>

                {/* Main Title */}
                <div className={`transition-all duration-1000 delay-300 ease-out ${step >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                    <h1 className="text-[64px] md:text-[80px] font-extrabold text-[#1d1d1f] tracking-tight leading-tight mb-8 drop-shadow-sm">
                        중장기 액션플랜
                    </h1>
                </div>

                {/* Subtitle / Description */}
                <div className={`transition-all duration-1000 delay-500 ease-out ${step >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                    <p className="text-[22px] md:text-[26px] text-gray-600 font-medium leading-relaxed max-w-[700px] mx-auto break-keep">
                        IOTA 프로젝트 성공을 위한 시기별 핵심 우선순위 및 실행 전략
                    </p>
                </div>

            </div>

            {/* Bottom Accent Line */}
            <div className="absolute bottom-0 left-0 w-full h-4 bg-gradient-to-r from-blue-900 via-[#1e3a8a] to-blue-900"></div>
        </div>
    );
};

export default Section138;
