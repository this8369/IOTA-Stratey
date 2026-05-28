import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Section117({ isActive }) {
    const { lang } = useLanguage();
    const [step, setStep] = useState(0);

    useEffect(() => {
        if (!isActive) { setStep(0); return; }
        const timers = [
            setTimeout(() => setStep(1), 184),
            setTimeout(() => setStep(2), 551),
            setTimeout(() => setStep(3), 918)
        ];
        return () => timers.forEach(clearTimeout);
    }, [isActive]);

    return (
        <section className="section w-full h-full bg-[#f4f4f5] flex flex-col items-center justify-center relative px-6 md:px-16 overflow-hidden">
            <div className="w-full max-w-[1400px] mx-auto flex flex-col justify-center h-full">
                
                {/* Header */}
                <div className={`text-left mb-[36px] transition-all duration-[612ms] ${step >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <h3 className="text-[#1e3a8a] text-[18px] md:text-[22px] font-bold mb-2 uppercase">
                        {lang === 'kr' ? '국가 인프라급 교통 결절점' : 'Core Location Value'}
                    </h3>
                    <h2 className="text-[32px] md:text-[46px] font-black text-[#1d1d1f] leading-tight break-keep">
                        {lang === 'kr' ? '압도적인 광역 교통망과 도심 연결성' : 'Overwhelming Transit Network & CBD Connectivity'}
                    </h2>
                </div>

                {/* Content: 3 Cards */}
                <div className={`w-full max-w-[1200px] mt-[20px] mb-[36px] grid grid-cols-1 md:grid-cols-3 gap-6 transition-all duration-[612ms] ${step >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    
                    {/* Card 1: Network */}
                    <div className="bg-white border-[6px] border-[#1e3a8a] p-8 flex flex-col shadow-sm">
                        <div className="text-[#1e3a8a] font-black text-[26px] md:text-[30px] mb-2 uppercase">Transit Network</div>
                        <div className="text-gray-700 font-bold text-[22px] mb-6 border-b-2 border-gray-100 pb-4">
                            {lang === 'kr' ? '7개 철도 노선 교차점' : 'Intersection of 7 Rail Lines'}
                        </div>
                        <ul className="text-[18px] text-gray-600 font-medium leading-relaxed space-y-2">
                            <li>▪ KTX · SRT</li>
                            <li>▪ 1호선 · 4호선 · 공항철도</li>
                            <li>▪ GTX-A (2024 개통)</li>
                            <li>▪ GTX-B (2030 개통 예정)</li>
                        </ul>
                    </div>

                    {/* Card 2: Connectivity */}
                    <div className="bg-white border-[6px] border-[#1d1d1f] p-8 flex flex-col shadow-sm">
                        <div className="text-[#1d1d1f] font-black text-[26px] md:text-[30px] mb-2 uppercase">Connectivity</div>
                        <div className="text-gray-700 font-bold text-[22px] mb-6 border-b-2 border-gray-100 pb-4">
                            {lang === 'kr' ? '보행 및 지하철 연결성' : 'Pedestrian & Subway Access'}
                        </div>
                        <ul className="text-[18px] text-gray-600 font-medium leading-relaxed space-y-2">
                            <li>▪ 남산 (자연 녹지)</li>
                            <li>▪ 도심 (전통적 CBD)</li>
                            <li>▪ 용산국제업무지구 (예정)</li>
                            <li>▪ 마포 · 여의도 접근성</li>
                        </ul>
                    </div>

                    {/* Card 3: Global */}
                    <div className="bg-[#1e3a8a] border-[6px] border-[#1e3a8a] p-8 flex flex-col shadow-sm">
                        <div className="text-white font-black text-[26px] md:text-[30px] mb-2 uppercase">Global Entry</div>
                        <div className="text-[#93c5fd] font-bold text-[22px] mb-6 border-b-2 border-[#3b82f6] pb-4">
                            {lang === 'kr' ? '외국인 비즈니스 진입점' : 'Foreign Business Entry Point'}
                        </div>
                        <p className="text-[18px] text-blue-50 font-medium leading-relaxed">
                            {lang === 'kr' ? '인천국제공항과 공항철도로 직결되어 서울 진입 시 가장 먼저 마주하는 관문 (약 30분 소요)' : 'Directly connected to Incheon Int’l Airport, acting as the primary gateway to Seoul (approx. 30 mins).'}
                        </p>
                    </div>
                </div>

                {/* Bottom text */}
                <div className={`mt-2 text-left md:text-center transition-all duration-[612ms] delay-[122ms] ${step >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                    <ul className="text-left inline-block space-y-3 mx-auto">
                        <li className="flex items-start">
                            <span className="mr-3 text-[#1e3a8a]">▪</span>
                            <span className="text-[18px] text-gray-800 font-bold">{lang === 'kr' ? '도쿄역(JR 라인 + 신칸센)에 비견되는 국가 인프라급 교통 결절점(Hub)' : 'A national infrastructure-level transit hub comparable to Tokyo Station (JR + Shinkansen)'}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
