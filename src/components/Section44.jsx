import React, { useState, useEffect } from 'react';

export default function Section44({ isActive }) {
    const [step, setStep] = useState(0);

    useEffect(() => {
        if (!isActive) { setStep(0); return; }
        const t1 = setTimeout(() => setStep(1), 300);
        const t2 = setTimeout(() => setStep(2), 700);
        return () => { clearTimeout(t1); clearTimeout(t2); };
    }, [isActive]);

    return (
        <section className="section w-full h-full bg-[#fdfdfd] flex flex-col items-center justify-center relative px-6 md:px-16 overflow-hidden">
            <div className="w-full max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
                
                {/* Left Side: Theme & Title */}
                <div className={`flex-1 transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${step >= 1 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
                    <span className="inline-block text-[22px] md:text-[26px] font-bold text-[#888] uppercase tracking-[-0.02em] mb-[12px]">
                        Base Scenario (확률 50%)
                    </span>
                    <h2 className="text-[32px] md:text-[46px] lg:text-[52px] font-extrabold leading-[calc(1.3em-6px)] text-[#1d1d1f] break-keep tracking-[-0.02em]">
                        IMF·OECD·KDI<br/>공통 컨센서스 기반<br/>표준 성장 궤도 진입
                    </h2>
                </div>

                {/* Right Side: Stats & Assumptions (Sharp Box, Large Text) */}
                <div className={`flex-[0.8] w-full max-w-[590px] bg-gray-50 rounded-none p-8 md:py-8 md:px-12 border-[6px] border-gray-200 lg:-translate-x-[90px] transition-all duration-[1000ms] ease-out ${step >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                    <div className="space-y-6">
                        <div>
                            <p className="text-gray-400 text-[16px] md:text-[17px] font-bold mb-2 uppercase">2030년 예상 GDP</p>
                            <p className="text-[32px] md:text-[40px] font-bold text-black tracking-tight">2.2 ~ 2.4조 달러</p>
                        </div>
                        <div className="w-full h-px bg-gray-200"></div>
                        <div>
                            <p className="text-gray-400 text-[16px] md:text-[17px] font-bold mb-2 uppercase">3조 달러 도달 시점</p>
                            <p className="text-[32px] md:text-[40px] font-bold text-black tracking-tight">2037 ~ 2038년</p>
                        </div>
                        <div className="w-full h-px bg-gray-200"></div>
                        <div>
                            <p className="text-gray-400 text-[16px] md:text-[17px] font-bold mb-4 uppercase">핵심 전제</p>
                            <ul className="text-gray-800 space-y-4 text-[19px] md:text-[21px] break-keep leading-relaxed font-bold">
                                <li className="flex items-start"><span className="text-gray-400 mr-3">•</span><span>실질성장률 연 1.5~2.0%, 인플레 2~3% 유지</span></li>
                                <li className="flex items-start"><span className="text-gray-400 mr-3">•</span><span>환율 KRW/USD 1,200~1,300 박스권</span></li>
                                <li className="flex items-start"><span className="text-gray-400 mr-3">•</span><span>AI 생산성 향상(0.3~0.5%p 상향)으로 인구 감소 상쇄</span></li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
