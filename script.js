// DOM 요소
document.addEventListener('DOMContentLoaded', () => {
    // 메뉴 버튼 생성
    const container = document.getElementById('game-container');
    container.innerHTML = `
        <div class="menu">
            <button id="studyMode">학습 모드</button>
            <button id="quizMode">객관식 퀴즈</button>
            <button id="writeMode">주관식 퀴즈</button>
        </div>
        <div id="studySection" class="section">
            <div class="card">
                <div class="word-front">
                    <h2 id="wordJapanese"></h2>
                </div>
                <div class="word-back hidden">
                    <p id="wordReading"></p>
                    <p id="wordKorean"></p>
                </div>
            </div>
            <button id="nextWord">다음 단어</button>
            <button id="flipCard">카드 뒤집기</button>
        </div>
        <div id="quizSection" class="section hidden">
            <div class="quiz-container">
                <h2 id="quizWord"></h2>
                <div class="options"></div>
                <p id="result"></p>
                <button id="nextQuiz" class="hidden">다음 문제</button>
            </div>
            <div class="score">
                맞은 개수: <span id="correctCount">0</span> / <span id="totalCount">0</span>
            </div>
        </div>
        <div id="writeSection" class="section hidden">
            <div class="write-container">
                <h2 id="writeWord"></h2>
                <div class="answer-input">
                    <input type="text" id="userAnswer" placeholder="한글 뜻을 입력하세요">
                    <button id="checkAnswer">정답 확인</button>
                </div>
                <p id="writeResult"></p>
                <button id="nextWriteQuiz" class="hidden">다음 문제</button>
            </div>
            <div class="score">
                맞은 개수: <span id="writeCorrectCount">0</span> / <span id="writeTotalCount">0</span>
            </div>
        </div>
    `;

    // 이벤트 리스너 설정
    setupEventListeners();
    
    // 초기 화면 설정
    showStudyMode();
});

// 게임 상태
let currentWordIndex = 0;
let score = 0;
let totalQuestions = 0;

// 이벤트 리스너 설정
function setupEventListeners() {
    document.getElementById('studyMode').addEventListener('click', showStudyMode);
    document.getElementById('quizMode').addEventListener('click', showQuizMode);
    document.getElementById('writeMode').addEventListener('click', showWriteMode);
    document.getElementById('nextWord').addEventListener('click', showNextWord);
    document.getElementById('flipCard').addEventListener('click', flipCard);
    document.getElementById('nextQuiz').addEventListener('click', showNextQuiz);
    document.getElementById('checkAnswer').addEventListener('click', checkWriteAnswer);
    document.getElementById('nextWriteQuiz').addEventListener('click', showNextWriteQuiz);
}

// 학습 모드 함수
function showStudyMode() {
    hideAllSections();
    document.getElementById('studySection').classList.remove('hidden');
    showNextWord();
}

function showNextWord() {
    currentWordIndex = Math.floor(Math.random() * words.length);
    const word = words[currentWordIndex];
    document.getElementById('wordJapanese').textContent = word.japanese;
    document.getElementById('wordReading').textContent = word.reading;
    document.getElementById('wordKorean').textContent = word.korean;
    document.querySelector('.word-back').classList.add('hidden');
}

function flipCard() {
    document.querySelector('.word-back').classList.toggle('hidden');
}

// 객관식 퀴즈 모드 함수
function showQuizMode() {
    hideAllSections();
    document.getElementById('quizSection').classList.remove('hidden');
    score = 0;
    totalQuestions = 0;
    updateScore();
    showNextQuiz();
}

function showNextQuiz() {
    const options = document.querySelector('.options');
    options.innerHTML = '';
    document.getElementById('result').textContent = '';
    document.getElementById('nextQuiz').classList.add('hidden');

    currentWordIndex = Math.floor(Math.random() * words.length);
    const correctWord = words[currentWordIndex];
    document.getElementById('quizWord').textContent = correctWord.japanese;

    const answers = getRandomAnswers(correctWord.korean);
    answers.forEach(answer => {
        const button = document.createElement('button');
        button.textContent = answer;
        button.classList.add('option');
        button.addEventListener('click', () => checkAnswer(answer, correctWord.korean));
        options.appendChild(button);
    });
}

// 주관식 퀴즈 모드 함수
function showWriteMode() {
    hideAllSections();
    document.getElementById('writeSection').classList.remove('hidden');
    score = 0;
    totalQuestions = 0;
    updateWriteScore();
    showNextWriteQuiz();
}

function showNextWriteQuiz() {
    currentWordIndex = Math.floor(Math.random() * words.length);
    const word = words[currentWordIndex];
    document.getElementById('writeWord').textContent = word.japanese;
    document.getElementById('userAnswer').value = '';
    document.getElementById('writeResult').textContent = '';
    document.getElementById('nextWriteQuiz').classList.add('hidden');
    document.getElementById('userAnswer').focus();
}

function checkWriteAnswer() {
    const userAnswer = document.getElementById('userAnswer').value.trim();
    const correctAnswer = words[currentWordIndex].korean;
    const result = document.getElementById('writeResult');

    if (userAnswer === correctAnswer) {
        result.textContent = '정답입니다!';
        result.style.color = '#4CAF50';
        score++;
    } else {
        result.textContent = `틀렸습니다. 정답은 "${correctAnswer}" 입니다.`;
        result.style.color = '#f44336';
    }
    totalQuestions++;
    updateWriteScore();
    document.getElementById('nextWriteQuiz').classList.remove('hidden');
}

// 유틸리티 함수
function hideAllSections() {
    document.getElementById('studySection').classList.add('hidden');
    document.getElementById('quizSection').classList.add('hidden');
    document.getElementById('writeSection').classList.add('hidden');
}

function updateScore() {
    document.getElementById('correctCount').textContent = score;
    document.getElementById('totalCount').textContent = totalQuestions;
}

function updateWriteScore() {
    document.getElementById('writeCorrectCount').textContent = score;
    document.getElementById('writeTotalCount').textContent = totalQuestions;
}

function getRandomAnswers(correct) {
    const answers = [correct];
    while (answers.length < 4) {
        const randomWord = words[Math.floor(Math.random() * words.length)];
        if (!answers.includes(randomWord.korean)) {
            answers.push(randomWord.korean);
        }
    }
    return shuffleArray(answers);
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// 초기화
showStudyMode(); 