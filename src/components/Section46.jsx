import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Section46({ isActive }) {
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
                    <div className="inline-block px-5 py-2 rounded-full bg-red-100 text-red-700 font-bold text-[14px] md:text-[16px] mb-6 tracking-wide">
                        확률 20%
                    </div>
                    <h2 className="text-[48px] md:text-[64px] lg:text-[72px] font-bold text-black leading-[1.1] mb-6 tracking-[-0.02em]">
                        Bear Scenario
                    </h2>
                    <p className="text-[18px] md:text-[22px] text-gray-500 font-medium break-keep leading-relaxed tracking-[-0.01em]">
                        지정학적 갈등과 구조적 모순이 겹치며, 일본식 "잃어버린 10년" 시나리오로 진입합니다.
                    </p>
                </div>
                <div className={`flex-1 w-full bg-[#fff8f8] rounded-[32px] p-8 md:p-12 border border-red-100 transition-all duration-[1000ms] ease-out ${step >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                    <div className="space-y-8">
                        <div>
                            <p className="text-red-400 text-[14px] md:text-[15px] font-bold mb-2">2030년 예상 GDP</p>
                            <p className="text-[28px] md:text-[36px] font-bold text-[#e11d48] tracking-tight">2.0 ~ 2.1조 달러</p>
                        </div>
                        <div className="w-full h-px bg-red-100"></div>
                        <div>
                            <p className="text-red-400 text-[14px] md:text-[15px] font-bold mb-2">3조 달러 도달 시점</p>
                            <p className="text-[28px] md:text-[36px] font-bold text-[#e11d48] tracking-tight">2042년 이후 (또는 미달)</p>
                        </div>
                        <div className="w-full h-px bg-red-100"></div>
                        <div>
                            <p className="text-red-400 text-[14px] md:text-[15px] font-bold mb-4">핵심 전제 (Assumptions)</p>
                            <ul className="text-gray-700 space-y-3 text-[15px] md:text-[17px] break-keep leading-relaxed font-medium">
                                <li className="flex gap-3"><span className="text-red-300">•</span> 인구 절벽 (2024년 인구 정점 후 가파른 감소)</li>
                                <li className="flex gap-3"><span className="text-red-300">•</span> 미중 디커플링 와중에 한국 위치 모호 및 중국 반도체 자급 가속</li>
                                <li className="flex gap-3"><span className="text-red-300">•</span> 가계부채 부담 누적 및 부동산 PF 부실 재발</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
