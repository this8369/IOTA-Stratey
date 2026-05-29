import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Section134({ isActive }) {
    const { lang } = useLanguage();
    const [step, setStep] = useState(0);

    useEffect(() => {
        if (!isActive) { setStep(0); return; }
        const timers = [
            setTimeout(() => setStep(1), 184),
            setTimeout(() => setStep(2), 551),
            setTimeout(() => setStep(3), 918),
            setTimeout(() => setStep(4), 1285)
        ];
        return () => timers.forEach(clearTimeout);
    }, [isActive]);

    return (
        <section className="section w-full h-full bg-[#f4f4f5] flex flex-col items-center justify-center relative px-6 md:px-16 overflow-hidden">
            <div className="w-full max-w-[1500px] mx-auto flex flex-col justify-center items-center h-full">
                
                {/* Header */}
                <div className="w-full flex flex-col items-center text-center mb-[36px]">
                    <div className={`transition-all duration-[612ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${step >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        <span className="inline-block text-[20px] md:text-[24px] font-bold text-[#1e3a8a] tracking-[-0.02em] mb-[12px]">
                            {lang === 'kr' ? '역사적 비교' : 'Historical Comparison'}
                        </span>
                    </div>
                    <h2 className={`text-[32px] md:text-[46px] lg:text-[52px] font-extrabold leading-[calc(1.3em-6px)] text-[#1d1d1f] break-keep tracking-[-0.02em] transition-all duration-[612ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${step >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        {lang === 'kr' ? 'IOTA가 가진 상징성' : 'Symbolic Significance of IOTA'}
                    </h2>
                </div>

                {/* Content: 3 Cards (1x3 grid) */}
                <div className={`w-full max-w-[1400px] mx-auto mt-[10px] mb-[36px] grid grid-cols-1 md:grid-cols-3 gap-[24px] transition-all duration-[612ms] ${step >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    
                    {/* Card 1 */}
                    <div className="bg-white border-[6px] border-[#1e3a8a] px-8 py-[28px] flex flex-col shadow-sm h-full">
                        <div className="text-[#1e3a8a] font-black text-[22px] md:text-[24px] mb-[6px] uppercase break-keep leading-tight">
                            {lang === 'kr' ? '4대 변곡점과 IOTA' : 'The 4 Inflection Points & IOTA'}
                        </div>
                        <div className="text-gray-700 font-bold text-[18px] md:text-[20px] mb-[14px] border-b-2 border-gray-100 pb-4 break-keep">
                            {lang === 'kr' ? '1조 → 2조 달러 시대의 마침표' : 'The Conclusion of the $1T to $2T Era'}
                        </div>
                        <ul className="text-[15px] xl:text-[16px] text-gray-700 font-medium leading-relaxed space-y-4 break-keep">
                            <li>▪ <strong className="text-gray-900">{lang === 'kr' ? '글로벌 패권과 변곡점:' : 'Global Hegemony:'}</strong> {lang === 'kr' ? '산업혁명기 증기기관, 냉전기 핵·우주산업처럼 21세기 한국에게 AI·반도체·문화·인구는 4대 변곡점임.' : 'Like the steam engine in the Industrial Revolution or space tech in the Cold War, AI, chips, culture, and population are Korea\'s 4 inflection points.'}</li>
                            <li>▪ <strong className="text-gray-900">{lang === 'kr' ? 'Defining Trophy:' : 'Defining Trophy:'}</strong> {lang === 'kr' ? '1조 달러 시대에 IFC가 상징이었다면, IOTA는 2조 달러 시대를 정의하는 새로운 트로피가 될 것임.' : 'Just as IFC symbolized the $1T era, IOTA will be the defining trophy of the $2T era.'}</li>
                        </ul>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white border-[6px] border-[#1e3a8a] px-8 py-[28px] flex flex-col shadow-sm h-full" style={{ transitionDelay: '150ms' }}>
                        <div className="text-[#1e3a8a] font-black text-[22px] md:text-[24px] mb-[6px] uppercase break-keep leading-tight">
                            {lang === 'kr' ? '도시 권역의 Stewardship' : 'Stewardship of Urban Districts'}
                        </div>
                        <div className="text-gray-700 font-bold text-[18px] md:text-[20px] mb-[14px] border-b-2 border-gray-100 pb-4 break-keep">
                            {lang === 'kr' ? '세대를 건너는 자본 순환의 시작' : 'The Start of a Cross-Generational Capital Cycle'}
                        </div>
                        <ul className="text-[15px] xl:text-[16px] text-gray-700 font-medium leading-relaxed space-y-4 break-keep">
                            <li>▪ <strong className="text-gray-900">{lang === 'kr' ? '글로벌 사례:' : 'Global Cases:'}</strong> {lang === 'kr' ? "도쿄 마루노우치, 런던 King's Cross, 뉴욕 Hudson Yards 등 한 운용사/디벨로퍼가 30~50년에 걸쳐 주도한 성공 사례." : "Cases like Tokyo Marunouchi, London King's Cross, and NY Hudson Yards, stewarded by a single developer over 30-50 years."}</li>
                            <li>▪ <strong className="text-gray-900">{lang === 'kr' ? '한국형 모델 구축:' : 'Building the Korean Model:'}</strong> {lang === 'kr' ? 'IOTA에서 시작해 YIBD 및 향후 트로피 에셋으로 이어지는 단순 ROI 그 이상의 장기적인 자본 순환 파이프라인 구축.' : 'Establishing a long-term capital cycle pipeline beyond simple ROI, from IOTA to YIBD and future trophy assets.'}</li>
                        </ul>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white border-[6px] border-[#1e3a8a] px-8 py-[28px] flex flex-col shadow-sm h-full" style={{ transitionDelay: '300ms' }}>
                        <div className="text-[#1e3a8a] font-black text-[22px] md:text-[24px] mb-[6px] uppercase break-keep leading-tight">
                            {lang === 'kr' ? '상징성 및 브랜드 파급력' : 'Symbolism & Brand Effect'}
                        </div>
                        <div className="text-gray-700 font-bold text-[18px] md:text-[20px] mb-[14px] border-b-2 border-gray-100 pb-4 break-keep">
                            {lang === 'kr' ? '서울의 정체성을 정의하는 랜드마크' : 'A Landmark Defining Seoul\'s Identity'}
                        </div>
                        <ul className="text-[15px] xl:text-[16px] text-gray-700 font-medium leading-relaxed space-y-4 break-keep">
                            <li>▪ <strong className="text-gray-900">{lang === 'kr' ? 'Block-scale Urban Project:' : 'Block-scale Urban Project:'}</strong> {lang === 'kr' ? '단일 빌딩(building)의 한계를 넘어선 거대한 도시 스케일의 프로젝트.' : 'A massive urban-scale project that transcends the limitations of a single building.'}</li>
                            <li>▪ <strong className="text-gray-900">{lang === 'kr' ? '브랜드 이펙트:' : 'Brand Effect:'}</strong> {lang === 'kr' ? '도쿄 미드타운, 록폰기 힐스가 만든 강력한 도시 브랜드 파급력과 동급의 잠재력.' : 'Potential equivalent to the powerful brand effect created by Tokyo Midtown and Roppongi Hills.'}</li>
                            <li>▪ <strong className="text-gray-900">{lang === 'kr' ? '도시를 만든 자본:' : 'Capital that built the city:'}</strong> {lang === 'kr' ? '단순 자산운용사를 넘어 아시아 자본시장사에 기록될 역사적 랜드마크.' : 'A historical landmark to be recorded in Asian capital market history.'}</li>
                        </ul>
                    </div>

                </div>

                {/* Bottom text */}
                <div className={`w-full text-center mt-2 transition-all duration-[612ms] delay-[122ms] ${step >= 4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                    <div className="inline-block bg-[#1e3a8a] text-white px-8 py-5 text-[20px] md:text-[22px] font-bold shadow-lg break-keep">
                        {lang === 'kr' ? 
                            '이지스가 단순 자산운용사가 아니라 도시를 만든 자본으로 아시아 자본시장사에 기록될 단일 최대 프로젝트' : 
                            'IGIS aims to be recorded in Asian capital market history not just as an asset manager, but as the capital that built the city through this single largest project.'}
                    </div>
                </div>
            </div>
        </section>
    );
}
