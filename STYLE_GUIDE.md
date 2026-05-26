# IOTA Strategy Project UI Style Guide

## 1. 슬라이드 하단 텍스트 레이아웃 강제 규칙 (절대 준수)

**모든 섹션(슬라이드)의 하단 설명 텍스트는 예외 없이 아래의 클래스를 정확히 100% 동일하게 사용해야 합니다.** 
(임의로 max-w-1100px, text-[20px], space-y-3 등을 사용하면 절대 안 됨)

### 1-1. 텍스트 래퍼(Wrapper) <div> 클래스
```jsx
<div className={`mt-[10px] max-w-[1000px] text-[15px] md:text-[19px] leading-[1.45] font-medium text-gray-700 break-keep text-center transition-all duration-[900ms] ease-out ${step >= 5 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
```
- `max-w-[1000px]` (절대 1100px 불가)
- `text-[15px] md:text-[19px]` (절대 20px 불가)
- `leading-[1.45]` (절대 1.5 불가)

### 1-2. 리스트 <ul> 클래스
```jsx
<ul className="text-left inline-block space-y-2 mx-auto">
```
- `space-y-2` (절대 space-y-3 불가)

## 2. 디자인 일반 원칙
- **쫌생이 핏 절대 금지**: 모든 요소는 시원시원하고 큼직하게 배치할 것.
- **여백**: 답답하지 않게 공간을 충분히 부여할 것.
- **애니메이션**: 부드러운 트랜지션(`duration-[900ms]`, `duration-1000`)을 유지할 것.
