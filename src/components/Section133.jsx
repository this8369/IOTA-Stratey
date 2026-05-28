import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Section133({ isActive }) {
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
                            {lang === 'kr' ? '프라임 프리미엄과 엑시트 전략' : 'Prime Premium & Exit Strategy'}
                        </span>
                    </div>
                    <h2 className={`text-[32px] md:text-[46px] lg:text-[52px] font-extrabold leading-[calc(1.3em-6px)] text-[#1d1d1f] break-keep tracking-[-0.02em] transition-all duration-[612ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${step >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        {lang === 'kr' ? '자산 프리미엄 및 자본 Recycling / IPO' : 'Asset Premium and Capital Recycling / IPO Options'}
                    </h2>
                </div>

                {/* Content: 3 Cards (1x3 grid) */}
                <div className={`w-full max-w-[1400px] mx-auto mt-[10px] mb-[36px] grid grid-cols-1 md:grid-cols-3 gap-[20px] transition-all duration-[612ms] ${step >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    
                    {/* Card 1 */}
                    <div className="bg-white border-[6px] border-[#1e3a8a] px-8 py-[28px] flex flex-col shadow-sm">
                        <div className="text-[#1e3a8a] font-black text-[24px] md:text-[28px] mb-[6px] uppercase">4.3</div>
                        <div className="text-gray-700 font-bold text-[22px] mb-[14px] border-b-2 border-gray-100 pb-4 break-keep">
                            {lang === 'kr' ? '서울 프라임 평균 대비 프리미엄' : 'Premium Over Seoul Prime Average'}
                        </div>
                        <ul className="text-[17px] text-gray-600 font-medium leading-relaxed space-y-4">
                            <li className="flex items-start">
                                <span className="text-[#1e3a8a] mr-2">▪</span>
                                <span>{lang === 'kr' ? 'GTX 교차 + 트로피 디자인 + 럭셔리 호텔·F&B·녹지 combo로 서울 평균 대비 30~50% 프리미엄 가능.' : 'A 30-50% premium over Seoul avg expected through GTX + Trophy design + Luxury Hotel/F&B/Greenery combo.'}</span>
                            </li>
                            <li className="flex flex-col bg-[#1e3a8a]/5 p-4 rounded-lg mt-2 border border-[#1e3a8a]/10">
                                <span className="font-bold text-[#1e3a8a] mb-1">{lang === 'kr' ? '글로벌 벤치마크' : 'Global Benchmark'}</span>
                                <span className="text-[17px] text-gray-800 font-bold">{lang === 'kr' ? '도쿄 마루노우치 빌딩 vs 신주쿠 평균 프리미엄(약 40%)과 유사한 갭 기대.' : 'Similar gap expected to Tokyo Marunouchi vs Shinjuku average premium (~40%).'}</span>
                            </li>
                        </ul>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white border-[6px] border-[#1e3a8a] px-8 py-[28px] flex flex-col shadow-sm">
                        <div className="text-[#1e3a8a] font-black text-[24px] md:text-[28px] mb-[6px] uppercase">4.4</div>
                        <div className="text-gray-700 font-bold text-[22px] mb-[14px] border-b-2 border-gray-100 pb-4 break-keep">
                            {lang === 'kr' ? '국제 자본 Recycling 잠재력' : 'International Capital Recycling Potential'}
                        </div>
                        <ul className="text-[17px] text-gray-600 font-medium leading-relaxed space-y-4">
                            <li className="flex items-start">
                                <span className="text-[#1e3a8a] mr-2">▪</span>
                                <span>{lang === 'kr' ? '안정화 후 글로벌 코어 펀드(GIC·Allianz)에 매각 또는 IPO를 통한 회수.' : 'Exit via sale to global core funds (GIC, Allianz) or IPO post-stabilization.'}</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-red-600 mr-2">▪</span>
                                <span>{lang === 'kr' ? 'JR 동일본 + Mitsubishi Estate의 도쿄역 그랜스타·KITTE 모델처럼 영구 보유도 가능.' : 'Permanent hold is also an option, akin to the GranSta/KITTE model at Tokyo Station.'}</span>
                            </li>
                        </ul>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white border-[6px] border-[#1e3a8a] px-8 py-[28px] flex flex-col shadow-sm">
                        <div className="text-[#1e3a8a] font-black text-[24px] md:text-[28px] mb-[6px] uppercase">4.5</div>
                        <div className="text-gray-700 font-bold text-[22px] mb-[14px] border-b-2 border-gray-100 pb-4 break-keep">
                            {lang === 'kr' ? 'IPO 및 증권화 옵셔널리티' : 'IPO & Securitization Optionality'}
                        </div>
                        <ul className="text-[17px] text-gray-600 font-medium leading-relaxed space-y-4">
                            <li className="flex items-start">
                                <span className="text-[#1e3a8a] mr-2">▪</span>
                                <span>{lang === 'kr' ? '2032~2035년 사이 Stabilization 후 K-REIT 시장에 별도 IOTA Office REIT IPO 분사 가능.' : 'Potential to spin off a separate IOTA Office REIT on the K-REIT market post-stabilization (2032-2035).'}</span>
                            </li>
                            <li className="flex flex-col bg-gray-50 p-4 rounded-lg mt-2">
                                <span className="font-bold text-[#1e3a8a] mb-1">{lang === 'kr' ? '최대 규모 리츠 상장' : 'Largest REIT Listing'}</span>
                                <span className="text-[17px] font-bold">{lang === 'kr' ? '시장 규모 약 5~7조 원으로, 한국 단일 최대 리츠 IPO 실현 가능.' : 'At a 5-7T KRW market size, it would be the largest single REIT IPO in Korea.'}</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom text */}
                <div className={`w-full text-center mt-2 transition-all duration-[612ms] delay-[122ms] ${step >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                    <div className="inline-block bg-[#1e3a8a] text-white px-8 py-5 text-[20px] md:text-[22px] font-bold shadow-lg break-keep">
                        {lang === 'kr' ? 
                            '글로벌 트로피 에셋에 걸맞은 초격차 프리미엄 확보와 다각화된 Exit 플랜' : 
                            'Securing an ultra-gap premium fit for a global trophy asset with diversified exit plans'}
                    </div>
                </div>
            </div>
        </section>
    );
}
