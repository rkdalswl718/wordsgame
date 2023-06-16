// TODO-1: "게임 시작" 버튼을 누르면 단어 게임이 시작됩니다.

//클릭시 실행할 함수 start

// TODO-2: "data" 폴더의 "words.js" 파일을 import하여 단어들을 무작위로 표시합니다.

// TODO-3: 사용자로부터 입력을 받기 위해 입력 필드를 사용합니다.

// TODO-4: 사용자가 입력한 단어와 무작위로 표시된 단어가 일치하는지 확인합니다.

// TODO-5: 일치하는 경우 5점을 점수에 추가하고, 일치하지 않는 경우 3점을 감점합니다.

// TODO-6: 사용자가 "끝내기" 버튼을 클릭하면 점수를 초기화하고 "게임이 정상적으로 종료되었습니다"라는 메시지를 표시합니다.

import words from '../data/words.js';
console.log(words);

let answer = ""; //정답 저장할 변수

const scoreDisplay = document.querySelector("#score");
const word = document.querySelector("#word");
const input = document.querySelector("#input");
const check = document.querySelector("#check");
const start = document.querySelector("#start");
const finish = document.querySelector("#finish"); //html속성에서불러오기


start.addEventListener("click",startGame);
finish.addEventListener("click",finishGame);
check.addEventListener("click",wordCheck);

const wordCheck = () => {
    const userInput = check.value.toLowerCase();
    const random = wordsJs.words[Math.floor(Math.random() * wordsJs.words.length )]; //무작위 단어
    userInput = answer[random];
    if (userInput === answer) {
        score+=5; // 단어가 일치하면 +5점
        scoreDisplay.textContent = score;//
    }
    else {
        score-=3; // 단어가 일치하지 않으면 -3점
        scoreDisplay.textContent = score;//
    }
}

wordCheck();



function startGame() {
    let score = 0; //처음 점수

}

const finishGame = () => {
    score = 0;
    alert("게임이 정상적으로 종료되었습니다.");
}

finishGame();