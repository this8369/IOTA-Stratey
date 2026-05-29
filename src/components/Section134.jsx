import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Section134({ isActive }) {
    const { lang } = useLanguage();
    const [step, setStep] = useState(0);

    useEffect(() => {
        if (!isActive) { setStep(0); return; }
        const timers = [
            setTimeout(() => setStep(1), 184),
            setTimeout(() => setStep(2), 551),
            setTimeout(() => setStep(3), 918),
            setTimeout(() => setStep(4), 1285)
        ];
        return () => timers.forEach(clearTimeout);
    }, [isActive]);

    return (
        <section className="section w-full h-full bg-[#f4f4f5] flex flex-col items-center justify-center relative px-6 md:px-16 overflow-hidden">
            <div className="w-full max-w-[1500px] mx-auto flex flex-col justify-center items-center h-full">
                
                {/* Header */}
                <div className="w-full flex flex-col items-center text-center mb-[36px]">
                    <div className={`transition-all duration-[612ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${step >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        <span className="inline-block text-[20px] md:text-[24px] font-bold text-[#1e3a8a] tracking-[-0.02em] mb-[12px]">
                            {lang === 'kr' ? '역사적 비교: IOTA가 가진 상징성 (1/3)' : 'Historical Comparison: Symbolic Significance of IOTA (1/3)'}
                        </span>
                    </div>
                    <h2 className={`text-[32px] md:text-[46px] lg:text-[52px] font-extrabold leading-[calc(1.3em-6px)] text-[#1d1d1f] break-keep tracking-[-0.02em] transition-all duration-[612ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${step >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        {lang === 'kr' ? '4대 변곡점과 IOTA' : 'The 4 Inflection Points & IOTA'}
                    </h2>
                </div>

                {/* Content: 1x2 Grid (Infographic + Text) */}
                <div className="w-full max-w-[1300px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    
                    {/* Left: Infographic */}
                    <div className={`lg:col-span-7 flex flex-col justify-center items-center gap-6 transition-all duration-700 delay-300 ${step >= 3 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
                        <div className="w-full bg-white border border-gray-200 shadow-lg p-8 relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-2 h-full bg-[#1e3a8a]"></div>
                            
                            <h3 className="text-xl font-bold text-gray-800 mb-8 border-b-2 border-gray-100 pb-4">
                                {lang === 'kr' ? '글로벌 패권과 시대적 변곡점' : 'Global Hegemony & Historical Inflection Points'}
                            </h3>
                            
                            <div className="flex flex-col gap-6 relative">
                                {/* Vertical Timeline Line */}
                                <div className="absolute left-[23px] top-4 bottom-4 w-1 bg-gray-200"></div>
                                
                                {/* Item 1 */}
                                <div className="flex items-center gap-6 relative z-10">
                                    <div className="w-12 h-12 bg-gray-100 rounded-full border-[3px] border-gray-300 flex items-center justify-center font-bold text-gray-500 shrink-0">18C</div>
                                    <div className="bg-gray-50 p-4 rounded-lg flex-1 border border-gray-200">
                                        <div className="font-bold text-gray-700 mb-1">{lang === 'kr' ? '산업혁명' : 'Industrial Revolution'}</div>
                                        <div className="text-sm text-gray-500">{lang === 'kr' ? '증기기관 → 단일 기술 변곡점이 글로벌 패권 형성' : 'Steam Engine → Single tech inflection point forming global hegemony'}</div>
                                    </div>
                                </div>
                                
                                {/* Item 2 */}
                                <div className="flex items-center gap-6 relative z-10">
                                    <div className="w-12 h-12 bg-gray-100 rounded-full border-[3px] border-gray-300 flex items-center justify-center font-bold text-gray-500 shrink-0">20C</div>
                                    <div className="bg-gray-50 p-4 rounded-lg flex-1 border border-gray-200">
                                        <div className="font-bold text-gray-700 mb-1">{lang === 'kr' ? '냉전기 (미·소)' : 'Cold War (US/USSR)'}</div>
                                        <div className="text-sm text-gray-500">{lang === 'kr' ? '핵무기·우주산업 → 새로운 지정학 형성' : 'Nuclear/Space tech → Forming new geopolitics'}</div>
                                    </div>
                                </div>

                                {/* Item 3 (Highlight) */}
                                <div className="flex items-center gap-6 relative z-10">
                                    <div className="w-12 h-12 bg-[#1e3a8a] rounded-full border-[3px] border-[#1e3a8a] flex items-center justify-center font-bold text-white shrink-0 shadow-md">21C</div>
                                    <div className="bg-blue-50/50 p-4 rounded-lg flex-1 border-2 border-[#1e3a8a] shadow-sm">
                                        <div className="font-bold text-[#1e3a8a] text-lg mb-1">{lang === 'kr' ? '대한민국 4대 변곡점' : 'Korea\'s 4 Inflection Points'}</div>
                                        <div className="text-[15px] font-bold text-gray-800">
                                            {lang === 'kr' ? 'AI · 반도체 · 문화 · 인구' : 'AI · Semiconductors · Culture · Population'}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Text Content */}
                    <div className={`lg:col-span-5 transition-all duration-700 delay-500 ${step >= 4 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
                        <div className="bg-white border-[6px] border-[#1e3a8a] px-8 py-10 flex flex-col shadow-xl">
                            <div className="text-[#1e3a8a] font-black text-[22px] md:text-[24px] mb-[8px] uppercase break-keep leading-tight">
                                {lang === 'kr' ? '1조 → 2조 달러 시대의 마침표' : 'The Conclusion of the $1T to $2T Era'}
                            </div>
                            
                            <h3 className="text-gray-900 font-bold text-[28px] mb-[20px] leading-snug break-keep">
                                {lang === 'kr' ? 'Defining Trophy' : 'Defining Trophy'}
                            </h3>
                            
                            <p className="text-[16px] text-gray-700 font-medium leading-relaxed break-keep tracking-tight mb-8">
                                {lang === 'kr' ? '21세기 한국에게 AI, 반도체, 문화, 인구는 이전 세대의 증기기관이나 핵·우주산업과 맞먹는 4대 변곡점입니다.' : 'For 21st century Korea, AI, semiconductors, culture, and population are 4 inflection points equivalent to the steam engine or space industry of past generations.'}
                            </p>

                            <div className="bg-gray-100 p-5 border-l-4 border-[#1e3a8a]">
                                <p className="text-[16px] text-gray-800 font-bold leading-relaxed break-keep">
                                    {lang === 'kr' ? '1조 달러 시대에 IFC가 상징이었다면, IOTA는 이 4대 변곡점 위에 서 있는 한국 1조→2조 달러의 마지막이자, 2조→3조 달러를 여는 첫 트로피가 될 것입니다.' : 'If IFC was the symbol of the $1T era, IOTA will be the final defining trophy of the $1T->$2T era and the first of the $2T->$3T era.'}
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
