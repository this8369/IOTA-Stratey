import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

const Section139 = ({ isActive }) => {
    const { lang } = useLanguage();
    const [step, setStep] = useState(0);

    useEffect(() => {
        if (!isActive) { setStep(0); return; }
        const t1 = setTimeout(() => setStep(1), 184);
        const t2 = setTimeout(() => setStep(2), 551);
        const t3 = setTimeout(() => setStep(3), 918);
        const t4 = setTimeout(() => setStep(4), 1285);
        const t5 = setTimeout(() => setStep(5), 1652);
        const t6 = setTimeout(() => setStep(6), 2019);
        return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4); clearTimeout(t5); clearTimeout(t6); };
    }, [isActive]);

    return (
        <div className="w-full h-full flex flex-col items-center justify-center p-8 bg-[#fbfbfd]">
            
            <div className="w-full max-w-[1400px] mx-auto h-full flex flex-col">
                {/* Header */}
                <div className="w-full flex flex-col items-center text-center mb-[40px]">
                    <div className={`transition-all duration-[612ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${step >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        <span className="inline-block text-[20px] md:text-[24px] font-bold text-[#1e3a8a] tracking-[-0.02em] mb-[12px]">
                            {lang === 'kr' ? '실행 전략' : 'Execution Strategy'}
                        </span>
                    </div>
                    <h2 className={`text-[36px] md:text-[46px] lg:text-[46px] font-extrabold leading-[calc(1.3em-6px)] text-[#1d1d1f] break-keep tracking-[-0.02em] transition-all duration-[612ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${step >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        {lang === 'kr' ? '향후 액션 아이템 우선순위' : 'Action Item Priorities'}
                    </h2>
                </div>

                {/* Content: 4 Vertical Stacked Blocks */}
                <div className="w-full flex-1 flex flex-col justify-center gap-5 relative">
                    
                    {/* Vertical Connecting Line (Background) */}
                    <div className="absolute left-[135px] top-6 bottom-6 w-1 bg-gray-200 hidden md:block"></div>

                    {/* Phase 1: 즉시 */}
                    <div className={`flex flex-col md:flex-row w-full bg-white border-2 border-gray-200 shadow-md transition-all duration-700 delay-300 ${step >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        {/* Left Label */}
                        <div className="md:w-[270px] bg-[#1e3a8a] text-white flex flex-col justify-center items-center p-6 shrink-0 border-r-[6px] border-blue-900">
                            <div className="text-[32px] font-black tracking-tight leading-none mb-2">1.1 즉시</div>
                            <div className="text-[16px] font-bold text-blue-200 uppercase tracking-widest">(2026.5 ~ 2026.9)</div>
                        </div>
                        {/* Right Content */}
                        <div className="flex-1 p-6 md:p-8 flex flex-col justify-center">
                            <ul className="space-y-4">
                                <li className="flex items-start gap-4">
                                    <div className="w-2 h-2 rounded-full bg-[#1e3a8a] mt-2.5 shrink-0"></div>
                                    <p className="text-[18px] text-gray-800 font-bold leading-relaxed break-keep">
                                        <span className="text-[#1e3a8a] font-black">YD816 본PF 전환 클로징</span> 또는 공매 회피 인수자 확정
                                    </p>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="w-2 h-2 rounded-full bg-[#1e3a8a] mt-2.5 shrink-0"></div>
                                    <p className="text-[18px] text-gray-800 font-bold leading-relaxed break-keep">
                                        메리츠증권 추가 협상 및 대체 Senior 대주(농협·하나·신한) 동시 진행
                                    </p>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="w-2 h-2 rounded-full bg-[#1e3a8a] mt-2.5 shrink-0"></div>
                                    <p className="text-[18px] text-gray-800 font-bold leading-relaxed break-keep">
                                        삼성물산 마스터리스 확약 연장 / 대명소노그룹 SI 자본 추가 Commitment 확정 / 한투리얼·HDC현산 트랜치 B 우선매수권 사전 정리
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Phase 2: 단기 */}
                    <div className={`flex flex-col md:flex-row w-full bg-white border-2 border-gray-200 shadow-md transition-all duration-700 delay-500 ${step >= 4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        <div className="md:w-[270px] bg-blue-900 text-white flex flex-col justify-center items-center p-6 shrink-0 border-r-[6px] border-blue-950">
                            <div className="text-[32px] font-black tracking-tight leading-none mb-2">1.2 단기</div>
                            <div className="text-[16px] font-bold text-blue-200 uppercase tracking-widest">(2026.9 ~ 2026.12)</div>
                        </div>
                        <div className="flex-1 p-6 md:p-8 flex flex-col justify-center">
                            <ul className="space-y-4">
                                <li className="flex items-start gap-4">
                                    <div className="w-2 h-2 rounded-full bg-blue-900 mt-2.5 shrink-0"></div>
                                    <p className="text-[18px] text-gray-800 font-bold leading-relaxed break-keep">
                                        <span className="text-blue-900 font-black">7조 원 통합 PF 컨센서스 구축</span>
                                    </p>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="w-2 h-2 rounded-full bg-blue-900 mt-2.5 shrink-0"></div>
                                    <p className="text-[18px] text-gray-800 font-bold leading-relaxed break-keep">
                                        글로벌 LP 1~2개사 IPR Equity 참여 LOI 확보 (GIC·CPPIB·QIA 우선 타겟)
                                    </p>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="w-2 h-2 rounded-full bg-blue-900 mt-2.5 shrink-0"></div>
                                    <p className="text-[18px] text-gray-800 font-bold leading-relaxed break-keep">
                                        Option C 신설 SPC 구조 확정 및 12월 클로징 Grand Stage 준비
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Phase 3: 중기 */}
                    <div className={`flex flex-col md:flex-row w-full bg-white border-2 border-gray-200 shadow-md transition-all duration-700 delay-700 ${step >= 5 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        <div className="md:w-[270px] bg-gray-800 text-white flex flex-col justify-center items-center p-6 shrink-0 border-r-[6px] border-gray-900">
                            <div className="text-[32px] font-black tracking-tight leading-none mb-2">1.3 중기</div>
                            <div className="text-[16px] font-bold text-gray-300 uppercase tracking-widest">(2027 ~ 2028)</div>
                        </div>
                        <div className="flex-1 p-6 md:p-8 flex flex-col justify-center">
                            <ul className="space-y-4">
                                <li className="flex items-start gap-4">
                                    <div className="w-2 h-2 rounded-full bg-gray-800 mt-2.5 shrink-0"></div>
                                    <p className="text-[18px] text-gray-800 font-bold leading-relaxed break-keep">
                                        <span className="text-gray-900 font-black">YD427 2차 PF 4.5조 원 조달</span> Successful Execution
                                    </p>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="w-2 h-2 rounded-full bg-gray-800 mt-2.5 shrink-0"></div>
                                    <p className="text-[18px] text-gray-800 font-bold leading-relaxed break-keep">
                                        IGIS DC REIT 분사 상장 준비 및 시니어 REIT 첫 자산 풀 구축
                                    </p>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="w-2 h-2 rounded-full bg-gray-800 mt-2.5 shrink-0"></div>
                                    <p className="text-[18px] text-gray-800 font-bold leading-relaxed break-keep">
                                        이지스 1호 글로벌 코밍글드 펀드 $1B USD 1차 클로징
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Phase 4: 장기 */}
                    <div className={`flex flex-col md:flex-row w-full bg-white border-2 border-gray-200 shadow-md transition-all duration-700 delay-1000 ${step >= 6 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        <div className="md:w-[270px] bg-gray-600 text-white flex flex-col justify-center items-center p-6 shrink-0 border-r-[6px] border-gray-700">
                            <div className="text-[32px] font-black tracking-tight leading-none mb-2">1.4 장기</div>
                            <div className="text-[16px] font-bold text-gray-200 uppercase tracking-widest">(2029 ~ 2031)</div>
                        </div>
                        <div className="flex-1 p-6 md:p-8 flex flex-col justify-center">
                            <ul className="space-y-4">
                                <li className="flex items-start gap-4">
                                    <div className="w-2 h-2 rounded-full bg-gray-600 mt-2.5 shrink-0"></div>
                                    <p className="text-[18px] text-gray-800 font-bold leading-relaxed break-keep">
                                        <span className="text-gray-900 font-black">IOTA 1·2 단계적 준공</span> 및 트로피 시리즈 2호(YIBD 또는 잠실) Launch
                                    </p>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="w-2 h-2 rounded-full bg-gray-600 mt-2.5 shrink-0"></div>
                                    <p className="text-[18px] text-gray-800 font-bold leading-relaxed break-keep">
                                        글로벌 LP 베이스 30%+로 확장 및 AUM 100조 원 돌파
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Section139;
