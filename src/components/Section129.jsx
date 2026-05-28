import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Section129({ isActive }) {
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
                            {lang === 'kr' ? '정치·규제 및 자산 운영' : 'Politics, Regulations & Operations'}
                        </span>
                    </div>
                    <h2 className={`text-[32px] md:text-[46px] lg:text-[52px] font-extrabold leading-[calc(1.3em-6px)] text-[#1d1d1f] break-keep tracking-[-0.02em] transition-all duration-[612ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${step >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        {lang === 'kr' ? '인허가 변수 및 앵커 임차인 확보 리스크' : 'Permit Variables & Anchor Tenant Risks'}
                    </h2>
                </div>

                {/* Main Content: Timeline Track (Full width) */}
                <div className={`w-full max-w-[1300px] bg-white rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.05)] border border-gray-200 p-8 flex flex-col transition-all duration-700 ${step >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'} mb-8`}>
                    
                    {/* Track 1: Permit & Political (RISK 4) */}
                    <div className="relative w-full mb-12">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="bg-[#1d1d1f] text-white px-3 py-1 rounded text-sm font-bold">RISK 4</span>
                            <h3 className="text-[#1d1d1f] font-bold text-[22px]">{lang === 'kr' ? '규제 및 정치 로드맵' : 'Regulatory & Political Roadmap'}</h3>
                        </div>
                        
                        <div className="relative w-full h-[120px] flex items-center justify-between px-10">
                            {/* Base Line */}
                            <div className="absolute left-[5%] right-[5%] top-1/2 h-[4px] bg-gray-200 -translate-y-1/2"></div>
                            {/* Animated Line */}
                            <div className={`absolute left-[5%] top-1/2 h-[4px] bg-[#1e3a8a] -translate-y-1/2 transition-all duration-[1500ms] ease-out ${step >= 4 ? 'w-[90%]' : 'w-0'}`}></div>

                            {/* Node 1: Urban Planning */}
                            <div className={`relative z-10 flex flex-col items-center transition-all duration-500 delay-300 ${step >= 4 ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
                                <div className="w-5 h-5 rounded-full bg-[#1e3a8a] border-4 border-white shadow-md mb-3"></div>
                                <div className="absolute top-[30px] w-[180px] text-center">
                                    <div className="text-gray-500 text-xs font-bold mb-1">2023.11</div>
                                    <div className="text-[#1d1d1f] font-bold text-sm bg-gray-50 p-2 rounded border border-gray-200">
                                        {lang === 'kr' ? '도시계획위원회\n정비계획안 승인' : 'Urban Planning\nApproval'}
                                    </div>
                                </div>
                            </div>

                            {/* Node 2: Permits */}
                            <div className={`relative z-10 flex flex-col items-center transition-all duration-500 delay-600 ${step >= 4 ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
                                <div className="w-5 h-5 rounded-full bg-[#1e3a8a] border-4 border-white shadow-md mb-3"></div>
                                <div className="absolute top-[30px] w-[200px] text-center">
                                    <div className="text-gray-500 text-xs font-bold mb-1">2025 ~ 2026</div>
                                    <div className="text-[#1d1d1f] font-bold text-sm bg-gray-50 p-2 rounded border border-gray-200">
                                        {lang === 'kr' ? '건축 인허가 및\n각종 영향평가 잔여' : 'Building Permits &\nImpact Assessments'}
                                    </div>
                                </div>
                            </div>

                            {/* Node 3: Political Shift */}
                            <div className={`relative z-10 flex flex-col items-center transition-all duration-500 delay-900 ${step >= 4 ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
                                <div className="w-6 h-6 rounded-full bg-red-500 border-4 border-white shadow-md mb-3 animate-pulse"></div>
                                <div className="absolute top-[30px] w-[220px] text-center">
                                    <div className="text-red-500 text-xs font-bold mb-1">2027 ~ 2030 (Key Risk)</div>
                                    <div className="text-red-700 font-bold text-sm bg-red-50 p-2 rounded border border-red-200">
                                        {lang === 'kr' ? '차기 정부 부동산/도시계획\n기조와의 완벽한 Alignment 필요' : 'Alignment with next admin\nreal estate/urban planning'}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Track 2: Anchor Tenant (RISK 5) */}
                    <div className="relative w-full mt-8 border-t border-gray-200 pt-8">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="bg-[#1d1d1f] text-white px-3 py-1 rounded text-sm font-bold">RISK 5</span>
                            <h3 className="text-[#1d1d1f] font-bold text-[22px]">{lang === 'kr' ? '앵커 테넌트 퍼즐 맞추기' : 'Anchor Tenant Puzzle'}</h3>
                        </div>

                        <div className="flex flex-col md:flex-row gap-6">
                            {/* Block 1: Samsung */}
                            <div className={`flex-1 bg-[#1e3a8a]/5 border-2 border-[#1e3a8a]/20 rounded-xl p-5 flex flex-col justify-between transition-all duration-700 delay-500 ${step >= 5 ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                                <div>
                                    <div className="flex justify-between items-start mb-3">
                                        <div className="bg-[#1e3a8a] text-white text-xs font-bold px-2 py-1 rounded">75% Space</div>
                                        <i className="fas fa-building text-[#1e3a8a] text-xl"></i>
                                    </div>
                                    <h4 className="text-[#1d1d1f] font-bold text-lg mb-2">
                                        {lang === 'kr' ? '삼성물산 마스터리스 확약 연장' : 'Samsung C&T Master Lease Ext.'}
                                    </h4>
                                    <p className="text-gray-600 text-sm font-medium leading-relaxed">
                                        {lang === 'kr' ? '현재 75% 확약 및 리츠칼튼 운영 협약은 큰 진전. 본PF 전환 전까지 확약 연장 협상이 필수적 변수입니다.' : '75% commitment is great progress. Extension negotiation before Main PF is a vital variable.'}
                                    </p>
                                </div>
                            </div>

                            {/* Block 2: Global HQ */}
                            <div className={`flex-1 bg-blue-600 border-2 border-blue-400 rounded-xl p-5 flex flex-col justify-between shadow-lg transition-all duration-700 delay-700 ${step >= 6 ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                                <div>
                                    <div className="flex justify-between items-start mb-3">
                                        <div className="bg-white text-blue-800 text-xs font-bold px-2 py-1 rounded shadow">25% Remaining Space</div>
                                        <i className="fas fa-globe text-white text-xl"></i>
                                    </div>
                                    <h4 className="text-white font-bold text-lg mb-2">
                                        {lang === 'kr' ? '글로벌 다국적 본사 유치 (Trophy)' : 'Global Multinational HQ Attraction'}
                                    </h4>
                                    <p className="text-blue-100 text-sm font-medium leading-relaxed">
                                        {lang === 'kr' ? 'Google, Microsoft, Amazon 등 글로벌 HQ 유치가 Trophy Positioning의 궁극적인 완성입니다.' : 'Attracting HQs like Google, Microsoft, Amazon is the ultimate completion of Trophy Positioning.'}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom text */}
                <div className={`w-full text-center transition-all duration-[612ms] delay-[122ms] ${step >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                    <div className="inline-block bg-[#1d1d1f] text-white px-8 py-4 rounded-full text-[18px] md:text-[20px] font-bold shadow-xl break-keep">
                        {lang === 'kr' ? 
                            '정권·정책 변화에 유연하게 대응하고, 글로벌 앵커 테넌트로 자산 가치 극대화' : 
                            'Flexibly respond to political shifts and maximize asset value with global anchor tenants'}
                    </div>
                </div>
            </div>
        </section>
    );
}
