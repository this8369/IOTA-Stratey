import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Section130({ isActive }) {
    const { lang } = useLanguage();
    const [step, setStep] = useState(0);

    useEffect(() => {
        if (!isActive) { setStep(0); return; }
        const timers = [
            setTimeout(() => setStep(1), 184),
            setTimeout(() => setStep(2), 551),
            setTimeout(() => setStep(3), 918),
            setTimeout(() => setStep(4), 1300),
            setTimeout(() => setStep(5), 1700),
            setTimeout(() => setStep(6), 2100)
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
                            {lang === 'kr' ? '글로벌 자본 및 거버넌스' : 'Global Capital & Governance'}
                        </span>
                    </div>
                    <h2 className={`text-[32px] md:text-[46px] lg:text-[52px] font-extrabold leading-[calc(1.3em-6px)] text-[#1d1d1f] break-keep tracking-[-0.02em] transition-all duration-[612ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${step >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        {lang === 'kr' ? '외국인 자본 참여 및 지배구조 매각 리스크' : 'Foreign Capital & Governance Sale Risks'}
                    </h2>
                </div>

                {/* Main Content: Time Alignment Infographic */}
                <div className="w-full max-w-[1300px] grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center mb-8">
                    
                    {/* Left: Two interlocked gears (Infographic) */}
                    <div className={`lg:col-span-7 h-[420px] flex items-center justify-center relative transition-all duration-1000 ${step >= 3 ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
                        
                        <div className="relative w-full h-full max-w-[600px] flex items-center justify-center">
                            
                            {/* Left Gear (Risk 6) */}
                            <div className="absolute left-[10%] flex flex-col items-center">
                                <div className={`w-[220px] h-[220px] rounded-full border-[15px] border-dashed border-[#1e3a8a] flex items-center justify-center bg-white shadow-[0_0_30px_rgba(30,58,138,0.2)] z-10 transition-transform duration-[10000ms] ease-linear ${step >= 4 ? 'rotate-[360deg]' : 'rotate-0'}`}>
                                    <div className="text-center w-full transform -rotate-[360deg]" style={{ animation: step >= 4 ? 'spin-reverse 10s linear infinite' : 'none' }}>
                                        <div className="text-[#1e3a8a] font-black text-xl mb-1">RISK 6</div>
                                        <div className="text-[#1d1d1f] font-bold text-sm px-4">
                                            {lang === 'kr' ? '글로벌 자본 참여' : 'Global Capital Participation'}
                                        </div>
                                    </div>
                                </div>
                                <div className={`mt-6 bg-[#1e3a8a] text-white px-4 py-2 rounded-lg text-center shadow-lg transition-all duration-500 delay-500 ${step >= 4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                                    <div className="text-xs font-bold opacity-80">Strategic Milestone</div>
                                    <div className="text-sm font-bold">2026.12 (Closing)</div>
                                </div>
                            </div>

                            {/* Right Gear (Risk 7) */}
                            <div className="absolute right-[10%] top-[40px] flex flex-col items-center">
                                <div className={`mt-6 bg-[#1d1d1f] text-white px-4 py-2 rounded-lg text-center shadow-lg transition-all duration-500 delay-700 ${step >= 5 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} mb-6 z-20`}>
                                    <div className="text-xs font-bold opacity-80">Strategic Milestone</div>
                                    <div className="text-sm font-bold">Acquirer Selection</div>
                                </div>
                                <div className={`w-[220px] h-[220px] rounded-full border-[15px] border-dashed border-[#1d1d1f] flex items-center justify-center bg-white shadow-[0_0_30px_rgba(29,29,31,0.2)] z-10 transition-transform duration-[10000ms] ease-linear ${step >= 5 ? '-rotate-[360deg]' : 'rotate-0'}`}>
                                    <div className="text-center w-full transform rotate-[360deg]" style={{ animation: step >= 5 ? 'spin-normal 10s linear infinite' : 'none' }}>
                                        <div className="text-[#1d1d1f] font-black text-xl mb-1">RISK 7</div>
                                        <div className="text-[#1d1d1f] font-bold text-sm px-4">
                                            {lang === 'kr' ? '거버넌스 안정성' : 'Governance Stability'}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Intersection / Alignment Point */}
                            <div className={`absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 bg-gradient-to-br from-yellow-400 to-orange-500 text-white rounded-full w-[110px] h-[110px] flex items-center justify-center shadow-[0_0_40px_rgba(245,158,11,0.6)] border-4 border-white transition-all duration-700 delay-[1200ms] ${step >= 6 ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
                                <div className="text-center">
                                    <div className="font-black text-[16px] leading-tight">PERFECT</div>
                                    <div className="font-bold text-[12px] leading-tight">TIME<br/>ALIGNMENT</div>
                                </div>
                            </div>

                            <style dangerouslySetInnerHTML={{__html: `
                                @keyframes spin-reverse { 100% { transform: rotate(-360deg); } }
                                @keyframes spin-normal { 100% { transform: rotate(360deg); } }
                            `}} />
                        </div>
                    </div>

                    {/* Right: Text explanations */}
                    <div className="lg:col-span-5 flex flex-col gap-6 justify-center">
                        
                        <div className={`bg-white border-l-4 border-[#1e3a8a] p-6 shadow-md transition-all duration-700 delay-300 ${step >= 4 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
                            <h3 className="text-[#1e3a8a] font-bold text-xl mb-2">
                                {lang === 'kr' ? '글로벌 LP 유치 필수' : 'Global LP Participation is Essential'}
                            </h3>
                            <p className="text-gray-600 font-medium text-[15px] leading-relaxed break-keep">
                                {lang === 'kr' ? 'IPR Equity에 글로벌 SWF/연기금이 명시적으로 들어와야 진정한 Trophy 의미가 완성됩니다. 2026년 12월 클로징 시점까지 최소 1~2개 기관 확보가 목표입니다.' : 'Trophy significance is complete only with explicit participation of global LPs. Securing 1-2 SWFs/Pensions by Dec 2026 is the goal.'}
                            </p>
                        </div>

                        <div className={`bg-white border-l-4 border-[#1d1d1f] p-6 shadow-md transition-all duration-700 delay-500 ${step >= 5 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
                            <h3 className="text-[#1d1d1f] font-bold text-xl mb-2">
                                {lang === 'kr' ? '새 대주주의 Commitment' : 'Commitment from New Major Shareholder'}
                            </h3>
                            <p className="text-gray-600 font-medium text-[15px] leading-relaxed break-keep">
                                {lang === 'kr' ? '이지스 지배지분 매각이 진행 중인 가운데, 인수자 선정 일정과 IPR 클로징 일정 간의 완벽한 시간적 Alignment가 매우 중요합니다. 새 대주주의 확약이 LP 신뢰의 핵심입니다.' : 'With the controlling stake sale ongoing, perfect time alignment between acquirer selection and IPR closing is crucial for LP trust.'}
                            </p>
                        </div>

                    </div>
                </div>

                {/* Bottom text */}
                <div className={`w-full text-center transition-all duration-[612ms] delay-[122ms] ${step >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                    <div className="inline-block bg-[#1d1d1f] text-white px-8 py-4 rounded-full text-[18px] md:text-[20px] font-bold shadow-xl break-keep">
                        {lang === 'kr' ? 
                            '글로벌 자본 유치와 안정적 거버넌스 확립을 통한 IPR 클로징 완성' : 
                            'Completing IPR closing through global capital attraction and stable governance'}
                    </div>
                </div>
            </div>
        </section>
    );
}
