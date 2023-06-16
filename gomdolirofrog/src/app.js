import words from "../data/words.js";

let answer = ""; // 정답 저장 변수
let randomWord = ""; // 랜덤 단어 저장 변수
let score = 0; // 점수 저장 변수

const scoreDisplay = document.querySelector("#score > span");
const wordDisplay = document.querySelector("#word > span");
const scr = document.querySelector("#score");
const wrd = document.querySelector("#word");
const input = document.querySelector("#input");
const check = document.querySelector("#check");
const startGameBtn = document.querySelector("#startGame");
const finishGameBtn = document.querySelector("#finishGame");

const startGame = () => {
    startGameBtn.style.display = "none"; // 게임 시작 버튼 숨기기
    finishGameBtn.style.display = "block"; // 끝내기 버튼 보이기
    input.style.display = "block"; // 입력 필드 보이기
    check.style.display = "block"; // 확인 버튼 보이기
    wrd.style.display = "block"; //단어 보이기
    scr.style.display = "block"; //점수 보이기
    randomWord = getRandomWord(); // 랜덤 단어 불러오기
    answer = randomWord.toLowerCase(); // 소문자 형태의 정답 저장
    score = 0;
    scoreDisplay.textContent = score;
    wordDisplay.textContent = randomWord; // 랜덤 단어 표시
    input.value = ""; // 입력 필드 초기화
};

const getRandomWord = () => {
    return words[Math.floor(Math.random() * words.length)]; // 무작위 단어 선택. 배열에서 단어 가져옴, floor로 반올림한 값의 배열 출력
    // return 으로 배열에서 무작위로 단어를 선택하여 반환 (매번 다른 단어 호출)
};

// 영어만 입력되게 하기 
function handleOnInput() {
    input.value = input.value.replace(/[^A-Za-z]/ig, "");
}


//게임 끝내기 버튼을 눌렀을 때
function finishGame() {
    score = 0;
    scoreDisplay.textContent = score;
    alert("게임이 정상적으로 종료되었습니다.");
    startGameBtn.style.display = "block"; // 게임 시작 버튼 보이기
    finishGameBtn.style.display = "none"; // 끝내기 버튼 숨기기
    input.style.display = "none"; // 입력 필드 숨기기
    check.style.display = "none"; // 확인 버튼 숨기기
    wrd.style.display = "none"; //단어 숨기기
    scr.style.display = "none"; //점수 숨기기
}

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
    randomWord = getRandomWord(); // 새로운 단어 선택
    answer = randomWord.toLowerCase(); // 소문자 형태의 정답 저장
    wordDisplay.textContent = randomWord; // 랜덤 단어 표시
};

startGameBtn.addEventListener("click", startGame);
finishGameBtn.addEventListener("click", finishGame);
check.addEventListener("click", wordCheck);
input.addEventListener("input", handleOnInput);

// 초기 상태 설정
startGameBtn.style.display = "block"; // 게임 시작 버튼 보이기
input.style.display = "none"; // 입력 필드 숨기기
check.style.display = "none"; // 확인 버튼 숨기기
finishGameBtn.style.display = "none"; // 끝내기 버튼 숨기기
wrd.style.display = "none"; //단어 숨기기
scr.style.display = "none"; //점수 숨기기
