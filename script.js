// DOM 요소
const studyModeBtn = document.getElementById('studyMode');
const quizModeBtn = document.getElementById('quizMode');
const writeModeBtn = document.getElementById('writeMode');
const studySection = document.getElementById('studySection');
const quizSection = document.getElementById('quizSection');
const writeSection = document.getElementById('writeSection');
const wordJapanese = document.getElementById('wordJapanese');
const wordReading = document.getElementById('wordReading');
const wordKorean = document.getElementById('wordKorean');
const nextWordBtn = document.getElementById('nextWord');
const flipCardBtn = document.getElementById('flipCard');
const card = document.querySelector('.card');
const quizWord = document.getElementById('quizWord');
const options = document.querySelectorAll('.option');
const result = document.getElementById('result');
const nextQuizBtn = document.getElementById('nextQuiz');
const correctCount = document.getElementById('correctCount');
const totalCount = document.getElementById('totalCount');

// 주관식 퀴즈 요소
const writeWord = document.getElementById('writeWord');
const userAnswer = document.getElementById('userAnswer');
const checkAnswerBtn = document.getElementById('checkAnswer');
const writeResult = document.getElementById('writeResult');
const correctAnswer = document.getElementById('correctAnswer');
const nextWriteQuizBtn = document.getElementById('nextWriteQuiz');
const writeCorrectCount = document.getElementById('writeCorrectCount');
const writeTotalCount = document.getElementById('writeTotalCount');

// 게임 상태
let currentWordIndex = 0;
let score = 0;
let totalQuestions = 0;
let currentQuizWord = null;
let writeScore = 0;
let writeTotalQuestions = 0;

// 복습 시스템을 위한 변수들
let usedWords = new Set(); // 이번 회차에 출제된 단어들
let wrongWords = []; // 틀린 단어들과 그 회차 정보를 저장
let currentTurn = 0; // 현재 회차

// 모드 전환
studyModeBtn.addEventListener('click', () => {
    studySection.classList.remove('hidden');
    quizSection.classList.add('hidden');
    writeSection.classList.add('hidden');
    // 복습 시스템 초기화
    usedWords.clear();
    wrongWords = [];
    currentTurn = 0;
    showWord();
});

quizModeBtn.addEventListener('click', () => {
    studySection.classList.add('hidden');
    quizSection.classList.remove('hidden');
    writeSection.classList.add('hidden');
    // 복습 시스템 초기화
    usedWords.clear();
    wrongWords = [];
    currentTurn = 0;
    startQuiz();
});

writeModeBtn.addEventListener('click', () => {
    studySection.classList.add('hidden');
    quizSection.classList.add('hidden');
    writeSection.classList.remove('hidden');
    // 복습 시스템 초기화
    usedWords.clear();
    wrongWords = [];
    currentTurn = 0;
    startWriteQuiz();
});

// 학습 모드 기능
function showWord() {
    const word = words[currentWordIndex];
    wordJapanese.textContent = word.japanese;
    wordReading.textContent = word.reading;
    wordKorean.textContent = word.korean;
    card.classList.remove('flipped');
}

nextWordBtn.addEventListener('click', () => {
    currentWordIndex = (currentWordIndex + 1) % words.length;
    showWord();
});

flipCardBtn.addEventListener('click', () => {
    card.classList.toggle('flipped');
});

// 퀴즈 모드 기능
function startQuiz() {
    score = 0;
    totalQuestions = 0;
    updateScore();
    showQuiz();
}

function showQuiz() {
    result.textContent = '';
    nextQuizBtn.style.display = 'none';
    
    // 다음 단어 선택
    currentQuizWord = getNextWord();
    quizWord.textContent = currentQuizWord.japanese;
    
    // 보기 생성
    const correctAnswer = `${currentQuizWord.reading} - ${currentQuizWord.korean}`;
    const wrongAnswers = getRandomWrongAnswers(currentQuizWord);
    const allAnswers = [correctAnswer, ...wrongAnswers];
    shuffleArray(allAnswers);
    
    // 보기 표시
    options.forEach((option, index) => {
        option.textContent = allAnswers[index];
        option.classList.remove('correct', 'wrong');
        option.disabled = false;
    });
}

