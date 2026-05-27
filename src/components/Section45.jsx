import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Section45({ isActive }) {
    const { lang } = useLanguage();
    const [step, setStep] = useState(0);

    useEffect(() => {
        if (!isActive) { setStep(0); return; }
        const t1 = setTimeout(() => setStep(1), 300);
        const t2 = setTimeout(() => setStep(2), 700);
        return () => { clearTimeout(t1); clearTimeout(t2); };
    }, [isActive]);

    return (
        <section className="section w-full h-full bg-white flex flex-col items-center justify-center px-6 md:px-16 overflow-hidden relative">
            <div className="w-full max-w-[1300px] mx-auto flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
                <div className={`flex-1 transition-all duration-[1000ms] ease-out ${step >= 1 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
                    <div className="inline-block px-5 py-2 rounded-full bg-blue-100 text-blue-700 font-bold text-[14px] md:text-[16px] mb-6 tracking-wide">
                        확률 30%
                    </div>
                    <h2 className="text-[48px] md:text-[64px] lg:text-[72px] font-bold text-black leading-[1.1] mb-6 tracking-[-0.02em]">
                        Bull Scenario
                    </h2>
                    <p className="text-[18px] md:text-[22px] text-gray-500 font-medium break-keep leading-relaxed tracking-[-0.01em]">
                        한국이 "동아시아 스위스" 모델(고급 제조 + 콘텐츠 + 금융)로 재포지셔닝되며, 글로벌 슈퍼사이클이 동시 도래합니다.
                    </p>
                </div>
                <div className={`flex-1 w-full bg-[#f8fbff] rounded-[32px] p-8 md:p-12 border border-blue-100 transition-all duration-[1000ms] ease-out ${step >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                    <div className="space-y-8">
                        <div>
                            <p className="text-blue-400 text-[14px] md:text-[15px] font-bold mb-2">2030년 예상 GDP</p>
                            <p className="text-[28px] md:text-[36px] font-bold text-[#0055ff] tracking-tight">2.5 ~ 2.7조 달러</p>
                        </div>
                        <div className="w-full h-px bg-blue-100"></div>
                        <div>
                            <p className="text-blue-400 text-[14px] md:text-[15px] font-bold mb-2">3조 달러 도달 시점</p>
                            <p className="text-[28px] md:text-[36px] font-bold text-[#0055ff] tracking-tight">2034 ~ 2035년</p>
                        </div>
                        <div className="w-full h-px bg-blue-100"></div>
                        <div>
                            <p className="text-blue-400 text-[14px] md:text-[15px] font-bold mb-4">핵심 전제 (Assumptions)</p>
                            <ul className="text-gray-700 space-y-3 text-[15px] md:text-[17px] break-keep leading-relaxed font-medium">
                                <li className="flex gap-3"><span className="text-blue-300">•</span> HBM/AI 인프라 패권 유지 및 대규모 외인 자본 유입</li>
                                <li className="flex gap-3"><span className="text-blue-300">•</span> 환율 KRW/USD 1,000~1,150 (강세)</li>
                                <li className="flex gap-3"><span className="text-blue-300">•</span> K-콘텐츠, K-방산, K-원전, K-조선 슈퍼사이클 동시 도래</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
