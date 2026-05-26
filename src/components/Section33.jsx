import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Section33({ isActive }) {
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
                        {lang === 'kr' ? '[서울 오피스 5] 연간 거래량 30조 시대와 자본의 회귀' : '[Seoul Office 5] 30 Trillion Won Era & Return of Capital'}
                    </span>
                </div>

                <h2 className={`text-[32px] md:text-[46px] lg:text-[52px] font-extrabold leading-[calc(1.3em-6px)] text-[#1d1d1f] break-keep tracking-[-0.02em] transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${step >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    {lang === 'kr' ? '금리 인하 기대 속 외국인 유동성의 대규모 진입과 캡레이트 압축' : 'Massive Influx of Foreign Liquidity & Cap Rate Compression'}
                </h2>

                <div className="relative w-full max-w-[1100px] mt-[40px] mb-[30px] h-auto flex flex-col md:flex-row items-stretch justify-center z-10 gap-8">
                    
                    {/* Volume Card */}
                    <div className={`flex-1 flex flex-col justify-center items-center bg-white border border-gray-200 rounded-[30px] p-10 shadow-xl transition-all duration-1000 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${step >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                        <div className="text-gray-500 font-bold text-[20px] mb-2">{lang === 'kr' ? '2025년 서울 상업용 부동산 거래량 (예상)' : '2025 Seoul CRE Transaction Volume (Est.)'}</div>
                        <div className="text-[64px] font-black text-gray-900 leading-none mb-4">30<span className="text-[32px]">조 원</span></div>
                        
                        <div className="w-full mt-6 bg-gray-50 rounded-2xl p-4 flex flex-col gap-2 text-left border border-gray-100">
                            <div className="flex justify-between items-center text-[16px] font-bold">
                                <span className="text-gray-500">2021 (저금리기)</span>
                                <span className="text-gray-800">21조 원</span>
                            </div>
                            <div className="flex justify-between items-center text-[16px] font-bold">
                                <span className="text-gray-500">2024</span>
                                <span className="text-gray-800">22조 원</span>
                            </div>
                            <div className="flex justify-between items-center text-[18px] font-black">
                                <span className="text-blue-600">2025 연말 (예상)</span>
                                <span className="text-blue-600">30조 원 돌파</span>
                            </div>
                        </div>
                    </div>

                    {/* Cap Rate Card */}
                    <div className={`flex-1 flex flex-col justify-center items-center bg-gray-900 text-white rounded-[30px] p-10 shadow-xl transition-all duration-1000 ease-[cubic-bezier(0.34,1.56,0.64,1)] delay-200 ${step >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                        <div className="text-gray-400 font-bold text-[20px] mb-2">{lang === 'kr' ? '2025 하반기 캡레이트 압축' : 'H2 2025 Cap Rate Compression'}</div>
                        <div className="text-[64px] font-black text-blue-400 leading-none mb-4">4.2~4.5<span className="text-[32px]">%</span></div>
                        
                        <div className="w-full mt-6 bg-white/10 rounded-2xl p-4 flex flex-col gap-2 text-left border border-white/10">
                            <div className="flex justify-between items-center text-[16px] font-bold text-gray-300">
                                <span>2021 (저점)</span>
                                <span>3.5~4.0%</span>
                            </div>
                            <div className="flex justify-between items-center text-[16px] font-bold text-gray-300">
                                <span>2023~2024</span>
                                <span>4.5~5.0%</span>
                            </div>
                            <div className="flex justify-between items-center text-[18px] font-black text-white">
                                <span className="text-blue-300">{lang === 'kr' ? '외국인 자본 회귀 본격화' : 'Return of Foreign Capital'}</span>
                                <span className="text-blue-300">Q3 2025</span>
                            </div>
                        </div>
                        <div className="mt-4 text-[14px] font-bold text-gray-400">
                            Aberdeen, BentallGreenOak, PAG 등
                        </div>
                    </div>

                </div>

                <div className={`mt-[10px] max-w-[1000px] text-[15px] md:text-[19px] leading-[1.45] font-medium text-gray-700 break-keep text-center transition-all duration-[900ms] ease-out ${step >= 4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <ul className="text-left inline-block space-y-2 mx-auto">
                        {lang === 'kr' ? (
                            <>
                                <li className="flex items-start"><span className="mr-3 text-gray-500">▪</span><span>2025년 거래량은 9월 누적 25조 원을 기록, <strong>연말 30조 원 돌파 예상</strong>으로 과거 저금리기의 21조 원 기록을 크게 경신.</span></li>
                                <li className="flex items-start"><span className="mr-3 text-gray-500">▪</span><span>캡레이트는 2023~2024년 4.5~5.0%에서 <strong>금리 인하 기대로 4.2~4.5%로 다시 압축</strong> 중.</span></li>
                                <li className="flex items-start"><span className="mr-3 text-gray-500">▪</span><span>Aberdeen, BentallGreenOak, PAG 등 <strong>외국인 자본 회귀가 본격화된 시점이 2025년 3분기</strong>임.</span></li>
                            </>
                        ) : (
                            <>
                                <li className="flex items-start"><span className="mr-3 text-gray-500">▪</span><span>2025 transaction volume hit 25T KRW by Q3, <strong>expected to break 30T KRW by year-end</strong>, smashing the 2021 record.</span></li>
                                <li className="flex items-start"><span className="mr-3 text-gray-500">▪</span><span>Cap rates are <strong>compressing back to 4.2-4.5%</strong> from the 4.5-5.0% peak of 2023-2024.</span></li>
                                <li className="flex items-start"><span className="mr-3 text-gray-500">▪</span><span>The <strong>return of foreign capital</strong> (Aberdeen, BGO, PAG) materialized in full force in Q3 2025.</span></li>
                            </>
                        )}
                    </ul>
                </div>
            </div>
        </section>
    );
}
