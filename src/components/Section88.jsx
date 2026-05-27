import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Section88({ isActive }) {
    const { lang } = useLanguage();
    const [step, setStep] = useState(0);

    useEffect(() => {
        if (!isActive) { setStep(0); return; }
        const timers = [
            setTimeout(() => setStep(1), 300),
            setTimeout(() => setStep(2), 800),
            setTimeout(() => setStep(3), 1300), // Requirements
            setTimeout(() => setStep(4), 2200), // Timeline
            setTimeout(() => setStep(5), 3000)  // Bottom text
        ];
        return () => timers.forEach(clearTimeout);
    }, [isActive]);

    return (
        <section className="section w-full h-full bg-[#fdfdfd] flex flex-col items-center justify-center relative px-6 md:px-16 overflow-hidden">
            <div className="w-full max-w-[1400px] mx-auto flex flex-col items-center text-center">
                
                <div className={`transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${step >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <span className="inline-block text-[22px] md:text-[26px] font-bold text-blue-600 uppercase tracking-[-0.02em] mb-[12px] bg-transparent">
                        {lang === 'kr' ? '글로벌 1선 운용사 도약의 본질 조건' : 'Essential Conditions for Tier 1 Global AM Leap'}
                    </span>
                </div>

                <h2 className={`text-[32px] md:text-[46px] lg:text-[52px] font-extrabold leading-[calc(1.3em-6px)] text-[#1d1d1f] break-keep tracking-[-0.02em] mb-12 transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${step >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    {lang === 'kr' ? <>AUM 200~300조 도약을 위한 4대 핵심 요건과 플랫폼화</> : <>4 Core Requirements and Platformization for 200~300T KRW AUM</>}
                </h2>

                {/* 4 Core Requirements */}
                <div className="w-full max-w-[1000px] grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 relative">
                    {/* Req 1 */}
                    <div className={`bg-white border-2 border-gray-100 rounded-xl p-5 shadow-sm flex flex-col items-center justify-center transition-all duration-[800ms] ${step >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-[20px] mb-3">1</div>
                        <h3 className="font-bold text-[18px] text-gray-800 break-keep leading-snug">
                            {lang === 'kr' ? '글로벌 LP 베이스 확보' : 'Securing Global LP Base'}
                        </h3>
                    </div>
                    {/* Req 2 */}
                    <div className={`bg-white border-2 border-gray-100 rounded-xl p-5 shadow-sm flex flex-col items-center justify-center transition-all duration-[800ms] delay-[100ms] ${step >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-[20px] mb-3">2</div>
                        <h3 className="font-bold text-[18px] text-gray-800 break-keep leading-snug">
                            {lang === 'kr' ? '운용 수수료 마진 구조 개선' : 'Improving Fee Margin Structure'}
                        </h3>
                    </div>
                    {/* Req 3 */}
                    <div className={`bg-white border-2 border-gray-100 rounded-xl p-5 shadow-sm flex flex-col items-center justify-center transition-all duration-[800ms] delay-[200ms] ${step >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-[20px] mb-3">3</div>
                        <h3 className="font-bold text-[18px] text-gray-800 break-keep leading-snug">
                            {lang === 'kr' ? '영구 자본(Permanent Capital) 확대' : 'Expanding Permanent Capital'}
                        </h3>
                    </div>
                    {/* Req 4 */}
                    <div className={`bg-white border-2 border-gray-100 rounded-xl p-5 shadow-sm flex flex-col items-center justify-center transition-all duration-[800ms] delay-[300ms] ${step >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-[20px] mb-3">4</div>
                        <h3 className="font-bold text-[18px] text-gray-800 break-keep leading-snug">
                            {lang === 'kr' ? '다전략(Multi-strategy) 플랫폼화' : 'Multi-strategy Platformization'}
                        </h3>
                    </div>
                </div>

                {/* Blackstone Timeline */}
                <div className={`w-full max-w-[1000px] bg-gray-50 border border-gray-200 rounded-2xl p-6 md:p-8 mb-10 transition-all duration-1000 ${step >= 4 ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                    <h4 className="font-bold text-gray-500 mb-6 text-[16px] md:text-[18px]">
                        {lang === 'kr' ? 'Reference: 블랙스톤의 40년 진화 패턴 (한국 압축 버전 목표)' : 'Reference: Blackstone\'s 40-year Evolution Pattern (Goal: Korean Compressed Version)'}
                    </h4>
                    
                    <div className="flex flex-col md:flex-row items-center justify-between relative w-full h-auto md:h-[60px] gap-6 md:gap-0">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gray-300 -translate-y-1/2 z-0"></div>

                        {/* Nodes */}
                        {[
                            { year: '1985', text: lang === 'kr' ? 'PE 출발' : 'PE Start' },
                            { year: '1992', text: lang === 'kr' ? '부동산 진입' : 'Real Estate' },
                            { year: '2007', text: lang === 'kr' ? 'IPO' : 'IPO' },
                            { year: '2015', text: lang === 'kr' ? 'BREIT 출시' : 'BREIT Launch' },
                            { year: '2023', text: lang === 'kr' ? '인프라/생명과학' : 'Infra/Life Science' }
                        ].map((item, idx) => (
                            <div key={idx} className="relative z-10 flex flex-col items-center bg-white border-2 border-gray-300 rounded-lg px-4 py-2 w-full md:w-[150px] shadow-sm">
                                <span className="font-black text-gray-800">{item.year}</span>
                                <span className="text-[13px] text-gray-600 font-bold">{item.text}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom Thesis Text */}
                <div className={`max-w-[1000px] bg-blue-50 border border-blue-100 p-6 rounded-xl shadow-sm transition-all duration-700 ${step >= 5 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <p className="text-[18px] md:text-[20px] font-bold text-[#1e3a8a] break-keep leading-relaxed">
                        {lang === 'kr' 
                            ? '단순한 규모 확장을 넘어 질적 체질 개선을 동반한 블랙스톤 압축 진화 모델'
                            : 'A compressed Blackstone evolution model accompanied by qualitative structural improvement beyond simple scale expansion.'
                        }
                    </p>
                </div>

            </div>
        </section>
    );
}
