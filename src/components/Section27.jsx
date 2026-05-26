import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Section27({ isActive }) {
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
                        {lang === 'kr' ? '[자본 시장 3] 코리아 디스카운트의 구조적 종언' : '[Capital Market 3] Structural End of Korea Discount'}
                    </span>
                </div>

                <h2 className={`text-[32px] md:text-[46px] lg:text-[52px] font-extrabold leading-[calc(1.3em-6px)] text-[#1d1d1f] break-keep tracking-[-0.02em] transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${step >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    {lang === 'kr' ? 'AI 수혜 노출과 밸류업 정책이 주도할 아시아 평균 밸류에이션 수렴' : 'Convergence to Asian Average Valuation Driven by AI Exposure and Value-up Policy'}
                </h2>

                <div className="relative w-full max-w-[1200px] mt-[22px] mb-[20px] h-auto py-4 flex flex-col md:flex-row items-center justify-center z-10 gap-10">
                    
                    {/* Key Drivers */}
                    <div className={`relative w-full md:w-[600px] flex flex-col gap-3 transition-all duration-1000 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${step >= 2 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
                        <div className="text-[24px] font-black text-left text-[#1d1d1f] mb-2">{lang === 'kr' ? '5대 핵심 동력' : '5 Core Drivers'}</div>
                        
                        <div className="flex items-center gap-4 bg-gray-50 border border-gray-200 p-4 rounded-xl shadow-sm text-left">
                            <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center font-black text-[22px]">1</div>
                            <div className="flex-1">
                                <div className="text-[18px] font-bold text-gray-800">{lang === 'kr' ? '반도체 슈퍼사이클' : 'Semi Supercycle'}</div>
                                <div className="text-[14px] font-bold text-gray-500">{lang === 'kr' ? 'HBM 공급 부족 현상 지속' : 'Prolonged HBM Shortage'}</div>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 bg-gray-50 border border-gray-200 p-4 rounded-xl shadow-sm text-left">
                            <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center font-black text-[22px]">2</div>
                            <div className="flex-1">
                                <div className="text-[18px] font-bold text-gray-800">{lang === 'kr' ? '외국인 대규모 유입' : 'Massive Foreign Inflows'}</div>
                                <div className="text-[14px] font-bold text-gray-500">{lang === 'kr' ? '공매도 재개 이후 패시브/액티브 자금 회귀' : 'Return of funds post-short selling resume'}</div>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 bg-gray-50 border border-gray-200 p-4 rounded-xl shadow-sm text-left">
                            <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center font-black text-[22px]">3</div>
                            <div className="flex-1">
                                <div className="text-[18px] font-bold text-gray-800">{lang === 'kr' ? '친주주 밸류업 정책' : 'Pro-shareholder Value-up'}</div>
                                <div className="text-[14px] font-bold text-gray-500">{lang === 'kr' ? '밸류업 프로그램 및 자본시장법 개정안' : 'Value-up Program & Capital Market Act revision'}</div>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 bg-gray-50 border border-gray-200 p-4 rounded-xl shadow-sm text-left">
                            <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center font-black text-[22px]">4</div>
                            <div className="flex-1">
                                <div className="text-[18px] font-bold text-gray-800">{lang === 'kr' ? '글로벌 AI 수혜 노출도 1위' : '#1 Global AI Exposure'}</div>
                                <div className="text-[14px] font-bold text-gray-500">{lang === 'kr' ? '전 세계에서 AI 수혜에 가장 직결된 시장 인식' : 'Perceived as the market most directly tied to AI'}</div>
                            </div>
                        </div>
                    </div>

                    {/* Valuation Comparison */}
                    <div className={`relative w-[360px] flex flex-col items-center bg-purple-900 rounded-[30px] shadow-xl p-8 transition-all duration-1000 ease-[cubic-bezier(0.34,1.56,0.64,1)] delay-200 ${step >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                        <div className="text-[20px] font-black text-purple-200 mb-6">{lang === 'kr' ? '2026.05 밸류에이션 비교' : 'May 2026 Valuation Comparison'}</div>
                        
                        <div className="w-full flex justify-between items-center mb-6">
                            <div className="flex flex-col items-center">
                                <div className="text-[16px] font-bold text-purple-300 mb-1">KOSPI</div>
                                <div className="text-[38px] font-black text-white">13.2<span className="text-[20px]">x</span></div>
                                <div className="text-[14px] font-bold text-purple-400">PER</div>
                            </div>
                            <div className="text-purple-500 font-black text-[24px]">VS</div>
                            <div className="flex flex-col items-center">
                                <div className="text-[16px] font-bold text-purple-300 mb-1">Asia Avg.</div>
                                <div className="text-[38px] font-black text-white">16.1<span className="text-[20px]">x</span></div>
                                <div className="text-[14px] font-bold text-purple-400">PER</div>
                            </div>
                        </div>

                        <div className="w-full h-[1px] bg-purple-700 mb-6"></div>

                        <div className="w-full flex justify-between items-center">
                            <div className="flex flex-col items-center">
                                <div className="text-[38px] font-black text-white">1.34<span className="text-[20px]">x</span></div>
                                <div className="text-[14px] font-bold text-purple-400">PBR</div>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="text-[38px] font-black text-white">2.15<span className="text-[20px]">x</span></div>
                                <div className="text-[14px] font-bold text-purple-400">PBR</div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className={`mt-[10px] max-w-[1100px] text-[16px] md:text-[20px] leading-[1.5] font-medium text-gray-700 break-keep text-center transition-all duration-[900ms] ease-out ${step >= 4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <ul className="text-left inline-block space-y-3 mx-auto">
                        {lang === 'kr' ? (
                            <>
                                <li className="flex items-start"><span className="mr-3 text-purple-700">▪</span><span>이러한 역사적 랠리의 핵심 동력은 반도체 HBM 부족 현상, 외국인 자금 회귀, 정부 주도의 강력한 <strong>친주주 밸류업 정책 및 자본시장법 개정</strong>임.</span></li>
                                <li className="flex items-start"><span className="mr-3 text-purple-700">▪</span><span>무엇보다 KOSPI가 <strong>글로벌 AI 수혜에 가장 직접적으로 노출된 시장</strong>이라는 외국인 투자자들의 확고한 인식이 작용함.</span></li>
                                <li className="flex items-start"><span className="mr-3 text-purple-700">▪</span><span>2026년 5월 KOSPI는 PER 13.2배로 상승했으나, 아시아 평균(16.1배) 대비 여전히 디스카운트 상태. <strong>"코리아 디스카운트의 마지막 잔여분"</strong>도 5년 내 해소될 전망임.</span></li>
                            </>
                        ) : (
                            <>
                                <li className="flex items-start"><span className="mr-3 text-purple-700">▪</span><span>The core drivers are HBM shortages, return of foreign funds, and government-led <strong>pro-shareholder Value-up policies & Capital Market Act revisions</strong>.</span></li>
                                <li className="flex items-start"><span className="mr-3 text-purple-700">▪</span><span>Above all, foreign investors firmly perceive KOSPI as the <strong>market most directly exposed to global AI benefits</strong>.</span></li>
                                <li className="flex items-start"><span className="mr-3 text-purple-700">▪</span><span>As of May 2026, KOSPI PER rose to 13.2x, but still discounted vs Asian avg (16.1x). The <strong>"last remnants of the Korea Discount"</strong> are expected to vanish within 5 years.</span></li>
                            </>
                        )}
                    </ul>
                </div>
            </div>
        </section>
    );
}
