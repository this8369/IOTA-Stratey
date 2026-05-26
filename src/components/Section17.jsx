import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Section17({ isActive }) {
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
                        {lang === 'kr' ? '[산업 분석 4] 구조적 한계에 봉착한 석유화학' : '[Industry 4] Petrochemicals Facing Structural Limits'}
                    </span>
                </div>

                <h2 className={`text-[32px] md:text-[46px] lg:text-[52px] font-extrabold leading-[calc(1.3em-6px)] text-[#1d1d1f] break-keep tracking-[-0.02em] transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${step >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    {lang === 'kr' ? '중국 자급률 상승이 촉발한 전통 에너지 섹터의 다운사이클' : "Downcycle of Traditional Energy Sector Triggered by China's Self-Sufficiency"}
                </h2>

                <div className="relative w-full max-w-[900px] -mt-[8px] h-[360px] flex items-center justify-center z-10 gap-12">
                    
                    {/* 2007 Era */}
                    <div className={`flex flex-col items-center transition-all duration-[1000ms] ease-out ${step >= 2 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
                        <div className="text-[24px] font-black text-gray-400 mb-2">2007 Era</div>
                        <div className="w-[200px] h-[200px] bg-gradient-to-tr from-gray-200 to-white border-2 border-gray-300 rounded-2xl shadow-lg flex flex-col items-center justify-center p-4">
                            <span className="text-[18px] font-bold text-gray-700 mb-2">{lang === 'kr' ? '정유 4강 체제' : 'Big 4 Era'}</span>
                            <div className="flex flex-wrap justify-center gap-2">
                                <span className="text-[11px] bg-gray-100 text-gray-800 font-medium px-2 py-1 rounded shadow-sm border border-gray-200">SK Innovation</span>
                                <span className="text-[11px] bg-gray-100 text-gray-800 font-medium px-2 py-1 rounded shadow-sm border border-gray-200">GS Caltex</span>
                                <span className="text-[11px] bg-gray-100 text-gray-800 font-medium px-2 py-1 rounded shadow-sm border border-gray-200">S-Oil</span>
                                <span className="text-[11px] bg-gray-100 text-gray-800 font-medium px-2 py-1 rounded shadow-sm border border-gray-200">Hyundai Oilbank</span>
                            </div>
                        </div>
                    </div>

                    {/* Arrow / Downcycle Indicator */}
                    <div className={`flex flex-col items-center transition-all duration-[1000ms] ease-out delay-100 ${step >= 3 ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
                        <div className="text-[16px] font-bold text-red-500 mb-2">{lang === 'kr' ? '구조적 다운사이클' : 'Structural Downcycle'}</div>
                        <div className="w-[100px] h-[4px] bg-gradient-to-r from-gray-300 to-red-500 relative mb-2">
                            <div className="absolute right-[-4px] top-1/2 -translate-y-1/2 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[10px] border-l-red-500"></div>
                        </div>
                        <div className="text-[14px] font-medium text-gray-500">{lang === 'kr' ? '중국 자급률 상승' : 'China Self-Sufficiency'}</div>
                    </div>

                    {/* Mid 2020s */}
                    <div className={`flex flex-col items-center transition-all duration-[1000ms] ease-out delay-200 ${step >= 4 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
                        <div className="text-[24px] font-black text-red-600 mb-2">Mid 2020s</div>
                        <div className="w-[200px] h-[200px] bg-gradient-to-br from-red-50 to-white border-2 border-red-200 rounded-2xl shadow-xl flex flex-col items-center justify-center p-4">
                            <svg className="w-12 h-12 text-red-400 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" /></svg>
                            <span className="text-[16px] font-bold text-red-700 text-center">{lang === 'kr' ? '후반부 성장 둔화' : 'Latter Half Slowdown'}</span>
                        </div>
                    </div>

                </div>

                <div className={`mt-[10px] max-w-[1000px] text-[15px] md:text-[19px] leading-[1.45] font-medium text-gray-700 break-keep text-center transition-all duration-[900ms] ease-out ${step >= 5 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <ul className="text-left inline-block space-y-2 mx-auto">
                        {lang === 'kr' ? (
                            <>
                                <li className="flex items-start"><span className="mr-3 text-red-500">▪</span><span>2007년에는 <strong>SK이노베이션·GS칼텍스·에쓰오일·현대오일뱅크 4강</strong>이 명확히 시장을 주도함.</span></li>
                                <li className="flex items-start"><span className="mr-3 text-red-500">▪</span><span>그러나 2020년대 중반 들어 <strong>중국의 자급률 상승</strong>으로 인해 구조적 다운사이클에 진입함.</span></li>
                                <li className="flex items-start"><span className="mr-3 text-red-500">▪</span><span>결과적으로 1조 ➔ 2조 달러 구간 후반부에는 <strong>상대적 둔화 섹터</strong>로 분류해야 하는 상황임.</span></li>
                            </>
                        ) : (
                            <>
                                <li className="flex items-start"><span className="mr-3 text-red-500">▪</span><span>In 2007, the <strong>Big 4 (SK, GS, S-Oil, Hyundai)</strong> clearly dominated the market.</span></li>
                                <li className="flex items-start"><span className="mr-3 text-red-500">▪</span><span>However, entered a structural downcycle in the mid-2020s due to <strong>China's rising self-sufficiency</strong>.</span></li>
                                <li className="flex items-start"><span className="mr-3 text-red-500">▪</span><span>Consequently, it must be classified as a <strong>relatively slowing sector</strong> in the latter half of the $1T to $2T era.</span></li>
                            </>
                        )}
                    </ul>
                </div>
            </div>
        </section>
    );
}
