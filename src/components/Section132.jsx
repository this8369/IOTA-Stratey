import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Section132({ isActive }) {
    const { lang } = useLanguage();
    const [step, setStep] = useState(0);

    useEffect(() => {
        if (!isActive) { setStep(0); return; }
        const timers = [
            setTimeout(() => setStep(1), 184),
            setTimeout(() => setStep(2), 551),
            setTimeout(() => setStep(3), 918)
        ];
        return () => timers.forEach(clearTimeout);
    }, [isActive]);

    return (
        <section className="section w-full h-full bg-[#f4f4f5] flex flex-col items-center justify-center relative px-6 md:px-16 overflow-hidden">
            <div className="w-full max-w-[1400px] mx-auto flex flex-col justify-center items-center h-full">
                
                {/* Header */}
                <div className="w-full flex flex-col items-center text-center mb-[36px]">
                    <div className={`transition-all duration-[612ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${step >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        <span className="inline-block text-[20px] md:text-[24px] font-bold text-[#1e3a8a] tracking-[-0.02em] mb-[12px]">
                            {lang === 'kr' ? '근원적 자산 가치' : 'Fundamental Asset Value'}
                        </span>
                    </div>
                    <h2 className={`text-[32px] md:text-[46px] lg:text-[52px] font-extrabold leading-[calc(1.3em-6px)] text-[#1d1d1f] break-keep tracking-[-0.02em] transition-all duration-[612ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${step >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        {lang === 'kr' ? '입지적 Land Value 및 NOI 창출력' : 'Locational Land Value & NOI Capability'}
                    </h2>
                </div>

                {/* Content: 2 Cards (1x2 grid) */}
                <div className={`w-full max-w-[1200px] mx-auto mt-[10px] mb-[36px] grid grid-cols-1 md:grid-cols-2 gap-[20px] transition-all duration-[612ms] ${step >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    
                    {/* Card 1 */}
                    <div className="bg-white border-[6px] border-[#1e3a8a] px-8 py-[28px] flex flex-col shadow-sm">
                        <div className="text-[#1e3a8a] font-black text-[24px] md:text-[28px] mb-[6px] uppercase">4.1</div>
                        <div className="text-gray-700 font-bold text-[22px] mb-[14px] border-b-2 border-gray-100 pb-4">
                            {lang === 'kr' ? '토지 담보 가치 (Land Value)' : 'Land Collateral Value'}
                        </div>
                        <ul className="text-[18px] text-gray-600 font-medium leading-relaxed space-y-4">
                            <li className="flex items-start">
                                <span className="text-[#1e3a8a] mr-2">▪</span>
                                <span>{lang === 'kr' ? 'GTX-A/B 교차 입지의 Land Value는 향후 5~10년 구조적 우상향 기대.' : 'Land Value of GTX-A/B intersection is expected to trend structurally upward over the next 5-10 years.'}</span>
                            </li>
                            <li className="flex flex-col bg-[#1e3a8a]/5 p-4 rounded-lg mt-2 border border-[#1e3a8a]/10">
                                <span className="font-bold text-[#1e3a8a] mb-1">{lang === 'kr' ? 'GTX-A 개통 효과' : 'GTX-A Opening Effect'}</span>
                                <span className="text-[17px] text-[#1e3a8a] font-bold">{lang === 'kr' ? '인천국제공항-서울역 개통 효과만으로도 Land Value 10~20% 추가 상승 여지.' : '10-20% additional Land Value appreciation upside from the Incheon Airport-Seoul Station line alone.'}</span>
                            </li>
                        </ul>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white border-[6px] border-[#1e3a8a] px-8 py-[28px] flex flex-col shadow-sm">
                        <div className="text-[#1e3a8a] font-black text-[24px] md:text-[28px] mb-[6px] uppercase">4.2</div>
                        <div className="text-gray-700 font-bold text-[22px] mb-[14px] border-b-2 border-gray-100 pb-4">
                            {lang === 'kr' ? '안정화 캐시플로우 (Cash Flow)' : 'Stabilized Cash Flow'}
                        </div>
                        <ul className="text-[17px] text-gray-600 font-medium leading-relaxed space-y-4">
                            <li className="flex items-start">
                                <span className="text-[#1e3a8a] mr-2">▪</span>
                                <span>{lang === 'kr' ? '2031년 준공 후 IOTA 1·2 합산 연면적 약 30만m² 가정.' : 'Assuming a combined GFA of 300K sqm post-completion in 2031.'}</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-red-600 mr-2">▪</span>
                                <span>{lang === 'kr' ? '평당 25만 원/월 기준 연간 NOI 약 2,500~3,000억 원(보수적). Bull 시나리오(평당 35만 원) 시 약 4,000~4,500억 원.' : 'NOI approx. 250-300B KRW/yr at 250K KRW/pyeong (base). 400-450B KRW/yr in Bull scenario (350K KRW/pyeong).'}</span>
                            </li>
                            <li className="flex flex-col bg-gray-50 p-4 rounded-lg mt-2">
                                <span className="font-bold text-[#1e3a8a] mb-1">{lang === 'kr' ? '가치 도달 목표' : 'Target Value'}</span>
                                <span className="text-[17px]">{lang === 'kr' ? '캡레이트 4%대로 Stabilization 시 자산 가치 6~10조 원 도달 가능.' : 'Asset value could reach 6-10T KRW upon stabilization at a ~4% cap rate.'}</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom text */}
                <div className={`w-full text-center mt-2 transition-all duration-[612ms] delay-[122ms] ${step >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                    <div className="inline-block bg-[#1e3a8a] text-white px-8 py-5 text-[20px] md:text-[22px] font-bold shadow-lg break-keep">
                        {lang === 'kr' ? 
                            '압도적 입지와 규모가 만들어내는 견고한 Cash Flow 및 Value Add 잠재력' : 
                            'Solid Cash Flow and Value Add potential generated by overwhelming location and scale'}
                    </div>
                </div>
            </div>
        </section>
    );
}
