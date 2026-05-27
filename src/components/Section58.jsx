import React, { useState, useEffect } from 'react';

export default function Section58({ isActive }) {
    const [step, setStep] = useState(0);

    useEffect(() => {
        if (!isActive) { setStep(0); return; }
        const timers = [
            setTimeout(() => setStep(1), 300),
            setTimeout(() => setStep(2), 900),
            setTimeout(() => setStep(3), 1400),
            setTimeout(() => setStep(4), 1800),
            setTimeout(() => setStep(5), 2200),
            setTimeout(() => setStep(6), 2600),
            setTimeout(() => setStep(7), 3000),
        ];
        return () => timers.forEach(clearTimeout);
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
                <h2 className={`text-[32px] md:text-[46px] lg:text-[52px] font-extrabold leading-[calc(1.3em-6px)] text-[#1d1d1f] break-keep tracking-[-0.02em] transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${step >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    2024년 5,175만 정점 통과 후 직면할<br/>가파른 국가 규모 축소의 현실
                </h2>

                {/* Custom Infographic: Population Drop Bar Chart */}
                <div className="relative w-full max-w-[1000px] mt-[60px] mb-[40px] h-[320px] flex items-end justify-between px-4 md:px-12 border-b-[4px] border-[#1d1d1f]">
                    {/* Y-Axis Label */}
                    <div className="absolute left-[-20px] top-0 h-full flex flex-col justify-between text-gray-400 font-bold text-[14px]">
                        <span>6,000만</span>
                        <span>4,000만</span>
                        <span>2,000만</span>
                        <span>0</span>
                    </div>

                    {/* Bar 1: 2024 */}
                    <div className={`flex flex-col items-center w-[12%] transition-all duration-1000 ease-out ${step >= 2 ? 'opacity-100 h-full' : 'opacity-0 h-0'}`}>
                        <span className="text-[20px] md:text-[26px] font-black text-black mb-2">5,175만</span>
                        <div className="w-full bg-[#1d1d1f] rounded-t-sm" style={{ height: '86%' }}></div>
                        <span className="mt-4 font-bold text-[18px] text-black">2024 (정점)</span>
                    </div>

                    {/* Bar 2: 2040 */}
                    <div className={`flex flex-col items-center w-[12%] transition-all duration-1000 ease-out ${step >= 3 ? 'opacity-100 h-full' : 'opacity-0 h-0'}`}>
                        <span className="text-[18px] md:text-[22px] font-bold text-gray-600 mb-2">4,734만</span>
                        <div className="w-full bg-gray-400 rounded-t-sm" style={{ height: '79%' }}></div>
                        <span className="mt-4 font-bold text-[16px] text-gray-600">2040</span>
                    </div>

                    {/* Bar 3: 2050 */}
                    <div className={`flex flex-col items-center w-[12%] transition-all duration-1000 ease-out ${step >= 4 ? 'opacity-100 h-full' : 'opacity-0 h-0'}`}>
                        <span className="text-[18px] md:text-[22px] font-bold text-gray-600 mb-2">4,300만</span>
                        <div className="w-full bg-gray-400 rounded-t-sm" style={{ height: '71%' }}></div>
                        <span className="mt-4 font-bold text-[16px] text-gray-600">2050</span>
                    </div>

                    {/* Bar 4: 2060 */}
                    <div className={`flex flex-col items-center w-[12%] transition-all duration-1000 ease-out ${step >= 5 ? 'opacity-100 h-full' : 'opacity-0 h-0'}`}>
                        <span className="text-[18px] md:text-[22px] font-bold text-gray-600 mb-2">3,664만</span>
                        <div className="w-full bg-gray-400 rounded-t-sm" style={{ height: '61%' }}></div>
                        <span className="mt-4 font-bold text-[16px] text-gray-600">2060</span>
                    </div>

                    {/* Bar 5: 2100 */}
                    <div className={`flex flex-col items-center w-[12%] transition-all duration-1000 ease-out ${step >= 6 ? 'opacity-100 h-full' : 'opacity-0 h-0'}`}>
                        <span className="text-[20px] md:text-[26px] font-black text-red-600 mb-2 whitespace-nowrap -ml-8 -mr-8">1,100~3,000만</span>
                        <div className="w-full bg-red-600 rounded-t-sm" style={{ height: '35%' }}></div>
                        <span className="mt-4 font-black text-[18px] text-red-600">2100 (추정)</span>
                    </div>
                </div>

                {/* Bottom Text */}
                <div className={`mt-[20px] max-w-[1100px] text-[16px] md:text-[20px] leading-[1.5] font-bold text-gray-700 break-keep text-center transition-all duration-[900ms] ease-out ${step >= 7 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <ul className="text-left inline-block space-y-3 mx-auto">
                        <li className="flex items-start"><span className="mr-3 text-[#1d1d1f]">▪</span><span>통계청·UN 중위 변동치 기준 2024년 5,175만 명 정점 이후 본격적인 감소 진입</span></li>
                        <li className="flex items-start"><span className="mr-3 text-[#1d1d1f]">▪</span><span>2040년 약 4,734만 명, 2050년 약 4,300만 명, 2060년 3,664만 명으로 가파른 축소</span></li>
                        <li className="flex items-start"><span className="mr-3 text-red-600">▪</span><span className="text-red-900">Bayesian 확률 추정 기준 2100년에는 1,100만~3,000만 명 사이로 국가 규모 축소 불가피</span></li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
