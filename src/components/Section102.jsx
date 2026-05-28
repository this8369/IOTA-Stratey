import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Section102({ isActive }) {
    const { lang } = useLanguage();
    const [step, setStep] = useState(0);

    useEffect(() => {
        if (!isActive) { setStep(0); return; }
        const timers = [
            setTimeout(() => setStep(1), 300),
            setTimeout(() => setStep(2), 800),
            setTimeout(() => setStep(3), 1200),
            setTimeout(() => setStep(4), 1400),
            setTimeout(() => setStep(5), 1600),
            setTimeout(() => setStep(6), 1800),
            setTimeout(() => setStep(7), 2400)
        ];
        return () => timers.forEach(clearTimeout);
    }, [isActive]);

    return (
        <section className="section w-full h-full bg-[#fdfdfd] flex flex-col items-center justify-center relative px-6 md:px-16 overflow-hidden">
            <div className="w-full max-w-[1400px] mx-auto flex flex-col items-center text-center">
                
                <div className={`transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${step >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <span className="inline-block text-[22px] md:text-[26px] font-bold text-[#888] uppercase tracking-[-0.02em] mb-[12px] bg-transparent">
                        {lang === 'kr' ? 'AI 도입 워크플로우' : 'AI Adoption Workflow'}
                    </span>
                </div>

                <h2 className={`text-[32px] md:text-[46px] lg:text-[52px] font-extrabold leading-[calc(1.3em-6px)] text-[#1d1d1f] break-keep tracking-[-0.02em] mb-12 transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${step >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    {lang === 'kr' ? <>전 밸류체인의 AI 인프라 고도화 및 운용 효율 극대화</> : <>AI Infrastructure Enhancement & Operation Efficiency across Value Chain</>}
                </h2>

                {/* 2x2 Grid for Workflows */}
                <div className="w-full max-w-[1200px] grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                    
                    {/* 1. Acquisition Underwriting */}
                    <div className={`flex flex-col text-left bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm transition-all duration-700 ${step >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        <div className="flex items-center gap-4 mb-5">
                            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center font-black text-2xl">1</div>
                            <h3 className="text-[20px] md:text-[24px] font-bold text-gray-900">6.1 Acquisition Underwriting</h3>
                        </div>
                        <p className="text-[16px] md:text-[18px] text-gray-600 leading-relaxed font-medium break-keep">
                            {lang === 'kr' 
                                ? 'Claude/GPT 기반 자동화 LOI 작성, 시장 비교 분석, Cap rate 시나리오 산출, IC 메모 초안 자동 생성. Goldman과 Blackstone이 이미 도입한 워크플로우의 한국 적용.'
                                : 'Claude/GPT-based automated LOI drafting, market comp analysis, Cap rate scenarios, and IC memo drafts. Applying Goldman & Blackstone workflows to Korea.'}
                        </p>
                    </div>

                    {/* 2. Asset Management */}
                    <div className={`flex flex-col text-left bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm transition-all duration-700 delay-100 ${step >= 4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        <div className="flex items-center gap-4 mb-5">
                            <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center font-black text-2xl">2</div>
                            <h3 className="text-[20px] md:text-[24px] font-bold text-gray-900 break-keep">6.2 Asset Management / CF Protection</h3>
                        </div>
                        <p className="text-[16px] md:text-[18px] text-gray-600 leading-relaxed font-medium break-keep">
                            {lang === 'kr' 
                                ? '임차인 모니터링, 임대료 연체 예측, 공실 위험 조기 경보, 캡엑스(CAPEX) 최적화. 이지스 73조 원 AUM 전체에 적용 시 운용 효율 20~30% 개선 기대.'
                                : 'Tenant monitoring, rent arrears prediction, early vacancy warning, and CAPEX optimization. Expect 20-30% efficiency gain across IGIS 73T KRW AUM.'}
                        </p>
                    </div>

                    {/* 3. LP Reporting */}
                    <div className={`flex flex-col text-left bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm transition-all duration-700 delay-200 ${step >= 5 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        <div className="flex items-center gap-4 mb-5">
                            <div className="w-12 h-12 bg-teal-100 text-teal-600 rounded-xl flex items-center justify-center font-black text-2xl">3</div>
                            <h3 className="text-[20px] md:text-[24px] font-bold text-gray-900">6.3 LP Reporting</h3>
                        </div>
                        <p className="text-[16px] md:text-[18px] text-gray-600 leading-relaxed font-medium break-keep">
                            {lang === 'kr' 
                                ? '분기 LP 리포트 자동 생성, 한·영·중·일 동시 출력, ESG 데이터 통합. 글로벌 LP 베이스 확장 시 필수적인 커뮤니케이션 인프라 구축.'
                                : 'Automated quarterly LP reports with simultaneous EN/KR/CN/JP output and ESG data integration. Essential infra for global LP base expansion.'}
                        </p>
                    </div>

                    {/* 4. IPR Project REIT */}
                    <div className={`flex flex-col text-left bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm transition-all duration-700 delay-300 ${step >= 6 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        <div className="flex items-center gap-4 mb-5">
                            <div className="w-12 h-12 bg-blue-100 text-blue-800 rounded-xl flex items-center justify-center font-black text-2xl">4</div>
                            <h3 className="text-[20px] md:text-[24px] font-bold text-gray-900">6.4 IPR Project REIT 구조화</h3>
                        </div>
                        <p className="text-[16px] md:text-[18px] text-gray-600 leading-relaxed font-medium break-keep">
                            {lang === 'kr' 
                                ? '7조 원 PF의 시나리오 분석, 트랜치별 캐시플로우 시뮬레이션, 금리·공실·임대료 민감도, IPO/매각 시나리오의 자동화.'
                                : 'Scenario analysis for 7T KRW PF, tranche-level cash flow simulation, interest/vacancy/rent sensitivity, and automated IPO/exit scenarios.'}
                        </p>
                    </div>

                </div>

                {/* Bottom Text (Style from 59~62p) */}
                <div className={`max-w-[1200px] text-[16px] md:text-[20px] leading-[1.5] font-bold text-gray-700 break-keep text-center transition-all duration-[900ms] ease-out ${step >= 7 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <ul className="text-left inline-block space-y-3 mx-auto">
                        <li className="flex items-start"><span className="mr-3 text-[#1d1d1f]">▪</span><span>{lang === 'kr' ? '투자 검토부터 자산 운용, 펀드 리포팅까지 부동산 밸류체인 전반에 AI 자동화 인프라 도입' : 'AI automation infrastructure across the entire real estate value chain from investment review to fund reporting'}</span></li>
                        <li className="flex items-start"><span className="mr-3 text-blue-600">▪</span><span className="text-blue-900">{lang === 'kr' ? '이지스의 방대한 AUM 운용 효율성을 20~30% 획기적으로 개선하며 글로벌 확장의 코어 인프라로 작용' : 'Dramatically improves efficiency of massive AUM by 20-30%, serving as core infra for global expansion'}</span></li>
                    </ul>
                </div>

            </div>
        </section>
    );
}
