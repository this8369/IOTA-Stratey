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
            setTimeout(() => setStep(3), 918)
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
                    <h2 className={`text-[32px] md:text-[46px] lg:text-[52px] font-extrabold leading-[calc(1.3em-6px)] text-[#1d1d1f] break-keep tracking-[-0.02em] transition-all duration-[612ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${step >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        {lang === 'kr' ? '혁신 운영 쇼케이스와 트로피 시리즈 템플릿' : 'Innovative Operation Showcase & Trophy Template'}
                    </h2>
                </div>

                {/* Content: 2 Cards (1x2 grid) */}
                <div className={`w-full max-w-[1200px] mx-auto mt-[10px] mb-[36px] grid grid-cols-1 md:grid-cols-2 gap-[20px] transition-all duration-[612ms] ${step >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    
                    {/* Card 1 */}
                    <div className="bg-white border-[6px] border-[#1e3a8a] px-8 py-[28px] flex flex-col shadow-sm">
                        <div className="text-[#1e3a8a] font-black text-[24px] md:text-[28px] mb-[6px] uppercase">Blueprint 01</div>
                        <div className="text-gray-700 font-bold text-[22px] mb-[14px] border-b-2 border-gray-100 pb-4">
                            {lang === 'kr' ? 'Factorial Builders 운영 모델 쇼케이스' : 'Factorial Builders Operation Showcase'}
                        </div>
                        <ul className="text-[18px] text-gray-600 font-medium leading-relaxed space-y-4">
                            <li className="flex items-start">
                                <span className="text-[#1e3a8a] mr-2">▪</span>
                                <span>{lang === 'kr' ? "IOTA 오피스 입주사에게 'Asset as a Service' 표준 모델 적용." : "Applying 'Asset as a Service' standard model to IOTA office tenants."}</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-[#1e3a8a] mr-2">▪</span>
                                <span>{lang === 'kr' ? 'AI · 로봇 · IoT 통합 빌딩 OS 구현.' : 'Implementation of AI, Robot, and IoT integrated Building OS.'}</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-[#1e3a8a] mr-2">▪</span>
                                <span>{lang === 'kr' ? '글로벌 Standard 대비 확고한 차별점 확보.' : 'Securing distinct differentiation against global standards.'}</span>
                            </li>
                        </ul>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white border-[6px] border-[#1d1d1f] px-8 py-[28px] flex flex-col shadow-sm">
                        <div className="text-[#1d1d1f] font-black text-[24px] md:text-[28px] mb-[6px] uppercase">Blueprint 02</div>
                        <div className="text-gray-700 font-bold text-[22px] mb-[14px] border-b-2 border-gray-100 pb-4">
                            {lang === 'kr' ? '향후 트로피 시리즈 템플릿' : 'Future Trophy Series Template'}
                        </div>
                        <ul className="text-[18px] text-gray-600 font-medium leading-relaxed space-y-4">
                            <li className="flex items-start">
                                <span className="text-[#1d1d1f] mr-2">▪</span>
                                <span>{lang === 'kr' ? 'IOTA 성공 시 YIBD, 잠실, 여의도, 마곡 등 신규 트로피의 표준 구조.' : 'Upon IOTA success, acts as a standard structure for new trophies in YIBD, Jamsil, Yeouido, Magok.'}</span>
                            </li>
                            <li className="flex items-center justify-center bg-gray-50 p-4 rounded-lg mt-4 border border-gray-200">
                                <span className="font-bold text-[#1e3a8a] text-[19px] text-center">
                                    {lang === 'kr' ? '[PFV + 부동산펀드 + 리츠 + LP 통합]' : '[PFV + RE Fund + REIT + LP Unified]'}
                                </span>
                            </li>
                            <li className="text-center mt-2">
                                <span className="text-[18px] font-bold text-gray-800">
                                    {lang === 'kr' ? '통합 자본 구조를 이지스 Trophy Stack으로 브랜드화' : 'Branding the unified capital structure as IGIS Trophy Stack'}
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom text */}
                <div className={`w-full text-center mt-2 transition-all duration-[612ms] delay-[122ms] ${step >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                    <div className="inline-block bg-[#1d1d1f] text-white px-8 py-5 text-[20px] md:text-[22px] font-bold shadow-lg break-keep">
                        {lang === 'kr' ? 
                            '단일 프로젝트 성공을 넘어 이지스 미래 10년의 확장형 DNA (Trophy Stack) 이식' : 
                            'Beyond a single project success: Implanting scalable DNA (Trophy Stack) for IGIS next 10 years'}
                    </div>
                </div>
            </div>
        </section>
    );
}
