import React, { useState, useEffect } from 'react';

export default function Section10({ isActive }) {
    const [step, setStep] = useState(0);

    useEffect(() => {
        if (!isActive) {
            setStep(0);
            return;
        }
        
        const t1 = setTimeout(() => setStep(1), 300); // Theme & Title
        const t2 = setTimeout(() => setStep(2), 1000); // Node 1
        const t3 = setTimeout(() => setStep(3), 1600); // Node 2
        const t4 = setTimeout(() => setStep(4), 2200); // Node 3
        const t5 = setTimeout(() => setStep(5), 2800); // Intro Text
        
        return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4); clearTimeout(t5); };
    }, [isActive]);

    return (
        <section className="section w-full h-full bg-[#fdfdfd] flex flex-col items-center justify-center relative px-6 md:px-16 overflow-hidden">
            
            <div className="w-full max-w-[1400px] mx-auto flex flex-col items-center text-center">
                
                {/* Theme */}
                <div className={`transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${step >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <span className="inline-block text-[22px] md:text-[26px] font-bold text-[#888] uppercase tracking-[-0.02em] mb-[12px] bg-transparent">
                        [거시 경제] 1조 달러 시대의 개막과 담금질
                    </span>
                </div>

                {/* Main Title */}
                <h2 className={`text-[32px] md:text-[46px] lg:text-[52px] font-extrabold leading-[calc(1.3em-6px)] text-[#1d1d1f] break-keep tracking-[-0.02em] transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${step >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    2007년 KOSPI 2000 돌파와<br/>
                    금융위기를 극복한 1조 경제의 안착
                </h2>

                {/* Infographic Timeline */}
                <div className="relative w-full max-w-[1000px] mt-[40px] h-[380px] flex items-center justify-between">
                    
                    {/* Connecting Line ($1 Trillion Baseline) */}
                    <div className="absolute top-1/2 left-0 w-full border-t-[2px] border-dashed border-gray-400 -translate-y-1/2 z-0"></div>
                    <div className="absolute top-1/2 -left-[100px] -translate-y-1/2 z-10 bg-[#fdfdfd] pr-4">
                        <span className="inline-block text-[13px] font-bold text-gray-500 bg-white px-3 py-1 border border-gray-200 rounded-full shadow-sm">
                            $1 Trillion (명목 GDP 1조 달러 기준선)
                        </span>
                    </div>
                    
                    <div className={`absolute top-1/2 left-0 h-[3px] bg-gradient-to-r from-[#1e3a8a] via-[#e11d48] to-[#1e3a8a] -translate-y-1/2 z-0 transition-all duration-[2000ms] ease-out`}
                         style={{ width: step >= 4 ? '100%' : step >= 3 ? '50%' : step >= 2 ? '10%' : '0%' }}></div>

                    {/* 2007 Node (Success) */}
                    <div className={`relative z-10 flex flex-col items-center transition-all duration-[800ms] ease-out w-1/3 -mt-[100px] ${step >= 2 ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-90'}`}>
                        <div className="mb-4 text-center">
                            <span className="block text-[32px] font-black text-[#1e3a8a] tracking-tight">2007</span>
                            <span className="block text-[16px] font-bold text-gray-500">최초 1조 달러 돌파</span>
                        </div>
                        <div className="w-[24px] h-[24px] rounded-full bg-white border-[6px] border-[#1e3a8a] shadow-lg"></div>
                        <div className="mt-6 bg-white border border-gray-200 shadow-xl rounded-xl p-5 text-left w-[260px]">
                            <p className="text-[16px] font-bold text-gray-800 mb-2">핵심 지표</p>
                            <ul className="text-[14px] text-gray-600 space-y-2">
                                <li>• 명목 GDP: <span className="font-bold text-black">1.12조 달러</span></li>
                                <li>• 1인당 GDP: <span className="font-bold text-black">2.4만 달러</span></li>
                                <li>• KOSPI: <span className="font-bold text-black">최초 2,000선 돌파</span></li>
                                <li>• OECD 평균 소득의 <span className="font-bold text-black">70% 달성</span></li>
                            </ul>
                        </div>
                    </div>

                    {/* 2008 Node (Crisis) */}
                    <div className={`relative z-10 flex flex-col items-center transition-all duration-[800ms] ease-out w-1/3 mt-[100px] ${step >= 3 ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-90'}`}>
                        <div className="mb-4 text-center">
                            <span className="block text-[32px] font-black text-[#e11d48] tracking-tight">2008~2009</span>
                            <span className="block text-[16px] font-bold text-gray-500">글로벌 금융위기</span>
                        </div>
                        <div className="w-[24px] h-[24px] rounded-full bg-white border-[6px] border-[#e11d48] shadow-lg"></div>
                        <div className="mt-6 bg-[#fff0f5] border border-[#fbcfe8] rounded-xl p-5 text-center w-[220px]">
                            <p className="text-[15px] font-bold text-[#be185d]">GDP 1조 달러 아래로 후퇴<br/>(약 0.94조 달러)</p>
                        </div>
                    </div>

                    {/* 2010 Node (Recovery) */}
                    <div className={`relative z-10 flex flex-col items-center transition-all duration-[800ms] ease-out w-1/3 -mt-[100px] ${step >= 4 ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-90'}`}>
                        <div className="mb-4 text-center">
                            <span className="block text-[32px] font-black text-[#1e3a8a] tracking-tight">2010~</span>
                            <span className="block text-[16px] font-bold text-gray-500">완전한 안착</span>
                        </div>
                        <div className="w-[24px] h-[24px] rounded-full bg-white border-[6px] border-[#1e3a8a] shadow-lg"></div>
                        <div className="mt-6 bg-[#f0f9ff] border border-[#bae6fd] shadow-lg rounded-xl p-5 text-center w-[240px]">
                            <p className="text-[16px] font-bold text-[#0369a1] mb-2">안정적인 1조 달러 경제 정착</p>
                            <p className="text-[14px] font-medium text-gray-700">명목 GDP: <span className="font-bold text-black">약 1.14조 달러</span></p>
                        </div>
                    </div>

                </div>

            

                {/* Description Text */}
                <div className={`mt-6 max-w-[1000px] text-[15px] md:text-[19px] leading-[1.45] font-medium text-gray-700 break-keep text-center transition-all duration-[900ms] ease-out ${step >= 5 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <ul className="text-left inline-block space-y-2 mx-auto">
                        <li className="flex items-start"><span className="mr-3 text-[#1e3a8a]">▪</span><span>한국이 GDP 1조 달러를 처음 돌파한 해는 <strong>2007년</strong>임</span></li>
                        <li className="flex items-start"><span className="mr-3 text-[#1e3a8a]">▪</span><span>IMF 기준 명목 GDP <strong>약 1.12조 달러</strong>, 1인당 GDP <strong>약 2.4만 달러</strong> 기록</span></li>
                        <li className="flex items-start"><span className="mr-3 text-[#1e3a8a]">▪</span><span>KOSPI가 처음 <strong>2,000선</strong>을 돌파한 기념비적인 해</span></li>
                        <li className="flex items-start"><span className="mr-3 text-[#1e3a8a]">▪</span><span>그러나 <strong>2008년 글로벌 금융위기</strong>로 1조 달러 아래로 후퇴하는 담금질을 겪음</span></li>
                        <li className="flex items-start"><span className="mr-3 text-[#1e3a8a]">▪</span><span><strong>2010년</strong>에 이르러서야 비로소 흔들림 없는 "안정적인 1조 달러 경제"로 정착함</span></li>
                    </ul>
                </div>
</div>
        </section>
    );
}
