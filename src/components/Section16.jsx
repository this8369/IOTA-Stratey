import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Section16({ isActive }) {
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
                    <span className="inline-block text-[20px] md:text-[24px] font-bold text-[#ea580c] bg-orange-50 border border-orange-100 px-4 py-1 rounded-full mb-[12px]">
                        {lang === 'kr' ? '[산업 분석 3] 글로벌 패권 경쟁 속 조선업의 부활' : '[Industry 3] Resurgence of Shipbuilding amid Global Hegemony'}
                    </span>
                </div>

                <h2 className={`text-[32px] md:text-[46px] lg:text-[52px] font-extrabold leading-[calc(1.3em-6px)] text-[#1d1d1f] break-keep tracking-[-0.02em] transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${step >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    {lang === 'kr' ? 'MASGA 흐름을 올라탄 K-조선 빅3의 압도적 시장 지배력' : 'Overwhelming Dominance of K-Shipbuilding Big 3 Riding the MASGA Wave'}
                </h2>

                <div className="relative w-full max-w-[900px] -mt-[8px] h-[360px] flex items-center justify-center z-10 gap-6">
                    
                    {/* Left: Export Growth */}
                    <div className={`relative w-[240px] h-[240px] rounded-full border-[10px] border-[#fdba74] flex flex-col items-center justify-center shadow-xl transition-all duration-[1000ms] ease-out ${step >= 2 ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
                        <span className="text-[16px] font-bold text-gray-500 mb-1">{lang === 'kr' ? '2025년 수출 증가율' : '2025 Export Growth'}</span>
                        <span className="text-[48px] font-black text-[#ea580c] leading-none mb-2">+24.9%</span>
                        <span className="text-[12px] font-bold text-orange-800 bg-orange-100 px-3 py-1 rounded-full text-center leading-tight">
                            {lang === 'kr' ? <>반도체와 유일한<br/>두 자릿수 성장</> : <>Only Double-Digit<br/>Growth with Semi</>}
                        </span>
                    </div>

                    {/* Middle: Market Share */}
                    <div className={`relative w-[280px] h-[280px] rounded-full border-[12px] border-[#ea580c] flex flex-col items-center justify-center shadow-2xl transition-all duration-[1000ms] ease-out delay-100 ${step >= 3 ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
                        <div className="absolute top-4 w-[80px] h-[24px] bg-[#ea580c] text-white font-bold text-[12px] flex items-center justify-center rounded-full shadow-md">BIG 3</div>
                        <span className="text-[16px] font-bold text-gray-600 mb-1">{lang === 'kr' ? '고부가가치선 점유율' : 'High-Value Ship Share'}</span>
                        <span className="text-[64px] font-black text-[#ea580c] leading-none mb-2">60%+</span>
                        <span className="text-[13px] font-medium text-gray-500 text-center px-4 leading-tight">
                            LNG / Ammonia Carriers<br/>Offshore Plants
                        </span>
                    </div>

                    {/* Right: MASGA */}
                    <div className={`relative w-[240px] h-[240px] rounded-full bg-gradient-to-br from-[#1e3a8a] to-[#0f172a] flex flex-col items-center justify-center shadow-xl transition-all duration-[1000ms] ease-out delay-200 ${step >= 4 ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
                        <span className="text-[14px] font-bold text-blue-200 mb-1">{lang === 'kr' ? '미·중 패권 수혜' : 'US-China Hegemony'}</span>
                        <span className="text-[36px] font-black text-white leading-none mb-2">MASGA</span>
                        <span className="text-[11px] font-medium text-gray-300 text-center px-4 leading-tight">
                            Make American Shipbuilding<br/>Great Again
                        </span>
                    </div>

                </div>

                <div className={`mt-[10px] max-w-[1000px] text-[15px] md:text-[19px] leading-[1.45] font-medium text-gray-700 break-keep text-center transition-all duration-[900ms] ease-out ${step >= 5 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <ul className="text-left inline-block space-y-2 mx-auto">
                        {lang === 'kr' ? (
                            <>
                                <li className="flex items-start"><span className="mr-3 text-[#ea580c]">▪</span><span>HD현대중공업·삼성중공업·한화오션의 <strong>압도적 빅3 체제</strong>.</span></li>
                                <li className="flex items-start"><span className="mr-3 text-[#ea580c]">▪</span><span>2025년 한국 조선 수출은 <strong>전년 대비 24.9% 증가</strong>하며, 반도체(+22.2%)와 함께 두 자릿수 성장을 기록한 유일한 업종임.</span></li>
                                <li className="flex items-start"><span className="mr-3 text-[#ea580c]">▪</span><span>LNG 운반선·암모니아 운반선·해양플랜트 등 고부가가치 선박에서 <strong>글로벌 점유율 60% 이상</strong>을 차지함.</span></li>
                                <li className="flex items-start"><span className="mr-3 text-[#ea580c]">▪</span><span>미·중 패권 경쟁이 촉발한 <strong>MASGA(Make American Shipbuilding Great Again)</strong> 흐름의 직접적 수혜 산업.</span></li>
                            </>
                        ) : (
                            <>
                                <li className="flex items-start"><span className="mr-3 text-[#ea580c]">▪</span><span>Led by the overwhelming <strong>Big 3 system</strong>: HD Hyundai Heavy, Samsung Heavy, and Hanwha Ocean.</span></li>
                                <li className="flex items-start"><span className="mr-3 text-[#ea580c]">▪</span><span>Korea's shipbuilding exports in 2025 <strong>jumped 24.9% YoY</strong>, the only sector alongside semi to record double-digit growth.</span></li>
                                <li className="flex items-start"><span className="mr-3 text-[#ea580c]">▪</span><span>Holds <strong>over 60% global market share</strong> in high-value ships like LNG/Ammonia carriers and offshore plants.</span></li>
                                <li className="flex items-start"><span className="mr-3 text-[#ea580c]">▪</span><span>Direct beneficiary of the <strong>MASGA (Make American Shipbuilding Great Again)</strong> trend driven by US-China hegemony.</span></li>
                            </>
                        )}
                    </ul>
                </div>
            </div>
        </section>
    );
}
