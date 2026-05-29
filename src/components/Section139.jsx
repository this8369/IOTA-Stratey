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
        <section className="section w-full h-full bg-[#f4f4f5] flex flex-col items-center justify-center relative px-6 md:px-16 overflow-hidden">
            <div className="w-full max-w-[1500px] mx-auto flex flex-col justify-center items-center h-full">
                
                {/* Header */}
                <div className="w-full flex flex-col items-center text-center mb-[40px]">
                    <div className={`transition-all duration-[612ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${step >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        <span className="inline-block text-[20px] md:text-[24px] font-bold text-[#1e3a8a] tracking-[-0.02em] mb-[12px]">
                            {lang === 'kr' ? '실행 전략' : 'Execution Strategy'}
                        </span>
                    </div>
                    <h2 className={`text-[32px] md:text-[46px] lg:text-[46px] font-extrabold leading-[calc(1.3em-6px)] text-[#1d1d1f] break-keep tracking-[-0.02em] transition-all duration-[612ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${step >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        {lang === 'kr' ? '향후 액션 아이템 우선순위' : 'Future Action Item Priorities'}
                    </h2>
                </div>

                {/* Content: 2x2 Grid */}
                <div className="w-full max-w-[1300px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                    
                    {/* Phase 1 */}
                    <div className={`bg-white border-[4px] border-[#1e3a8a] px-8 py-8 flex flex-col shadow-md transition-all duration-[600ms] ${step >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                        <div className="flex flex-col md:flex-row md:items-end justify-between border-b-2 border-[#1e3a8a] pb-4 mb-6 gap-2">
                            <h3 className="text-[28px] font-black text-[#1e3a8a] tracking-tight">1.1 즉시</h3>
                            <span className="text-[16px] font-bold text-gray-500 tracking-widest">(2026.5 ~ 2026.9)</span>
                        </div>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <span className="text-[#1e3a8a] font-black mr-3 mt-[2px]">▪</span>
                                <p className="text-[17px] md:text-[18px] text-gray-800 font-bold leading-snug break-keep">
                                    {lang === 'kr' ? 'YD816 본PF 전환 클로징 또는 공매 회피 인수자 확정' : 'YD816 Main PF Conversion Closing or securing buyer to avoid public sale'}
                                </p>
                            </li>
                            <li className="flex items-start">
                                <span className="text-[#1e3a8a] font-black mr-3 mt-[2px]">▪</span>
                                <p className="text-[17px] md:text-[18px] text-gray-800 font-bold leading-snug break-keep">
                                    {lang === 'kr' ? '메리츠증권 추가 협상 및 대체 Senior 대주(농협·하나·신한) 동시 진행' : 'Additional negotiation with Meritz Sec & concurrent process with alternative Senior Lenders (NH/Hana/Shinhan)'}
                                </p>
                            </li>
                            <li className="flex items-start">
                                <span className="text-[#1e3a8a] font-black mr-3 mt-[2px]">▪</span>
                                <p className="text-[17px] md:text-[18px] text-gray-800 font-bold leading-snug break-keep">
                                    {lang === 'kr' ? '삼성물산 마스터리스 확약 연장 / 대명소노그룹 SI 자본 추가 Commitment 확정 / 한투리얼·HDC현산 트랜치 B 우선매수권 사전 정리' : 'Samsung C&T Master Lease extension / Daemyung Sono SI capital commitment / KIS/HDC Tranche B ROFR pre-arrangement'}
                                </p>
                            </li>
                        </ul>
                    </div>

                    {/* Phase 2 */}
                    <div className={`bg-white border-[4px] border-[#1e3a8a] px-8 py-8 flex flex-col shadow-md transition-all duration-[600ms] ${step >= 4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                        <div className="flex flex-col md:flex-row md:items-end justify-between border-b-2 border-[#1e3a8a] pb-4 mb-6 gap-2">
                            <h3 className="text-[28px] font-black text-[#1e3a8a] tracking-tight">1.2 단기</h3>
                            <span className="text-[16px] font-bold text-gray-500 tracking-widest">(2026.9 ~ 2026.12)</span>
                        </div>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <span className="text-[#1e3a8a] font-black mr-3 mt-[2px]">▪</span>
                                <p className="text-[17px] md:text-[18px] text-gray-800 font-bold leading-snug break-keep">
                                    {lang === 'kr' ? '7조 원 통합 PF 컨센서스 구축' : 'Establish consensus for 7T KRW integrated PF'}
                                </p>
                            </li>
                            <li className="flex items-start">
                                <span className="text-[#1e3a8a] font-black mr-3 mt-[2px]">▪</span>
                                <p className="text-[17px] md:text-[18px] text-gray-800 font-bold leading-snug break-keep">
                                    {lang === 'kr' ? '글로벌 LP 1~2개사 IPR Equity 참여 LOI 확보 (GIC·CPPIB·QIA 우선 타겟)' : 'Secure LOI for IPR Equity participation from 1~2 Global LPs (Targeting GIC/CPPIB/QIA)'}
                                </p>
                            </li>
                            <li className="flex items-start">
                                <span className="text-[#1e3a8a] font-black mr-3 mt-[2px]">▪</span>
                                <p className="text-[17px] md:text-[18px] text-gray-800 font-bold leading-snug break-keep">
                                    {lang === 'kr' ? 'Option C 신설 SPC 구조 확정 및 12월 클로징 Grand Stage 준비' : 'Finalize Option C new SPC structure & prepare for December Closing Grand Stage'}
                                </p>
                            </li>
                        </ul>
                    </div>

                    {/* Phase 3 */}
                    <div className={`bg-white border-[4px] border-[#1e3a8a] px-8 py-8 flex flex-col shadow-md transition-all duration-[600ms] ${step >= 5 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                        <div className="flex flex-col md:flex-row md:items-end justify-between border-b-2 border-[#1e3a8a] pb-4 mb-6 gap-2">
                            <h3 className="text-[28px] font-black text-[#1e3a8a] tracking-tight">1.3 중기</h3>
                            <span className="text-[16px] font-bold text-gray-500 tracking-widest">(2027 ~ 2028)</span>
                        </div>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <span className="text-[#1e3a8a] font-black mr-3 mt-[2px]">▪</span>
                                <p className="text-[17px] md:text-[18px] text-gray-800 font-bold leading-snug break-keep">
                                    {lang === 'kr' ? 'YD427 2차 PF 4.5조 원 조달 Successful Execution' : 'Successful Execution of YD427 2nd PF 4.5T KRW procurement'}
                                </p>
                            </li>
                            <li className="flex items-start">
                                <span className="text-[#1e3a8a] font-black mr-3 mt-[2px]">▪</span>
                                <p className="text-[17px] md:text-[18px] text-gray-800 font-bold leading-snug break-keep">
                                    {lang === 'kr' ? 'IGIS DC REIT 분사 상장 준비 및 시니어 REIT 첫 자산 풀 구축' : 'Prepare IGIS DC REIT spin-off IPO & build first asset pool for Senior REIT'}
                                </p>
                            </li>
                            <li className="flex items-start">
                                <span className="text-[#1e3a8a] font-black mr-3 mt-[2px]">▪</span>
                                <p className="text-[17px] md:text-[18px] text-gray-800 font-bold leading-snug break-keep">
                                    {lang === 'kr' ? '이지스 1호 글로벌 코밍글드 펀드 $1B USD 1차 클로징' : '1st Closing of IGIS No.1 Global Commingled Fund ($1B USD)'}
                                </p>
                            </li>
                        </ul>
                    </div>

                    {/* Phase 4 */}
                    <div className={`bg-white border-[4px] border-[#1e3a8a] px-8 py-8 flex flex-col shadow-md transition-all duration-[600ms] ${step >= 6 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                        <div className="flex flex-col md:flex-row md:items-end justify-between border-b-2 border-[#1e3a8a] pb-4 mb-6 gap-2">
                            <h3 className="text-[28px] font-black text-[#1e3a8a] tracking-tight">1.4 장기</h3>
                            <span className="text-[16px] font-bold text-gray-500 tracking-widest">(2029 ~ 2031)</span>
                        </div>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <span className="text-[#1e3a8a] font-black mr-3 mt-[2px]">▪</span>
                                <p className="text-[17px] md:text-[18px] text-gray-800 font-bold leading-snug break-keep">
                                    {lang === 'kr' ? 'IOTA 1·2 단계적 준공 및 트로피 시리즈 2호(YIBD 또는 잠실) Launch' : 'Phased completion of IOTA 1·2 & Launch of Trophy Series No.2 (YIBD or Jamsil)'}
                                </p>
                            </li>
                            <li className="flex items-start">
                                <span className="text-[#1e3a8a] font-black mr-3 mt-[2px]">▪</span>
                                <p className="text-[17px] md:text-[18px] text-gray-800 font-bold leading-snug break-keep">
                                    {lang === 'kr' ? '글로벌 LP 베이스 30%+로 확장 및 AUM 100조 원 돌파' : 'Expand Global LP base to 30%+ and surpass 100T KRW AUM'}
                                </p>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Section139;
