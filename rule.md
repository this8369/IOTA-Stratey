# User Preferences and Rules

## Typography
- **NEVER use letter-spacing (tracking)** on top subtitles (e.g., `tracking-widest`, `tracking-wide`, `tracking-tight`). The user strongly dislikes added tracking on subtitles.
- Prefer slightly larger, bolder titles and text sizes for better readability.
- **[CRITICAL RULE]** 텍스트에 특별한 지시사항이 없는 한 임의로 자간(letter-spacing, tracking) 속성을 절대 넣지 않는다. 사용자가 명시적으로 요구할 때만 추가할 것.
- **[CRITICAL RULE]** 제목 밑의 검은색 분리선(`w-16 h-1 bg-black` 등)은 앞으로 디자인에서 절대 사용하지 않는다.

## UI Layout (Bottom Text)
- **[CRITICAL RULE]** 모든 슬라이드의 하단 설명 텍스트 래퍼는 반드시 다음 클래스를 100% 동일하게 유지한다:
  `mt-[10px] max-w-[1000px] text-[15px] md:text-[19px] leading-[1.45] font-medium text-gray-700 break-keep text-center`
- **[CRITICAL RULE]** 하단 텍스트 내의 리스트(`<ul>`)는 반드시 `text-left inline-block space-y-2 mx-auto` 속성을 유지한다. (임의로 space-y-3 등 간격 조정 절대 금지)
- 쫌생이 핏 절대 금지: 모든 요소는 시원시원하게 배치하되, 이전에 확립된 하단 텍스트 폰트/여백 규격을 임의로 절대 수정하지 않는다.
