import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Section95({ isActive }) {
    const { lang } = useLanguage();
    const [step, setStep] = useState(0);

    useEffect(() => {
        if (!isActive) { setStep(0); return; }
        const timers = [
            setTimeout(() => setStep(1), 300),
            setTimeout(() => setStep(2), 800),
            setTimeout(() => setStep(3), 1300), // Left column (3.1)
            setTimeout(() => setStep(4), 1800), // Right column (3.2)
            setTimeout(() => setStep(5), 2600)  // Bottom thesis
        ];
        return () => timers.forEach(clearTimeout);
    }, [isActive]);

    return (
        <section className="section w-full h-full bg-[#fdfdfd] flex flex-col items-center justify-center relative px-6 md:px-16 overflow-hidden">
            <div className="w-full max-w-[1400px] mx-auto flex flex-col items-center text-center">
                
                <div className={`transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${step >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <span className="inline-block text-[22px] md:text-[26px] font-bold text-[#888] uppercase tracking-[-0.02em] mb-[12px] bg-transparent">
                        {lang === 'kr' ? '공간 운영 플랫폼 진화의 핵심 매개' : 'Core Medium for Spatial Operating Platform Evolution'}
                    </span>
                </div>

                <h2 className={`text-[32px] md:text-[46px] lg:text-[52px] font-extrabold leading-[calc(1.3em-6px)] text-[#1d1d1f] break-keep tracking-[-0.02em] mb-[40px] transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${step >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    {lang === 'kr' ? <>Factorial Builders(팩빌)를 운영 OS로</> : <>Factorial Builders as the Operating OS</>}
                </h2>

                <div className="w-full max-w-[1200px] grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 relative">
                    
                    {/* Left Column (3.1) */}
                    <div className={`col-span-1 bg-white border-2 border-gray-200 rounded-2xl p-8 text-left shadow-sm flex flex-col gap-5 transition-all duration-1000 ${step >= 3 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
                        <div className="flex items-center gap-3 mb-2">
                            <span className="bg-[#1e3a8a] text-white text-[16px] font-bold px-3 py-1 rounded-md">3.1</span>
                            <h3 className="text-[#1d1d1f] font-extrabold text-[22px] break-keep">
                                {lang === 'kr' ? "'Asset as a Service' (AaaS) 모델" : "'Asset as a Service' (AaaS) Model"}
                            </h3>
                        </div>
                        
                        <div className="flex flex-col gap-4">
                            <div className="bg-blue-50 p-5 rounded-xl border border-blue-100">
                                <h4 className="text-blue-700 font-bold text-[17px] mb-2">{lang === 'kr' ? '공간 운영 플랫폼으로 진화' : 'Evolution into Spatial Operating Platform'}</h4>
                                <p className="text-gray-700 font-medium text-[15px] leading-relaxed break-keep">
                                    {lang === 'kr' 
                                        ? '이지스가 단순 자산운용사를 넘어 공간 운영 플랫폼으로 진화하는 핵심 매개 역할을 수행합니다.' 
                                        : 'Serves as the core medium for IGIS to evolve beyond a simple asset manager into a spatial operating platform.'}
                                </p>
                            </div>

                            <div className="bg-gray-50 p-5 rounded-xl border border-gray-100">
                                <h4 className="text-gray-800 font-bold text-[17px] mb-2">{lang === 'kr' ? '테크 레디 빌딩 (팩토리얼 성수)' : 'Tech-Ready Building (Factorial Seongsu)'}</h4>
                                <p className="text-gray-600 text-[15px] leading-relaxed break-keep">
                                    {lang === 'kr' 
                                        ? "삼성전자·현대차그룹과 공동개발한 로봇·IoT 친화 테크 레디 빌딩으로 공간을 차별화합니다. 삼일PwC와 협업한 'Asset as a Service' 모델은 자산을 단순 임대수익원이 아니라 기업 운영 인프라로 완벽하게 재정의합니다." 
                                        : "Differentiates space as a Robot/IoT-friendly Tech-Ready Building co-developed with Samsung & Hyundai Motor Group. The 'Asset as a Service' model (collaboration with Samil PwC) completely redefines assets from simple rental income sources to corporate operating infrastructure."}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column (3.2) */}
                    <div className={`col-span-1 bg-white border-2 border-gray-200 rounded-2xl p-8 text-left shadow-sm flex flex-col gap-5 transition-all duration-1000 ${step >= 4 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
                        <div className="flex items-center gap-3 mb-2">
                            <span className="bg-[#1e3a8a] text-white text-[16px] font-bold px-3 py-1 rounded-md">3.2</span>
                            <h3 className="text-[#1d1d1f] font-extrabold text-[22px] break-keep">
                                {lang === 'kr' ? "WeWork의 Institutional Version" : "Institutional Version of WeWork"}
                            </h3>
                        </div>
                        
                        <div className="flex flex-col gap-4">
                            <div className="bg-gray-50 p-5 rounded-xl border border-gray-100">
                                <h4 className="text-gray-800 font-bold text-[17px] mb-2">{lang === 'kr' ? 'WeWork 한계 극복' : 'Overcoming WeWork\'s Limitations'}</h4>
                                <p className="text-gray-600 text-[15px] leading-relaxed break-keep">
                                    {lang === 'kr' 
                                        ? 'WeWork가 실패한 이유는 (1) 자기 자본 미보유, (2) 임대료 미스매치였습니다. 반면 이지스는 (1) Capital + (2) Real Estate Ownership + (3) Operating Layer를 모두 보유하여 구조적 한계를 완벽히 극복합니다.' 
                                        : 'WeWork failed due to (1) lack of equity and (2) rent mismatch. IGIS overcomes this by possessing all three: (1) Capital + (2) Real Estate Ownership + (3) Operating Layer.'}
                                </p>
                            </div>

                            <div className="bg-blue-50 p-5 rounded-xl border border-blue-100">
                                <h4 className="text-blue-700 font-bold text-[17px] mb-2">{lang === 'kr' ? '글로벌 벤치마크: Mori Building 모델' : 'Global Benchmark: Mori Building Model'}</h4>
                                <p className="text-gray-700 font-medium text-[15px] leading-relaxed break-keep">
                                    {lang === 'kr' 
                                        ? '글로벌 비교 시 Mori Building의 Toranomon/Roppongi Hills 운영 모델에 가장 가깝습니다. Mori가 아자부다이힐스에서 선보인 "수직 도시(Vertical City)" 컨셉(임차·주거·문화·F&B 통합 운영)을 IOTA에 직접 차용합니다.' 
                                        : 'Closest to Mori Building\'s Toranomon/Roppongi Hills operating model. Directly adopts Mori\'s "Vertical City" concept (integrated office, residential, culture, F&B) from Azabudai Hills into IOTA.'}
                                </p>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Bottom Thesis Text */}
                <div className={`w-full max-w-[1200px] bg-blue-50 border border-blue-100 p-6 rounded-xl shadow-sm transition-all duration-700 ${step >= 5 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <p className="text-[17px] md:text-[20px] font-bold text-[#1e3a8a] break-keep leading-relaxed text-center">
                        {lang === 'kr' 
                            ? <>이지스는 단순 임대수익을 넘어, Capital, Real Estate, Operating Layer를 모두 통제하는<br/>공간 운영 OS '팩토리얼 빌더스'를 통해 IOTA를 완벽한 수직 도시로 통합 운영한다.</>
                            : <>Beyond simple rental income, IGIS will operate IOTA as a perfect vertical city<br/>through 'Factorial Builders', a spatial operating OS controlling Capital, Real Estate, and Operating Layers.</>
                        }
                    </p>
                </div>

            </div>
        </section>
    );
}
