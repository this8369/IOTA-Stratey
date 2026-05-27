import React, { useState, useEffect } from 'react';

export default function Section45({ isActive }) {
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
                    <span className="inline-block text-[22px] md:text-[26px] font-bold text-[#0055ff] uppercase tracking-[-0.02em] mb-[12px]">
                        Bull Scenario (확률 30%)
                    </span>
                    <h2 className="text-[32px] md:text-[46px] lg:text-[52px] font-extrabold leading-[calc(1.3em-6px)] text-[#1d1d1f] break-keep tracking-[-0.02em]">
                        고급제조 + 콘텐츠 + 금융<br/>"동아시아 스위스" 모델<br/>재포지셔닝
                    </h2>
                </div>

                {/* Right Side: Stats & Assumptions (Sharp Box, Large Text) */}
                <div className={`flex-[0.8] w-full max-w-[590px] bg-[#f8fbff] rounded-none p-8 md:p-12 border-[6px] border-blue-200 lg:-translate-x-[40px] transition-all duration-[1000ms] ease-out ${step >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                    <div className="space-y-8">
                        <div>
                            <p className="text-blue-500 text-[16px] md:text-[17px] font-bold mb-2 uppercase">2030년 예상 GDP</p>
                            <p className="text-[32px] md:text-[40px] font-bold text-[#0055ff] tracking-tight">2.5 ~ 2.7조 달러</p>
                        </div>
                        <div className="w-full h-px bg-blue-100"></div>
                        <div>
                            <p className="text-blue-500 text-[16px] md:text-[17px] font-bold mb-2 uppercase">3조 달러 도달 시점</p>
                            <p className="text-[32px] md:text-[40px] font-bold text-[#0055ff] tracking-tight">2034 ~ 2035년</p>
                        </div>
                        <div className="w-full h-px bg-blue-100"></div>
                        <div>
                            <p className="text-blue-500 text-[16px] md:text-[17px] font-bold mb-4 uppercase">핵심 전제</p>
                            <ul className="text-gray-800 space-y-4 text-[19px] md:text-[21px] break-keep leading-relaxed font-bold">
                                <li className="flex items-start"><span className="text-blue-400 mr-3">•</span><span>HBM/AI 인프라 패권 유지 및 대규모 외인 자본 유입</span></li>
                                <li className="flex items-start"><span className="text-blue-400 mr-3">•</span><span>환율 KRW/USD 1,000~1,150 (원화 강세)</span></li>
                                <li className="flex items-start"><span className="text-blue-400 mr-3">•</span><span>K-콘텐츠, K-방산, K-원전, K-조선 슈퍼사이클 진입</span></li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
