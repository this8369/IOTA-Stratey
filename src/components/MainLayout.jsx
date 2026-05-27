import React, { useState, useEffect } from 'react';
import Section1 from './Section1';
import SectionExecutiveSummary from './SectionExecutiveSummary';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';
import Section5 from './Section5';
import Section6 from './Section6';
import Section7 from './Section7';
import Section8 from './Section8';
import Section9 from './Section9';
import Section10 from './Section10';
import Section11 from './Section11';
import Section12 from './Section12';
import Section13 from './Section13';
import Section14 from './Section14';
import Section15 from './Section15';
import Section16 from './Section16';
import Section17 from './Section17';
import Section18 from './Section18';
import Section19 from './Section19';
import Section20 from './Section20';
import Section21 from './Section21';
import Section22 from './Section22';
import Section23 from './Section23';
import Section24 from './Section24';
import Section25 from './Section25';
import Section26 from './Section26';
import Section27 from './Section27';
import Section28 from './Section28';
import Section29 from './Section29';
import Section30 from './Section30';
import Section31 from './Section31';
import Section32 from './Section32';
import Section33 from './Section33';
import Section34 from './Section34';
import Section35 from './Section35';
import Section36 from './Section36';
import Section37 from './Section37';
import Section38 from './Section38';
import Section39 from './Section39';
import Section40 from './Section40';
import Section41 from './Section41';
import Section42 from './Section42';
import Section43 from './Section43';
import Section44 from './Section44';
import Section45 from './Section45';
import Section46 from './Section46';
import Section47 from './Section47';
import Section48 from './Section48';
import Section49 from './Section49';
import Section50 from './Section50';
import Section51 from './Section51';
import Section52 from './Section52';
import Section53 from './Section53';
import Section54 from './Section54';
import Section55 from './Section55';
import Section56 from './Section56';
import Section57 from './Section57';
import Section58 from './Section58';
import Section59 from './Section59';
import Section60 from './Section60';
import Section61 from './Section61';
import Section62 from './Section62';
import Section63 from './Section63';
import Section64 from './Section64';
import Section65 from './Section65';
import Section66 from './Section66';
import Section67 from './Section67';
import Section68 from './Section68';
import Section69 from './Section69';
import Section70 from './Section70';
import Section71 from './Section71';
import Section72 from './Section72';
import Section73 from './Section73';
import Section74 from './Section74';
import Section75 from './Section75';
import Section76 from './Section76';
import Section77 from './Section77';
import Section78 from './Section78';
import Section79 from './Section79';
import Section80 from './Section80';
import Section81 from './Section81';

