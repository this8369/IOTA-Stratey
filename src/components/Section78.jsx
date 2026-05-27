import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Section78({ isActive }) {
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
        <section className="section w-full h-full bg-[#fdfdfd] flex flex-col items-center justify-center relative px-6 md:px-16 overflow-hidden">
            <div className="w-full max-w-[1400px] mx-auto flex flex-col items-center text-center">
                
                <div className={`transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${step >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <span className="inline-block text-[22px] md:text-[26px] font-bold text-[#888] uppercase tracking-[-0.02em] mb-[12px] bg-transparent">
                        {lang === 'kr' ? 'KOSPI 10,000을 향한 Base 우상향' : 'Base Upward Trend Towards KOSPI 10,000'}
                    </span>
                </div>

                <h2 className={`text-[32px] md:text-[46px] lg:text-[52px] font-extrabold leading-[calc(1.3em-6px)] text-[#1d1d1f] break-keep tracking-[-0.02em] mb-12 transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${step >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    {lang === 'kr' ? <>이익 성장과 밸류업이 창출할 자본시장의 거대한 체력 증진</> : <>Massive Structural Strengthening via Profit Growth & Value-up</>}
                </h2>

                {/* 3-Step Upward Timeline */}
                <div className="flex flex-col md:flex-row items-end justify-center gap-4 w-full max-w-[1200px] h-[350px] md:h-[400px] relative border-b-2 border-gray-300 pb-4 mb-10">
                    
                    {/* Step 1: 2030 */}
                    <div className={`flex-1 w-full flex flex-col items-center justify-end relative transition-all duration-700 ${step >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                        <div className="w-full max-w-[280px] bg-blue-100 border-t-4 border-blue-500 rounded-t-lg flex flex-col items-center justify-start py-6 px-4" style={{ height: '140px' }}>
                            <div className="text-[20px] font-bold text-blue-800 mb-1">2030</div>
                            <div className="text-[32px] md:text-[38px] font-black text-blue-600 leading-none">5,500<span className="text-[24px] font-bold text-blue-400 mx-1">~</span>6,500</div>
                        </div>
                    </div>

                    {/* Step 2: 2035 */}
                    <div className={`flex-1 w-full flex flex-col items-center justify-end relative transition-all duration-700 delay-200 ${step >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                        <div className="w-full max-w-[280px] bg-blue-200 border-t-4 border-blue-600 rounded-t-lg flex flex-col items-center justify-start py-6 px-4" style={{ height: '220px' }}>
                            <div className="text-[20px] font-bold text-blue-900 mb-1">2035</div>
                            <div className="text-[32px] md:text-[38px] font-black text-blue-700 leading-none">7,500<span className="text-[24px] font-bold text-blue-500 mx-1">~</span>9,000</div>
                        </div>
                    </div>

                    {/* Step 3: 2040 */}
                    <div className={`flex-1 w-full flex flex-col items-center justify-end relative transition-all duration-700 delay-400 ${step >= 4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                        <div className="w-full max-w-[280px] bg-blue-600 border-t-4 border-blue-800 rounded-t-lg flex flex-col items-center justify-start py-6 px-4 shadow-xl" style={{ height: '320px' }}>
                            <div className="text-[24px] font-black text-blue-100 mb-1">2040</div>
                            <div className="text-[36px] md:text-[46px] font-black text-white leading-none tracking-tight">9,000<span className="text-[28px] font-bold text-blue-300 mx-1">~</span>11,000</div>
                            
                            <div className="mt-auto mb-2 bg-white/20 backdrop-blur-md text-white text-[14px] md:text-[16px] font-bold px-4 py-2 rounded-full border border-white/40">
                                {lang === 'kr' ? 'Korea Premium 진입' : 'Entry into Korea Premium'}
                            </div>
                        </div>
                    </div>

                </div>

                {/* Bottom Thesis Text */}
                <div className={`max-w-[1100px] bg-gray-50 border border-gray-200 p-8 rounded-xl shadow-sm transition-all duration-700 ${step >= 5 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <p className="text-[18px] md:text-[22px] font-bold text-gray-800 break-keep leading-relaxed mb-4">
                        {lang === 'kr' 
                            ? 'PER 13배의 디스카운트를 떨치고 2040년 9천~1만 1천에 도달하는, 코리아 프리미엄 진입의 가장 정석적이고 안정적인 Base 성장 모델을 제시한다.'
                            : 'Presents the most orthodox and stable Base growth model entering the Korea Premium, shaking off the PER 13x discount to reach 9,000~11,000 by 2040.'
                        }
                    </p>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-[16px] md:text-[18px] font-bold text-blue-600">
                        <span className="bg-blue-100 px-4 py-1.5 rounded-full">{lang === 'kr' ? '전제 1: PER 13~15배' : 'Premise 1: PER 13~15x'}</span>
                        <span className="bg-blue-100 px-4 py-1.5 rounded-full">{lang === 'kr' ? '전제 2: 기업이익 연 7~9% 성장' : 'Premise 2: Corp Profit 7~9% CAGR'}</span>
                    </div>
                </div>

            </div>
        </section>
    );
}