function getRandomWrongAnswers(correctWord) {
    const wrongAnswers = [];
    const availableWords = words.filter(word => word !== correctWord);
    
    while (wrongAnswers.length < 3) {
        const randomIndex = Math.floor(Math.random() * availableWords.length);
        const word = availableWords[randomIndex];
        const answer = `${word.reading} - ${word.korean}`;
        if (!wrongAnswers.includes(answer)) {
            wrongAnswers.push(answer);
        }
    }
    
    return wrongAnswers;
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

options.forEach(option => {
    option.addEventListener('click', () => {
        const selectedAnswer = option.textContent;
        const correctAnswer = `${currentQuizWord.reading} - ${currentQuizWord.korean}`;
        
        options.forEach(opt => opt.disabled = true);
        
        if (selectedAnswer === correctAnswer) {
            option.classList.add('correct');
            result.textContent = '정답입니다!';
            score++;
        } else {
            option.classList.add('wrong');
            options.forEach(opt => {
                if (opt.textContent === correctAnswer) {
                    opt.classList.add('correct');
                }
            });
            result.textContent = '틀렸습니다.';
            // 틀린 단어 추가
            addToWrongWords(currentQuizWord);
        }
        
        totalQuestions++;
        updateScore();
        nextQuizBtn.style.display = 'block';
    });
});

function updateScore() {
    correctCount.textContent = score;
    totalCount.textContent = totalQuestions;
}

nextQuizBtn.addEventListener('click', showQuiz);

// 주관식 퀴즈 모드 기능
function startWriteQuiz() {
    writeScore = 0;
    writeTotalQuestions = 0;
    updateWriteScore();
    showWriteQuiz();
}

function showWriteQuiz() {
    writeResult.textContent = '';
    writeResult.className = '';
    correctAnswer.classList.add('hidden');
    nextWriteQuizBtn.classList.add('hidden');
    userAnswer.value = '';
    userAnswer.disabled = false;
    checkAnswerBtn.disabled = false;
    
    // 다음 단어 선택
    currentQuizWord = getNextWord();
    writeWord.textContent = currentQuizWord.japanese;
}

function checkAnswer() {
    const userInput = userAnswer.value.trim();
    const correctKorean = currentQuizWord.korean;
    
    userAnswer.disabled = true;
    checkAnswerBtn.disabled = true;
    
    if (isCorrectAnswer(userInput, correctKorean)) {
        writeResult.textContent = '정답입니다!';
        writeResult.className = 'correct';
        writeScore++;
    } else {
        writeResult.textContent = '틀렸습니다.';
        writeResult.className = 'wrong';
        correctAnswer.textContent = `정답: ${currentQuizWord.reading} - ${correctKorean}`;
        correctAnswer.classList.remove('hidden');
        // 틀린 단어 추가
        addToWrongWords(currentQuizWord);
    }
    
    writeTotalQuestions++;
    updateWriteScore();
    nextWriteQuizBtn.classList.remove('hidden');
}

function isCorrectAnswer(userInput, correctAnswer) {
    // 쉼표로 구분된 여러 답안이 있는 경우를 처리
    const correctAnswers = correctAnswer.split(',').map(answer => answer.trim());
    return correctAnswers.some(answer => userInput === answer);
}

function updateWriteScore() {
    writeCorrectCount.textContent = writeScore;
    writeTotalCount.textContent = writeTotalQuestions;
}

// 이벤트 리스너 추가
checkAnswerBtn.addEventListener('click', checkAnswer);
nextWriteQuizBtn.addEventListener('click', showWriteQuiz);

// Enter 키로 정답 제출
userAnswer.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && !userAnswer.disabled) {
        checkAnswer();
    }
});

// 복습 시스템 함수들
function addToWrongWords(word) {
    wrongWords.push({
        word: word,
        turnMissed: currentTurn,
        nextReview: currentTurn + 5 + Math.floor(Math.random() * 6) // 5~10턴 후에 재출제
    });
}

function getNextWord() {
    currentTurn++;
    
    // 복습할 단어가 있는지 확인
    const reviewWord = wrongWords.find(w => w.nextReview === currentTurn);
    if (reviewWord) {
        // 복습 단어를 찾았으면 해당 단어를 반환하고 목록에서 제거
        wrongWords = wrongWords.filter(w => w !== reviewWord);
        return reviewWord.word;
    }

    // 아직 출제되지 않은 단어들 중에서 선택
    const availableWords = words.filter(word => !usedWords.has(word));
    
    // 모든 단어가 출제되었다면 usedWords 초기화
    if (availableWords.length === 0) {
        usedWords.clear();
        return words[Math.floor(Math.random() * words.length)];
    }

    // 랜덤하게 새로운 단어 선택
    const randomWord = availableWords[Math.floor(Math.random() * availableWords.length)];
    usedWords.add(randomWord);
    return randomWord;
}

// 초기화
showWord(); 