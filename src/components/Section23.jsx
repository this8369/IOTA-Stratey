import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Section23({ isActive }) {
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
                        {lang === 'kr' ? '[산업 분석 10] 지정학적 위기가 낳은 K-디펜스' : '[Industry 10] K-Defense Born from Geopolitical Crisis'}
                    </span>
                </div>

                <h2 className={`text-[32px] md:text-[46px] lg:text-[52px] font-extrabold leading-[calc(1.3em-6px)] text-[#1d1d1f] break-keep tracking-[-0.02em] transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${step >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    {lang === 'kr' ? '글로벌 수출 폭발을 기록하며 급부상한 방위산업의 신데렐라 서사' : 'Cinderella Story of the Defense Industry Surging with Global Exports'}
                </h2>

                <div className="relative w-full max-w-[900px] -mt-[8px] h-[360px] flex items-center justify-center z-10 gap-10">
                    
                    {/* Companies & Lineup */}
                    <div className={`relative w-[280px] h-[240px] bg-stone-800 rounded-2xl shadow-xl flex flex-col items-center justify-center p-6 border-b-8 border-stone-600 transition-all duration-1000 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${step >= 2 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
                        <div className="text-[20px] font-black text-white mb-3">Core Lineup</div>
                        <div className="w-full flex flex-col gap-2">
                            <div className="flex justify-between items-center text-[12px] bg-stone-700 px-3 py-1.5 rounded text-gray-200">
                                <span className="font-bold">Hanwha / Rotem</span>
                                <span className="text-[#a3e635]">K9 / K2 Tanks</span>
                            </div>
                            <div className="flex justify-between items-center text-[12px] bg-stone-700 px-3 py-1.5 rounded text-gray-200">
                                <span className="font-bold">KAI</span>
                                <span className="text-[#a3e635]">FA-50</span>
                            </div>
                            <div className="flex justify-between items-center text-[12px] bg-stone-700 px-3 py-1.5 rounded text-gray-200">
                                <span className="font-bold">LIG Nex1</span>
                                <span className="text-[#a3e635]">Cheongung</span>
                            </div>
                        </div>
                    </div>

                    {/* Arrow Export */}
                    <div className={`flex flex-col items-center transition-all duration-1000 ${step >= 3 ? 'opacity-100' : 'opacity-0'}`}>
                        <div className="text-[16px] font-black text-[#65a30d] mb-2 italic">Global Export</div>
                        <div className="w-[120px] h-[4px] bg-gradient-to-r from-stone-400 to-[#65a30d] relative mb-2">
                            <div className="absolute right-[-4px] top-1/2 -translate-y-1/2 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent border-l-[12px] border-l-[#65a30d]"></div>
                        </div>
                        <div className="text-[12px] font-bold text-gray-500">Poland, UAE, MENA</div>
                    </div>

                    {/* Milestone Record */}
                    <div className={`relative w-[220px] h-[220px] rounded-full bg-gradient-to-br from-[#bef264] to-[#65a30d] shadow-[0_0_40px_rgba(101,163,13,0.3)] flex flex-col items-center justify-center border-4 border-white transition-all duration-1000 ease-[cubic-bezier(0.34,1.56,0.64,1)] delay-200 ${step >= 4 ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
                        <span className="text-[16px] font-bold text-green-900 mb-1">2022 Record</span>
                        <span className="text-[48px] font-black text-white leading-none mb-1">$17.3B</span>
                        <span className="text-[12px] font-bold text-green-900 bg-white/40 px-3 py-1 rounded-full">{lang === 'kr' ? '사상 최고치 달성' : 'All-time High'}</span>
                    </div>

                </div>

                <div className={`mt-[10px] max-w-[1000px] text-[15px] md:text-[19px] leading-[1.45] font-medium text-gray-700 break-keep text-center transition-all duration-[900ms] ease-out ${step >= 5 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <ul className="text-left inline-block space-y-2 mx-auto">
                        {lang === 'kr' ? (
                            <>
                                <li className="flex items-start"><span className="mr-3 text-[#65a30d]">▪</span><span>지정학적 위기 고조로 <strong>폴란드·UAE·호주·중동</strong> 등에서 글로벌 방산 수출이 폭발함.</span></li>
                                <li className="flex items-start"><span className="mr-3 text-[#65a30d]">▪</span><span>2022년 한국 방산 수출은 <strong>173억 달러(약 23조 원)로 사상 최고치</strong>를 기록함.</span></li>
                                <li className="flex items-start"><span className="mr-3 text-[#65a30d]">▪</span><span>한화, LIG넥스원, KAI, 현대로템의 <strong>K2 전차·K9 자주포·FA-50·천궁</strong>이 수출을 견인하는 핵심 라인업임.</span></li>
                                <li className="flex items-start"><span className="mr-3 text-[#65a30d]">▪</span><span>1조 ➔ 2조 달러 구간 후반부에 급부상한 명실상부한 <strong>대한민국 산업의 신데렐라 섹터</strong>임.</span></li>
                            </>
                        ) : (
                            <>
                                <li className="flex items-start"><span className="mr-3 text-[#65a30d]">▪</span><span>Global defense exports exploded in <strong>Poland, UAE, Australia, and MENA</strong> due to geopolitical crises.</span></li>
                                <li className="flex items-start"><span className="mr-3 text-[#65a30d]">▪</span><span>Korean defense exports hit an <strong>all-time high of $17.3 billion in 2022</strong>.</span></li>
                                <li className="flex items-start"><span className="mr-3 text-[#65a30d]">▪</span><span>Core lineup driving exports includes <strong>K2 tanks, K9 howitzers, FA-50, and Cheongung</strong> (Hanwha, LIG, KAI, Rotem).</span></li>
                                <li className="flex items-start"><span className="mr-3 text-[#65a30d]">▪</span><span>Undeniably the <strong>Cinderella sector of Korean industry</strong> that emerged in the latter half of the $1T ➔ $2T transition.</span></li>
                            </>
                        )}
                    </ul>
                </div>
            </div>
        </section>
    );
}
