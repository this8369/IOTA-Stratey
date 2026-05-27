import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Section44({ isActive }) {
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
                    <div className="inline-block px-5 py-2 rounded-full bg-gray-100 text-gray-800 font-bold text-[14px] md:text-[16px] mb-6 tracking-wide">
                        확률 50%
                    </div>
                    <h2 className="text-[48px] md:text-[64px] lg:text-[72px] font-bold text-black leading-[1.1] mb-6 tracking-[-0.02em]">
                        Base Scenario
                    </h2>
                    <p className="text-[18px] md:text-[22px] text-gray-500 font-medium break-keep leading-relaxed tracking-[-0.01em]">
                        IMF·OECD·KDI 공통 컨센서스에 수렴하는 표준 성장 궤도. AI 생산성 효과가 인구 감소 효과를 일부 상쇄합니다.
                    </p>
                </div>
                <div className={`flex-1 w-full bg-gray-50 rounded-[32px] p-8 md:p-12 border border-gray-200 transition-all duration-[1000ms] ease-out ${step >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                    <div className="space-y-8">
                        <div>
                            <p className="text-gray-400 text-[14px] md:text-[15px] font-bold mb-2">2030년 예상 GDP</p>
                            <p className="text-[28px] md:text-[36px] font-bold text-black tracking-tight">2.2 ~ 2.4조 달러</p>
                        </div>
                        <div className="w-full h-px bg-gray-200"></div>
                        <div>
                            <p className="text-gray-400 text-[14px] md:text-[15px] font-bold mb-2">3조 달러 도달 시점</p>
                            <p className="text-[28px] md:text-[36px] font-bold text-black tracking-tight">2037 ~ 2038년</p>
                        </div>
                        <div className="w-full h-px bg-gray-200"></div>
                        <div>
                            <p className="text-gray-400 text-[14px] md:text-[15px] font-bold mb-4">핵심 전제 (Assumptions)</p>
                            <ul className="text-gray-700 space-y-3 text-[15px] md:text-[17px] break-keep leading-relaxed font-medium">
                                <li className="flex gap-3"><span className="text-gray-300">•</span> 실질성장률 연 1.5~2.0%, 인플레 2~3%</li>
                                <li className="flex gap-3"><span className="text-gray-300">•</span> 환율 KRW/USD 1,200~1,300 박스권</li>
                                <li className="flex gap-3"><span className="text-gray-300">•</span> AI 생산성 향상(0.3~0.5%p 상향) 반영</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
