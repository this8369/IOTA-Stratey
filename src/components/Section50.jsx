import React, { useState, useEffect } from 'react';

export default function Section50({ isActive }) {
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
                        [미래 핵심 산업 2] 7,350억 달러 국가 이니셔티브, AI 인프라
                    </span>
                </div>

                {/* Main Title */}
                <h2 className={`text-[36px] md:text-[50px] lg:text-[56px] font-extrabold leading-[calc(1.3em-4px)] text-[#1d1d1f] break-keep tracking-[-0.02em] transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${step >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} dangerouslySetInnerHTML={{ __html: '데이터센터 10GW 시대를 여는<br/>글로벌 하이퍼스케일러의 집결' }}>
                </h2>

                {/* Content Box */}
                <div className={`flex flex-col w-full max-w-[1100px] mt-[48px] bg-white border-[6px] border-[#1d1d1f] p-8 md:p-12 text-left transition-all duration-[1000ms] ease-out ${step >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                    <h3 className="text-[26px] md:text-[30px] font-extrabold text-[#1e3a8a] mb-6 pb-4 border-b-2 border-gray-100">
                        2.2 AI 데이터센터
                    </h3>
                    <ul className="text-[20px] md:text-[24px] text-gray-800 leading-[1.6] font-bold space-y-4 break-keep">
                        <li className="flex items-start"><span className="mr-3 text-[#1e3a8a] mt-1">▪</span><span>Base 케이스에서 2030년 한국 IT 용량 6.3GW (현재의 3배), Bull 케이스에서는 10GW+ 도달 가능</span></li>
                        <li className="flex items-start"><span className="mr-3 text-[#1e3a8a] mt-1">▪</span><span>Stock Farm Road의 전남 3GW 단일 데이터센터, SK-AWS 울산 캠퍼스 확장 옵션, MS-KT 파트너십 등</span></li>
                        <li className="flex items-start"><span className="mr-3 text-[#1e3a8a] mt-1">▪</span><span>삼성 단독으로 2030년까지 AI 인프라에 2,300억 달러 투자 발표</span></li>
                        <li className="flex items-start"><span className="mr-3 text-[#1e3a8a] mt-1">▪</span><span>정부 총 7,350억 달러 규모 sovereign AI 이니셔티브 진행 (단일 산업으로 GDP 10% 기여 목표)</span></li>
                    </ul>
                </div>
                
            </div>
        </section>
    );
}
