import React, { useState, useEffect } from 'react';

export default function Section69({ isActive }) {
    const [step, setStep] = useState(0);

    useEffect(() => {
        if (!isActive) { setStep(0); return; }
        const timers = [
            setTimeout(() => setStep(1), 300),
            setTimeout(() => setStep(2), 800),
            setTimeout(() => setStep(3), 1300),
            setTimeout(() => setStep(4), 1800),
        ];
        return () => timers.forEach(clearTimeout);
    }, [isActive]);

    return (
        <section className="section w-full h-full bg-[#fdfdfd] flex flex-col items-center justify-center relative px-6 md:px-16 overflow-hidden">
            <div className="w-full max-w-[1400px] mx-auto flex flex-col items-center text-center">
                
                <div className={`transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${step >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <span className="inline-block text-[22px] md:text-[26px] font-black text-[#1d1d1f] uppercase tracking-[-0.02em] mb-[12px] bg-transparent">
                        데이터센터 수요 폭발과 분산화
                    </span>
                </div>

                <h2 className={`text-[32px] md:text-[46px] lg:text-[52px] font-extrabold leading-[calc(1.3em-6px)] text-[#1d1d1f] break-keep tracking-[-0.02em] transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${step >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    전력 인입 제약이라는 병목이 촉발한<br/>메가 자본의 블랙홀
                </h2>

                {/* Custom Infographic */}
                <div className="w-full max-w-[1100px] mt-[40px] mb-[40px] flex flex-col gap-6">
                    
                    {/* Capacity Growth Timeline */}
                    <div className="flex w-full items-end justify-between bg-gray-50 border-[4px] border-gray-300 p-8 h-[220px] relative transition-all duration-1000 delay-100 ${step >= 2 ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}">
                        <div className="absolute top-4 left-6 text-[20px] font-black text-gray-500 uppercase">한국 데이터센터 전력 수요 전망</div>
                        
                        <div className="flex flex-col items-center w-[30%] relative z-10">
                            <div className="text-[40px] font-black text-blue-600 mb-2 leading-none">6.3<span className="text-[20px] text-blue-500">GW</span></div>
                            <div className="w-full h-8 bg-blue-200 rounded-t-sm"></div>
                            <div className="text-[20px] font-black text-gray-800 mt-2">2030년 (Base)</div>
                        </div>

                        <div className="flex flex-col items-center w-[30%] relative z-10">
                            <div className="text-[54px] font-black text-blue-700 mb-2 leading-none">12<span className="text-[24px] text-blue-600">GW</span></div>
                            <div className="w-full h-16 bg-blue-400 rounded-t-md"></div>
                            <div className="text-[20px] font-black text-gray-800 mt-2">2035년</div>
                        </div>

                        <div className="flex flex-col items-center w-[30%] relative z-10">
                            <div className="text-[70px] font-black text-[#1d1d1f] mb-2 leading-none">18~22<span className="text-[30px] text-gray-600">GW</span></div>
                            <div className="w-full h-24 bg-[#1d1d1f] rounded-t-lg shadow-xl"></div>
                            <div className="text-[20px] font-black text-gray-800 mt-2">2040년</div>
                        </div>
                    </div>

                    {/* Geography Shift */}
                    <div className={`flex flex-col md:flex-row w-full gap-4 transition-all duration-1000 delay-300 ${step >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                        <div className="flex-1 bg-red-50 border-[4px] border-red-300 p-6 flex flex-col justify-center items-center">
                            <div className="text-[22px] font-black text-red-800 mb-2">수도권 전력 인입 제약</div>
                            <div className="text-[18px] font-bold text-red-600">성장의 구조적 병목 (Bottleneck) 발생</div>
                        </div>
                        <div className="hidden md:flex items-center justify-center text-[40px] font-black text-gray-300">→</div>
                        <div className="flex-1 bg-blue-50 border-[4px] border-blue-400 p-6 flex flex-col justify-center items-center shadow-md">
                            <div className="text-[22px] font-black text-blue-900 mb-2">지방 거점 분산 가속화</div>
                            <div className="text-[18px] font-bold text-blue-700">전남 · 경북 · 강원 중심의 신규 클러스터 조성</div>
                        </div>
                    </div>
                </div>

                {/* Bottom Text */}
                <div className={`mt-[10px] max-w-[1100px] text-[16px] md:text-[20px] leading-[1.5] font-bold text-[#1d1d1f] break-keep text-center transition-all duration-[900ms] ease-out ${step >= 4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <ul className="text-left inline-block space-y-3 mx-auto">
                        <li className="flex items-start"><span className="mr-3 text-[#1d1d1f]">▪</span><span>한국 데이터센터 수요는 2030년 6.3GW에서 2040년 최대 22GW까지 3.5배 이상 폭발적 성장 전망</span></li>
                        <li className="flex items-start"><span className="mr-3 text-[#1d1d1f]">▪</span><span>수도권 전력망 한계가 구조적 제약으로 작용하며, 풍부한 전력 확보가 가능한 지방으로의 입지 분산 필연적</span></li>
                        <li className="flex items-start"><span className="mr-3 text-blue-600">▪</span><span className="text-blue-900">결과적으로 데이터센터는 단일 산업 부동산 카테고리로서 향후 15년간 가장 거대한 자본을 흡수할 섹터로 부상</span></li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
