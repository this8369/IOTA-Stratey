import React, { useState, useEffect } from 'react';

export default function Section11({ isActive }) {
    const [step, setStep] = useState(0);

    useEffect(() => {
        if (!isActive) {
            setStep(0);
            return;
        }
        
        const t1 = setTimeout(() => setStep(1), 300); // Theme & Title
        const t2 = setTimeout(() => setStep(2), 1000); // Intro Text
        const t3 = setTimeout(() => setStep(3), 1600); // Small Box (2007)
        const t4 = setTimeout(() => setStep(4), 2200); // Arrow (2.5x)
        const t5 = setTimeout(() => setStep(5), 2600); // Large Box (2025-2027)
        
        return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4); clearTimeout(t5); };
    }, [isActive]);

    return (
        <section className="section w-full h-full bg-[#f8f9fa] flex flex-col items-center justify-center relative px-6 md:px-16 overflow-hidden">
            
            <div className="w-full max-w-[1400px] mx-auto flex flex-col items-center text-center">
                
                {/* Theme */}
                <div className={`transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${step >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <span className="inline-block text-[22px] md:text-[26px] font-bold text-[#888] uppercase mb-[12px] bg-transparent">
                        [거시 경제] 마침내 도달할 GDP 2조 달러 고지
                    </span>
                </div>

                {/* Main Title */}
                <h2 className={`text-[32px] md:text-[46px] lg:text-[52px] font-extrabold leading-[calc(1.3em-6px)] text-[#1d1d1f] break-keep transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${step >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    명목 가치 2.5배 확장이 증명하는<br/>
                    대한민국 매크로의 퀀텀 점프
                </h2>

                {/* Infographic Scale Comparison */}
                <div className="relative w-full max-w-[1000px] mt-[60px] h-[340px] flex items-end justify-center gap-12">
                    
                    {/* 2007 Box */}
                    <div className={`relative flex flex-col items-center justify-end transition-all duration-[1000ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] ${step >= 3 ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-50 translate-y-20'}`}>
                        <div className="text-center mb-4">
                            <span className="block text-[24px] font-bold text-gray-500">2007년</span>
                            <span className="block text-[18px] text-gray-400">1조 달러 돌파</span>
                        </div>
                        <div className="w-[180px] h-[120px] bg-white border-[4px] border-[#888] shadow-lg flex items-center justify-center rounded-xl relative overflow-hidden">
                            <div className="absolute bottom-0 left-0 w-full bg-gray-100 h-1/2"></div>
                            <span className="relative z-10 text-[28px] font-black text-[#555]">1,043조 원</span>
                        </div>
                    </div>

                    {/* Arrow / Multiplier */}
                    <div className={`flex flex-col items-center justify-center mb-[40px] transition-all duration-[800ms] ease-out ${step >= 4 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
                        <span className="text-[48px] font-black text-transparent bg-clip-text bg-gradient-to-r from-[#1e3a8a] to-[#e04c9a] mb-2 tracking-tighter">
                            2.5X
                        </span>
                        <div className="w-[120px] h-[4px] bg-gradient-to-r from-gray-300 via-gray-500 to-gray-800 relative">
                            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent border-l-[12px] border-l-gray-800"></div>
                        </div>
                        <span className="text-[16px] font-bold text-gray-600 mt-2 uppercase tracking-widest">Expansion</span>
                    </div>

                    {/* 2027 Box */}
                    <div className={`relative flex flex-col items-center justify-end transition-all duration-[1200ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] ${step >= 5 ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-50 translate-y-32'}`}>
                        <div className="text-center mb-4">
                            <span className="block text-[32px] font-black text-[#1e3a8a]">2026~2027년 (E)</span>
                            <span className="block text-[20px] font-bold text-[#1e3a8a]">2조 달러 시대</span>
                        </div>
                        <div className="w-[280px] h-[260px] bg-[#1e3a8a] shadow-2xl flex items-center justify-center rounded-2xl relative overflow-hidden">
                            <div className="absolute bottom-0 left-0 w-full h-2/3 bg-gradient-to-t from-[#0f172a] to-transparent opacity-50"></div>
                            <div className="relative z-10 text-center">
                                <span className="block text-[42px] font-black text-white">2,650조 원</span>
                                <span className="block text-[18px] font-bold text-blue-200 mt-1">대한민국 명목 GDP</span>
                            </div>
                        </div>
                    </div>

                </div>

            

                {/* Description Text */}
                <div className={`mt-12 max-w-[1000px] text-[15px] md:text-[19px] leading-[1.45] font-medium text-gray-700 break-keep text-center transition-all duration-[900ms] ease-out ${step >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <ul className="text-left inline-block space-y-2 mx-auto">
                        <li className="flex items-start"><span className="mr-3 text-[#1e3a8a]">▪</span><span>2024년 한국 명목 GDP 약 1.87조 달러, 2025년 1.95조 달러 내외를 기록함</span></li>
                        <li className="flex items-start"><span className="mr-3 text-[#1e3a8a]">▪</span><span><strong>2026~2027년 사이</strong>에 2조 달러를 공식 돌파할 전망임</span></li>
                        <li className="flex items-start"><span className="mr-3 text-[#1e3a8a]">▪</span><span>원화 환산 시 2007년 약 1,043조 원에서 2025년 약 2,650조 원으로 증가함</span></li>
                        <li className="flex items-start"><span className="mr-3 text-[#1e3a8a]">▪</span><span>이는 단순 명목 기준으로 <strong>약 2.5배 확장된 퀀텀 점프</strong>를 의미함</span></li>
                    </ul>
                </div>
</div>
        </section>
    );
}
