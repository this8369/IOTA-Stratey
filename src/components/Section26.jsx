import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Section26({ isActive }) {
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
                        {lang === 'kr' ? '[자본 시장 2] 글로벌 IB들의 KOSPI 6,000 낙관론' : '[Capital Market 2] Global IBs\' Optimism on KOSPI 6,000'}
                    </span>
                </div>

                <h2 className={`text-[32px] md:text-[46px] lg:text-[52px] font-extrabold leading-[calc(1.3em-6px)] text-[#1d1d1f] break-keep tracking-[-0.02em] transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${step >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    {lang === 'kr' ? '메모리 슈퍼사이클과 조기 달성된 5,000 시대 공약' : 'Memory Supercycle and Early Achievement of 5,000 Era Pledge'}
                </h2>

                <div className="relative w-full max-w-[1100px] mt-[22px] mb-[20px] h-auto py-4 flex flex-col md:flex-row items-center justify-center z-10 gap-8">
                    
                    {/* JP Morgan */}
                    <div className={`relative w-[320px] h-[280px] bg-blue-900 rounded-[30px] shadow-xl flex flex-col items-center justify-center p-6 border-[6px] border-blue-950 transition-all duration-1000 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${step >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                        <div className="text-[26px] font-black text-white mb-2">JP Morgan</div>
                        <div className="text-[16px] font-bold text-blue-300 italic mb-4">'Kospi 5000 on the Cards'</div>
                        <div className="w-full h-[1px] bg-blue-800 mb-4"></div>
                        <div className="text-[42px] font-black text-white leading-none">6,000</div>
                        <div className="text-[16px] font-bold text-blue-200 mt-2">{lang === 'kr' ? '풀불(Full Bull) 시나리오' : 'Full Bull Scenario'}</div>
                    </div>

                    {/* Macquarie */}
                    <div className={`relative w-[320px] h-[280px] bg-blue-950 rounded-[30px] shadow-xl flex flex-col items-center justify-center p-6 border-[6px] border-blue-900 transition-all duration-1000 ease-[cubic-bezier(0.34,1.56,0.64,1)] delay-200 ${step >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                        <div className="text-[26px] font-black text-white mb-2">Macquarie</div>
                        <div className="text-[16px] font-bold text-blue-300 italic mb-4">2026 Target</div>
                        <div className="w-full h-[1px] bg-blue-800 mb-4"></div>
                        <div className="text-[42px] font-black text-white leading-none">6,000</div>
                        <div className="text-[16px] font-bold text-blue-200 mt-2">{lang === 'kr' ? '메모리 슈퍼사이클 근거' : 'Based on Memory Supercycle'}</div>
                    </div>

                    {/* Domestic */}
                    <div className={`relative w-[320px] h-[280px] bg-blue-800 rounded-[30px] shadow-xl flex flex-col items-center justify-center p-6 border-[6px] border-blue-900 transition-all duration-1000 ease-[cubic-bezier(0.34,1.56,0.64,1)] delay-400 ${step >= 4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                        <div className="text-[26px] font-black text-white mb-2">NH & HMC</div>
                        <div className="text-[16px] font-bold text-blue-300 italic mb-4">2026 Domestic Target</div>
                        <div className="w-full h-[1px] bg-blue-700 mb-4"></div>
                        <div className="text-[42px] font-black text-white leading-none">5,500</div>
                        <div className="text-[16px] font-bold text-blue-200 mt-2">{lang === 'kr' ? '국내 주요 증권사 전망' : 'Major Domestic Outlook'}</div>
                    </div>

                </div>

                <div className={`mt-[10px] max-w-[1100px] text-[16px] md:text-[20px] leading-[1.5] font-medium text-gray-700 break-keep text-center transition-all duration-[900ms] ease-out ${step >= 5 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <ul className="text-left inline-block space-y-3 mx-auto">
                        {lang === 'kr' ? (
                            <>
                                <li className="flex items-start"><span className="mr-3 text-blue-700">▪</span><span>JP모건은 25년 10월 보고서 'Kospi 5000 on the Cards'에서 12개월 목표 5,000을 제시하며 <strong>풀불(full bull) 시 6,000</strong>까지 가능하다고 분석함.</span></li>
                                <li className="flex items-start"><span className="mr-3 text-blue-700">▪</span><span>Macquarie 역시 메모리 슈퍼사이클을 근거로 <strong>2026년 KOSPI 목표 6,000</strong>을 제시했고, NH투자·HMC증권은 5,500을 목표로 함.</span></li>
                                <li className="flex items-start"><span className="mr-3 text-blue-700">▪</span><span>이재명 대통령은 <strong>임기 내(2030년) KOSPI 5,000 시대를 공약</strong>했으나, 폭발적 랠리로 인해 <strong>임기 중반 이전에 이미 달성</strong>된 상태임.</span></li>
                            </>
                        ) : (
                            <>
                                <li className="flex items-start"><span className="mr-3 text-blue-700">▪</span><span>JPMorgan set a 12-month target of 5,000 in its Oct '25 report, analyzing that <strong>6,000 is possible in a 'full bull' scenario</strong>.</span></li>
                                <li className="flex items-start"><span className="mr-3 text-blue-700">▪</span><span>Macquarie also proposed a <strong>2026 KOSPI target of 6,000</strong> based on the memory supercycle, while NH & HMC target 5,500.</span></li>
                                <li className="flex items-start"><span className="mr-3 text-blue-700">▪</span><span>President Lee Jae-myung <strong>pledged a KOSPI 5,000 era within his term (2030)</strong>, but it was <strong>already achieved before mid-term</strong> due to the explosive rally.</span></li>
                            </>
                        )}
                    </ul>
                </div>
            </div>
        </section>
    );
}
