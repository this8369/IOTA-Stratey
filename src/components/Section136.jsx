import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Section136({ isActive }) {
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
                            {lang === 'kr' ? '역사적 비교: IOTA가 가진 상징성 (3/3)' : 'Historical Comparison: Symbolic Significance of IOTA (3/3)'}
                        </span>
                    </div>
                    <h2 className={`text-[32px] md:text-[46px] lg:text-[52px] font-extrabold leading-[calc(1.3em-6px)] text-[#1d1d1f] break-keep tracking-[-0.02em] transition-all duration-[612ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${step >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        {lang === 'kr' ? '상징성 및 강력한 브랜드 파급력' : 'Symbolism & Powerful Brand Effect'}
                    </h2>
                </div>

                {/* Content: 1x2 Grid */}
                <div className="w-full max-w-[1300px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-[36px]">
                    
                    {/* Left: Diagram */}
                    <div className={`lg:col-span-7 flex flex-col justify-center gap-6 transition-all duration-700 delay-300 ${step >= 3 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
                        <div className="w-full bg-white border border-gray-200 shadow-lg p-8 relative overflow-hidden flex flex-col items-center justify-center min-h-[350px]">
                            
                            <h3 className="text-xl font-bold text-gray-800 mb-8 w-full text-left border-b-2 border-gray-100 pb-4">
                                {lang === 'kr' ? '단일 빌딩을 넘어선 블록 스케일 패러다임' : 'Beyond Single Buildings to Block-Scale Paradigm'}
                            </h3>
                            
                            <div className="w-full flex items-end justify-center gap-8 px-4 py-4">
                                
                                {/* 1T Era */}
                                <div className="flex flex-col items-center opacity-60">
                                    <div className="text-[14px] font-bold text-gray-500 mb-2 uppercase">{lang === 'kr' ? '1조 달러 시대' : '$1T Era'}</div>
                                    <div className="w-32 h-32 bg-gray-300 border-b-4 border-gray-400 flex items-center justify-center">
                                        <div className="text-gray-600 font-bold text-center">
                                            <div>IFC</div>
                                            <div className="text-[11px] font-normal">{lang === 'kr' ? '단일 빌딩 한계' : 'Single Building Limit'}</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Arrow */}
                                <div className="text-gray-400 text-3xl font-black pb-8">→</div>

                                {/* 2T Era */}
                                <div className="flex flex-col items-center">
                                    <div className="text-[14px] font-bold text-[#1e3a8a] mb-2 uppercase">{lang === 'kr' ? '2조 달러 시대' : '$2T Era'}</div>
                                    <div className="w-48 h-48 bg-blue-50 border-4 border-[#1e3a8a] flex flex-col items-center justify-center shadow-md relative">
                                        <div className="absolute top-0 w-full h-4 bg-[#1e3a8a]"></div>
                                        <div className="text-[#1e3a8a] font-black text-2xl text-center mt-2">
                                            <div>IOTA</div>
                                        </div>
                                        <div className="text-gray-700 font-bold text-sm text-center px-2 mt-2">
                                            {lang === 'kr' ? 'Block-scale Urban Project' : 'Block-scale Urban Project'}
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Right: Text Content */}
                    <div className={`lg:col-span-5 transition-all duration-700 delay-500 ${step >= 4 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
                        <div className="bg-white border-[6px] border-[#1e3a8a] px-8 py-10 flex flex-col shadow-xl h-full">
                            <div className="text-[#1e3a8a] font-black text-[22px] md:text-[24px] mb-[8px] uppercase break-keep leading-tight">
                                {lang === 'kr' ? '서울의 정체성을 정의하는 랜드마크' : 'A Landmark Defining Seoul\'s Identity'}
                            </div>
                            
                            <h3 className="text-gray-900 font-bold text-[28px] mb-[20px] leading-snug break-keep">
                                {lang === 'kr' ? '도시 브랜드 파급력' : 'City Brand Effect'}
                            </h3>
                            
                            <p className="text-[16px] text-gray-700 font-medium leading-relaxed break-keep tracking-tight mb-8">
                                {lang === 'kr' ? '향후 50년 후 한국이 4~5조 달러 경제로 도약할 때, IOTA는 도쿄 미드타운이나 록폰기 힐스가 만든 강력한 도시 브랜드 이펙트와 동급의 상징물로 남을 것입니다.' : 'As Korea leaps to a $4-5T economy in the next 50 years, IOTA will remain a symbol with a powerful city brand effect equal to Tokyo Midtown or Roppongi Hills.'}
                            </p>

                            <div className="bg-gray-100 p-5 border-l-4 border-[#1e3a8a]">
                                <p className="text-[16px] text-gray-800 font-bold leading-relaxed break-keep">
                                    {lang === 'kr' ? '이것은 단순한 부동산 개발이 아니라, 한국의 새로운 시대를 여는 도시 창조 과정입니다.' : 'This is not just real estate development, but a process of city creation that opens a new era for Korea.'}
                                </p>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Bottom text */}
                <div className={`w-full text-center mt-2 transition-all duration-[612ms] delay-[122ms] ${step >= 4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                    <div className="inline-block bg-[#1e3a8a] text-white px-8 py-5 text-[20px] md:text-[22px] font-bold shadow-lg break-keep">
                        {lang === 'kr' ? 
                            '이지스가 단순 자산운용사가 아니라 도시를 만든 자본으로 한국 및 아시아 자본시장사에 기록될 단일 최대 프로젝트' : 
                            'IGIS will be recorded in Asian capital market history not just as an asset manager, but as the capital that built the city through this single largest project.'}
                    </div>
                </div>

            </div>
        </section>
    );
}
