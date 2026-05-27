import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Section43({ isActive }) {
    const { lang } = useLanguage();
    const [step, setStep] = useState(0);

    useEffect(() => {
        if (!isActive) { setStep(0); return; }
        const t1 = setTimeout(() => setStep(1), 300);
        const t2 = setTimeout(() => setStep(2), 700);
        return () => { clearTimeout(t1); clearTimeout(t2); };
    }, [isActive]);

    const variables = [
        { title: "인구", sub: "Population" },
        { title: "생산성", sub: "Productivity" },
        { title: "지정학", sub: "Geopolitics" },
        { title: "기술 패권", sub: "Tech Hegemony" }
    ];

    return (
        <section className="section w-full h-full bg-white flex flex-col items-center justify-center px-6 md:px-16 overflow-hidden relative">
            <div className="w-full max-w-[1200px] mx-auto">
                <div className={`text-center transition-all duration-[1000ms] ease-out ${step >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <h3 className="text-[#0055ff] font-bold text-[14px] md:text-[16px] mb-4 uppercase tracking-widest">
                        Core Variables
                    </h3>
                    <h2 className="text-[28px] md:text-[44px] lg:text-[52px] font-bold text-black leading-[1.4] break-keep mb-16 tracking-[-0.02em]">
                        2조에서 3조 달러로 가는 경로는 단순 직선 외삽이 아닙니다.<br/>
                        <span className="text-gray-400">4대 변수가 미래의 시나리오를 결정짓습니다.</span>
                    </h2>
                </div>
                
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                    {variables.map((item, idx) => (
                        <div key={idx} className={`bg-gray-50 rounded-[24px] p-6 md:p-8 border border-gray-100 flex flex-col items-center text-center transition-all duration-[1000ms] ease-out ${step >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: `${idx * 150}ms` }}>
                            <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white font-bold mb-6 text-[18px]">
                                {idx + 1}
                            </div>
                            <h4 className="text-[20px] md:text-[24px] font-bold text-black mb-1">{item.title}</h4>
                            <p className="text-gray-400 text-[13px] md:text-[15px] font-medium uppercase tracking-wider">{item.sub}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
