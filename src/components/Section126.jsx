import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Section126({ isActive }) {
    const { lang } = useLanguage();
    const [step, setStep] = useState(0);

    useEffect(() => {
        if (!isActive) { setStep(0); return; }
        const timers = [
            setTimeout(() => setStep(1), 184),
            setTimeout(() => setStep(2), 551),
            setTimeout(() => setStep(3), 918),
            setTimeout(() => setStep(4), 1285),
            setTimeout(() => setStep(5), 1652)
        ];
        return () => timers.forEach(clearTimeout);
    }, [isActive]);

    return (
        <section className="section w-full h-full bg-[#f4f4f5] flex flex-col items-center justify-center relative px-6 md:px-16 overflow-hidden">
            <div className="w-full max-w-[1400px] mx-auto flex flex-col justify-center items-center h-full">
                
                {/* Header */}
                <div className="w-full flex flex-col items-center text-center mb-[36px]">
                    <div className={`transition-all duration-[612ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${step >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        <span className="inline-block text-[20px] md:text-[24px] font-bold text-[#1e3a8a] tracking-[-0.02em] mb-[12px]">
                            {lang === 'kr' ? 'IOTA가 제시하는 미래 청사진' : 'Future Blueprint Presented by IOTA'}
                        </span>
                    </div>
                    <h2 className={`text-[32px] md:text-[46px] lg:text-[52px] font-extrabold leading-[calc(1.3em-6px)] text-[#1d1d1f] break-keep tracking-[-0.02em] transition-all duration-[612ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${step >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        {lang === 'kr' ? '혁신 운영 쇼케이스와 트로피 시리즈 템플릿' : 'Innovative Operation Showcase & Trophy Template'}
                    </h2>
                </div>

                {/* Main Content: Left Text, Right 3D Diagram */}
                <div className="w-full max-w-[1300px] grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
                    
                    {/* Left: Text Content */}
                    <div className={`lg:col-span-5 flex flex-col gap-8 transition-all duration-700 ${step >= 2 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
                        
                        <div className="relative pl-6 border-l-[4px] border-[#1e3a8a]">
                            <div className="text-[#1e3a8a] font-black text-[20px] tracking-widest uppercase mb-2">Blueprint 01</div>
                            <h3 className="text-[#1d1d1f] font-bold text-[26px] mb-3 leading-tight break-keep">
                                {lang === 'kr' ? 'Factorial Builders 운영 모델' : 'Factorial Builders Operating Model'}
                            </h3>
                            <p className="text-[17px] text-gray-600 font-medium leading-relaxed break-keep">
                                {lang === 'kr' ? 
                                    "'Asset as a Service' 모델을 적용하여 AI, 로봇, IoT가 통합된 독자적 빌딩 OS를 구현. 글로벌 스탠다드 대비 확고한 초격차 운영 경쟁력을 확보합니다." : 
                                    "Implementing a proprietary building OS integrated with AI, robotics, and IoT under the 'Asset as a Service' model, securing an ultra-gap operational edge over global standards."}
                            </p>
                        </div>

                        <div className="relative pl-6 border-l-[4px] border-[#1d1d1f]">
                            <div className="text-[#1d1d1f] font-black text-[20px] tracking-widest uppercase mb-2">Blueprint 02</div>
                            <h3 className="text-[#1d1d1f] font-bold text-[26px] mb-3 leading-tight break-keep">
                                {lang === 'kr' ? 'Trophy Stack 자본 템플릿' : 'Trophy Stack Capital Template'}
                            </h3>
                            <p className="text-[17px] text-gray-600 font-medium leading-relaxed break-keep mb-4">
                                {lang === 'kr' ? 
                                    "[PFV + 부동산펀드 + 리츠 + LP]가 완벽하게 결합된 통합 자본 구조를 브랜드화합니다. 이 성공 모델은 향후 YIBD, 잠실 등 신규 트로피 에셋의 템플릿으로 확장됩니다." : 
                                    "Branding a seamlessly unified capital structure of [PFV + RE Fund + REIT + LP]. This success model will expand as a template for future trophy assets like YIBD and Jamsil."}
                            </p>
                            <div className="inline-flex items-center justify-center bg-[#1d1d1f] text-white px-5 py-2 rounded-full text-sm font-bold shadow-md">
                                {lang === 'kr' ? '미래 10년의 확장형 DNA 이식' : 'Implanting Scalable DNA for the Next 10 Years'}
                            </div>
                        </div>

                    </div>

                    {/* Right: 3D Stack Diagram */}
                    <div className="lg:col-span-7 flex justify-center items-center h-[450px]">
                        <div className="relative w-full max-w-[400px] h-[400px] flex items-center justify-center" style={{ perspective: '1200px' }}>
                            <div className="relative w-[280px] h-[280px]" style={{ transformStyle: 'preserve-3d', transform: 'rotateX(60deg) rotateZ(-45deg)' }}>
                                
                                {/* Layer 4: REIT (Top) */}
                                <div className="absolute inset-0 bg-[#0f172a]/95 border border-white/20 flex flex-col items-center justify-center shadow-[30px_30px_50px_rgba(0,0,0,0.4)] transition-all duration-[1000ms] ease-out backdrop-blur-sm" 
                                     style={{ transform: step >= 5 ? 'translateZ(180px)' : 'translateZ(0px)', opacity: step >= 5 ? 1 : 0 }}>
                                     <div style={{ transform: 'rotateZ(45deg) rotateX(-60deg)', textAlign: 'center' }}>
                                        <div className="text-[#60a5fa] font-bold text-sm tracking-widest mb-1">EXIT / SECURITIZATION</div>
                                        <div className="text-white font-extrabold text-2xl">IOTA Office REIT</div>
                                     </div>
                                </div>

                                {/* Layer 3: Fund */}
                                <div className="absolute inset-0 bg-[#1e3a8a]/95 border border-white/20 flex flex-col items-center justify-center shadow-[30px_30px_50px_rgba(0,0,0,0.3)] transition-all duration-[1000ms] ease-out backdrop-blur-sm" 
                                     style={{ transform: step >= 4 ? 'translateZ(120px)' : 'translateZ(0px)', opacity: step >= 4 ? 1 : 0 }}>
                                     <div style={{ transform: 'rotateZ(45deg) rotateX(-60deg)', textAlign: 'center' }}>
                                        <div className="text-blue-300 font-bold text-sm tracking-widest mb-1">STABILIZED HOLDING</div>
                                        <div className="text-white font-extrabold text-2xl">IGIS RE Fund</div>
                                     </div>
                                </div>

                                {/* Layer 2: PFV */}
                                <div className="absolute inset-0 bg-[#3b82f6]/95 border border-white/20 flex flex-col items-center justify-center shadow-[30px_30px_50px_rgba(0,0,0,0.2)] transition-all duration-[1000ms] ease-out backdrop-blur-sm" 
                                     style={{ transform: step >= 3 ? 'translateZ(60px)' : 'translateZ(0px)', opacity: step >= 3 ? 1 : 0 }}>
                                     <div style={{ transform: 'rotateZ(45deg) rotateX(-60deg)', textAlign: 'center' }}>
                                        <div className="text-blue-100 font-bold text-sm tracking-widest mb-1">DEVELOPMENT PHASE</div>
                                        <div className="text-white font-extrabold text-2xl">Project PFV</div>
                                     </div>
                                </div>

                                {/* Layer 1: LP (Bottom) */}
                                <div className="absolute inset-0 bg-[#e2e8f0]/95 border border-gray-300 flex flex-col items-center justify-center shadow-[20px_20px_30px_rgba(0,0,0,0.1)] transition-all duration-[1000ms] ease-out" 
                                     style={{ transform: step >= 2 ? 'translateZ(0px)' : 'translateZ(-40px)', opacity: step >= 2 ? 1 : 0 }}>
                                     <div style={{ transform: 'rotateZ(45deg) rotateX(-60deg)', textAlign: 'center' }}>
                                        <div className="text-gray-500 font-bold text-sm tracking-widest mb-1">CAPITAL BASE</div>
                                        <div className="text-[#1d1d1f] font-extrabold text-2xl">Global LP</div>
                                     </div>
                                </div>

                                {/* Dotted connection lines */}
                                <div className={`absolute left-0 top-0 w-full h-full border-l-2 border-b-2 border-dashed border-[#1e3a8a]/30 transition-all duration-1000 ${step >= 5 ? 'opacity-100' : 'opacity-0'}`} style={{ transform: 'translateZ(0px) scale(1.1) translate(-5%, 5%)' }}></div>
                                <div className={`absolute right-[-60px] top-[140px] transition-all duration-700 delay-500 ${step >= 5 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`} style={{ transform: 'rotateZ(45deg) rotateX(-60deg)' }}>
                                    <div className="bg-[#1e3a8a] text-white text-xs font-bold px-3 py-1 rounded shadow-lg whitespace-nowrap mb-2 animate-bounce">Expand to YIBD</div>
                                    <div className="bg-[#1e3a8a] text-white text-xs font-bold px-3 py-1 rounded shadow-lg whitespace-nowrap animate-bounce" style={{ animationDelay: '0.2s' }}>Expand to Jamsil</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
