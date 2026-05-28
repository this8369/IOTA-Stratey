import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Section105({ isActive }) {
    const { lang } = useLanguage();
    const [step, setStep] = useState(0);
    const [sliderValue, setSliderValue] = useState(50); // fake slider for animation effect

    useEffect(() => {
        if (!isActive) { setStep(0); return; }
        const timers = [
            setTimeout(() => setStep(1), 300),
            setTimeout(() => setStep(2), 800),
            setTimeout(() => setStep(3), 1200), // Left PF Stack
            setTimeout(() => setStep(4), 1600), // Right Sliders
            setTimeout(() => setStep(5), 2000), // Chart drawing
            setTimeout(() => setStep(6), 2800), // Bottom Text
        ];
        
        // fake slider automation
        const sliderInterval = setInterval(() => {
            if (step >= 4) {
                setSliderValue(prev => (prev > 80 ? 20 : prev + 15));
            }
        }, 1500);

        return () => {
            timers.forEach(clearTimeout);
            clearInterval(sliderInterval);
        };
    }, [isActive, step]);

    return (
        <section className="section w-full h-full bg-[#fdfdfd] flex flex-col items-center justify-center relative px-6 md:px-16 overflow-hidden">
            <div className="w-full max-w-[1400px] mx-auto flex flex-col items-center text-center">
                
                <div className={`transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${step >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <span className="inline-block text-[20px] md:text-[24px] font-bold text-purple-600 tracking-[-0.02em] mb-[12px]">
                        6.4 IPR Project REIT Structuring
                    </span>
                </div>

                <h2 className={`text-[32px] md:text-[46px] lg:text-[52px] font-extrabold leading-[calc(1.3em-6px)] text-[#1d1d1f] break-keep tracking-[-0.02em] mb-4 transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${step >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    {lang === 'kr' ? <>초거대 PF 시나리오 및 민감도 분석 자동화</> : <>Mega PF Scenario & Sensitivity Analysis Automation</>}
                </h2>

                {/* Infographic Area: Simulator UI */}
                <div className="w-full max-w-[1100px] mt-10 mb-14 flex flex-col md:flex-row gap-6 justify-center">
                    
                    {/* Left: PF Tranche Stack */}
                    <div className={`flex-[0.8] bg-white border-2 border-gray-200 rounded-3xl p-8 shadow-md transition-all duration-1000 ${step >= 3 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
                        <h4 className="font-bold text-gray-800 text-[18px] md:text-[20px] mb-6 text-left border-b pb-3">
                            {lang === 'kr' ? '7조 원 PF 캐시플로우 트랜치' : '7T KRW PF Cash Flow Tranche'}
                        </h4>
                        
                        <div className="flex flex-col gap-2 relative">
                            {/* Equity */}
                            <div className="w-full h-12 bg-purple-100 border-2 border-purple-300 rounded-lg flex items-center justify-between px-4 hover:-translate-y-1 transition-transform cursor-pointer">
                                <span className="font-bold text-purple-900">Equity (Common/Pref)</span>
                                <span className="font-black text-purple-700">20%</span>
                            </div>
                            {/* Mezzanine */}
                            <div className="w-full h-14 bg-blue-100 border-2 border-blue-300 rounded-lg flex items-center justify-between px-4 hover:-translate-y-1 transition-transform cursor-pointer">
                                <span className="font-bold text-blue-900">Mezzanine Loan</span>
                                <span className="font-black text-blue-700">30%</span>
                            </div>
                            {/* Senior */}
                            <div className="w-full h-20 bg-gray-100 border-2 border-gray-300 rounded-lg flex items-center justify-between px-4 hover:-translate-y-1 transition-transform cursor-pointer">
                                <span className="font-bold text-gray-700">Senior Loan</span>
                                <span className="font-black text-gray-600">50%</span>
                            </div>

                            {/* Automation Arrow Overlay */}
                            <div className={`absolute -right-12 top-1/2 -translate-y-1/2 w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white shadow-lg transition-all duration-700 ${step >= 4 ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
                                ⚡️
                            </div>
                        </div>
                    </div>

                    {/* Right: Dynamic Simulator UI */}
                    <div className={`flex-[1.2] bg-[#1d1d1f] rounded-3xl p-8 shadow-xl flex flex-col transition-all duration-1000 ${step >= 4 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
                        <div className="flex items-center justify-between mb-6">
                            <h4 className="font-bold text-gray-200 text-[18px] md:text-[20px]">
                                {lang === 'kr' ? 'AI 민감도 분석 시뮬레이터' : 'AI Sensitivity Simulator'}
                            </h4>
                            <span className="bg-purple-600/30 text-purple-300 px-3 py-1 rounded-full text-[12px] font-bold">Auto-Sync</span>
                        </div>

                        {/* Sliders */}
                        <div className="flex gap-4 mb-8">
                            <div className="flex-1 bg-white/5 rounded-xl p-3">
                                <div className="text-gray-400 text-[12px] font-bold mb-2">{lang === 'kr' ? '금리 (Interest Rate)' : 'Interest Rate'}</div>
                                <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                                    <div className="h-full bg-purple-400 transition-all duration-500" style={{ width: `${sliderValue}%` }}></div>
                                </div>
                            </div>
                            <div className="flex-1 bg-white/5 rounded-xl p-3">
                                <div className="text-gray-400 text-[12px] font-bold mb-2">{lang === 'kr' ? '공실률 (Vacancy)' : 'Vacancy Rate'}</div>
                                <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                                    <div className="h-full bg-blue-400 transition-all duration-500" style={{ width: `${100 - sliderValue}%` }}></div>
                                </div>
                            </div>
                            <div className="flex-1 bg-white/5 rounded-xl p-3">
                                <div className="text-gray-400 text-[12px] font-bold mb-2">{lang === 'kr' ? '임대료 (Rent)' : 'Rent'}</div>
                                <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                                    <div className="h-full bg-teal-400 transition-all duration-500" style={{ width: `${(sliderValue + 30) % 100}%` }}></div>
                                </div>
                            </div>
                        </div>

                        {/* Chart Area */}
                        <div className="flex-1 bg-black/40 rounded-xl border border-gray-700 p-4 relative overflow-hidden flex flex-col justify-end">
                            <div className="absolute top-4 left-4 text-gray-400 font-bold text-[14px]">
                                {lang === 'kr' ? 'IPO / 매각 시나리오 가치 평가' : 'IPO / Exit Scenario Valuation'}
                            </div>
                            
                            {/* Fake SVG Chart */}
                            <svg className="w-full h-[120px] overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 100">
                                {/* Grid lines */}
                                <line x1="0" y1="25" x2="100" y2="25" stroke="#333" strokeWidth="1" strokeDasharray="4 4" />
                                <line x1="0" y1="50" x2="100" y2="50" stroke="#333" strokeWidth="1" strokeDasharray="4 4" />
                                <line x1="0" y1="75" x2="100" y2="75" stroke="#333" strokeWidth="1" strokeDasharray="4 4" />
                                
                                {/* Base Scenario Line */}
                                <path 
                                    d="M 0,80 Q 25,75 50,60 T 100,30" 
                                    fill="none" stroke="#4b5563" strokeWidth="2" 
                                    className={`transition-all duration-[1500ms] ease-out ${step >= 5 ? 'stroke-dasharray-1000 stroke-dashoffset-0' : 'stroke-dasharray-1000 stroke-dashoffset-1000'}`}
                                    style={{ strokeDasharray: 1000, strokeDashoffset: step >= 5 ? 0 : 1000 }}
                                />
                                {/* Dynamic Simulated Line (moves with slider) */}
                                <path 
                                    d={`M 0,80 C 30,${100 - sliderValue} 70,${sliderValue} 100,${sliderValue / 2}`} 
                                    fill="none" stroke="#a855f7" strokeWidth="3" 
                                    className={`transition-all duration-500 ${step >= 5 ? 'opacity-100' : 'opacity-0'}`}
                                />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Bottom Text (Style from 59~62p) */}
                <div className={`max-w-[1200px] mt-2 text-[16px] md:text-[20px] leading-[1.5] font-bold text-gray-700 break-keep text-center transition-all duration-[900ms] ease-out ${step >= 6 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <ul className="text-left inline-block space-y-3 mx-auto">
                        <li className="flex items-start"><span className="mr-3 text-[#1d1d1f]">▪</span><span>{lang === 'kr' ? '초거대 규모(7조 원) PF의 트랜치별 캐시플로우를 시뮬레이션하고 각종 변수(금리, 공실)에 대한 민감도 분석 자동화' : 'Automated simulation of tranche-level cash flow and sensitivity analysis (interest, vacancy) for mega-scale (7T) PF'}</span></li>
                        <li className="flex items-start"><span className="mr-3 text-purple-600">▪</span><span className="text-purple-900">{lang === 'kr' ? '시시각각 변하는 매크로 환경에 즉각 대응하여 최적의 IPO 및 매각 시나리오를 도출' : 'Instantly responding to changing macro environments to derive optimal IPO and exit scenarios'}</span></li>
                    </ul>
                </div>

            </div>
        </section>
    );
}
