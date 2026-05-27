import React, { useState, useEffect } from 'react';

export default function Section47({ isActive }) {
    const [step, setStep] = useState(0);

    useEffect(() => {
        if (!isActive) { setStep(0); return; }
        const t1 = setTimeout(() => setStep(1), 300);
        const t2 = setTimeout(() => setStep(2), 700);
        const t3 = setTimeout(() => setStep(3), 1100);
        const t4 = setTimeout(() => setStep(4), 1500);
        return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4); };
    }, [isActive]);

    return (
        <section className="section w-full h-full bg-[#fdfdfd] flex flex-col items-center justify-center relative px-6 md:px-16 overflow-hidden">
            <div className="w-full max-w-[1400px] mx-auto flex flex-col items-center">
                
                {/* Header */}
                <div className="text-center mb-12">
                    <div className={`transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${step >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        <span className="inline-block text-[22px] md:text-[26px] font-bold text-[#888] uppercase tracking-[-0.02em] mb-[12px]">
                            미래 시나리오 종합
                        </span>
                    </div>
                    <h2 className={`text-[32px] md:text-[46px] lg:text-[52px] font-extrabold leading-[calc(1.3em-6px)] text-[#1d1d1f] break-keep tracking-[-0.02em] transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${step >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        한국 GDP 3조 달러 도달 시나리오별 핵심 지표 비교
                    </h2>
                </div>

                {/* 3 Columns */}
                <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                    
                    {/* Bull */}
                    <div className={`flex flex-col bg-[#f8fbff] rounded-none border border-blue-200 p-8 md:p-10 transition-all duration-[1000ms] ease-out ${step >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                        <h3 className="text-[28px] font-extrabold text-[#0055ff] mb-2 tracking-tight">Bull Scenario</h3>
                        <p className="text-[18px] font-bold text-gray-500 mb-8 border-b border-blue-100 pb-4">확률 30%</p>
                        
                        <div className="mb-8">
                            <p className="text-[14px] font-bold text-blue-400 mb-1 uppercase">2030년 예상 GDP</p>
                            <p className="text-[28px] font-bold text-black tracking-tight">2.5 ~ 2.7조 달러</p>
                        </div>
                        <div className="mb-8">
                            <p className="text-[14px] font-bold text-blue-400 mb-1 uppercase">3조 달러 도달</p>
                            <p className="text-[28px] font-bold text-[#0055ff] tracking-tight">2034 ~ 2035년</p>
                        </div>
                        <div className="flex-1">
                            <p className="text-[14px] font-bold text-blue-400 mb-3 uppercase">핵심 전제</p>
                            <ul className="text-[16px] font-bold text-gray-800 space-y-3 leading-relaxed break-keep">
                                <li className="flex items-start"><span className="text-blue-300 mr-2">•</span>"동아시아 스위스" 모델 안착</li>
                                <li className="flex items-start"><span className="text-blue-300 mr-2">•</span>주력 산업 글로벌 슈퍼사이클</li>
                                <li className="flex items-start"><span className="text-blue-300 mr-2">•</span>대규모 외국인 자본 유입</li>
                            </ul>
                        </div>
                    </div>

                    {/* Base */}
                    <div className={`flex flex-col bg-gray-50 rounded-none border border-gray-200 p-8 md:p-10 transition-all duration-[1000ms] ease-out ${step >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                        <h3 className="text-[28px] font-extrabold text-black mb-2 tracking-tight">Base Scenario</h3>
                        <p className="text-[18px] font-bold text-gray-500 mb-8 border-b border-gray-200 pb-4">확률 50%</p>
                        
                        <div className="mb-8">
                            <p className="text-[14px] font-bold text-gray-400 mb-1 uppercase">2030년 예상 GDP</p>
                            <p className="text-[28px] font-bold text-black tracking-tight">2.2 ~ 2.4조 달러</p>
                        </div>
                        <div className="mb-8">
                            <p className="text-[14px] font-bold text-gray-400 mb-1 uppercase">3조 달러 도달</p>
                            <p className="text-[28px] font-bold text-black tracking-tight">2037 ~ 2038년</p>
                        </div>
                        <div className="flex-1">
                            <p className="text-[14px] font-bold text-gray-400 mb-3 uppercase">핵심 전제</p>
                            <ul className="text-[16px] font-bold text-gray-800 space-y-3 leading-relaxed break-keep">
                                <li className="flex items-start"><span className="text-gray-300 mr-2">•</span>기관 컨센서스(IMF 등) 수렴</li>
                                <li className="flex items-start"><span className="text-gray-300 mr-2">•</span>실질성장률 연 1.5~2.0% 유지</li>
                                <li className="flex items-start"><span className="text-gray-300 mr-2">•</span>AI 향상이 인구 감소 효과 상쇄</li>
                            </ul>
                        </div>
                    </div>

                    {/* Bear */}
                    <div className={`flex flex-col bg-[#fff8f8] rounded-none border border-red-200 p-8 md:p-10 transition-all duration-[1000ms] ease-out ${step >= 4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                        <h3 className="text-[28px] font-extrabold text-[#e11d48] mb-2 tracking-tight">Bear Scenario</h3>
                        <p className="text-[18px] font-bold text-gray-500 mb-8 border-b border-red-100 pb-4">확률 20%</p>
                        
                        <div className="mb-8">
                            <p className="text-[14px] font-bold text-red-400 mb-1 uppercase">2030년 예상 GDP</p>
                            <p className="text-[28px] font-bold text-black tracking-tight">2.0 ~ 2.1조 달러</p>
                        </div>
                        <div className="mb-8">
                            <p className="text-[14px] font-bold text-red-400 mb-1 uppercase">3조 달러 도달</p>
                            <p className="text-[28px] font-bold text-[#e11d48] tracking-tight">2042년 이후</p>
                        </div>
                        <div className="flex-1">
                            <p className="text-[14px] font-bold text-red-400 mb-3 uppercase">핵심 전제</p>
                            <ul className="text-[16px] font-bold text-gray-800 space-y-3 leading-relaxed break-keep">
                                <li className="flex items-start"><span className="text-red-300 mr-2">•</span>일본식 "잃어버린 10년" 진입</li>
                                <li className="flex items-start"><span className="text-red-300 mr-2">•</span>가파른 인구 절벽 현실화</li>
                                <li className="flex items-start"><span className="text-red-300 mr-2">•</span>미·중 디커플링 및 PF 부실 심화</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
