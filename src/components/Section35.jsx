import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Section35({ isActive }) {
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
                        {lang === 'kr' ? '단일 임차인이 창조한 쿠팡 이펙트' : 'The Coupang Effect Created by a Single Tenant'}
                    </span>
                </div>

                <h2 className={`text-[32px] md:text-[46px] lg:text-[52px] font-extrabold leading-[calc(1.3em-6px)] text-[#1d1d1f] break-keep tracking-[-0.02em] transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${step >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    {lang === 'kr' ? '수도권 외곽을 물류 허브로 둔갑시킨 국가급 라스트마일 네트워크' : 'Transforming the Capital Outskirts into a National Last-Mile Network'}
                </h2>

                <div className="relative w-full max-w-[1200px] mt-[40px] mb-[30px] h-auto flex flex-col md:flex-row items-stretch justify-center z-10 gap-6 md:gap-8">
                    
                    {/* Growth Box */}
                    <div className={`flex-1 flex flex-col items-center bg-gray-50 border border-gray-300 rounded-[24px] p-10 shadow-lg hover:shadow-2xl transition-all duration-700 hover:-translate-y-2 ${step >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                        <div className="w-20 h-20 bg-yellow-100 text-yellow-600 rounded-2xl flex items-center justify-center font-black text-[32px] mb-6 shadow-sm">40x</div>
                        <h3 className="text-[26px] font-extrabold text-gray-900 mb-2">{lang === 'kr' ? '쿠팡 매출 폭발적 성장' : 'Explosive Revenue Growth'}</h3>
                        <p className="text-[18px] font-bold text-gray-500 mb-8">{lang === 'kr' ? '2014년 1조 원 → 2024년 42조 원' : '1T KRW (2014) → 42T KRW (2024)'}</p>
                        
                        <div className="w-full flex flex-col gap-4">
                            <div className="bg-white px-6 py-4 rounded-xl border border-gray-300 shadow-sm flex flex-col items-center justify-center text-center">
                                <span className="font-bold text-[18px] text-gray-800">{lang === 'kr' ? '가장 극적인 신규 섹터' : 'Most Dramatic New Sector'}</span>
                                <span className="text-[14px] text-gray-500 font-medium mt-1">{lang === 'kr' ? '1조→2조 달러 구간의 상징' : 'Symbol of the $1T-$2T Era'}</span>
                            </div>
                        </div>
                    </div>

                    {/* Network Box */}
                    <div className={`flex-1 flex flex-col items-center bg-gray-50 border border-gray-300 rounded-[24px] p-10 shadow-lg hover:shadow-2xl transition-all duration-700 hover:-translate-y-2 ${step >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                        <div className="w-20 h-20 bg-orange-100 text-orange-600 rounded-2xl flex items-center justify-center font-black text-[32px] mb-6 shadow-sm">NET</div>
                        <h3 className="text-[26px] font-extrabold text-gray-900 mb-2">{lang === 'kr' ? '국가급 물류 네트워크 형성' : 'National Logistics Network'}</h3>
                        <p className="text-[18px] font-bold text-gray-500 mb-8">{lang === 'kr' ? '용인·이천·안성·평택 라인' : 'Yongin·Icheon·Anseong·Pyeongtaek Line'}</p>
                        
                        <div className="w-full flex flex-col gap-3">
                            <div className="bg-white px-4 py-3 rounded-xl border border-gray-300 font-bold text-gray-700 shadow-sm">콜드체인 (Cold Chain)</div>
                            <div className="bg-white px-4 py-3 rounded-xl border border-gray-300 font-bold text-gray-700 shadow-sm">라스트마일 (Last-Mile)</div>
                            <div className="bg-white px-4 py-3 rounded-xl border border-gray-300 font-bold text-gray-700 shadow-sm">풀필먼트 센터 (Fulfillment Center)</div>
                        </div>
                    </div>

                </div>

                <div className={`mt-[10px] max-w-[1000px] text-[15px] md:text-[19px] leading-[1.45] font-medium text-gray-700 break-keep text-center transition-all duration-[900ms] ease-out ${step >= 4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <ul className="text-left inline-block space-y-2 mx-auto">
                        {lang === 'kr' ? (
                            <>
                                <li className="flex items-start"><span className="mr-3 text-orange-500">▪</span><span><strong>1조→2조 달러 구간의 가장 극적인 신규 섹터.</strong> 쿠팡 매출은 2014년 1조 원에서 2024년 약 42조 원으로 약 40배 확장됨.</span></li>
                                <li className="flex items-start"><span className="mr-3 text-orange-500">▪</span><span>이는 단일 임차인이 만든 <strong>국가급 물류 수요의 첫 사례</strong>로 기록됨.</span></li>
                                <li className="flex items-start"><span className="mr-3 text-orange-500">▪</span><span>콜드체인·라스트마일·풀필먼트 센터가 수도권 외곽인 <strong>용인·이천·안성·평택</strong>을 따라 거대한 허브로 형성됨.</span></li>
                            </>
                        ) : (
                            <>
                                <li className="flex items-start"><span className="mr-3 text-orange-500">▪</span><span><strong>The most dramatic new sector of the $1T-$2T era.</strong> Coupang's revenue exploded 40x from 1T (2014) to 42T KRW (2024).</span></li>
                                <li className="flex items-start"><span className="mr-3 text-orange-500">▪</span><span>This marks the first instance of a <strong>national-scale logistics demand created by a single tenant</strong>.</span></li>
                                <li className="flex items-start"><span className="mr-3 text-orange-500">▪</span><span>Cold chain, last-mile, and fulfillment centers formed massive hubs along <strong>Yongin, Icheon, Anseong, and Pyeongtaek</strong>.</span></li>
                            </>
                        )}
                    </ul>
                </div>
            </div>
        </section>
    );
}
