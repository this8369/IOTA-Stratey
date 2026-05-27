import React, { useState, useEffect } from 'react';

export default function Section50({ isActive }) {
    const [step, setStep] = useState(0);

    useEffect(() => {
        if (!isActive) { setStep(0); return; }
        const t1 = setTimeout(() => setStep(1), 300);
        const t2 = setTimeout(() => setStep(2), 800);
        const t3 = setTimeout(() => setStep(3), 1100);
        const t4 = setTimeout(() => setStep(4), 1600);
        return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4); };
    }, [isActive]);

    return (
        <section className="section w-full h-full bg-[#fdfdfd] flex flex-col items-center justify-center relative px-6 md:px-16 overflow-hidden">
            <div className="w-full max-w-[1400px] mx-auto flex flex-col items-center text-center">
                
                {/* Theme */}
                <div className={`transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${step >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <span className="inline-block text-[22px] md:text-[26px] font-extrabold text-[#777] uppercase tracking-[-0.02em] mb-[12px]">
                        [미래 핵심 산업 2] 7,350억 달러 국가 이니셔티브, AI 인프라
                    </span>
                </div>

                {/* Main Title */}
                <h2 className={`text-[34px] md:text-[46px] lg:text-[52px] font-black leading-[calc(1.3em-4px)] text-[#1d1d1f] break-keep tracking-[-0.02em] transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${step >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} dangerouslySetInnerHTML={{ __html: '데이터센터 10GW 시대를 여는<br/>글로벌 하이퍼스케일러의 집결' }}>
                </h2>

                {/* Infographic Middle Section (Dry & Bold) */}
                <div className="w-full max-w-[1200px] flex flex-col md:flex-row gap-6 mt-[40px] mb-[40px] justify-center">
                    <div className={`flex-1 flex flex-col items-center justify-center bg-white border-[6px] border-[#1d1d1f] py-[40px] px-8 transition-all duration-[1000ms] ease-out ${step >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        <p className="text-[18px] md:text-[20px] font-bold text-gray-500 uppercase mb-3 break-keep">2030년 한국 IT 용량</p>
                        <p className="text-[36px] md:text-[48px] font-black text-black tracking-tight leading-tight break-keep">10GW+ 도달 가능</p>
                    </div>
                    <div className={`flex-1 flex flex-col items-center justify-center bg-gray-50 border-[6px] border-gray-400 py-[40px] px-8 transition-all duration-[1000ms] ease-out delay-200 ${step >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        <p className="text-[18px] md:text-[20px] font-bold text-gray-500 uppercase mb-3 break-keep">정부 sovereign AI 투자</p>
                        <p className="text-[36px] md:text-[48px] font-black text-gray-800 tracking-tight leading-tight break-keep">7,350억 달러</p>
                    </div>
                </div>

                {/* Bottom Summary */}
                <div className={`w-full max-w-[1200px] pt-8 border-t-[4px] border-[#1d1d1f] transition-all duration-[900ms] ease-out ${step >= 4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <ul className="text-[18px] md:text-[22px] text-gray-800 leading-[1.6] font-bold space-y-3 break-keep inline-block text-left mx-auto">
                        <li className="flex items-start"><span className="mr-3 text-black font-extrabold mt-1">▪</span><span>Base 케이스 6.3GW (현재 3배), Bull 케이스 10GW+ 도달 전망</span></li>
                        <li className="flex items-start"><span className="mr-3 text-black font-extrabold mt-1">▪</span><span>Stock Farm Road(3GW), SK-AWS 확장, 삼성 2,300억 달러 등 거대 파이프라인 집중</span></li>
                        <li className="flex items-start"><span className="mr-3 text-black font-extrabold mt-1">▪</span><span>단일 산업으로 GDP 10% 기여 목표라는 정부의 명시적 정책 의지 반영</span></li>
                    </ul>
                </div>
                
            </div>
        </section>
    );
}
