import React, { useState, useEffect } from 'react';

export default function Section58({ isActive }) {
    const [step, setStep] = useState(0);

    useEffect(() => {
        if (!isActive) { setStep(0); return; }
        const t1 = setTimeout(() => setStep(1), 300);
        const t2 = setTimeout(() => setStep(2), 900);
        const t3 = setTimeout(() => setStep(3), 1200);
        const t4 = setTimeout(() => setStep(4), 1500);
        const t5 = setTimeout(() => setStep(5), 2000);
        return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4); clearTimeout(t5); };
    }, [isActive]);

    return (
        <section className="section w-full h-full bg-[#fdfdfd] flex flex-col items-center justify-center relative px-6 md:px-16 overflow-hidden">
            <div className="w-full max-w-[1400px] mx-auto flex flex-col items-center text-center">
                
                {/* Theme */}
                <div className={`transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${step >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <span className="inline-block text-[22px] md:text-[26px] font-bold text-[#888] uppercase tracking-[-0.02em] mb-[12px] bg-transparent">
                        인구 구조 1 혹독한 인구 다이어트의 시작
                    </span>
                </div>

                {/* Main Title */}
                <h2 className={`text-[32px] md:text-[46px] lg:text-[52px] font-extrabold leading-[calc(1.3em-6px)] text-[#1d1d1f] break-keep tracking-[-0.02em] transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${step >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} dangerouslySetInnerHTML={{ __html: '2024년 5,175만 정점 통과 후 직면할<br/>가파른 국가 규모 축소의 현실' }}>
                </h2>

                {/* Middle Infographic (3 Dry Boxes) */}
                <div className="relative w-full max-w-[1250px] mt-[40px] mb-[30px] h-auto flex flex-col md:flex-row items-stretch justify-center z-10 gap-6">
                    
                    {/* Box 1 */}
                    <div className={`flex-1 bg-white border-[6px] border-gray-400 py-10 px-6 flex flex-col items-center justify-center transition-all duration-[1000ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${step >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                        <span className="text-[20px] font-bold text-gray-500 mb-4 uppercase">2024년 정점</span>
                        <div className="w-full max-w-[100px] h-[4px] bg-gray-200 mb-6"></div>
                        <p className="text-[24px] md:text-[28px] font-black text-black leading-snug break-keep">5,175만 명</p>
                    </div>

                    {/* Box 2 */}
                    <div className={`flex-1 bg-[#f8fbff] border-[6px] border-blue-400 py-10 px-6 flex flex-col items-center justify-center transition-all duration-[1000ms] ease-[cubic-bezier(0.16,1,0.3,1)] delay-200 ${step >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                        <span className="text-[20px] font-bold text-blue-500 mb-4 uppercase">2050년 인구</span>
                        <div className="w-full max-w-[100px] h-[4px] bg-blue-200 mb-6"></div>
                        <p className="text-[24px] md:text-[28px] font-black text-[#0055ff] leading-snug break-keep">약 4,300만 명</p>
                    </div>

                    {/* Box 3 */}
                    <div className={`flex-1 bg-[#fff8f8] border-[6px] border-red-400 py-10 px-6 flex flex-col items-center justify-center transition-all duration-[1000ms] ease-[cubic-bezier(0.16,1,0.3,1)] delay-400 ${step >= 4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                        <span className="text-[20px] font-bold text-red-500 mb-4 uppercase">2100년 전망</span>
                        <div className="w-full max-w-[100px] h-[4px] bg-red-200 mb-6"></div>
                        <p className="text-[24px] md:text-[28px] font-black text-[#e11d48] leading-snug break-keep">1,100~3,000만 명</p>
                    </div>

                </div>

                {/* Bottom Text */}
                <div className={`mt-[10px] max-w-[1100px] text-[16px] md:text-[20px] leading-[1.5] font-bold text-gray-700 break-keep text-center transition-all duration-[900ms] ease-out ${step >= 5 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <ul className="text-left inline-block space-y-3 mx-auto">
                        <li className="flex items-start"><span className="mr-3 text-[#1d1d1f]">▪</span><span>통계청·UN 중위 변동치 기준 2024년 5,175만 명 정점 이후 본격적인 감소 진입</span></li>
                        <li className="flex items-start"><span className="mr-3 text-[#1d1d1f]">▪</span><span>2040년 약 4,734만 명, 2050년 약 4,300만 명, 2060년 3,664만 명으로 가파른 축소</span></li>
                        <li className="flex items-start"><span className="mr-3 text-[#1d1d1f]">▪</span><span>Bayesian 확률 추정 기준 2100년에는 1,100만~3,000만 명 사이로 국가 규모 축소 불가피</span></li>
                    </ul>
                </div>

            </div>
        </section>
    );
}
