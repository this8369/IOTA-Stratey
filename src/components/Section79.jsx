import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Section79({ isActive }) {
    const { lang } = useLanguage();
    const [step, setStep] = useState(0);

    useEffect(() => {
        if (!isActive) { setStep(0); return; }
        const timers = [
            setTimeout(() => setStep(1), 300),
            setTimeout(() => setStep(2), 800),
            setTimeout(() => setStep(3), 1300),
            setTimeout(() => setStep(4), 1800),
            setTimeout(() => setStep(5), 2300)
        ];
        return () => timers.forEach(clearTimeout);
    }, [isActive]);

    return (
        <section className="section w-full h-full bg-[#111827] flex flex-col items-center justify-center relative px-6 md:px-16 overflow-hidden">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-600 rounded-full blur-[150px] opacity-20 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600 rounded-full blur-[150px] opacity-20 pointer-events-none"></div>

            <div className="w-full max-w-[1400px] mx-auto flex flex-col items-center text-center relative z-10">
                
                <div className={`transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${step >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <span className="inline-block text-[22px] md:text-[26px] font-bold text-indigo-400 uppercase tracking-[-0.02em] mb-[12px] bg-transparent">
                        {lang === 'kr' ? '시총 GDP 200% 달성과 퀀텀 점프' : 'GDP 200% Market Cap & Quantum Jump'}
                    </span>
                </div>

                <h2 className={`text-[32px] md:text-[46px] lg:text-[52px] font-extrabold leading-[calc(1.3em-6px)] text-white break-keep tracking-[-0.02em] mb-14 transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${step >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    {lang === 'kr' ? <>싱가포르·홍콩급 금융 허브로 도약하는 압도적 스케일업</> : <>Overwhelming Scale-up to a Singapore/Hong Kong-level Financial Hub</>}
                </h2>

                {/* Quantum Jump Infographic */}
                <div className="w-full max-w-[1100px] flex flex-col md:flex-row items-center justify-center gap-6 mb-12">
                    
                    {/* The Chart Side */}
                    <div className="flex-1 w-full flex items-end justify-between h-[250px] md:h-[300px] border-b border-gray-600 relative">
                        {/* Connecting Line */}
                        <svg className={`absolute inset-0 w-full h-full pointer-events-none transition-all duration-[1500ms] ${step >= 4 ? 'opacity-100 dash-animate' : 'opacity-0'}`} preserveAspectRatio="none">
                            <path d="M 100 250 Q 300 200 500 150 T 900 50" fill="none" stroke="url(#grad)" strokeWidth="6" strokeDasharray="10 10" />
                            <defs>
                                <linearGradient id="grad" x1="0%" y1="100%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#4f46e5" />
                                    <stop offset="100%" stopColor="#a855f7" />
                                </linearGradient>
                            </defs>
                        </svg>
                        <style>{`
                            .dash-animate {
                                stroke-dashoffset: 1000;
                                animation: dash 3s linear forwards;
                            }
                            @keyframes dash {
                                to { stroke-dashoffset: 0; }
                            }
                        `}</style>

                        {/* 2030 */}
                        <div className={`relative flex flex-col items-center justify-end h-full w-[30%] transition-all duration-700 ${step >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                            <div className="text-gray-400 font-bold text-[18px] mb-2">2030</div>
                            <div className="text-white font-black text-[28px] md:text-[34px] leading-none mb-10">7,000<br/><span className="text-indigo-400 text-[20px]">~8,500</span></div>
                            <div className="w-4 h-4 bg-indigo-500 rounded-full absolute bottom-[-8px]"></div>
                        </div>

                        {/* 2035 */}
                        <div className={`relative flex flex-col items-center justify-end h-full w-[30%] transition-all duration-700 delay-200 ${step >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                            <div className="text-gray-400 font-bold text-[18px] mb-2">2035</div>
                            <div className="text-white font-black text-[32px] md:text-[40px] leading-none mb-[120px]">11,000<br/><span className="text-indigo-400 text-[20px]">~13,000</span></div>
                            <div className="w-5 h-5 bg-indigo-400 rounded-full absolute bottom-[110px] shadow-[0_0_15px_rgba(129,140,248,0.8)]"></div>
                        </div>

                        {/* 2040 */}
                        <div className={`relative flex flex-col items-center justify-end h-full w-[30%] transition-all duration-700 delay-400 ${step >= 4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                            <div className="absolute top-[-40px] text-purple-400 font-black text-[24px] uppercase tracking-widest animate-pulse">Quantum Jump 🚀</div>
                            <div className="text-gray-300 font-bold text-[20px] mb-2 absolute top-6">2040</div>
                            <div className="text-white font-black text-[40px] md:text-[54px] leading-none absolute top-14">15,000<br/><span className="text-purple-400 text-[26px]">~18,000</span></div>
                            <div className="w-8 h-8 bg-purple-500 rounded-full absolute top-[135px] shadow-[0_0_30px_rgba(168,85,247,1)]"></div>
                        </div>
                    </div>

                    {/* The Deepening Pillar */}
                    <div className={`w-full md:w-[350px] bg-gradient-to-br from-indigo-900 to-purple-900 border border-purple-500 p-8 rounded-2xl shadow-[0_0_40px_rgba(168,85,247,0.3)] transition-all duration-1000 ${step >= 5 ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
                        <div className="text-purple-300 font-bold text-[18px] uppercase tracking-widest mb-2">Market Deepening</div>
                        <h3 className="text-white font-black text-[32px] mb-6 leading-tight break-keep">{lang === 'kr' ? '시총 GDP 200% 달성' : 'Market Cap 200% of GDP'}</h3>
                        <ul className="text-left space-y-4">
                            <li className="flex items-start">
                                <span className="text-purple-400 mr-2">▪</span>
                                <span className="text-gray-200 text-[16px] font-bold">{lang === 'kr' ? '삼성전자 시총 2,000조+' : 'Samsung Elec. Cap 2,000T+'}</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-purple-400 mr-2">▪</span>
                                <span className="text-gray-200 text-[16px] font-bold">{lang === 'kr' ? 'SK하이닉스 시총 1,000조+' : 'SK Hynix Cap 1,000T+'}</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-purple-400 mr-2">▪</span>
                                <span className="text-gray-200 text-[16px] font-bold">{lang === 'kr' ? '현재 110% 수준에서 폭발적 확장' : 'Explosive expansion from current 110%'}</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Thesis Text */}
                <div className={`max-w-[1100px] transition-all duration-700 ${step >= 5 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <p className="text-[20px] md:text-[24px] font-bold text-gray-300 break-keep leading-relaxed">
                        {lang === 'kr' 
                            ? '삼성전자 2천 조 원 시대 도래와 함께 1만 5천~1만 8천 선까지 폭주, 전체 시장 시총이 GDP 대비 200%에 달하는 폭발적 딥 마켓(Deep Market) 구축을 전망한다.'
                            : 'Forecasting a surge to 15,000~18,000 alongside the 2,000T KRW Samsung Electronics era, building an explosive Deep Market where total market cap reaches 200% of GDP.'
                        }
                    </p>
                </div>

            </div>
        </section>
    );
}
