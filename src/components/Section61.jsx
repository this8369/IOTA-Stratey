import React, { useState, useEffect } from 'react';

export default function Section61({ isActive }) {
    const [step, setStep] = useState(0);

    useEffect(() => {
        if (!isActive) { setStep(0); return; }
        const timers = [
            setTimeout(() => setStep(1), 300),
            setTimeout(() => setStep(2), 900),
            setTimeout(() => setStep(3), 1400),
            setTimeout(() => setStep(4), 1800),
        ];
        return () => timers.forEach(clearTimeout);
    }, [isActive]);

    return (
        <section className="section w-full h-full bg-[#fdfdfd] flex flex-col items-center justify-center relative px-6 md:px-16 overflow-hidden">
            <div className="w-full max-w-[1400px] mx-auto flex flex-col items-center text-center">
                
                <div className={`transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${step >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <span className="inline-block text-[22px] md:text-[26px] font-bold text-[#888] uppercase tracking-[-0.02em] mb-[12px] bg-transparent">
                        인구 구조 4 이민자 수용 및 AI로 방어하는 펀더멘털
                    </span>
                </div>

                <h2 className={`text-[32px] md:text-[46px] lg:text-[52px] font-extrabold leading-[calc(1.3em-6px)] text-[#1d1d1f] break-keep tracking-[-0.02em] transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${step >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    외국인 10% 비중 확대와 기술적 생산성<br/>상쇄를 통한 거시 연착륙 전략
                </h2>

                {/* Custom Infographic: Two Pillars */}
                <div className="w-full max-w-[1000px] mt-[50px] mb-[40px] flex flex-col gap-2 transition-all duration-[1000ms]">
                    
                    <div className={`text-[20px] font-bold text-gray-500 mb-4 transition-all duration-1000 ${step >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        잠재성장률 하방 압력을 방어하기 위한 2대 핵심 전략
                    </div>

                    <div className="flex flex-col md:flex-row w-full gap-6">
                        {/* Pillar 1 */}
                        <div className={`flex-1 bg-white shadow-xl border-t-[8px] border-indigo-600 p-10 flex flex-col items-center justify-center transition-all duration-1000 delay-100 ${step >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                            <div className="w-16 h-16 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mb-6">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            </div>
                            <h3 className="text-[26px] font-black text-gray-800 mb-2">Strategy 01. 이민자 수용 확대</h3>
                            <div className="text-[52px] font-black text-indigo-600 my-4 leading-none">4.5% <span className="text-gray-300 text-[40px]">→</span> 10%</div>
                            <p className="text-[18px] font-bold text-gray-500">2040년 목표 (싱가포르 모델 차용)</p>
                        </div>

                        {/* Pillar 2 */}
                        <div className={`flex-1 bg-white shadow-xl border-t-[8px] border-purple-600 p-10 flex flex-col items-center justify-center transition-all duration-1000 delay-300 ${step >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                            <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mb-6">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path></svg>
                            </div>
                            <h3 className="text-[26px] font-black text-gray-800 mb-2">Strategy 02. AI 기술 상쇄</h3>
                            <div className="text-[52px] font-black text-purple-600 my-4 leading-none">0.5~1.0<span className="text-[32px]">%p</span></div>
                            <p className="text-[18px] font-bold text-gray-500">생산성 향상을 통한 경제 방어 효과</p>
                        </div>
                    </div>
                </div>

                {/* Bottom Text */}
                <div className={`mt-[10px] max-w-[1100px] text-[16px] md:text-[20px] leading-[1.5] font-bold text-gray-700 break-keep text-center transition-all duration-[900ms] ease-out ${step >= 4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <ul className="text-left inline-block space-y-3 mx-auto">
                        <li className="flex items-start"><span className="mr-3 text-[#1d1d1f]">▪</span><span>한국 이민자 비중은 약 4.5% 수준이나, Bull 시나리오는 2040년 10%까지 끌어올리는 정책 전환을 전제</span></li>
                        <li className="flex items-start"><span className="mr-3 text-[#1d1d1f]">▪</span><span>이는 싱가포르 모델(외국인 비중 30%+)을 부분 차용하여 노동력 감소를 적극 방어하는 전략</span></li>
                        <li className="flex items-start"><span className="mr-3 text-purple-700">▪</span><span className="text-purple-900">AI 기술 도입(BCG·McKinsey 보고서)으로 인한 생산성 향상이 인구 감소 효과를 최대 1.0%p 상쇄 가능</span></li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
