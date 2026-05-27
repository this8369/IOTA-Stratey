import React, { useState, useEffect } from 'react';

export default function Section72({ isActive }) {
    const [step, setStep] = useState(0);

    useEffect(() => {
        if (!isActive) { setStep(0); return; }
        const timers = [
            setTimeout(() => setStep(1), 300),
            setTimeout(() => setStep(2), 800),
            setTimeout(() => setStep(3), 1300),
        ];
        return () => timers.forEach(clearTimeout);
    }, [isActive]);

    return (
        <section className="section w-full h-full bg-[#fdfdfd] flex flex-col items-center justify-center relative px-6 md:px-16 overflow-hidden">
            <div className="w-full max-w-[1400px] mx-auto flex flex-col items-center text-center">
                
                <div className={`transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${step >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <span className="inline-block text-[22px] md:text-[26px] font-bold text-[#888] uppercase tracking-[-0.02em] mb-[12px] bg-transparent">
                        Grade-A 물류센터의 패러다임 전환
                    </span>
                </div>

                <h2 className={`text-[32px] md:text-[46px] lg:text-[52px] font-extrabold leading-[calc(1.3em-6px)] text-[#1d1d1f] break-keep tracking-[-0.02em] transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${step >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    모든 신규 대형 물류센터의 절대적 설계 표준<br/>로봇·AMR 친화형
                </h2>

                {/* Custom Infographic */}
                <div className="w-full max-w-[1000px] mt-[20px] mb-[20px] flex flex-col items-center transition-all duration-1000">
                    
                    <div className={`w-full bg-[#1d1d1f] text-white py-4 px-6 shadow-2xl relative z-20 transition-all duration-1000 delay-100 ${step >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        <div className="text-[18px] font-bold text-gray-400 uppercase tracking-widest">Industry Leaders 주도</div>
                        <div className="flex flex-wrap justify-center gap-6 mt-2">
                            <span className="text-[28px] font-black leading-none">쿠팡</span>
                            <span className="text-[28px] font-black leading-none">CJ대한통운</span>
                            <span className="text-[28px] font-black leading-none">네이버</span>
                            <span className="text-[28px] font-black leading-none">LG CNS</span>
                        </div>
                    </div>

                    <div className={`w-[90%] bg-white border-[6px] border-[#1d1d1f] py-6 px-10 shadow-lg relative z-10 -mt-2 transition-all duration-1000 delay-300 ${step >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        <div className="text-[36px] font-bold text-[#888] mb-4">로봇 · AMR 친화 설계 (Robot-Friendly)</div>
                        <div className="w-full flex flex-col md:flex-row justify-center gap-6 mt-4">
                            <div className="flex-1 bg-gray-50 border-[2px] border-gray-200 p-4 font-bold text-gray-800 text-[18px]">초평탄 바닥 구조 및 하중 강화</div>
                            <div className="flex-1 bg-gray-50 border-[2px] border-gray-200 p-4 font-bold text-gray-800 text-[18px]">물류 로봇 전용 동선 최적화</div>
                            <div className="flex-1 bg-gray-50 border-[2px] border-gray-200 p-4 font-bold text-gray-800 text-[18px]">고전력 인입 및 5G 통신망 완비</div>
                        </div>
                    </div>

                    <div className={`w-[80%] bg-blue-600 text-white p-6 shadow-md relative z-0 -mt-2 transition-all duration-1000 delay-500 ${step >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        <div className="text-[24px] font-black">향후 모든 신규 Grade-A 물류센터의 절대적 표준</div>
                    </div>

                </div>

                {/* Bottom Text */}
                <div className={`mt-[10px] max-w-[1100px] text-[16px] md:text-[20px] leading-[1.5] font-bold text-[#1d1d1f] break-keep text-center transition-all duration-[900ms] ease-out ${step >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <ul className="text-left inline-block space-y-3 mx-auto">
                        <li className="flex items-start"><span className="mr-3 text-[#1d1d1f]">▪</span><span>쿠팡, CJ대한통운, 네이버, LG CNS 등 물류 및 IT 거인들이 전면적인 자동화를 시장의 벤치마크로 주도</span></li>
                        <li className="flex items-start"><span className="mr-3 text-[#1d1d1f]">▪</span><span>바닥 평탄도, 로봇 전용 통신/전력망, 하중 등 로봇(AMR/AGV) 운영에 최적화된 하드웨어 스펙 필수 요구</span></li>
                        <li className="flex items-start"><span className="mr-3 text-blue-600">▪</span><span className="text-blue-900">단순 창고를 넘어선 '자동화 설비의 플랫폼'으로서 로봇 친화 설계가 우량 물류센터의 생존 조건으로 정착</span></li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
