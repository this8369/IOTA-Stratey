import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Section31({ isActive }) {
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
                        {lang === 'kr' ? '[서울 오피스 3] 자연 공실률 하한선 돌파' : '[Seoul Office 3] Breaking Natural Vacancy Floor'}
                    </span>
                </div>

                <h2 className={`text-[32px] md:text-[46px] lg:text-[52px] font-extrabold leading-[calc(1.3em-6px)] text-[#1d1d1f] break-keep tracking-[-0.02em] transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${step >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    {lang === 'kr' ? '코로나 이후의 급반등, 사실상 완전 임차에 도달하다' : 'Rapid Rebound Post-COVID, Reaching Full Occupancy'}
                </h2>

                <div className="relative w-full max-w-[1100px] mt-[40px] mb-[30px] h-auto flex flex-col items-center justify-center z-10 gap-8">
                    
                    {/* Vacancy Highlight Box */}
                    <div className={`relative w-full flex flex-col md:flex-row items-center justify-between bg-gradient-to-br from-gray-900 to-black rounded-[30px] p-10 shadow-2xl transition-all duration-1000 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${step >= 2 ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'}`}>
                        
                        <div className="flex-1 text-left flex flex-col gap-2">
                            <div className="text-gray-400 font-bold text-[20px]">{lang === 'kr' ? 'CBRE 2025년 3분기 기준' : 'CBRE Q3 2025'}</div>
                            <div className="text-white font-extrabold text-[32px] leading-tight break-keep">
                                {lang === 'kr' ? '서울 Grade-A 오피스 평균 공실률' : 'Seoul Grade-A Office Average Vacancy Rate'}
                            </div>
                        </div>

                        <div className={`flex flex-col items-center justify-center px-10 py-6 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20 transition-all duration-1000 delay-300 ${step >= 3 ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
                            <div className="text-blue-400 font-black text-[72px] leading-none mb-1">
                                3.1<span className="text-[40px]">%</span>
                            </div>
                            <div className="text-white font-bold text-[18px]">Full Occupancy</div>
                        </div>

                    </div>

                    {/* Breakdown Cards */}
                    <div className="w-full flex justify-center gap-6">
                        <div className={`flex-1 bg-white border border-gray-200 rounded-2xl p-6 shadow-sm transition-all duration-700 hover:-translate-y-2 delay-400 ${step >= 4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                            <div className="text-gray-500 font-bold text-[16px] mb-2">GBD</div>
                            <div className="text-gray-900 font-black text-[36px]">1.5%</div>
                        </div>
                        <div className={`flex-1 bg-white border border-gray-200 rounded-2xl p-6 shadow-sm transition-all duration-700 hover:-translate-y-2 delay-500 ${step >= 4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                            <div className="text-gray-500 font-bold text-[16px] mb-2">YBD</div>
                            <div className="text-gray-900 font-black text-[36px]">3.6%</div>
                        </div>
                        <div className={`flex-1 bg-white border border-gray-200 rounded-2xl p-6 shadow-sm transition-all duration-700 hover:-translate-y-2 delay-600 ${step >= 4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                            <div className="text-gray-500 font-bold text-[16px] mb-2">CBD</div>
                            <div className="text-gray-900 font-black text-[36px]">4.1%</div>
                        </div>
                    </div>

                </div>

                <div className={`mt-[10px] max-w-[1000px] text-[15px] md:text-[19px] leading-[1.45] font-medium text-gray-700 break-keep text-center transition-all duration-[900ms] ease-out ${step >= 5 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <ul className="text-left inline-block space-y-2 mx-auto">
                        {lang === 'kr' ? (
                            <>
                                <li className="flex items-start"><span className="mr-3 text-gray-500">▪</span><span>2007~2010년 글로벌 금융위기로 8~10%대, 2013~2015년 대형 공급(IFC 등)으로 YBD 일시 18%까지 상승.</span></li>
                                <li className="flex items-start"><span className="mr-3 text-gray-500">▪</span><span>2020~2021년 코로나 시기 일시 상승 후 2022년부터 급락, <strong>2025년 서울 Grade-A 공실률은 3.1%</strong> 기록.</span></li>
                                <li className="flex items-start"><span className="mr-3 text-gray-500">▪</span><span>1조→2조 달러 구간 종료 시점, 서울 프라임 오피스는 사실상 <strong>자연 공실률을 하회하는 완전 임차 상태</strong> 도달.</span></li>
                            </>
                        ) : (
                            <>
                                <li className="flex items-start"><span className="mr-3 text-gray-500">▪</span><span>Historically rose to 8-10% post-GFC, and YBD hit 18% during massive supply waves (2013-2015).</span></li>
                                <li className="flex items-start"><span className="mr-3 text-gray-500">▪</span><span>Dropped sharply since 2022. By 2025, <strong>Seoul Grade-A vacancy reached 3.1%</strong>.</span></li>
                                <li className="flex items-start"><span className="mr-3 text-gray-500">▪</span><span>At the end of the $1T-$2T era, prime offices have effectively reached <strong>Full Occupancy</strong> below natural vacancy.</span></li>
                            </>
                        )}
                    </ul>
                </div>
            </div>
        </section>
    );
}
