import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Section37({ isActive }) {
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
                        {lang === 'kr' ? '전력 병목이 낳은 데이터센터의 희소성' : 'Data Center Scarcity Born from Power Bottlenecks'}
                    </span>
                </div>

                <h2 className={`text-[32px] md:text-[46px] lg:text-[52px] font-extrabold leading-[calc(1.3em-6px)] text-[#1d1d1f] break-keep tracking-[-0.02em] transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${step >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    {lang === 'kr' ? '폭발하는 상업용 IT 용량 수요를 선점한 이지스의 선제적 포트폴리오' : 'IGIS’s Preemptive Portfolio Securing Explosive IT Capacity Demand'}
                </h2>

                <div className="relative w-full max-w-[1200px] mt-[40px] mb-[30px] h-auto flex flex-col md:flex-row items-stretch justify-center z-10 gap-6">
                    
                    {/* Growth Box */}
                    <div className={`flex-1 flex flex-col items-center bg-gray-900 border border-gray-700 rounded-[24px] p-8 shadow-xl transition-all duration-1000 ${step >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                        <div className="text-gray-400 font-bold text-[18px] mb-4">{lang === 'kr' ? '한국 데이터센터 IT 용량 전망 (CAGR 26.3%)' : 'Korea DC IT Capacity Forecast (CAGR 26.3%)'}</div>
                        
                        <div className="w-full flex justify-between items-end mt-4 mb-4 px-2">
                            <div className="flex flex-col items-center">
                                <span className="text-gray-500 font-bold text-[14px]">2025</span>
                                <span className="text-white font-black text-[42px]">1.96<span className="text-[20px]">GW</span></span>
                            </div>
                            <div className="text-blue-500 font-black text-[32px] mb-4">→</div>
                            <div className="flex flex-col items-center">
                                <span className="text-blue-400 font-bold text-[14px]">2030 (Est.)</span>
                                <span className="text-blue-400 font-black text-[42px]">6.32<span className="text-[20px]">GW</span></span>
                            </div>
                        </div>

                        <div className="w-full bg-white/10 py-3 rounded-xl border border-white/20 text-center">
                            <span className="text-gray-300 font-bold text-[15px]">{lang === 'kr' ? '* 자료: Mordor Intelligence' : '* Source: Mordor Intelligence'}</span>
                        </div>
                    </div>

                    {/* Bottleneck Box */}
                    <div className={`flex-1 flex flex-col items-center bg-white border border-gray-300 rounded-[24px] p-8 shadow-xl transition-all duration-1000 delay-200 ${step >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                        <div className="text-indigo-600 font-black text-[22px] mb-2">{lang === 'kr' ? '수도권 신규 공급 병목' : 'Capital Area Supply Bottleneck'}</div>
                        
                        <div className="w-full flex flex-col gap-3 mt-4">
                            <div className="flex items-center justify-between bg-gray-50 px-5 py-4 rounded-xl border border-gray-200">
                                <span className="font-bold text-[16px] text-gray-600">{lang === 'kr' ? '서울/판교 권역 공실률 (2024)' : 'Seoul/Pangyo Vacancy (2024)'}</span>
                                <span className="font-black text-[22px] text-gray-900">{lang === 'kr' ? '6% 미만' : '< 6%'}</span>
                            </div>
                            <div className="flex items-center justify-between bg-red-50 px-5 py-4 rounded-xl border border-red-200">
                                <span className="font-bold text-[16px] text-red-600">{lang === 'kr' ? '전력 인입 대기 시간' : 'Power Grid Connection Wait'}</span>
                                <span className="font-black text-[22px] text-red-600">{lang === 'kr' ? '최소 5년' : 'Min 5 Years'}</span>
                            </div>
                        </div>
                    </div>

                    {/* IGIS Portfolio Box */}
                    <div className={`flex-1 flex flex-col items-center bg-blue-50 border border-blue-200 rounded-[24px] p-8 shadow-xl transition-all duration-1000 delay-400 ${step >= 4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                        <div className="text-blue-700 font-black text-[22px] mb-2">{lang === 'kr' ? '이지스의 선제 포지셔닝' : 'IGIS’s Preemptive Positioning'}</div>
                        <p className="text-[14px] font-bold text-gray-500 mb-4">{lang === 'kr' ? '1조→2조 달러 구간 후반 대표 사례' : 'Iconic Case in late $1T-$2T Era'}</p>
                        
                        <div className="w-full flex flex-col gap-3">
                            <div className="bg-white px-4 py-3 rounded-xl border border-blue-100 font-bold text-gray-800 shadow-sm text-center text-[15px]">분당 Hostway IDC 편입</div>
                            <div className="bg-white px-4 py-3 rounded-xl border border-blue-100 font-bold text-gray-800 shadow-sm text-center text-[15px]">북미 13개 데이터센터 포트폴리오</div>
                            <div className="bg-blue-600 px-4 py-3 rounded-xl border border-blue-700 font-black text-white shadow-sm text-center text-[18px]">총 187MW 확보</div>
                        </div>
                    </div>

                </div>

                <div className={`mt-[10px] max-w-[1000px] text-[15px] md:text-[19px] leading-[1.45] font-medium text-gray-700 break-keep text-center transition-all duration-[900ms] ease-out ${step >= 5 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <ul className="text-left inline-block space-y-2 mx-auto">
                        {lang === 'kr' ? (
                            <>
                                <li className="flex items-start"><span className="mr-3 text-indigo-500">▪</span><span>데이터센터는 1조 달러 초반 통신사 자체 시설 중심이었으나, 2020년대 들어 <strong>본격 상업화</strong>됨.</span></li>
                                <li className="flex items-start"><span className="mr-3 text-indigo-500">▪</span><span>한국 IT 용량은 2030년까지 <strong>CAGR 26.3%</strong> 성장 전망이나, 서울/판교 공실률은 6% 미만이며 <strong>전력 인입 5년 대기</strong>로 공급 병목이 구조화됨.</span></li>
                                <li className="flex items-start"><span className="mr-3 text-indigo-500">▪</span><span>이지스밸류플러스리츠의 <strong>분당 IDC 및 북미 13개 포트폴리오(187MW) 편입</strong>은 이러한 병목을 뚫어낸 선제적 포지셔닝 사례임.</span></li>
                            </>
                        ) : (
                            <>
                                <li className="flex items-start"><span className="mr-3 text-indigo-500">▪</span><span>Initially dominated by telcos, data centers entered <strong>full commercialization</strong> in the 2020s.</span></li>
                                <li className="flex items-start"><span className="mr-3 text-indigo-500">▪</span><span>Korea's IT capacity will grow at a <strong>26.3% CAGR</strong>, yet Seoul/Pangyo vacancy is sub-6% with a <strong>5-year wait for power connection</strong>.</span></li>
                                <li className="flex items-start"><span className="mr-3 text-indigo-500">▪</span><span>IGIS’s acquisition of <strong>Bundang IDC & 13 North American DCs (187MW)</strong> is a preemptive positioning success overcoming this bottleneck.</span></li>
                            </>
                        )}
                    </ul>
                </div>
            </div>
        </section>
    );
}