export default function MainLayout({ isNavOpen }) {
    const slidesLength = 82; // known length
 const [currentSlide, setCurrentSlide] = useState(() => {
 // Initialize from URL hash if available (persistent reload mapping)
 const hash = window.location.hash;
 if (hash && hash.startsWith('#page-')) {
 const pageIndex = parseInt(hash.replace('#page-', ''), 10) - 1;
 if (!isNaN(pageIndex) && pageIndex >= 0 && pageIndex < slidesLength) {
 return pageIndex;
 }
 }
 return 0;
 });

    const slides = [<Section1 />, <SectionExecutiveSummary />, <Section2 />, <Section3 />, <Section4 />, <Section5 />, <Section6 />, <Section7 />, <Section8 />, <Section9 />, <Section10 />, <Section11 />, <Section12 />, <Section13 />, <Section14 />, <Section15 />, <Section16 />, <Section17 />, <Section18 />, <Section19 />, <Section20 />, <Section21 />, <Section22 />, <Section23 />, <Section24 />, <Section25 />, <Section26 />, <Section27 />, <Section28 />, <Section29 />, <Section30 />, <Section31 />, <Section32 />, <Section33 />, <Section34 />, <Section35 />, <Section36 />, <Section37 />, <Section38 />, <Section39 />, <Section40 />, <Section41 />, <Section42 />, <Section43 />, <Section44 />, <Section45 />, <Section46 />, <Section47 />, <Section48 />, <Section49 />, <Section50 />, <Section51 />, <Section52 />, <Section53 />, <Section54 />, <Section55 />, <Section56 />, <Section57 />, <Section58 />, <Section59 />, <Section60 />, <Section61 />, <Section62 />, <Section63 />, <Section64 />, <Section65 />, <Section66 />, <Section67 />, <Section68 />, <Section69 />, <Section70 />, <Section71 />, <Section72 />, <Section73 />, <Section74 />, <Section75 />, <Section76 />, <Section77 />, <Section78 />, <Section79 />, <Section80 />, <Section81 />];

    const [isActionDone, setIsActionDone] = useState(false);

    // Animation durations mapped closely to each page's visual completion timing
    const slideAnimationTimes = [1500, 3000, 3600, 4200, 2600, 4200, 2500, 3500, 3000, 3000, 3500, 3500, 3500, 3000, 3500, 3500, 3500, 3500, 3500, 3500, 3500, 3500, 3500, 3500, 3000, 3500, 3500, 3500, 1500, 3500, 3500, 3500, 3500, 3500, 1500, 3500, 3500, 3500, 1500, 3800, 3800, 3000, 3000, 3500, 3500, 3500, 3500, 3500, 1500, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 1500, 3000, 3000, 3000, 3000, 1500, 3000, 3000, 3000, 3000, 3000, 1500, 3000, 3000, 3000, 3000, 1500, 3500, 3500, 3500, 1500, 3500, 3500, 3500, 3500];

 useEffect(() => {
 setIsActionDone(false);
 const timer = setTimeout(() => {
 setIsActionDone(true);
 }, slideAnimationTimes[currentSlide] || 3000);

 // Subscribing to hash change to support external header menu navigation clicks
 const handleHashChange = () => {
 const hash = window.location.hash;
 if (hash && hash.startsWith('#page-')) {
 const pageIndex = parseInt(hash.replace('#page-', ''), 10) - 1;
 if (!isNaN(pageIndex) && pageIndex >= 0 && pageIndex < slidesLength) {
 setCurrentSlide(pageIndex);
 }
 }
 };
 
 const handleGoto = (e) => {
 if (e.detail && typeof e.detail.slideIndex === 'number' && e.detail.slideIndex >= 0 && e.detail.slideIndex < slidesLength) {
 setCurrentSlide(e.detail.slideIndex);
 }
 };

 window.addEventListener('hashchange', handleHashChange);
 window.addEventListener('appSlideGoto', handleGoto);

 return () => {
 clearTimeout(timer);
 window.removeEventListener('hashchange', handleHashChange);
 window.removeEventListener('appSlideGoto', handleGoto);
 };
 }, [currentSlide, slidesLength]);

 const nextSlide = () => {
 const event = new CustomEvent('appSlideNext', { cancelable: true });
 window.dispatchEvent(event);
 if (!event.defaultPrevented) {
 setCurrentSlide(prev => Math.min(prev + 1, slides.length - 1));
 }
 };
 const prevSlide = () => {
 const event = new CustomEvent('appSlidePrev', { cancelable: true });
 window.dispatchEvent(event);
 if (!event.defaultPrevented) {
 setCurrentSlide(prev => Math.max(prev - 1, 0));
 }
 };

 // Sync state changes -> URL Hash
 useEffect(() => {
 window.location.hash = `page-${currentSlide + 1}`;
 }, [currentSlide]);

 // Sync URL Hash changes (Browser Back/Forward) -> state
 useEffect(() => {
 const handleHashChange = () => {
 const hash = window.location.hash;
 if (hash && hash.startsWith('#page-')) {
 const pageIndex = parseInt(hash.replace('#page-', ''), 10) - 1;
 if (!isNaN(pageIndex) && pageIndex >= 0 && pageIndex < slidesLength) {
 setCurrentSlide(pageIndex);
 }
 }
 };
 window.addEventListener('hashchange', handleHashChange);
 return () => window.removeEventListener('hashchange', handleHashChange);
 }, []);

 useEffect(() => {
 const handleKeyDown = (e) => {
 if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === 'PageDown') {
 nextSlide();
 } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp' || e.key === 'PageUp') {
 prevSlide();
 }
 };

 window.addEventListener('keydown', handleKeyDown);
 return () => window.removeEventListener('keydown', handleKeyDown);
 }, [slides.length]);

 // Touch swipe handling
 const [touchStart, setTouchStart] = useState(null);
 const [touchEnd, setTouchEnd] = useState(null);
 const minSwipeDistance = 50;

 const onTouchStart = (e) => {
 setTouchEnd(null);
 setTouchStart(e.targetTouches[0].clientX);
 };

 const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);

 const onTouchEnd = () => {
 if (!touchStart || !touchEnd) return;
 const distance = touchStart - touchEnd;
 const isLeftSwipe = distance > minSwipeDistance;
 const isRightSwipe = distance < -minSwipeDistance;
 
 if (isLeftSwipe) {
 nextSlide();
 } else if (isRightSwipe) {
 prevSlide();
 }
 };

 return (
 <>
 <style>{`
 @keyframes pulseBlueInvert {
 0%, 100% {
 color: #ffffff;
 border-color: #ffffff;
 background-color: transparent;
 }
 50% {
 color: #eab308;
 border-color: #eab308;
 background-color: #281400;
 }
 }
 .action-done-pulse {
 animation: pulseBlueInvert 1.5s infinite ease-in-out;
 }
 `}</style>
 <div 
 className="w-full h-screen overflow-hidden relative bg-white"
 onTouchStart={onTouchStart}
 onTouchMove={onTouchMove}
 onTouchEnd={onTouchEnd}
 >
 {slides.map((slide, index) => {
 const isActive = index === currentSlide;
 
 let transformStyle = '';
 if (index < currentSlide) {
 transformStyle = 'translateX(-100%)';
 } else if (index > currentSlide) {
 transformStyle = 'translateX(100%)';
 } else {
 transformStyle = 'translateX(0)';
 }

 return (
 <div 
 key={index} 
 className="absolute inset-0 w-full h-full transition-transform duration-[250ms]"
 style={{ 
 transform: transformStyle,
 transitionTimingFunction: "cubic-bezier(0.83, 0, 0.17, 1)" // Fast, crisp book-like slide
 }}
 >
 {React.cloneElement(slide, { isActive })}
 </div>
 );
 })}

 {/* Global Pagination & Navigation Controls */}
 <div className={`fixed bottom-[32px] left-1/2 -translate-x-1/2 flex flex-col items-center justify-center gap-[10px] z-[9999] mix-blend-difference transition-all duration-300 ease-in-out ${isNavOpen ? 'lg:ml-[120px]' : 'ml-0'}`}>
 
 {/* Page Number Indicator (Centered Above Dots, Dropped 15px) */}
 <div className="flex items-center justify-center text-white font-sans text-[12px] md:text-[13px] opacity-80 translate-y-[15px]">
 <span className="font-medium">{currentSlide + 1}</span>
 <span className="mx-[6px] font-extralight opacity-50">/</span>
 <span className="font-medium">{slides.length}</span>
 </div>

 {/* Controls Row */}
 <div className="flex items-center justify-center gap-6 md:gap-12">
 {/* Left Arrow Button Group */}
 <div className="flex items-center gap-[6px] md:gap-[10px] group cursor-pointer" onClick={prevSlide}>
 <span 
 className={`text-[#737373] font-light text-[11px] md:text-[13px] transition-all duration-300 ${currentSlide === 0 ? 'opacity-0' : 'opacity-100 group-hover:opacity-60 pointer-events-none'}`} 
 style={{ fontFamily: "'Guardian Sans', sans-serif" }}
 >
 Keyboard Left
 </span>
 <button 
 disabled={currentSlide === 0}
 className={`w-8 h-8 md:w-10 md:h-10 flex items-center justify-center border-[1.5px] md:border-2 border-white rounded-full transition-all duration-300 ${currentSlide === 0 ? 'opacity-20 cursor-default text-white' : 'opacity-100 group-hover:scale-105 cursor-pointer text-white'}`}
 >
 <svg className="w-4 h-4 md:w-5 md:h-5 transform rotate-180" fill="none" strokeWidth="2.5" stroke="currentColor" viewBox="0 0 24 24">
 <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-7-7l7 7-7 7" />
 </svg>
 </button>
 </div>

 {/* Dots Pagination Track (Sliding Animation) */}
 {(() => {
 const total = slides.length;
 const maxDots = 7;
 let shift = currentSlide - 3;
 if (shift < 0) shift = 0;
 if (shift > total - maxDots) shift = Math.max(0, total - maxDots);

 return (
 <>
 <style>
 {`
 .dots-track {
 transform: translateX(calc(-${shift} * 26px));
 }
 @media (min-width: 768px) {
 .dots-track {
 transform: translateX(calc(-${shift} * 30px));
 }
 }
 `}
 </style>
 {/* 고정된 7칸 짜리 창문 (가려져있고 여기서만 보임) */}
 <div className="overflow-hidden w-[174px] md:w-[198px] py-1">
 {/* 전체 점들이 담긴 실제 트랙 (좌우로 쓱 이동함) */}
 <div className="flex items-center gap-2 md:gap-3 transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] dots-track">
 {slides.map((_, idx) => {
 const isDotActive = currentSlide === idx;
 return (
 <div 
 key={idx} 
 onClick={() => setCurrentSlide(idx)}
 className="relative flex-shrink-0 flex items-center justify-center w-[18px] h-[18px] cursor-pointer group"
 >
 {/* Inner Fixed Dot (항상 흰색) */}
 <div className="w-[8px] h-[8px] rounded-full bg-white transition-all duration-300 group-hover:bg-gray-300"></div>
 
 {/* Outer Ring for Active State */}
 <div className={`absolute inset-0 border-[1.5px] border-white rounded-full transition-all duration-500 ease-out ${isDotActive ? 'opacity-100 scale-100' : 'opacity-0 scale-[0.6]'}`}></div>
 </div>
 );
 })}
 </div>
 </div>
 </>
 );
 })()}

 {/* Right Arrow Button Group */}
 <div className="flex items-center gap-[6px] md:gap-[10px] group cursor-pointer" onClick={nextSlide}>
 <button 
 className={`w-8 h-8 md:w-10 md:h-10 flex items-center justify-center border-[1.5px] md:border-2 rounded-full transition-all duration-300 
 ${isActionDone ? 'action-done-pulse cursor-pointer group-hover:scale-105' : 'border-white opacity-100 group-hover:scale-105 cursor-pointer text-white'}`}
 >
 <svg className="w-4 h-4 md:w-5 md:h-5 current-color" fill="none" strokeWidth="2.5" stroke="currentColor" viewBox="0 0 24 24">
 <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-7-7l7 7-7 7" />
 </svg>
 </button>
 <span 
 className={`text-[#737373] font-light text-[11px] md:text-[13px] transition-all duration-300 opacity-100 group-hover:opacity-60 pointer-events-none`} 
 style={{ fontFamily: "'Guardian Sans', sans-serif" }}
 >
 Keyboard Right
 </span>
 </div>
 </div>
 </div>
 </div>
 </>
 );
}
