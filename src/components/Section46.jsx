import React, { useState, useEffect } from 'react';

export default function Section46({ isActive }) {
    const [step, setStep] = useState(0);

    useEffect(() => {
        if (!isActive) { setStep(0); return; }
        const t1 = setTimeout(() => setStep(1), 300);
        const t2 = setTimeout(() => setStep(2), 700);
        return () => { clearTimeout(t1); clearTimeout(t2); };
    }, [isActive]);

    return (
        <section className="section w-full h-full bg-[#fdfdfd] flex flex-col items-center justify-center relative px-6 md:px-16 overflow-hidden">
            <div className="w-full max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
                
                {/* Left Side: Theme & Title */}
                <div className={`flex-1 transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${step >= 1 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
                    <span className="inline-block text-[22px] md:text-[26px] font-bold text-[#e11d48] uppercase tracking-[-0.02em] mb-[12px]">
                        Bear Scenario (확률 20%)
                    </span>
                    <h2 className="text-[32px] md:text-[46px] lg:text-[52px] font-extrabold leading-[calc(1.3em-6px)] text-[#1d1d1f] break-keep tracking-[-0.02em]">
                        지정학적 갈등 및 구조적 모순<br/>심화에 따른<br/>일본식 "잃어버린 10년" 진입
                    </h2>
                </div>

                {/* Right Side: Stats & Assumptions (Sharp Box, Large Text) */}
                <div className={`flex-[0.8] w-full max-w-[590px] bg-[#fff8f8] rounded-none p-8 md:p-12 border-[6px] border-red-200 lg:-translate-x-[40px] transition-all duration-[1000ms] ease-out ${step >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                    <div className="space-y-8">
                        <div>
                            <p className="text-red-500 text-[16px] md:text-[17px] font-bold mb-2 uppercase">2030년 예상 GDP</p>
                            <p className="text-[32px] md:text-[40px] font-bold text-[#e11d48] tracking-tight">2.0 ~ 2.1조 달러</p>
                        </div>
                        <div className="w-full h-px bg-red-100"></div>
                        <div>
                            <p className="text-red-500 text-[16px] md:text-[17px] font-bold mb-2 uppercase">3조 달러 도달 시점</p>
                            <p className="text-[32px] md:text-[40px] font-bold text-[#e11d48] tracking-tight">2042년 이후 (또는 미달)</p>
                        </div>
                        <div className="w-full h-px bg-red-100"></div>
                        <div>
                            <p className="text-red-500 text-[16px] md:text-[17px] font-bold mb-4 uppercase">핵심 전제</p>
                            <ul className="text-gray-800 space-y-4 text-[19px] md:text-[21px] break-keep leading-relaxed font-bold">
                                <li className="flex items-start"><span className="text-red-400 mr-3">•</span><span>2024년 정점 이후 가파른 인구 감소 (인구 절벽)</span></li>
                                <li className="flex items-start"><span className="text-red-400 mr-3">•</span><span>미·중 디커플링 심화 및 중국 반도체 자급 가속화</span></li>
                                <li className="flex items-start"><span className="text-red-400 mr-3">•</span><span>가계부채 누적 및 부동산 PF 부실 재발</span></li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
