import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Section135({ isActive }) {
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
                            {lang === 'kr' ? '도심 권역의 장기 Stewardship 모델' : 'Long-term Stewardship of Urban Districts'}
                        </span>
                    </div>
                    <h2 className={`text-[32px] md:text-[46px] lg:text-[46px] font-extrabold leading-[calc(1.3em-6px)] text-[#1d1d1f] break-keep tracking-[-0.02em] transition-all duration-[612ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${step >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        {lang === 'kr' ? '단순 ROI를 넘어 세대를 건너는 자본 순환의 시작' : 'Beyond ROI: The Start of a Cross-Generational Capital Cycle'}
                    </h2>
                </div>

                {/* Content: 1x2 Grid */}
                <div className="w-full max-w-[1300px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    
                    {/* Left: Global Map Nodes Infographic */}
                    <div className={`lg:col-span-7 flex flex-col justify-center gap-6 transition-all duration-700 delay-300 ${step >= 3 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
                        <div className="w-full bg-white border border-gray-200 shadow-lg p-8 relative overflow-hidden flex flex-col items-center justify-center min-h-[350px]">
                            
                            <h3 className="text-[22px] font-bold text-gray-800 mb-8 w-full text-left border-b-2 border-gray-100 pb-4">
                                {lang === 'kr' ? '단일 디벨로퍼의 30~50년 권역 마스터플랜 사례' : '30-50 Year District Masterplans by Single Developers'}
                            </h3>
                            
                            <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
                                {/* Tokyo */}
                                <div className="flex flex-col items-center text-center p-6 bg-gray-50 border border-gray-200 rounded-lg">
                                    <div className="w-20 h-20 rounded-full bg-white border-[4px] border-[#1e3a8a] flex items-center justify-center mb-4 shadow-sm">
                                        <span className="font-black text-[#1e3a8a] text-lg">TOKYO</span>
                                    </div>
                                    <div className="font-bold text-gray-800 text-[20px] mb-2">{lang === 'kr' ? '마루노우치' : 'Marunouchi'}</div>
                                    <div className="text-[16px] text-gray-600 font-medium">{lang === 'kr' ? '미츠비시 지소 주도' : 'Led by Mitsubishi Estate'}</div>
                                </div>
                                
                                {/* London */}
                                <div className="flex flex-col items-center text-center p-6 bg-gray-50 border border-gray-200 rounded-lg">
                                    <div className="w-20 h-20 rounded-full bg-white border-[4px] border-[#1e3a8a] flex items-center justify-center mb-4 shadow-sm">
                                        <span className="font-black text-[#1e3a8a] text-lg">LONDON</span>
                                    </div>
                                    <div className="font-bold text-gray-800 text-[20px] mb-2">King's Cross</div>
                                    <div className="text-[16px] text-gray-600 font-medium">{lang === 'kr' ? '아르젠트(Argent)' : 'Argent Group'}</div>
                                </div>

                                {/* NY */}
                                <div className="flex flex-col items-center text-center p-6 bg-gray-50 border border-gray-200 rounded-lg">
                                    <div className="w-20 h-20 rounded-full bg-white border-[4px] border-[#1e3a8a] flex items-center justify-center mb-4 shadow-sm">
                                        <span className="font-black text-[#1e3a8a] text-lg">NY</span>
                                    </div>
                                    <div className="font-bold text-gray-800 text-[20px] mb-2">Hudson Yards</div>
                                    <div className="text-[16px] text-gray-600 font-medium">{lang === 'kr' ? '릴레이티드' : 'Related Companies'}</div>
                                </div>
                            </div>
                            
                            <div className="w-full mt-8 bg-[#1e3a8a] text-white p-5 flex flex-col items-center justify-center font-bold text-center">
                                <div className="text-[15px] opacity-80 mb-2 uppercase tracking-widest">Global Common Pattern</div>
                                <div className="text-[18px]">{lang === 'kr' ? '한 운용사·디벨로퍼가 한 도시의 권역을 세대에 걸쳐 Stewardship' : 'A single developer stewarding a city district across generations'}</div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Text Content */}
                    <div className={`lg:col-span-5 transition-all duration-700 delay-500 ${step >= 4 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
                        <div className="bg-white border-[6px] border-[#1e3a8a] px-8 py-10 flex flex-col shadow-xl">
                            <div className="text-[#1e3a8a] font-black text-[22px] md:text-[24px] mb-[8px] uppercase break-keep leading-tight">
                                {lang === 'kr' ? '세대를 건너는 자본 순환' : 'Cross-Generational Capital Cycle'}
                            </div>
                            
                            <h3 className="text-gray-900 font-bold text-[28px] mb-[20px] leading-snug break-keep">
                                {lang === 'kr' ? '한국형 모델의 구축' : 'Building the Korean Model'}
                            </h3>
                            
                            <p className="text-[16px] text-gray-700 font-medium leading-relaxed break-keep tracking-tight mb-8">
                                {lang === 'kr' ? '글로벌 주요 도시들은 단순한 랜드마크 건설을 넘어 한 주체가 긴 시간 동안 권역 전체의 정체성을 이끌어가는 Stewardship 모델을 증명해왔습니다.' : 'Major global cities have proven the Stewardship model where a single entity guides the district\'s identity over a long time, going beyond simple landmark construction.'}
                            </p>

                            <div className="bg-gray-100 p-5 border-l-4 border-[#1e3a8a]">
                                <p className="text-[16px] text-gray-800 font-bold leading-relaxed break-keep">
                                    {lang === 'kr' ? '이지스가 IOTA를 시작으로 YIBD, 그리고 향후 트로피 에셋으로 이 모델을 확장한다면, 이는 단순 ROI 게임이 아니라 세대를 건너는 Capital Cycle 파이프라인의 구축을 의미합니다.' : 'If IGIS expands this model starting from IOTA to YIBD and future trophy assets, it means establishing a cross-generational Capital Cycle pipeline rather than a simple ROI game.'}
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
