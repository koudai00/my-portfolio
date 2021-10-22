const answer1 = document.getElementById("answer1");
const answer2 = document.getElementById("answer2");
const answer3 = document.getElementById("answer3");
const feedback = document.getElementById("feedback");

answer1.onclick = function () {
  feedback.textContent =
    "おめでとう！誰も気づいてないことに気づいた君はノーベル賞！";
};
answer2.onclick = function () {
  feedback.textContent = "君は「忖度」っていう言葉を知らないようだね";
};
answer3.onclick = function () {
  feedback.textContent = "大正解！！！！！これで君も五十嵐マスター！";
};

const lastbutton = document.getElementById("lastbutton");

lastbutton.onclick = function () {
  alert("あるわけないっしょ。こんなんでいいことあったらドラえもんいらんで。");
};

