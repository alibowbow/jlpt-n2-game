const words = [
    // 추상적 개념, 사고방식
    {
        japanese: "解明",
        reading: "かいめい",
        korean: "해명, 규명"
    },
    {
        japanese: "概略",
        reading: "がいりゃく",
        korean: "개략, 대강"
    },
    {
        japanese: "看過",
        reading: "かんか",
        korean: "간과"
    },
    {
        japanese: "危惧",
        reading: "きぐ",
        korean: "우려, 걱정"
    },
    {
        japanese: "強要",
        reading: "きょうよう",
        korean: "강요"
    },
    {
        japanese: "軽視",
        reading: "けいし",
        korean: "경시"
    },
    {
        japanese: "顕著",
        reading: "けんちょ",
        korean: "현저, 뚜렷함"
    },
    {
        japanese: "懸念",
        reading: "けねん",
        korean: "우려, 걱정"
    },
    {
        japanese: "克服",
        reading: "こくふく",
        korean: "극복"
    },
    {
        japanese: "是正",
        reading: "ぜせい",
        korean: "시정, 바로잡음"
    },
    {
        japanese: "措置",
        reading: "そち",
        korean: "조치"
    },
    {
        japanese: "妥協",
        reading: "だきょう",
        korean: "타협"
    },
    {
        japanese: "打開",
        reading: "だかい",
        korean: "타개, 돌파"
    },
    {
        japanese: "端的",
        reading: "たんてき",
        korean: "단적, 간단명료"
    },
    {
        japanese: "着眼",
        reading: "ちゃくがん",
        korean: "착안"
    },
    {
        japanese: "追究",
        reading: "ついきゅう",
        korean: "추구, 규명"
    },
    {
        japanese: "踏襲",
        reading: "とうしゅう",
        korean: "답습"
    },
    {
        japanese: "把握",
        reading: "はあく",
        korean: "파악"
    },
    {
        japanese: "反映",
        reading: "はんえい",
        korean: "반영"
    },
    {
        japanese: "斟酌",
        reading: "しんしゃく",
        korean: "참작"
    },
    // 행동, 대응
    {
        japanese: "阻止",
        reading: "そし",
        korean: "저지, 방해"
    },
    {
        japanese: "遂行",
        reading: "すいこう",
        korean: "수행"
    },
    {
        japanese: "是認",
        reading: "ぜにん",
        korean: "시인, 승인"
    },
    {
        japanese: "占有",
        reading: "せんゆう",
        korean: "점유"
    },
    {
        japanese: "阻害",
        reading: "そがい",
        korean: "저해"
    },
    {
        japanese: "遵守",
        reading: "じゅんしゅ",
        korean: "준수"
    },
    {
        japanese: "譲歩",
        reading: "じょうほ",
        korean: "양보"
    },
    {
        japanese: "醸成",
        reading: "じょうせい",
        korean: "양성, 배양"
    },
    {
        japanese: "堅持",
        reading: "けんじ",
        korean: "견지"
    },
    {
        japanese: "携帯",
        reading: "けいたい",
        korean: "휴대"
    },
    // 상태, 상황
    {
        japanese: "窮地",
        reading: "きゅうち",
        korean: "궁지"
    },
    {
        japanese: "混沌",
        reading: "こんとん",
        korean: "혼돈"
    },
    {
        japanese: "錯覚",
        reading: "さっかく",
        korean: "착각"
    },
    {
        japanese: "支障",
        reading: "ししょう",
        korean: "지장"
    },
    {
        japanese: "至難",
        reading: "しなん",
        korean: "지난, 매우 어려움"
    },
    {
        japanese: "衰退",
        reading: "すいたい",
        korean: "쇠퇴"
    },
    {
        japanese: "停滞",
        reading: "ていたい",
        korean: "정체"
    },
    {
        japanese: "途絶",
        reading: "とぜつ",
        korean: "도절, 끊김"
    },
    {
        japanese: "難航",
        reading: "なんこう",
        korean: "난항"
    },
    {
        japanese: "膠着",
        reading: "こうちゃく",
        korean: "교착, 정체"
    },
    // 성질, 특성
    {
        japanese: "希薄",
        reading: "きはく",
        korean: "희박"
    },
    {
        japanese: "巧妙",
        reading: "こうみょう",
        korean: "교묘"
    },
    {
        japanese: "稚拙",
        reading: "ちせつ",
        korean: "치졸"
    },
    {
        japanese: "微妙",
        reading: "びみょう",
        korean: "미묘"
    },
    {
        japanese: "漠然",
        reading: "ばくぜん",
        korean: "막연"
    },
    {
        japanese: "曖昧",
        reading: "あいまい",
        korean: "애매"
    },
    {
        japanese: "緻密",
        reading: "ちみつ",
        korean: "치밀"
    },
    {
        japanese: "頑固",
        reading: "がんこ",
        korean: "완고"
    },
    {
        japanese: "謙虚",
        reading: "けんきょ",
        korean: "겸허"
    },
    {
        japanese: "潔白",
        reading: "けっぱく",
        korean: "결백"
    },
    // 비즈니스/경제 용어
    {
        japanese: "需要",
        reading: "じゅよう",
        korean: "수요"
    },
    {
        japanese: "供給",
        reading: "きょうきゅう",
        korean: "공급"
    },
    {
        japanese: "収支",
        reading: "しゅうし",
        korean: "수지"
    },
    {
        japanese: "採算",
        reading: "さいさん",
        korean: "채산"
    },
    {
        japanese: "査定",
        reading: "さてい",
        korean: "사정, 평가"
    },
    {
        japanese: "着手",
        reading: "ちゃくしゅ",
        korean: "착수"
    },
    {
        japanese: "着実",
        reading: "ちゃくじつ",
        korean: "착실"
    },
    {
        japanese: "撤退",
        reading: "てったい",
        korean: "철수, 철회"
    },
    {
        japanese: "提携",
        reading: "ていけい",
        korean: "제휴"
    },
    {
        japanese: "統括",
        reading: "とうかつ",
        korean: "통괄"
    },
    {
        japanese: "伸縮",
        reading: "しんしゅく",
        korean: "신축"
    },
    {
        japanese: "折衝",
        reading: "せっしょう",
        korean: "절충, 교섭"
    },
    {
        japanese: "促進",
        reading: "そくしん",
        korean: "촉진"
    },
    {
        japanese: "損失",
        reading: "そんしつ",
        korean: "손실"
    },
    // 사회/정치 용어
    {
        japanese: "施策",
        reading: "しさく",
        korean: "시책"
    },
    {
        japanese: "是非",
        reading: "ぜひ",
        korean: "시비"
    },
    {
        japanese: "擁護",
        reading: "ようご",
        korean: "옹호"
    },
    {
        japanese: "介入",
        reading: "かいにゅう",
        korean: "개입"
    },
    {
        japanese: "規制",
        reading: "きせい",
        korean: "규제"
    },
    {
        japanese: "規約",
        reading: "きやく",
        korean: "규약"
    },
    {
        japanese: "強制",
        reading: "きょうせい",
        korean: "강제"
    },
    {
        japanese: "拘束",
        reading: "こうそく",
        korean: "구속"
    },
    {
        japanese: "抗議",
        reading: "こうぎ",
        korean: "항의"
    },
    {
        japanese: "施行",
        reading: "しこう",
        korean: "시행"
    },
    // 감정/심리 용어
    {
        japanese: "憤慨",
        reading: "ふんがい",
        korean: "분개"
    },
    {
        japanese: "焦燥",
        reading: "しょうそう",
        korean: "초조"
    },
    {
        japanese: "憂慮",
        reading: "ゆうりょ",
        korean: "우려"
    },
    {
        japanese: "羨望",
        reading: "せんぼう",
        korean: "선망"
    },
    {
        japanese: "嫉妬",
        reading: "しっと",
        korean: "질투"
    },
    {
        japanese: "憧憬",
        reading: "しょうけい",
        korean: "동경"
    },
    {
        japanese: "懇願",
        reading: "こんがん",
        korean: "간원"
    },
    {
        japanese: "我慢",
        reading: "がまん",
        korean: "인내"
    },
    {
        japanese: "後悔",
        reading: "こうかい",
        korean: "후회"
    },
    {
        japanese: "困惑",
        reading: "こんわく",
        korean: "곤혹"
    },
    // 행동/태도
    {
        japanese: "躊躇",
        reading: "ちゅうちょ",
        korean: "주저"
    },
    {
        japanese: "執着",
        reading: "しゅうちゃく",
        korean: "집착"
    },
    {
        japanese: "固執",
        reading: "こしつ",
        korean: "고집"
    },
    {
        japanese: "傾倒",
        reading: "けいとう",
        korean: "경도"
    },
    {
        japanese: "憤る",
        reading: "いきどおる",
        korean: "분노하다"
    },
    {
        japanese: "焦る",
        reading: "あせる",
        korean: "초조해하다"
    },
    {
        japanese: "諦める",
        reading: "あきらめる",
        korean: "포기하다"
    },
    {
        japanese: "謙遜",
        reading: "けんそん",
        korean: "겸손"
    },
    {
        japanese: "慎重",
        reading: "しんちょう",
        korean: "신중"
    },
    {
        japanese: "率直",
        reading: "そっちょく",
        korean: "솔직"
    },
    // 학술/연구 용어
    {
        japanese: "仮説",
        reading: "かせつ",
        korean: "가설"
    },
    {
        japanese: "検証",
        reading: "けんしょう",
        korean: "검증"
    },
    {
        japanese: "分析",
        reading: "ぶんせき",
        korean: "분석"
    },
    {
        japanese: "考察",
        reading: "こうさつ",
        korean: "고찰"
    },
    {
        japanese: "推測",
        reading: "すいそく",
        korean: "추측"
    },
    {
        japanese: "推定",
        reading: "すいてい",
        korean: "추정"
    },
    {
        japanese: "証明",
        reading: "しょうめい",
        korean: "증명"
    },
    {
        japanese: "解析",
        reading: "かいせき",
        korean: "해석"
    },
    {
        japanese: "論理",
        reading: "ろんり",
        korean: "논리"
    },
    {
        japanese: "批評",
        reading: "ひひょう",
        korean: "비평"
    },
    {
        japanese: "評価",
        reading: "ひょうか",
        korean: "평가"
    },
    {
        japanese: "解釈",
        reading: "かいしゃく",
        korean: "해석"
    },
    {
        japanese: "観察",
        reading: "かんさつ",
        korean: "관찰"
    },
    {
        japanese: "調査",
        reading: "ちょうさ",
        korean: "조사"
    },
    {
        japanese: "実験",
        reading: "じっけん",
        korean: "실험"
    },
    // 환경/자연 용어
    {
        japanese: "浸食",
        reading: "しんしょく",
        korean: "침식"
    },
    {
        japanese: "堆積",
        reading: "たいせき",
        korean: "퇴적"
    },
    {
        japanese: "汚染",
        reading: "おせん",
        korean: "오염"
    },
    {
        japanese: "排出",
        reading: "はいしゅつ",
        korean: "배출"
    },
    {
        japanese: "保護",
        reading: "ほご",
        korean: "보호"
    },
    {
        japanese: "繁殖",
        reading: "はんしょく",
        korean: "번식"
    },
    {
        japanese: "生態",
        reading: "せいたい",
        korean: "생태"
    },
    {
        japanese: "絶滅",
        reading: "ぜつめつ",
        korean: "절멸"
    },
    {
        japanese: "進化",
        reading: "しんか",
        korean: "진화"
    },
    {
        japanese: "適応",
        reading: "てきおう",
        korean: "적응"
    },
    // 의료/건강 용어
    {
        japanese: "診察",
        reading: "しんさつ",
        korean: "진찰"
    },
    {
        japanese: "治療",
        reading: "ちりょう",
        korean: "치료"
    },
    {
        japanese: "予防",
        reading: "よぼう",
        korean: "예방"
    },
    {
        japanese: "症状",
        reading: "しょうじょう",
        korean: "증상"
    },
    {
        japanese: "悪化",
        reading: "あっか",
        korean: "악화"
    },
    {
        japanese: "改善",
        reading: "かいぜん",
        korean: "개선"
    },
    {
        japanese: "投薬",
        reading: "とうやく",
        korean: "투약"
    },
    {
        japanese: "摂取",
        reading: "せっしゅ",
        korean: "섭취"
    },
    {
        japanese: "衛生",
        reading: "えいせい",
        korean: "위생"
    },
    {
        japanese: "感染",
        reading: "かんせん",
        korean: "감염"
    },
    // 문화/예술 용어
    {
        japanese: "芸術",
        reading: "げいじゅつ",
        korean: "예술"
    },
    {
        japanese: "表象",
        reading: "ひょうしょう",
        korean: "표상"
    },
    {
        japanese: "象徴",
        reading: "しょうちょう",
        korean: "상징"
    },
    {
        japanese: "抽象",
        reading: "ちゅうしょう",
        korean: "추상"
    },
    {
        japanese: "創造",
        reading: "そうぞう",
        korean: "창조"
    },
    {
        japanese: "継承",
        reading: "けいしょう",
        korean: "계승"
    },
    {
        japanese: "伝統",
        reading: "でんとう",
        korean: "전통"
    },
    {
        japanese: "風習",
        reading: "ふうしゅう",
        korean: "풍습"
    },
    {
        japanese: "慣習",
        reading: "かんしゅう",
        korean: "관습"
    },
    {
        japanese: "儀式",
        reading: "ぎしき",
        korean: "의식"
    },
    // 법률/제도 용어
    {
        japanese: "規範",
        reading: "きはん",
        korean: "규범"
    },
    {
        japanese: "制度",
        reading: "せいど",
        korean: "제도"
    },
    {
        japanese: "施行",
        reading: "しこう",
        korean: "시행"
    },
    {
        japanese: "違反",
        reading: "いはん",
        korean: "위반"
    },
    {
        japanese: "遵守",
        reading: "じゅんしゅ",
        korean: "준수"
    },
    {
        japanese: "規則",
        reading: "きそく",
        korean: "규칙"
    },
    {
        japanese: "条例",
        reading: "じょうれい",
        korean: "조례"
    },
    {
        japanese: "制定",
        reading: "せいてい",
        korean: "제정"
    },
    {
        japanese: "改正",
        reading: "かいせい",
        korean: "개정"
    },
    {
        japanese: "廃止",
        reading: "はいし",
        korean: "폐지"
    },
    // 기술/과학 용어
    {
        japanese: "開発",
        reading: "かいはつ",
        korean: "개발"
    },
    {
        japanese: "技術",
        reading: "ぎじゅつ",
        korean: "기술"
    },
    {
        japanese: "革新",
        reading: "かくしん",
        korean: "혁신"
    },
    {
        japanese: "進歩",
        reading: "しんぽ",
        korean: "진보"
    },
    {
        japanese: "発明",
        reading: "はつめい",
        korean: "발명"
    },
    {
        japanese: "応用",
        reading: "おうよう",
        korean: "응용"
    },
    {
        japanese: "効率",
        reading: "こうりつ",
        korean: "효율"
    },
    {
        japanese: "機能",
        reading: "きのう",
        korean: "기능"
    },
    {
        japanese: "設計",
        reading: "せっけい",
        korean: "설계"
    },
    {
        japanese: "構造",
        reading: "こうぞう",
        korean: "구조"
    },
    // 심리/철학 용어
    {
        japanese: "意識",
        reading: "いしき",
        korean: "의식"
    },
    {
        japanese: "認識",
        reading: "にんしき",
        korean: "인식"
    },
    {
        japanese: "思考",
        reading: "しこう",
        korean: "사고"
    },
    {
        japanese: "概念",
        reading: "がいねん",
        korean: "개념"
    },
    {
        japanese: "本質",
        reading: "ほんしつ",
        korean: "본질"
    },
    {
        japanese: "存在",
        reading: "そんざい",
        korean: "존재"
    },
    {
        japanese: "価値",
        reading: "かち",
        korean: "가치"
    },
    {
        japanese: "理念",
        reading: "りねん",
        korean: "이념"
    },
    {
        japanese: "真理",
        reading: "しんり",
        korean: "진리"
    },
    {
        japanese: "倫理",
        reading: "りんり",
        korean: "윤리"
    },
    // 교육/학습 용어
    {
        japanese: "習得",
        reading: "しゅうとく",
        korean: "습득"
    },
    {
        japanese: "理解",
        reading: "りかい",
        korean: "이해"
    },
    {
        japanese: "修得",
        reading: "しゅうとく",
        korean: "수득"
    },
    {
        japanese: "教養",
        reading: "きょうよう",
        korean: "교양"
    },
    {
        japanese: "指導",
        reading: "しどう",
        korean: "지도"
    },
    {
        japanese: "育成",
        reading: "いくせい",
        korean: "육성"
    },
    {
        japanese: "啓発",
        reading: "けいはつ",
        korean: "계발"
    },
    {
        japanese: "研修",
        reading: "けんしゅう",
        korean: "연수"
    },
    {
        japanese: "講義",
        reading: "こうぎ",
        korean: "강의"
    },
    {
        japanese: "課程",
        reading: "かてい",
        korean: "과정"
    },
    // 경제/금융 용어
    {
        japanese: "投資",
        reading: "とうし",
        korean: "투자"
    },
    {
        japanese: "融資",
        reading: "ゆうし",
        korean: "융자"
    },
    {
        japanese: "株式",
        reading: "かぶしき",
        korean: "주식"
    },
    {
        japanese: "資産",
        reading: "しさん",
        korean: "자산"
    },
    {
        japanese: "負債",
        reading: "ふさい",
        korean: "부채"
    },
    {
        japanese: "収益",
        reading: "しゅうえき",
        korean: "수익"
    },
    {
        japanese: "損益",
        reading: "そんえき",
        korean: "손익"
    },
    {
        japanese: "予算",
        reading: "よさん",
        korean: "예산"
    },
    {
        japanese: "財政",
        reading: "ざいせい",
        korean: "재정"
    },
    {
        japanese: "経営",
        reading: "けいえい",
        korean: "경영"
    },
    // 미디어/커뮤니케이션 용어
    {
        japanese: "報道",
        reading: "ほうどう",
        korean: "보도"
    },
    {
        japanese: "広告",
        reading: "こうこく",
        korean: "광고"
    },
    {
        japanese: "宣伝",
        reading: "せんでん",
        korean: "선전"
    },
    {
        japanese: "放送",
        reading: "ほうそう",
        korean: "방송"
    },
    {
        japanese: "配信",
        reading: "はいしん",
        korean: "배신"
    },
    {
        japanese: "編集",
        reading: "へんしゅう",
        korean: "편집"
    },
    {
        japanese: "掲載",
        reading: "けいさい",
        korean: "게재"
    },
    {
        japanese: "発信",
        reading: "はっしん",
        korean: "발신"
    },
    {
        japanese: "受信",
        reading: "じゅしん",
        korean: "수신"
    },
    {
        japanese: "通信",
        reading: "つうしん",
        korean: "통신"
    },
    // 조직/인사 용어
    {
        japanese: "採用",
        reading: "さいよう",
        korean: "채용"
    },
    {
        japanese: "昇進",
        reading: "しょうしん",
        korean: "승진"
    },
    {
        japanese: "異動",
        reading: "いどう",
        korean: "이동"
    },
    {
        japanese: "配置",
        reading: "はいち",
        korean: "배치"
    },
    {
        japanese: "退職",
        reading: "たいしょく",
        korean: "퇴직"
    },
    {
        japanese: "解雇",
        reading: "かいこ",
        korean: "해고"
    },
    {
        japanese: "待遇",
        reading: "たいぐう",
        korean: "대우"
    },
    {
        japanese: "給与",
        reading: "きゅうよ",
        korean: "급여"
    },
    {
        japanese: "福利",
        reading: "ふくり",
        korean: "복리"
    },
    {
        japanese: "厚生",
        reading: "こうせい",
        korean: "후생"
    },
    // 정치/외교 용어
    {
        japanese: "政策",
        reading: "せいさく",
        korean: "정책"
    },
    {
        japanese: "外交",
        reading: "がいこう",
        korean: "외교"
    },
    {
        japanese: "協定",
        reading: "きょうてい",
        korean: "협정"
    },
    {
        japanese: "条約",
        reading: "じょうやく",
        korean: "조약"
    },
    {
        japanese: "議会",
        reading: "ぎかい",
        korean: "의회"
    },
    {
        japanese: "選挙",
        reading: "せんきょ",
        korean: "선거"
    },
    {
        japanese: "投票",
        reading: "とうひょう",
        korean: "투표"
    },
    {
        japanese: "与党",
        reading: "よとう",
        korean: "여당"
    },
    {
        japanese: "野党",
        reading: "やとう",
        korean: "야당"
    },
    {
        japanese: "内閣",
        reading: "ないかく",
        korean: "내각"
    },
    // 산업/제조 용어
    {
        japanese: "製造",
        reading: "せいぞう",
        korean: "제조"
    },
    {
        japanese: "加工",
        reading: "かこう",
        korean: "가공"
    },
    {
        japanese: "組立",
        reading: "くみたて",
        korean: "조립"
    },
    {
        japanese: "品質",
        reading: "ひんしつ",
        korean: "품질"
    },
    {
        japanese: "検査",
        reading: "けんさ",
        korean: "검사"
    },
    {
        japanese: "保守",
        reading: "ほしゅ",
        korean: "보수"
    },
    {
        japanese: "修理",
        reading: "しゅうり",
        korean: "수리"
    },
    {
        japanese: "部品",
        reading: "ぶひん",
        korean: "부품"
    },
    {
        japanese: "原料",
        reading: "げんりょう",
        korean: "원료"
    },
    {
        japanese: "資材",
        reading: "しざい",
        korean: "자재"
    },
    // 도시/건설 용어
    {
        japanese: "建設",
        reading: "けんせつ",
        korean: "건설"
    },
    {
        japanese: "開発",
        reading: "かいはつ",
        korean: "개발"
    },
    {
        japanese: "整備",
        reading: "せいび",
        korean: "정비"
    },
    {
        japanese: "改築",
        reading: "かいちく",
        korean: "개축"
    },
    {
        japanese: "補修",
        reading: "ほしゅう",
        korean: "보수"
    },
    {
        japanese: "設備",
        reading: "せつび",
        korean: "설비"
    },
    {
        japanese: "施設",
        reading: "しせつ",
        korean: "시설"
    },
    {
        japanese: "計画",
        reading: "けいかく",
        korean: "계획"
    },
    {
        japanese: "区画",
        reading: "くかく",
        korean: "구획"
    },
    {
        japanese: "用地",
        reading: "ようち",
        korean: "용지"
    },
    // 안전/보안 용어
    {
        japanese: "安全",
        reading: "あんぜん",
        korean: "안전"
    },
    {
        japanese: "防災",
        reading: "ぼうさい",
        korean: "방재"
    },
    {
        japanese: "警備",
        reading: "けいび",
        korean: "경비"
    },
    {
        japanese: "監視",
        reading: "かんし",
        korean: "감시"
    },
    {
        japanese: "予防",
        reading: "よぼう",
        korean: "예방"
    },
    {
        japanese: "対策",
        reading: "たいさく",
        korean: "대책"
    },
    {
        japanese: "保護",
        reading: "ほご",
        korean: "보호"
    },
    {
        japanese: "管理",
        reading: "かんり",
        korean: "관리"
    },
    {
        japanese: "点検",
        reading: "てんけん",
        korean: "점검"
    },
    {
        japanese: "危機",
        reading: "きき",
        korean: "위기"
    },
    // 비즈니스 관계 용어
    {
        japanese: "取引",
        reading: "とりひき",
        korean: "거래"
    },
    {
        japanese: "契約",
        reading: "けいやく",
        korean: "계약"
    },
    {
        japanese: "納入",
        reading: "のうにゅう",
        korean: "납입"
    },
    {
        japanese: "仕入れ",
        reading: "しいれ",
        korean: "매입"
    },
    {
        japanese: "売上",
        reading: "うりあげ",
        korean: "매출"
    },
    {
        japanese: "発注",
        reading: "はっちゅう",
        korean: "발주"
    },
    {
        japanese: "受注",
        reading: "じゅちゅう",
        korean: "수주"
    },
    {
        japanese: "納品",
        reading: "のうひん",
        korean: "납품"
    },
    {
        japanese: "決済",
        reading: "けっさい",
        korean: "결제"
    },
    {
        japanese: "精算",
        reading: "せいさん",
        korean: "정산"
    },
    // 사회 문제 용어
    {
        japanese: "格差",
        reading: "かくさ",
        korean: "격차"
    },
    {
        japanese: "差別",
        reading: "さべつ",
        korean: "차별"
    },
    {
        japanese: "偏見",
        reading: "へんけん",
        korean: "편견"
    },
    {
        japanese: "貧困",
        reading: "ひんこん",
        korean: "빈곤"
    },
    {
        japanese: "失業",
        reading: "しつぎょう",
        korean: "실업"
    },
    {
        japanese: "過労",
        reading: "かろう",
        korean: "과로"
    },
    {
        japanese: "孤独",
        reading: "こどく",
        korean: "고독"
    },
    {
        japanese: "疎外",
        reading: "そがい",
        korean: "소외"
    },
    {
        japanese: "虐待",
        reading: "ぎゃくたい",
        korean: "학대"
    },
    {
        japanese: "暴力",
        reading: "ぼうりょく",
        korean: "폭력"
    },
    // 환경 문제 용어
    {
        japanese: "温暖化",
        reading: "おんだんか",
        korean: "온난화"
    },
    {
        japanese: "汚染",
        reading: "おせん",
        korean: "오염"
    },
    {
        japanese: "廃棄",
        reading: "はいき",
        korean: "폐기"
    },
    {
        japanese: "再生",
        reading: "さいせい",
        korean: "재생"
    },
    {
        japanese: "節約",
        reading: "せつやく",
        korean: "절약"
    },
    {
        japanese: "保全",
        reading: "ほぜん",
        korean: "보전"
    },
    {
        japanese: "破壊",
        reading: "はかい",
        korean: "파괴"
    },
    {
        japanese: "浄化",
        reading: "じょうか",
        korean: "정화"
    },
    {
        japanese: "排水",
        reading: "はいすい",
        korean: "배수"
    },
    {
        japanese: "省エネ",
        reading: "しょうエネ",
        korean: "에너지 절약"
    },
    // 심리 상태 용어
    {
        japanese: "不安",
        reading: "ふあん",
        korean: "불안"
    },
    {
        japanese: "緊張",
        reading: "きんちょう",
        korean: "긴장"
    },
    {
        japanese: "焦り",
        reading: "あせり",
        korean: "초조"
    },
    {
        japanese: "落ち込み",
        reading: "おちこみ",
        korean: "침체"
    },
    {
        japanese: "憂鬱",
        reading: "ゆううつ",
        korean: "우울"
    },
    {
        japanese: "苛立ち",
        reading: "いらだち",
        korean: "짜증"
    },
    {
        japanese: "恐怖",
        reading: "きょうふ",
        korean: "공포"
    },
    {
        japanese: "嫌悪",
        reading: "けんお",
        korean: "혐오"
    },
    {
        japanese: "羞恥",
        reading: "しゅうち",
        korean: "수치"
    },
    {
        japanese: "悔しさ",
        reading: "くやしさ",
        korean: "분함"
    },
    // 행동 특성 용어
    {
        japanese: "慎重",
        reading: "しんちょう",
        korean: "신중"
    },
    {
        japanese: "大胆",
        reading: "だいたん",
        korean: "대담"
    },
    {
        japanese: "几帳面",
        reading: "きちょうめん",
        korean: "꼼꼼함"
    },
    {
        japanese: "粗末",
        reading: "そまつ",
        korean: "조잡"
    },
    {
        japanese: "丁寧",
        reading: "ていねい",
        korean: "정중"
    },
    {
        japanese: "雑",
        reading: "ざつ",
        korean: "조잡"
    },
    {
        japanese: "謙虚",
        reading: "けんきょ",
        korean: "겸손"
    },
    {
        japanese: "傲慢",
        reading: "ごうまん",
        korean: "오만"
    },
    {
        japanese: "勤勉",
        reading: "きんべん",
        korean: "근면"
    },
    {
        japanese: "怠惰",
        reading: "たいだ",
        korean: "태만"
    },
    // 학술 연구 용어
    {
        japanese: "分析",
        reading: "ぶんせき",
        korean: "분석"
    },
    {
        japanese: "解明",
        reading: "かいめい",
        korean: "해명"
    },
    {
        japanese: "考察",
        reading: "こうさつ",
        korean: "고찰"
    },
    {
        japanese: "検討",
        reading: "けんとう",
        korean: "검토"
    },
    {
        japanese: "調査",
        reading: "ちょうさ",
        korean: "조사"
    },
    {
        japanese: "実証",
        reading: "じっしょう",
        korean: "실증"
    },
    {
        japanese: "論証",
        reading: "ろんしょう",
        korean: "논증"
    },
    {
        japanese: "推論",
        reading: "すいろん",
        korean: "추론"
    },
    {
        japanese: "仮定",
        reading: "かてい",
        korean: "가정"
    },
    {
        japanese: "結論",
        reading: "けつろん",
        korean: "결론"
    },
    // 비즈니스 성과 용어
    {
        japanese: "実績",
        reading: "じっせき",
        korean: "실적"
    },
    {
        japanese: "成果",
        reading: "せいか",
        korean: "성과"
    },
    {
        japanese: "業績",
        reading: "ぎょうせき",
        korean: "업적"
    },
    {
        japanese: "達成",
        reading: "たっせい",
        korean: "달성"
    },
    {
        japanese: "向上",
        reading: "こうじょう",
        korean: "향상"
    },
    {
        japanese: "改善",
        reading: "かいぜん",
        korean: "개선"
    },
    {
        japanese: "進展",
        reading: "しんてん",
        korean: "진전"
    },
    {
        japanese: "発展",
        reading: "はってん",
        korean: "발전"
    },
    {
        japanese: "成長",
        reading: "せいちょう",
        korean: "성장"
    },
    {
        japanese: "拡大",
        reading: "かくだい",
        korean: "확대"
    },
    // 문제 해결 용어
    {
        japanese: "解決",
        reading: "かいけつ",
        korean: "해결"
    },
    {
        japanese: "対処",
        reading: "たいしょ",
        korean: "대처"
    },
    {
        japanese: "克服",
        reading: "こくふく",
        korean: "극복"
    },
    {
        japanese: "打開",
        reading: "だかい",
        korean: "타개"
    },
    {
        japanese: "改善",
        reading: "かいぜん",
        korean: "개선"
    },
    {
        japanese: "是正",
        reading: "ぜせい",
        korean: "시정"
    },
    {
        japanese: "防止",
        reading: "ぼうし",
        korean: "방지"
    },
    {
        japanese: "予防",
        reading: "よぼう",
        korean: "예방"
    },
    {
        japanese: "回避",
        reading: "かいひ",
        korean: "회피"
    },
    {
        japanese: "排除",
        reading: "はいじょ",
        korean: "배제"
    },
    // 조직 관리 용어
    {
        japanese: "統括",
        reading: "とうかつ",
        korean: "통괄"
    },
    {
        japanese: "管轄",
        reading: "かんかつ",
        korean: "관할"
    },
    {
        japanese: "監督",
        reading: "かんとく",
        korean: "감독"
    },
    {
        japanese: "指揮",
        reading: "しき",
        korean: "지휘"
    },
    {
        japanese: "運営",
        reading: "うんえい",
        korean: "운영"
    },
    {
        japanese: "調整",
        reading: "ちょうせい",
        korean: "조정"
    },
    {
        japanese: "指示",
        reading: "しじ",
        korean: "지시"
    },
    {
        japanese: "命令",
        reading: "めいれい",
        korean: "명령"
    },
    {
        japanese: "監査",
        reading: "かんさ",
        korean: "감사"
    },
    {
        japanese: "査定",
        reading: "さてい",
        korean: "사정"
    },
    // 평가/판단 용어
    {
        japanese: "評価",
        reading: "ひょうか",
        korean: "평가"
    },
    {
        japanese: "判断",
        reading: "はんだん",
        korean: "판단"
    },
    {
        japanese: "審査",
        reading: "しんさ",
        korean: "심사"
    },
    {
        japanese: "鑑定",
        reading: "かんてい",
        korean: "감정"
    },
    {
        japanese: "診断",
        reading: "しんだん",
        korean: "진단"
    },
    {
        japanese: "批評",
        reading: "ひひょう",
        korean: "비평"
    },
    {
        japanese: "批判",
        reading: "ひはん",
        korean: "비판"
    },
    {
        japanese: "検証",
        reading: "けんしょう",
        korean: "검증"
    },
    {
        japanese: "吟味",
        reading: "ぎんみ",
        korean: "음미"
    },
    {
        japanese: "査定",
        reading: "さてい",
        korean: "사정"
    },
    // 인간관계 용어
    {
        japanese: "信頼",
        reading: "しんらい",
        korean: "신뢰"
    },
    {
        japanese: "尊敬",
        reading: "そんけい",
        korean: "존경"
    },
    {
        japanese: "親密",
        reading: "しんみつ",
        korean: "친밀"
    },
    {
        japanese: "疎遠",
        reading: "そえん",
        korean: "소원"
    },
    {
        japanese: "協調",
        reading: "きょうちょう",
        korean: "협조"
    },
    {
        japanese: "対立",
        reading: "たいりつ",
        korean: "대립"
    },
    {
        japanese: "和解",
        reading: "わかい",
        korean: "화해"
    },
    {
        japanese: "仲介",
        reading: "ちゅうかい",
        korean: "중개"
    },
    {
        japanese: "調和",
        reading: "ちょうわ",
        korean: "조화"
    },
    {
        japanese: "共存",
        reading: "きょうそん",
        korean: "공존"
    },

    // 성격/성품 용어
    {
        japanese: "温厚",
        reading: "おんこう",
        korean: "온후"
    },
    {
        japanese: "寛容",
        reading: "かんよう",
        korean: "관용"
    },
    {
        japanese: "誠実",
        reading: "せいじつ",
        korean: "성실"
    },
    {
        japanese: "率直",
        reading: "そっちょく",
        korean: "솔직"
    },
    {
        japanese: "柔軟",
        reading: "じゅうなん",
        korean: "유연"
    },
    {
        japanese: "頑固",
        reading: "がんこ",
        korean: "완고"
    },
    {
        japanese: "慎重",
        reading: "しんちょう",
        korean: "신중"
    },
    {
        japanese: "大胆",
        reading: "だいたん",
        korean: "대담"
    },
    {
        japanese: "積極",
        reading: "せっきょく",
        korean: "적극"
    },
    {
        japanese: "消極",
        reading: "しょうきょく",
        korean: "소극"
    },

    // 사회생활 용어
    {
        japanese: "適応",
        reading: "てきおう",
        korean: "적응"
    },
    {
        japanese: "順応",
        reading: "じゅんのう",
        korean: "순응"
    },
    {
        japanese: "自立",
        reading: "じりつ",
        korean: "자립"
    },
    {
        japanese: "依存",
        reading: "いそん",
        korean: "의존"
    },
    {
        japanese: "協力",
        reading: "きょうりょく",
        korean: "협력"
    },
    {
        japanese: "競争",
        reading: "きょうそう",
        korean: "경쟁"
    },
    {
        japanese: "貢献",
        reading: "こうけん",
        korean: "공헌"
    },
    {
        japanese: "奉仕",
        reading: "ほうし",
        korean: "봉사"
    },
    {
        japanese: "参加",
        reading: "さんか",
        korean: "참가"
    },
    {
        japanese: "交流",
        reading: "こうりゅう",
        korean: "교류"
    },

    // 학습/교육 용어
    {
        japanese: "習熟",
        reading: "しゅうじゅく",
        korean: "숙달"
    },
    {
        japanese: "暗記",
        reading: "あんき",
        korean: "암기"
    },
    {
        japanese: "復習",
        reading: "ふくしゅう",
        korean: "복습"
    },
    {
        japanese: "予習",
        reading: "よしゅう",
        korean: "예습"
    },
    {
        japanese: "理解",
        reading: "りかい",
        korean: "이해"
    },
    {
        japanese: "把握",
        reading: "はあく",
        korean: "파악"
    },
    {
        japanese: "修得",
        reading: "しゅうとく",
        korean: "수득"
    },
    {
        japanese: "習得",
        reading: "しゅうとく",
        korean: "습득"
    },
    {
        japanese: "会得",
        reading: "えとく",
        korean: "회득"
    },
    {
        japanese: "体得",
        reading: "たいとく",
        korean: "체득"
    },

    // 사고/판단 용어
    {
        japanese: "思索",
        reading: "しさく",
        korean: "사색"
    },
    {
        japanese: "熟考",
        reading: "じゅっこう",
        korean: "숙고"
    },
    {
        japanese: "推測",
        reading: "すいそく",
        korean: "추측"
    },
    {
        japanese: "予測",
        reading: "よそく",
        korean: "예측"
    },
    {
        japanese: "判定",
        reading: "はんてい",
        korean: "판정"
    },
    {
        japanese: "決定",
        reading: "けってい",
        korean: "결정"
    },
    {
        japanese: "選択",
        reading: "せんたく",
        korean: "선택"
    },
    {
        japanese: "決断",
        reading: "けつだん",
        korean: "결단"
    },
    {
        japanese: "解釈",
        reading: "かいしゃく",
        korean: "해석"
    },
    {
        japanese: "理解",
        reading: "りかい",
        korean: "이해"
    },

    // 감정/기분 용어
    {
        japanese: "感動",
        reading: "かんどう",
        korean: "감동"
    },
    {
        japanese: "感激",
        reading: "かんげき",
        korean: "감격"
    },
    {
        japanese: "興奮",
        reading: "こうふん",
        korean: "흥분"
    },
    {
        japanese: "落胆",
        reading: "らくたん",
        korean: "낙담"
    },
    {
        japanese: "絶望",
        reading: "ぜつぼう",
        korean: "절망"
    },
    {
        japanese: "満足",
        reading: "まんぞく",
        korean: "만족"
    },
    {
        japanese: "不満",
        reading: "ふまん",
        korean: "불만"
    },
    {
        japanese: "安心",
        reading: "あんしん",
        korean: "안심"
    },
    {
        japanese: "不安",
        reading: "ふあん",
        korean: "불안"
    },
    {
        japanese: "焦燥",
        reading: "しょうそう",
        korean: "초조"
    },

    // 행동/태도 용어
    {
        japanese: "態度",
        reading: "たいど",
        korean: "태도"
    },
    {
        japanese: "振舞",
        reading: "ふるまい",
        korean: "처신"
    },
    {
        japanese: "行動",
        reading: "こうどう",
        korean: "행동"
    },
    {
        japanese: "対応",
        reading: "たいおう",
        korean: "대응"
    },
    {
        japanese: "反応",
        reading: "はんのう",
        korean: "반응"
    },
    {
        japanese: "姿勢",
        reading: "しせい",
        korean: "자세"
    },
    {
        japanese: "立場",
        reading: "たちば",
        korean: "입장"
    },
    {
        japanese: "様子",
        reading: "ようす",
        korean: "모습"
    },
    {
        japanese: "状態",
        reading: "じょうたい",
        korean: "상태"
    },
    {
        japanese: "状況",
        reading: "じょうきょう",
        korean: "상황"
    },

    // 변화/발전 용어
    {
        japanese: "変化",
        reading: "へんか",
        korean: "변화"
    },
    {
        japanese: "進化",
        reading: "しんか",
        korean: "진화"
    },
    {
        japanese: "発展",
        reading: "はってん",
        korean: "발전"
    },
    {
        japanese: "成長",
        reading: "せいちょう",
        korean: "성장"
    },
    {
        japanese: "向上",
        reading: "こうじょう",
        korean: "향상"
    },
    {
        japanese: "改善",
        reading: "かいぜん",
        korean: "개선"
    },
    {
        japanese: "進歩",
        reading: "しんぽ",
        korean: "진보"
    },
    {
        japanese: "後退",
        reading: "こうたい",
        korean: "후퇴"
    },
    {
        japanese: "衰退",
        reading: "すいたい",
        korean: "쇠퇴"
    },
    {
        japanese: "停滞",
        reading: "ていたい",
        korean: "정체"
    },

    // 시간/과정 용어
    {
        japanese: "経過",
        reading: "けいか",
        korean: "경과"
    },
    {
        japanese: "過程",
        reading: "かてい",
        korean: "과정"
    },
    {
        japanese: "推移",
        reading: "すいい",
        korean: "추이"
    },
    {
        japanese: "進行",
        reading: "しんこう",
        korean: "진행"
    },
    {
        japanese: "展開",
        reading: "てんかい",
        korean: "전개"
    },
    {
        japanese: "継続",
        reading: "けいぞく",
        korean: "계속"
    },
    {
        japanese: "持続",
        reading: "じぞく",
        korean: "지속"
    },
    {
        japanese: "延長",
        reading: "えんちょう",
        korean: "연장"
    },
    {
        japanese: "短縮",
        reading: "たんしゅく",
        korean: "단축"
    },
    {
        japanese: "中断",
        reading: "ちゅうだん",
        korean: "중단"
    },

    // 목표/계획 용어
    {
        japanese: "目標",
        reading: "もくひょう",
        korean: "목표"
    },
    {
        japanese: "目的",
        reading: "もくてき",
        korean: "목적"
    },
    {
        japanese: "計画",
        reading: "けいかく",
        korean: "계획"
    },
    {
        japanese: "予定",
        reading: "よてい",
        korean: "예정"
    },
    {
        japanese: "方針",
        reading: "ほうしん",
        korean: "방침"
    },
    {
        japanese: "戦略",
        reading: "せんりゃく",
        korean: "전략"
    },
    {
        japanese: "構想",
        reading: "こうそう",
        korean: "구상"
    },
    {
        japanese: "企画",
        reading: "きかく",
        korean: "기획"
    },
    {
        japanese: "立案",
        reading: "りつあん",
        korean: "입안"
    },
    {
        japanese: "設定",
        reading: "せってい",
        korean: "설정"
    },

    // 결과/성과 용어
    {
        japanese: "結果",
        reading: "けっか",
        korean: "결과"
    },
    {
        japanese: "成果",
        reading: "せいか",
        korean: "성과"
    },
    {
        japanese: "効果",
        reading: "こうか",
        korean: "효과"
    },
    {
        japanese: "影響",
        reading: "えいきょう",
        korean: "영향"
    },
    {
        japanese: "実績",
        reading: "じっせき",
        korean: "실적"
    },
    {
        japanese: "業績",
        reading: "ぎょうせき",
        korean: "업적"
    },
    {
        japanese: "達成",
        reading: "たっせい",
        korean: "달성"
    },
    {
        japanese: "完成",
        reading: "かんせい",
        korean: "완성"
    },
    {
        japanese: "完了",
        reading: "かんりょう",
        korean: "완료"
    },
    {
        japanese: "終了",
        reading: "しゅうりょう",
        korean: "종료"
    },

    // 문제/해결 용어
    {
        japanese: "問題",
        reading: "もんだい",
        korean: "문제"
    },
    {
        japanese: "課題",
        reading: "かだい",
        korean: "과제"
    },
    {
        japanese: "難題",
        reading: "なんだい",
        korean: "난제"
    },
    {
        japanese: "障害",
        reading: "しょうがい",
        korean: "장애"
    },
    {
        japanese: "支障",
        reading: "ししょう",
        korean: "지장"
    },
    {
        japanese: "解決",
        reading: "かいけつ",
        korean: "해결"
    },
    {
        japanese: "解消",
        reading: "かいしょう",
        korean: "해소"
    },
    {
        japanese: "克服",
        reading: "こくふく",
        korean: "극복"
    },
    {
        japanese: "打開",
        reading: "だかい",
        korean: "타개"
    },
    {
        japanese: "改善",
        reading: "かいぜん",
        korean: "개선"
    },

    // 조직/체계 용어
    {
        japanese: "組織",
        reading: "そしき",
        korean: "조직"
    },
    {
        japanese: "体制",
        reading: "たいせい",
        korean: "체제"
    },
    {
        japanese: "制度",
        reading: "せいど",
        korean: "제도"
    },
    {
        japanese: "機構",
        reading: "きこう",
        korean: "기구"
    },
    {
        japanese: "体系",
        reading: "たいけい",
        korean: "체계"
    },
    {
        japanese: "構造",
        reading: "こうぞう",
        korean: "구조"
    },
    {
        japanese: "規模",
        reading: "きぼ",
        korean: "규모"
    },
    {
        japanese: "規定",
        reading: "きてい",
        korean: "규정"
    },
    {
        japanese: "規則",
        reading: "きそく",
        korean: "규칙"
    },
    {
        japanese: "基準",
        reading: "きじゅん",
        korean: "기준"
    },

    // 능력/실력 용어
    {
        japanese: "能力",
        reading: "のうりょく",
        korean: "능력"
    },
    {
        japanese: "実力",
        reading: "じつりょく",
        korean: "실력"
    },
    {
        japanese: "技能",
        reading: "ぎのう",
        korean: "기능"
    },
    {
        japanese: "技術",
        reading: "ぎじゅつ",
        korean: "기술"
    },
    {
        japanese: "才能",
        reading: "さいのう",
        korean: "재능"
    },
    {
        japanese: "資質",
        reading: "ししつ",
        korean: "자질"
    },
    {
        japanese: "素質",
        reading: "そしつ",
        korean: "소질"
    },
    {
        japanese: "適性",
        reading: "てきせい",
        korean: "적성"
    },
    {
        japanese: "力量",
        reading: "りきりょう",
        korean: "역량"
    },
    {
        japanese: "専門",
        reading: "せんもん",
        korean: "전문"
    },

    // 의견/주장 용어
    {
        japanese: "意見",
        reading: "いけん",
        korean: "의견"
    },
    {
        japanese: "主張",
        reading: "しゅちょう",
        korean: "주장"
    },
    {
        japanese: "見解",
        reading: "けんかい",
        korean: "견해"
    },
    {
        japanese: "観点",
        reading: "かんてん",
        korean: "관점"
    },
    {
        japanese: "立場",
        reading: "たちば",
        korean: "입장"
    },
    {
        japanese: "視点",
        reading: "してん",
        korean: "시점"
    },
    {
        japanese: "論点",
        reading: "ろんてん",
        korean: "논점"
    },
    {
        japanese: "提案",
        reading: "ていあん",
        korean: "제안"
    },
    {
        japanese: "提言",
        reading: "ていげん",
        korean: "제언"
    },
    {
        japanese: "助言",
        reading: "じょげん",
        korean: "조언"
    },

    // N4/N5 단어를 다음 N2 단어로 대체
    {
        japanese: "憂慮",
        reading: "ゆうりょ",
        korean: "우려"
    },
    {
        japanese: "安堵",
        reading: "あんど",
        korean: "안도"
    },
    {
        japanese: "充足",
        reading: "じゅうそく",
        korean: "충족"
    },
    {
        japanese: "予備",
        reading: "よび",
        korean: "예비"
    },
    {
        japanese: "復元",
        reading: "ふくげん",
        korean: "복원"
    },
    {
        japanese: "記憶",
        reading: "きおく",
        korean: "기억"
    },
    {
        japanese: "姿勢",
        reading: "しせい",
        korean: "자세"
    },
    {
        japanese: "状況",
        reading: "じょうきょう",
        korean: "상황"
    },
    {
        japanese: "予測",
        reading: "よそく",
        korean: "예측"
    },
    {
        japanese: "参画",
        reading: "さんかく",
        korean: "참획"
    },
    {
        japanese: "裁定",
        reading: "さいてい",
        korean: "재정"
    },
    {
        japanese: "抜粋",
        reading: "ばっすい",
        korean: "발췌"
    },
    // 추가 N4/N5 단어를 다음 N2 단어로 대체
    {
        japanese: "所為",
        reading: "しょい",
        korean: "소위"
    },
    {
        japanese: "様態",
        reading: "ようたい",
        korean: "양태"
    },
    {
        japanese: "推移",
        reading: "すいい",
        korean: "추이"
    },
    {
        japanese: "趣旨",
        reading: "しゅし",
        korean: "취지"
    },
    {
        japanese: "企図",
        reading: "きと",
        korean: "기도"
    },
    {
        japanese: "帰結",
        reading: "きけつ",
        korean: "귀결"
    },
    {
        japanese: "資質",
        reading: "ししつ",
        korean: "자질"
    },
    {
        japanese: "技倆",
        reading: "ぎりょう",
        korean: "기량"
    },
    {
        japanese: "力量",
        reading: "りきりょう",
        korean: "역량"
    }
]; 