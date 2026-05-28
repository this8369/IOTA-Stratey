import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Section102({ isActive }) {
    const { lang } = useLanguage();
    const [step, setStep] = useState(0);

    useEffect(() => {
        if (!isActive) { setStep(0); return; }
        const timers = [
            setTimeout(() => setStep(1), 300),
            setTimeout(() => setStep(2), 900),
            setTimeout(() => setStep(3), 1400),
            setTimeout(() => setStep(4), 1800),
            setTimeout(() => setStep(5), 2200),
            setTimeout(() => setStep(6), 2600),
        ];
        return () => timers.forEach(clearTimeout);
    }, [isActive]);

    return (
        <section className="section w-full h-full bg-[#fdfdfd] flex flex-col items-center justify-center relative px-6 md:px-16 overflow-hidden">
            <div className="w-full max-w-[1400px] mx-auto flex flex-col items-center text-center">
                
                <div className={`transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${step >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <span className="inline-block text-[20px] md:text-[24px] font-bold text-blue-600 tracking-[-0.02em] mb-[12px]">
                        Acquisition Underwriting
                    </span>
                </div>

                <h2 className={`text-[32px] md:text-[46px] lg:text-[52px] font-extrabold leading-[calc(1.3em-6px)] text-[#1d1d1f] break-keep tracking-[-0.02em] mb-4 transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${step >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    {lang === 'kr' ? <>AI 기반 딜 소싱 및 투자심의 자동화</> : <>AI-Driven Deal Sourcing & IC Automation</>}
                </h2>

                {/* Infographic Area */}
                <div className="w-full max-w-[1100px] mt-12 mb-16 relative">
                    {/* Animated Flow Line */}
                    <div className="absolute top-1/2 left-[15%] right-[15%] h-[6px] bg-gray-100 rounded-full z-0 -translate-y-1/2 overflow-hidden">
                        <div className={`h-full bg-gradient-to-r from-transparent via-blue-400 to-indigo-600 transition-all duration-[2000ms] ease-in-out ${step >= 4 ? 'translate-x-0 w-full opacity-100' : '-translate-x-full w-0 opacity-0'}`}></div>
                    </div>

                    <div className="flex w-full justify-between items-center relative z-10 px-[28px]">
                        {/* Node 1: Raw Data */}
                        <div className={`w-[260px] bg-white border-2 border-gray-200 rounded-2xl p-5 shadow-lg transition-all duration-700 ${step >= 3 ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 -translate-x-12 scale-95'}`}>
                            <h4 className="font-bold text-gray-800 text-[18px] mb-4">{lang === 'kr' ? '원천 데이터 수집' : 'Raw Data Input'}</h4>
                            <div className="flex flex-col gap-3">
                                <div className="bg-gray-50 border border-gray-100 p-3 rounded-lg text-[15px] font-bold text-gray-600 flex items-center justify-center gap-2">📊 {lang === 'kr' ? '시장 보고서 / 매물 텍스트' : 'Market Reports & Teasers'}</div>
                                <div className="bg-gray-50 border border-gray-100 p-3 rounded-lg text-[15px] font-bold text-gray-600 flex items-center justify-center gap-2">📈 {lang === 'kr' ? '실거래가 및 Cap Rate' : 'Transaction & Cap Rate'}</div>
                            </div>
                        </div>

                        {/* Node 2: AI Core */}
                        <div className={`flex flex-col items-center transition-all duration-1000 ${step >= 4 ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
                            <div className="w-[160px] h-[160px] rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex flex-col items-center justify-center shadow-[0_0_40px_rgba(79,70,229,0.4)] relative">
                                {/* Pulse ring */}
                                <div className="absolute inset-0 rounded-full border-4 border-indigo-400 animate-ping opacity-20"></div>
                                <span className="text-white font-black text-[28px] tracking-tight">Claude</span>
                                <span className="text-white/80 font-bold text-[18px]">/ GPT</span>
                            </div>
                            <div className="mt-6 bg-[#1d1d1f] text-white px-5 py-2 rounded-full font-bold text-[16px] shadow-md">
                                {lang === 'kr' ? '시장 비교 및 시나리오 연산' : 'Market Comp & Scenario Compute'}
                            </div>
                        </div>

                        {/* Node 3: Output Documents */}
                        <div className={`w-[260px] bg-gradient-to-b from-blue-50 to-white border-2 border-blue-200 rounded-2xl p-5 shadow-xl transition-all duration-1000 ${step >= 5 ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-12 scale-95'}`}>
                            <h4 className="font-bold text-blue-800 text-[18px] mb-4">{lang === 'kr' ? '초안 자동 생성' : 'Auto Draft Generation'}</h4>
                            <div className="flex flex-col gap-3">
                                <div className="bg-white border-2 border-blue-100 p-4 rounded-xl shadow-sm text-center flex flex-col items-center justify-center">
                                    <span className="text-[28px] mb-1">📝</span>
                                    <span className="font-black text-blue-900 text-[18px]">LOI (의향서)</span>
                                </div>
                                <div className="bg-white border-2 border-blue-100 p-4 rounded-xl shadow-sm text-center flex flex-col items-center justify-center">
                                    <span className="text-[28px] mb-1">📑</span>
                                    <span className="font-black text-blue-900 text-[18px]">IC Memo (투자심의)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Text (Style from 59~62p) */}
                <div className={`max-w-[1200px] mt-2 text-[16px] md:text-[20px] leading-[1.5] font-bold text-gray-700 break-keep text-center transition-all duration-[900ms] ease-out ${step >= 6 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <ul className="text-left inline-block space-y-3 mx-auto">
                        <li className="flex items-start"><span className="mr-3 text-[#1d1d1f]">▪</span><span>{lang === 'kr' ? '단순 텍스트 매물 정보와 시장 데이터를 AI가 즉각적으로 파싱하여 재무 시나리오(Cap Rate)를 도출' : 'AI instantly parses raw property info & market data to compute financial scenarios (Cap Rate)'}</span></li>
                        <li className="flex items-start"><span className="mr-3 text-[#1d1d1f]">▪</span><span>{lang === 'kr' ? 'Goldman Sachs, Blackstone 등 글로벌 Top-tier 운용사들이 이미 도입한 업무 혁신 워크플로우를 한국 시장에 적용' : 'Applying the operational innovation workflow already adopted by global top-tiers like Goldman & Blackstone to Korea'}</span></li>
                    </ul>
                </div>

            </div>
        </section>
    );
}
