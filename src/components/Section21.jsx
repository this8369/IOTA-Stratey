import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Section21({ isActive }) {
    const { lang } = useLanguage();
    const [step, setStep] = useState(0);

    useEffect(() => {
        if (!isActive) {
            setStep(0);
            return;
        }
        const timers = [
            setTimeout(() => setStep(1), 300),
            setTimeout(() => setStep(2), 1000),
            setTimeout(() => setStep(3), 1600),
            setTimeout(() => setStep(4), 2200),
            setTimeout(() => setStep(5), 2800)
        ];
        return () => timers.forEach(clearTimeout);
    }, [isActive]);

    return (
        <section className="section w-full h-full bg-[#fdfdfd] flex flex-col items-center justify-center relative px-6 md:px-16 overflow-hidden">
            <div className="w-full max-w-[1400px] mx-auto flex flex-col items-center text-center">
                
                <div className={`transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${step >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <span className="inline-block text-[22px] md:text-[26px] font-bold text-[#888] uppercase tracking-[-0.02em] mb-[12px] bg-transparent">
                        {lang === 'kr' ? '[산업 분석 8] 2차전지 산업의 팽창과 숨고르기' : '[Industry 8] Expansion & Breathing Spell of EV Batteries'}
                    </span>
                </div>

                <h2 className={`text-[32px] md:text-[46px] lg:text-[52px] font-extrabold leading-[calc(1.3em-6px)] text-[#1d1d1f] break-keep tracking-[-0.02em] transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${step >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    {lang === 'kr' ? '국내 IPO 붐을 견인한 EV 배터리 시장의 구조적 조정기' : 'Structural Adjustment of the EV Battery Market that Led the IPO Boom'}
                </h2>

                <div className="relative w-full max-w-[900px] -mt-[8px] h-[360px] flex items-center justify-center z-10 gap-12">
                    
                    {/* The Boom (Left) */}
                    <div className={`relative flex flex-col items-center transition-all duration-1000 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${step >= 2 ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-50 translate-y-20'}`}>
                        <div className="w-[180px] h-[180px] bg-gradient-to-t from-green-400 to-emerald-600 rounded-2xl shadow-xl flex flex-col items-center justify-center border-4 border-white mb-2">
                            <span className="text-[28px] font-black text-white">20%</span>
                            <span className="text-[12px] font-bold text-green-100">{lang === 'kr' ? '글로벌 점유율' : 'Global Share'}</span>
                            <div className="mt-2 text-center text-white text-[10px] font-bold flex flex-col">
                                <span>LG Energy Solution</span>
                                <span>Samsung SDI</span>
                                <span>SK On</span>
                            </div>
                        </div>
                        <span className="text-[16px] font-black text-emerald-600">{lang === 'kr' ? '2020 IPO 붐' : '2020 IPO Boom'}</span>
                    </div>

                    {/* Chart Arrow */}
                    <div className={`flex flex-col items-center transition-all duration-1000 ${step >= 3 ? 'opacity-100' : 'opacity-0'}`}>
                        {/* A curved arrow pointing down slightly */}
                        <svg className="w-32 h-16 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 100 50">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M10 25 Q 50 -10, 90 40" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M75 40 L 90 40 L 85 25" />
                        </svg>
                        <span className="text-[12px] font-bold text-gray-500 mt-2">{lang === 'kr' ? '2024~2026 사이클' : '2024-2026 Cycle'}</span>
                    </div>

                    {/* The Adjustment (Right) */}
                    <div className={`relative flex flex-col items-center transition-all duration-1000 ease-[cubic-bezier(0.34,1.56,0.64,1)] delay-200 ${step >= 4 ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-50 translate-y-20'}`}>
                        <div className="w-[180px] h-[180px] bg-gradient-to-b from-gray-200 to-gray-300 rounded-2xl shadow-lg flex flex-col items-center justify-center border-4 border-white mb-2">
                            <svg className="w-12 h-12 text-gray-500 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            <span className="text-[14px] font-bold text-gray-600 text-center px-4 leading-tight">{lang === 'kr' ? '중국·미국 정책 변동' : 'US/China Policy Fluctuations'}</span>
                        </div>
                        <span className="text-[16px] font-black text-gray-600">{lang === 'kr' ? '구조적 조정기' : 'Structural Adjustment'}</span>
                    </div>

                </div>

                <div className={`mt-[10px] max-w-[1000px] text-[15px] md:text-[19px] leading-[1.45] font-medium text-gray-700 break-keep text-center transition-all duration-[900ms] ease-out ${step >= 5 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <ul className="text-left inline-block space-y-2 mx-auto">
                        {lang === 'kr' ? (
                            <>
                                <li className="flex items-start"><span className="mr-3 text-emerald-600">▪</span><span>2차전지(LG엔솔·삼성SDI·SK온)는 <strong>2020년 국내 IPO 붐</strong>을 만든 핵심 엔진임.</span></li>
                                <li className="flex items-start"><span className="mr-3 text-emerald-600">▪</span><span>K-배터리 3사는 합계 <strong>글로벌 EV 배터리 점유율 20% 내외</strong>를 안정적으로 확보함.</span></li>
                                <li className="flex items-start"><span className="mr-3 text-emerald-600">▪</span><span>다만 2024~2026년 사이 중국과 미국의 정책 변동 및 전기차 수요 둔화로 인해 <strong>사이클 조정기(숨고르기)</strong>에 진입함.</span></li>
                            </>
                        ) : (
                            <>
                                <li className="flex items-start"><span className="mr-3 text-emerald-600">▪</span><span>EV Batteries (LG, Samsung, SK) were the core engine driving the <strong>2020 domestic IPO boom</strong>.</span></li>
                                <li className="flex items-start"><span className="mr-3 text-emerald-600">▪</span><span>The Korean Big 3 secured a combined <strong>global EV battery market share of around 20%</strong>.</span></li>
                                <li className="flex items-start"><span className="mr-3 text-emerald-600">▪</span><span>However, entered a <strong>cycle adjustment period (breathing spell)</strong> from 2024-2026 due to US/China policy fluctuations.</span></li>
                            </>
                        )}
                    </ul>
                </div>
            </div>
        </section>
    );
}
