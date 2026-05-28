import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Section118({ isActive }) {
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
                <div className={`transition-all duration-[612ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${step >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <span className="inline-block text-[20px] md:text-[24px] font-bold text-[#1e3a8a] tracking-[-0.02em] mb-[12px]">
                        {lang === 'kr' ? '단순 개발을 넘어선 도시 형성 (City-making)' : 'Beyond Development: City-making'}
                    </span>
                </div>
                <h2 className={`text-[32px] md:text-[46px] lg:text-[52px] font-extrabold leading-[calc(1.3em-6px)] text-[#1d1d1f] break-keep tracking-[-0.02em] mb-4 transition-all duration-[612ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${step >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    {lang === 'kr' ? '"남산을 시민에게" - 퍼블릭 스페이스와 트로피 자산의 결합' : '"Namsan to Citizens" - Combining Public Space with Trophy Assets'}
                </h2>

                {/* Content: 4 Cards (2x2 grid) */}
                <div className={`w-full max-w-[1200px] mt-[20px] mb-[36px] grid grid-cols-1 md:grid-cols-2 gap-6 transition-all duration-[612ms] ${step >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    
                    {/* Card 1 */}
                    <div className="bg-white border-[6px] border-[#1e3a8a] p-8 flex flex-col shadow-sm">
                        <div className="text-[#1e3a8a] font-black text-[24px] md:text-[28px] mb-2 uppercase">Heritage</div>
                        <div className="text-gray-700 font-bold text-[20px] mb-4">
                            {lang === 'kr' ? '힐튼 아트리움 보존' : 'Hilton Atrium Preservation'}
                        </div>
                        <p className="text-[17px] text-gray-600 font-medium leading-relaxed">
                            {lang === 'kr' ? 'SOM, Foster+Partners, DA그룹 등 세계적 설계사 참여 하에 힐튼 아트리움을 3D 디지털로 보존하여 역사적 가치 계승' : 'Preserving the historic Hilton Atrium in 3D digital format with world-class architects like SOM and Foster+Partners.'}
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white border-[6px] border-[#1d1d1f] p-8 flex flex-col shadow-sm">
                        <div className="text-[#1d1d1f] font-black text-[24px] md:text-[28px] mb-2 uppercase">Green Space</div>
                        <div className="text-gray-700 font-bold text-[20px] mb-4">
                            {lang === 'kr' ? '7,000m² 대규모 공개 녹지' : '7,000m² Public Greenery'}
                        </div>
                        <p className="text-[17px] text-gray-600 font-medium leading-relaxed">
                            {lang === 'kr' ? '축구장 1개 크기에 달하는 거대한 도심 속 오픈 스페이스를 조성하여 시민들에게 쾌적한 환경 제공' : 'Creating a massive open space equivalent to a soccer field in the city center for public enjoyment.'}
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-[#1e3a8a] border-[6px] border-[#1e3a8a] p-8 flex flex-col shadow-sm">
                        <div className="text-white font-black text-[24px] md:text-[28px] mb-2 uppercase">Public Flow</div>
                        <div className="text-[#93c5fd] font-bold text-[20px] mb-4">
                            {lang === 'kr' ? '보행로 및 공공청사 기부채납' : 'Pedestrian Path & Public Office'}
                        </div>
                        <p className="text-[17px] text-blue-50 font-medium leading-relaxed">
                            {lang === 'kr' ? '서울역 8번 출구에서 남산 백범공원으로 이어지는 에스컬레이터형 보행로 구축 및 공공청사 무상귀속' : 'Establishing an escalator pedestrian path from Seoul Station Exit 8 to Namsan Park, and dedicating public offices.'}
                        </p>
                    </div>

                    {/* Card 4 */}
                    <div className="bg-white border-[6px] border-blue-900 p-8 flex flex-col shadow-sm">
                        <div className="text-blue-900 font-black text-[24px] md:text-[28px] mb-2 uppercase">Trophy Asset</div>
                        <div className="text-gray-700 font-bold text-[20px] mb-4">
                            {lang === 'kr' ? '글로벌 럭셔리 호텔 유치' : 'Global Luxury Hotel'}
                        </div>
                        <p className="text-[17px] text-gray-600 font-medium leading-relaxed">
                            {lang === 'kr' ? '메리어트 리츠칼튼 등 글로벌 최상위 럭셔리 브랜드를 유치하여 프로젝트의 트로피 자산(Trophy Asset) 위상 확보' : 'Securing the project\'s trophy asset status by attracting top-tier global luxury brands like Marriott Ritz-Carlton.'}
                        </p>
                    </div>
                </div>

                {/* Bottom text */}
                <div className={`max-w-[1200px] mt-2 text-[16px] md:text-[20px] leading-[1.5] font-bold text-gray-700 break-keep text-center transition-all duration-[612ms] delay-[122ms] ease-out ${step >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <ul className="text-left inline-block space-y-3 mx-auto">
                        <li className="flex items-start">
                            <span className="mr-3 text-[#1d1d1f]">▪</span>
                            <span className="text-[#1d1d1f]">
                                {lang === 'kr' ? 
                                    '단순 부동산 개발이 아닌 도시 형성(city-making) 행위이며, IFC의 단일 자산 모델을 넘어섬' : 
                                    'A city-making act beyond simple development, surpassing the single-asset model of IFC.'}
                            </span>
                        </li>
                        <li className="flex items-start">
                            <span className="mr-3 text-[#1e3a8a]">▪</span>
                            <span className="text-[#1e3a8a]">
                                {lang === 'kr' ? 
                                    '롯데월드타워(단일 랜드마크) + 아자부다이힐스(도심 vertical city) + 허드슨야드(mega project)의 결합 모델' : 
                                    'A combined model of Lotte World Tower + Azabudai Hills + Hudson Yards'}
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
