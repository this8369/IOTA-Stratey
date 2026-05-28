import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Section128({ isActive }) {
    const { lang } = useLanguage();
    const [step, setStep] = useState(0);

    useEffect(() => {
        if (!isActive) { setStep(0); return; }
        const timers = [
            setTimeout(() => setStep(1), 184),
            setTimeout(() => setStep(2), 551),
            setTimeout(() => setStep(3), 918),
            setTimeout(() => setStep(4), 1300),
            setTimeout(() => setStep(5), 1700),
            setTimeout(() => setStep(6), 2100)
        ];
        return () => timers.forEach(clearTimeout);
    }, [isActive]);

    return (
        <section className="section w-full h-full bg-[#f4f4f5] flex flex-col items-center justify-center relative px-6 md:px-16 overflow-hidden">
            <div className="w-full max-w-[1400px] mx-auto flex flex-col justify-center items-center h-full">
                
                {/* Header */}
                <div className="w-full flex flex-col items-center text-center mb-[36px]">
                    <div className={`transition-all duration-[612ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${step >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        <span className="inline-block text-[20px] md:text-[24px] font-bold text-[#1d1d1f] tracking-[-0.02em] mb-[12px]">
                            {lang === 'kr' ? '거시 경제 및 시장 환경' : 'Macro & Market Environment'}
                        </span>
                    </div>
                    <h2 className={`text-[32px] md:text-[46px] lg:text-[52px] font-extrabold leading-[calc(1.3em-6px)] text-[#1d1d1f] break-keep tracking-[-0.02em] transition-all duration-[612ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${step >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        {lang === 'kr' ? '매크로 변수 및 PF 시장 유동성 리스크' : 'Macro Variables & PF Liquidity Risks'}
                    </h2>
                </div>

                {/* Main Content: Radar Chart (Left 40%) + Risk Details (Right 60%) */}
                <div className="w-full max-w-[1400px] grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-8">
                    
                    {/* Left: Radar Chart (40%) */}
                    <div className={`lg:col-span-5 bg-white rounded-xl shadow-lg border border-gray-200 p-8 flex flex-col items-center justify-center h-[420px] transition-all duration-700 ${step >= 3 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
                        <div className="w-full mb-2">
                            <h3 className="text-[#1d1d1f] font-bold text-[22px] leading-tight text-center">
                                {lang === 'kr' ? '거시 통제 가능성 (Controllability)' : 'Macro Controllability Radar'}
                            </h3>
                        </div>

                        {/* SVG Radar Chart (Triangle for 3 axes) */}
                        <div className="relative w-full max-w-[280px] aspect-square mt-4">
                            <svg className="w-full h-full" viewBox="0 0 100 100">
                                {/* Base grids (Hexagon/Triangle approximation) */}
                                <polygon points="50,10 84.6,70 15.4,70" fill="none" stroke="#e5e7eb" strokeWidth="1" />
                                <polygon points="50,23.3 73.1,63.3 26.9,63.3" fill="none" stroke="#e5e7eb" strokeWidth="1" />
                                <polygon points="50,36.6 61.5,56.6 38.5,56.6" fill="none" stroke="#e5e7eb" strokeWidth="1" />
                                
                                {/* Axes lines */}
                                <line x1="50" y1="50" x2="50" y2="10" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="2,2"/>
                                <line x1="50" y1="50" x2="84.6" y2="70" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="2,2"/>
                                <line x1="50" y1="50" x2="15.4" y2="70" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="2,2"/>

                                {/* Axis Labels */}
                                <text x="50" y="5" textAnchor="middle" fill="#4b5563" fontSize="5" fontWeight="bold">RISK 1: 금리</text>
                                <text x="90" y="75" textAnchor="middle" fill="#4b5563" fontSize="5" fontWeight="bold">RISK 2: 공사비</text>
                                <text x="10" y="75" textAnchor="middle" fill="#4b5563" fontSize="5" fontWeight="bold">RISK 3: 유동성</text>

                                {/* Actual Data Polygon */}
                                <polygon 
                                    points="50,20 75,60 25,60" 
                                    fill="rgba(30, 58, 138, 0.2)" 
                                    stroke="#1e3a8a" 
                                    strokeWidth="2" 
                                    className="transition-all duration-[1500ms] ease-out origin-center"
                                    style={{ transform: step >= 4 ? 'scale(1)' : 'scale(0)' }}
                                />
                                
                                {/* Data Points */}
                                <circle cx="50" cy="20" r="2" fill="#1e3a8a" className={`transition-opacity duration-500 delay-[1000ms] ${step >= 4 ? 'opacity-100' : 'opacity-0'}`} />
                                <circle cx="75" cy="60" r="2" fill="#1e3a8a" className={`transition-opacity duration-500 delay-[1000ms] ${step >= 4 ? 'opacity-100' : 'opacity-0'}`} />
                                <circle cx="25" cy="60" r="2" fill="#1e3a8a" className={`transition-opacity duration-500 delay-[1000ms] ${step >= 4 ? 'opacity-100' : 'opacity-0'}`} />
                            </svg>
                        </div>
                    </div>

                    {/* Right: Risk Details with Gauges (60%) */}
                    <div className="lg:col-span-7 flex flex-col gap-4 h-[420px] justify-between">
                        
                        {/* RISK 1 */}
                        <div className={`bg-[#1d1d1f] rounded-xl p-5 shadow-lg border border-gray-700 flex flex-col justify-center transition-all duration-700 delay-300 ${step >= 4 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
                            <div className="flex justify-between items-center border-b border-gray-600 pb-2 mb-2">
                                <div className="flex items-center gap-3">
                                    <span className="bg-red-500 text-white px-2 py-0.5 rounded text-xs font-bold">RISK 1</span>
                                    <span className="text-white font-bold text-[18px]">{lang === 'kr' ? '금리 환경' : 'Interest Rate'}</span>
                                </div>
                                <div className="text-green-400 font-bold text-sm bg-green-900/30 px-2 py-0.5 rounded">
                                    IRR +200~300bp
                                </div>
                            </div>
                            <p className="text-gray-300 text-[15px] font-medium break-keep mb-3 leading-relaxed">
                                {lang === 'kr' ? '2026~2027 추가 인하 예상. PF Senior 금리 6~7%에서 5~6%로 인하 시 IPR Equity IRR 대폭 개선.' : 'Rate cuts expected in 26-27. Drop in PF Senior rate to 5-6% vastly improves IPR Equity IRR.'}
                            </p>
                            {/* Gauge Bar */}
                            <div className="w-full bg-gray-700 h-2 rounded-full overflow-hidden">
                                <div className={`bg-gradient-to-r from-red-500 to-green-400 h-full transition-all duration-1000 delay-700 ${step >= 4 ? 'w-[75%]' : 'w-0'}`}></div>
                            </div>
                        </div>

                        {/* RISK 2 */}
                        <div className={`bg-white rounded-xl p-5 shadow-lg border-2 border-gray-800 flex flex-col justify-center transition-all duration-700 delay-400 ${step >= 5 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
                            <div className="flex justify-between items-center border-b border-gray-200 pb-2 mb-2">
                                <div className="flex items-center gap-3">
                                    <span className="bg-[#1d1d1f] text-white px-2 py-0.5 rounded text-xs font-bold">RISK 2</span>
                                    <span className="text-[#1d1d1f] font-bold text-[18px]">{lang === 'kr' ? '공사비 인플레이션' : 'Construction Cost'}</span>
                                </div>
                                <div className="text-[#1e3a8a] font-bold text-sm bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                                    Unit Cost Lock-in
                                </div>
                            </div>
                            <p className="text-gray-600 text-[15px] font-medium break-keep mb-3 leading-relaxed">
                                {lang === 'kr' ? '평당 5천만 원에서 4천만 원으로 하향 조정. 삼성물산·현대건설과의 단가 Lock-in이 핵심 통제 변수.' : 'Adjusted from 50M to 40M/pyeong. Unit cost lock-in with major contractors is the core control variable.'}
                            </p>
                            {/* Gauge Bar */}
                            <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                                <div className={`bg-gradient-to-r from-yellow-400 to-[#1e3a8a] h-full transition-all duration-1000 delay-800 ${step >= 5 ? 'w-[85%]' : 'w-0'}`}></div>
                            </div>
                        </div>

                        {/* RISK 3 */}
                        <div className={`bg-white rounded-xl p-5 shadow-lg border-2 border-gray-800 flex flex-col justify-center transition-all duration-700 delay-500 ${step >= 6 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
                            <div className="flex justify-between items-center border-b border-gray-200 pb-2 mb-2">
                                <div className="flex items-center gap-3">
                                    <span className="bg-[#1d1d1f] text-white px-2 py-0.5 rounded text-xs font-bold">RISK 3</span>
                                    <span className="text-[#1d1d1f] font-bold text-[18px]">{lang === 'kr' ? 'PF 시장 유동성' : 'PF Market Liquidity'}</span>
                                </div>
                                <div className="text-[#1e3a8a] font-bold text-sm bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                                    Club Deal Syndication
                                </div>
                            </div>
                            <p className="text-gray-600 text-[15px] font-medium break-keep mb-3 leading-relaxed">
                                {lang === 'kr' ? '단일 기관 감당이 불가능한 초대형 PF. 금융권의 보수성을 극복하기 위해 Club deal 신디케이션 필수.' : 'Mega PF cannot be covered by a single entity. Club deal syndication is essential to overcome conservatism.'}
                            </p>
                            {/* Gauge Bar */}
                            <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                                <div className={`bg-gradient-to-r from-orange-400 to-[#1e3a8a] h-full transition-all duration-1000 delay-900 ${step >= 6 ? 'w-[65%]' : 'w-0'}`}></div>
                            </div>
                        </div>

                    </div>

                </div>

                {/* Bottom text */}
                <div className={`w-full text-center transition-all duration-[612ms] delay-[122ms] ${step >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                    <div className="inline-block bg-[#1d1d1f] text-white px-8 py-4 rounded-full text-[18px] md:text-[20px] font-bold shadow-xl break-keep">
                        {lang === 'kr' ? 
                            '매크로 불확실성에 대응하는 철저한 금리/원가 통제 및 펀딩 구조 다각화' : 
                            'Thorough control of interest rates/costs and diversification of funding to counter macro uncertainties'}
                    </div>
                </div>
            </div>
        </section>
    );
}
