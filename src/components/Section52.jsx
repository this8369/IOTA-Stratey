import React, { useState, useEffect } from 'react';

export default function Section52({ isActive }) {
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
                        [미래 핵심 산업 4] K-바이오 클러스터의 절대적 팽창
                    </span>
                </div>

                {/* Main Title */}
                <h2 className={`text-[36px] md:text-[50px] lg:text-[56px] font-extrabold leading-[calc(1.3em-4px)] text-[#1d1d1f] break-keep tracking-[-0.02em] transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${step >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} dangerouslySetInnerHTML={{ __html: '매출 10조 시대를 여는 CDMO 역량이<br/>창출할 거대 부동산 실수요' }}>
                </h2>

                {/* Content Box */}
                <div className={`flex flex-col w-full max-w-[1100px] mt-[48px] bg-white border-[6px] border-[#1d1d1f] p-8 md:p-12 text-left transition-all duration-[1000ms] ease-out ${step >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                    <h3 className="text-[26px] md:text-[30px] font-extrabold text-[#1e3a8a] mb-6 pb-4 border-b-2 border-gray-100">
                        2.4 바이오 융합 / 장수의학 / 세포·유전자치료
                    </h3>
                    <ul className="text-[20px] md:text-[24px] text-gray-800 leading-[1.6] font-bold space-y-4 break-keep">
                        <li className="flex items-start"><span className="mr-3 text-[#1e3a8a] mt-1">▪</span><span>삼성바이오로직스 매출 2024년 4.6조 원 → 2030년 10조 원+ 컨센서스</span></li>
                        <li className="flex items-start"><span className="mr-3 text-[#1e3a8a] mt-1">▪</span><span>셀트리온의 짐펜트라 미국 출시 등 K-바이오 글로벌 확장 가속</span></li>
                        <li className="flex items-start"><span className="mr-3 text-[#1e3a8a] mt-1">▪</span><span>세포·유전자 치료 CDMO에서 글로벌 두 자릿수 점유율 잠재력</span></li>
                    </ul>
                </div>
                
            </div>
        </section>
    );
}
