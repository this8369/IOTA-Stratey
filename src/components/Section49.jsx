import React, { useState, useEffect } from 'react';

export default function Section49({ isActive }) {
    const [step, setStep] = useState(0);

    useEffect(() => {
        if (!isActive) { setStep(0); return; }
        const t1 = setTimeout(() => setStep(1), 300);
        const t2 = setTimeout(() => setStep(2), 800);
        const t3 = setTimeout(() => setStep(3), 1100);
        const t4 = setTimeout(() => setStep(4), 1600);
        return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4); };
    }, [isActive]);

    return (
        <section className="section w-full h-full bg-[#fdfdfd] flex flex-col items-center justify-center relative px-6 md:px-16 overflow-hidden">
            <div className="w-full max-w-[1400px] mx-auto flex flex-col items-center text-center">
                
                {/* Theme */}
                <div className={`transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${step >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <span className="inline-block text-[22px] md:text-[26px] font-extrabold text-[#777] uppercase tracking-[-0.02em] mb-[12px]">
                        [미래 핵심 산업 1] HBM과 반도체 슈퍼사이클의 지속
                    </span>
                </div>

                {/* Main Title */}
                <h2 className={`text-[34px] md:text-[46px] lg:text-[52px] font-black leading-[calc(1.3em-4px)] text-[#1d1d1f] break-keep tracking-[-0.02em] transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${step >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} dangerouslySetInnerHTML={{ __html: '어떠한 시나리오에서도 한국 매크로를<br/>좌우할 단일 최대 변수' }}>
                </h2>

                {/* Infographic Middle Section (Dry & Bold) */}
                <div className="w-full max-w-[1200px] flex flex-col md:flex-row gap-6 mt-[40px] mb-[40px] justify-center">
                    <div className={`flex-1 flex flex-col items-center justify-center bg-white border-[6px] border-[#1d1d1f] py-[40px] px-8 transition-all duration-[1000ms] ease-out ${step >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        <p className="text-[18px] md:text-[20px] font-bold text-gray-500 uppercase mb-3 break-keep">HBM 글로벌 점유율</p>
                        <p className="text-[36px] md:text-[48px] font-black text-black tracking-tight leading-tight break-keep">70%+ 유지</p>
                    </div>
                    <div className={`flex-1 flex flex-col items-center justify-center bg-gray-50 border-[6px] border-gray-400 py-[40px] px-8 transition-all duration-[1000ms] ease-out delay-200 ${step >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        <p className="text-[18px] md:text-[20px] font-bold text-gray-500 uppercase mb-3 break-keep">2030년 예상 합산 영업이익</p>
                        <p className="text-[36px] md:text-[48px] font-black text-gray-800 tracking-tight leading-tight break-keep">300~350조 원</p>
                    </div>
                </div>

                {/* Bottom Summary */}
                <div className={`w-full max-w-[1200px] pt-8 border-t-[4px] border-[#1d1d1f] transition-all duration-[900ms] ease-out ${step >= 4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <ul className="text-[18px] md:text-[22px] text-gray-800 leading-[1.6] font-bold space-y-3 break-keep inline-block text-left mx-auto">
                        <li className="flex items-start"><span className="mr-3 text-black font-extrabold mt-1">▪</span><span>Base 케이스에서도 한국이 HBM 글로벌 점유율 70%+ 유지</span></li>
                        <li className="flex items-start"><span className="mr-3 text-black font-extrabold mt-1">▪</span><span>Bull 시 SK하이닉스·삼성전자 합산 영업이익 폭증 전망 (2030년 300조+)</span></li>
                        <li className="flex items-start"><span className="mr-3 text-black font-extrabold mt-1">▪</span><span>Bear 시 마이크론·CXMT 추격으로 점유율 50%대로 하락</span></li>
                        <li className="flex items-start"><span className="mr-3 text-black font-extrabold mt-1">▪</span><span>그러나 모든 시나리오에서 메모리는 한국 경제의 단일 최대 변수로 잔존</span></li>
                    </ul>
                </div>
                
            </div>
        </section>
    );
}
