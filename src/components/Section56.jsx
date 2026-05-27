import React, { useState, useEffect } from 'react';

export default function Section56({ isActive }) {
    const [step, setStep] = useState(0);

    useEffect(() => {
        if (!isActive) { setStep(0); return; }
        const t1 = setTimeout(() => setStep(1), 300);
        const t2 = setTimeout(() => setStep(2), 700);
        const t3 = setTimeout(() => setStep(3), 1100);
        return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
    }, [isActive]);

    return (
        <section className="section w-full h-full bg-[#fdfdfd] flex flex-col items-center justify-center relative px-6 md:px-16 overflow-hidden">
            <div className="w-full max-w-[1400px] mx-auto flex flex-col items-center text-center">
                
                {/* Theme */}
                <div className={`transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${step >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <span className="inline-block text-[22px] md:text-[26px] font-bold text-[#888] uppercase tracking-[-0.02em] mb-[16px]">
                        [미래 핵심 산업 8] 168조 원 실버 시장의 거대한 개막
                    </span>
                </div>

                {/* Main Title */}
                <h2 className={`text-[36px] md:text-[50px] lg:text-[56px] font-extrabold leading-[calc(1.3em-4px)] text-[#1d1d1f] break-keep tracking-[-0.02em] transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${step >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} dangerouslySetInnerHTML={{ __html: '글로벌 펀드와 융합하여 침투율 0.6%의<br/>블루오션을 선점할 시니어 케어' }}>
                </h2>

                {/* Content Box */}
                <div className={`flex flex-col w-full max-w-[1100px] mt-[48px] bg-white border-[6px] border-[#1d1d1f] p-8 md:p-12 text-left transition-all duration-[1000ms] ease-out ${step >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                    <h3 className="text-[26px] md:text-[30px] font-extrabold text-[#1e3a8a] mb-6 pb-4 border-b-2 border-gray-100">
                        2.8 시니어 케어 경제
                    </h3>
                    <ul className="text-[20px] md:text-[24px] text-gray-800 leading-[1.6] font-bold space-y-4 break-keep">
                        <li className="flex items-start"><span className="mr-3 text-[#1e3a8a] mt-1">▪</span><span>2025년 기준 한국 시니어 하우징 침투율 0.6% (미국 11%, 호주 6% 대비 극도로 저개발)</span></li>
                        <li className="flex items-start"><span className="mr-3 text-[#1e3a8a] mt-1">▪</span><span>시니어 하우징 시장 규모 2020년 72조 원 → 2030년 168조 원 전망</span></li>
                        <li className="flex items-start"><span className="mr-3 text-[#1e3a8a] mt-1">▪</span><span>이지스, KB골든라이프케어 등 실버타운 출시 및 글로벌 펀드(Warburg Pincus·Invesco)의 한국 시니어 시장 진입 본격화</span></li>
                    </ul>
                </div>
                
            </div>
        </section>
    );
}
