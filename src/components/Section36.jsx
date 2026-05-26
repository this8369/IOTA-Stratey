import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Section36({ isActive }) {
    const { lang } = useLanguage();
    const [step, setStep] = useState(0);

    useEffect(() => {
        if (!isActive) {
            setStep(0);
            return;
        }
        const timers = [
            setTimeout(() => setStep(1), 300),
            setTimeout(() => setStep(2), 1000),
            setTimeout(() => setStep(3), 1600),
            setTimeout(() => setStep(4), 2200),
            setTimeout(() => setStep(5), 2800)
        ];
        return () => timers.forEach(clearTimeout);
    }, [isActive]);

    return (
        <section className="section w-full h-full bg-[#fdfdfd] flex flex-col items-center justify-center relative px-6 md:px-16 overflow-hidden">
            <div className="w-full max-w-[1400px] mx-auto flex flex-col items-center text-center">
                
                <div className={`transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${step >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <span className="inline-block text-[22px] md:text-[26px] font-bold text-[#888] uppercase tracking-[-0.02em] mb-[12px] bg-transparent">
                        {lang === 'kr' ? '물류센터 공급 과잉의 소화와 정상화' : 'Digestion and Normalization of Logistics Oversupply'}
                    </span>
                </div>

                <h2 className={`text-[32px] md:text-[46px] lg:text-[52px] font-extrabold leading-[calc(1.3em-6px)] text-[#1d1d1f] break-keep tracking-[-0.02em] transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${step >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    {lang === 'kr' ? '신규 공급의 급감 속에서 신흥 3대 권역으로 떠오른 안성' : 'Anseong Emerging as a New Top 3 District Amid Supply Drop'}
                </h2>

                <div className="relative w-full max-w-[1100px] mt-[40px] mb-[30px] h-auto flex flex-col md:flex-row items-center justify-center z-10 gap-10">
                    
                    {/* Vacancy Trend */}
                    <div className={`relative w-[450px] flex flex-col items-center bg-white border border-gray-300 rounded-[30px] p-10 shadow-xl hover:shadow-2xl transition-all duration-1000 hover:-translate-y-2 ${step >= 2 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
                        <div className="absolute -top-6 bg-gradient-to-r from-red-500 to-rose-600 text-white font-black text-[22px] px-6 py-2 rounded-full shadow-md">
                            {lang === 'kr' ? '수도권 Grade-A 공실률' : 'Grade-A Vacancy Rate'}
                        </div>
                        
                        <div className="w-full flex justify-between items-end mt-6 mb-8 px-4">
                            <div className="flex flex-col items-center">
                                <span className="text-gray-400 font-bold text-[14px]">2023-2024</span>
                                <span className="text-red-500 font-black text-[38px]">23%</span>
                                <span className="text-gray-500 font-bold text-[14px]">{lang === 'kr' ? '과잉 공급 (최고치)' : 'Oversupply (Peak)'}</span>
                            </div>
                            <div className="text-gray-300 font-black text-[32px] mb-6">→</div>
                            <div className="flex flex-col items-center">
                                <span className="text-gray-400 font-bold text-[14px]">2025</span>
                                <span className="text-blue-600 font-black text-[38px]">19~20%</span>
                                <span className="text-gray-500 font-bold text-[14px]">{lang === 'kr' ? '정상화 진행' : 'Normalizing'}</span>
                            </div>
                        </div>

                        <div className="w-full bg-blue-50 py-3 rounded-xl border border-blue-100 text-center">
                            <span className="text-blue-700 font-bold text-[16px]">{lang === 'kr' ? '2025년 신규 공급 약 68% 감소' : '2025 New Supply Dropped by 68%'}</span>
                        </div>
                    </div>

                    <div className={`text-[40px] font-black text-gray-300 transition-all duration-1000 ${step >= 3 ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
                        &
                    </div>

                    {/* Regional Shift */}
                    <div className={`relative w-[450px] flex flex-col items-center bg-white border border-gray-300 rounded-[30px] p-10 shadow-xl hover:shadow-2xl transition-all duration-1000 hover:-translate-y-2 ${step >= 4 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
                        <div className="absolute -top-6 bg-gradient-to-r from-teal-500 to-emerald-600 text-white font-black text-[22px] px-6 py-2 rounded-full shadow-md">
                            {lang === 'kr' ? '권역별 핵심 동향' : 'Regional Dynamics'}
                        </div>
                        
                        <div className="w-full flex flex-col gap-4 mt-6">
                            <div className="flex flex-col items-center justify-center bg-gray-50 py-4 rounded-xl border border-gray-200 shadow-sm relative overflow-hidden">
                                <div className="absolute left-0 top-0 h-full w-2 bg-emerald-400"></div>
                                <span className="font-extrabold text-[20px] text-gray-800">{lang === 'kr' ? '안성 (Anseong)' : 'Anseong'}</span>
                                <span className="font-bold text-[15px] text-gray-500 mt-1">{lang === 'kr' ? '수도권 3대 물류권역으로 신규 부상' : 'Emerged as Top 3 Hub in Capital Area'}</span>
                            </div>
                            <div className="flex flex-col items-center justify-center bg-gray-50 py-4 rounded-xl border border-gray-200 shadow-sm relative overflow-hidden">
                                <div className="absolute left-0 top-0 h-full w-2 bg-blue-400"></div>
                                <span className="font-extrabold text-[20px] text-gray-800">{lang === 'kr' ? '이천·용인 (Icheon·Yongin)' : 'Icheon·Yongin'}</span>
                                <span className="font-bold text-[15px] text-gray-500 mt-1">{lang === 'kr' ? '콜드체인 강세 지속' : 'Strong in Cold Chain Sector'}</span>
                            </div>
                        </div>
                    </div>

                </div>

                <div className={`mt-[10px] max-w-[1000px] text-[15px] md:text-[19px] leading-[1.45] font-medium text-gray-700 break-keep text-center transition-all duration-[900ms] ease-out ${step >= 5 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <ul className="text-left inline-block space-y-2 mx-auto">
                        {lang === 'kr' ? (
                            <>
                                <li className="flex items-start"><span className="mr-3 text-blue-500">▪</span><span>수도권 Grade-A 물류센터는 2023~2024년 과잉 공급으로 <strong>공실률 23%</strong>까지 치솟았음(CBRE).</span></li>
                                <li className="flex items-start"><span className="mr-3 text-blue-500">▪</span><span>그러나 2025년 신규 공급이 <strong>약 68% 감소</strong>하며 공실률이 19~20%대로 정상화 국면에 진입함.</span></li>
                                <li className="flex items-start"><span className="mr-3 text-blue-500">▪</span><span><strong>안성</strong>이 수도권 3대 물류권역으로 신규 부상하였으며, <strong>이천·용인</strong>은 콜드체인 부문에서 강세를 이어감.</span></li>
                            </>
                        ) : (
                            <>
                                <li className="flex items-start"><span className="mr-3 text-blue-500">▪</span><span>Capital Area Grade-A logistics hit a <strong>23% vacancy rate</strong> during the 23-24 oversupply (CBRE).</span></li>
                                <li className="flex items-start"><span className="mr-3 text-blue-500">▪</span><span>However, with 2025 new supply <strong>dropping by 68%</strong>, the vacancy is normalizing to the 19-20% range.</span></li>
                                <li className="flex items-start"><span className="mr-3 text-blue-500">▪</span><span><strong>Anseong</strong> has newly emerged as a top 3 logistics hub, while <strong>Icheon & Yongin</strong> remain strong in cold chains.</span></li>
                            </>
                        )}
                    </ul>
                </div>
            </div>
        </section>
    );
}
