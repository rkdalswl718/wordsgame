import "../data/words.js";

let answer = ""; // 정답 저장 변수
let randomWord = ""; // 랜덤 단어 저장 변수
let score = 0; // 점수 저장 변수

const scoreDisplay = document.querySelector("#score");
const wordDisplay = document.querySelector("#word");
const input = document.querySelector("#input");
const check = document.querySelector("#check");
const startGameBtn = document.querySelector("#startGame");
const finishGameBtn = document.querySelector("#finishGame");

const startGame = () => {
    randomWord = words[Math.floor(Math.random() * words.length)]; // 무작위 단어 선택
    answer = randomWord.toLowerCase(); // 소문자 형태의 정답 저장
    score = 0;
    scoreDisplay.textContent = score;
    wordDisplay.textContent = randomWord;
    input.value = ""; // 입력 필드 초기화
    startGameBtn.style.display = "none"; // 게임 시작 버튼 숨기기
    input.style.display = "block"; // 입력 필드 보이기
    check.style.display = "block"; // 확인 버튼 보이기
};

const finishGame = () => {
    score = 0;
    scoreDisplay.textContent = score;
    alert("게임이 정상적으로 종료되었습니다.");
    startGameBtn.style.display = "block"; // 게임 시작 버튼 보이기
    input.style.display = "none"; // 입력 필드 숨기기
    check.style.display = "none"; // 확인 버튼 숨기기
};

const wordCheck = () => {
    const userInput = input.value.toLowerCase(); // 입력값 소문자 변환
    if (userInput === "") {
        alert("정답을 입력하세요.");
    } else if (userInput === answer) {
        score += 5; // 단어가 일치하면 +5점
        scoreDisplay.textContent = score;
    } else {
        score -= 3; // 단어가 일치하지 않으면 -3점
        scoreDisplay.textContent = score;
    }
    input.value = ""; // 입력 필드 초기화
};

startGameBtn.addEventListener("click", startGame);
finishGameBtn.addEventListener("click", finishGame);
check.addEventListener("click", wordCheck);

// 초기 상태 설정
startGameBtn.style.display = "block"; // 게임 시작 버튼 보이기
input.style.display = "none"; // 입력 필드 숨기기
check.style.display = "none"; // 확인 버튼 숨기기
