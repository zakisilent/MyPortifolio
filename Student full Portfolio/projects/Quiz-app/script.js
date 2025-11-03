const quizData = [
  {
    question: "Which language is used for web structure?",
    options: ["HTML", "Python", "C++", "Java"],
    correct: "HTML"
  },
  {
    question: "Which tag is used for linking CSS?",
    options: ["<style>", "<link>", "<css>", "<script>"],
    correct: "<link>"
  },
  {
    question: "Which of these is a JavaScript data type?",
    options: ["Table", "Number", "CSS", "Class"],
    correct: "Number"
  }
];

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const resultBox = document.getElementById("result-box");
const quizBox = document.getElementById("quiz-box");
const scoreEl = document.getElementById("score");
const restartBtn = document.getElementById("restart-btn");

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
  const q = quizData[currentQuestion];
  questionEl.textContent = q.question;
  const buttons = optionsEl.querySelectorAll(".option-btn");
  buttons.forEach((btn, index) => {
    btn.textContent = q.options[index];
    btn.onclick = () => checkAnswer(btn.textContent);
  });
}

function checkAnswer(answer) {
  const correctAnswer = quizData[currentQuestion].correct;
  if (answer === correctAnswer) score++;
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  quizBox.classList.add("hidden");
  resultBox.classList.remove("hidden");
  scoreEl.textContent = `${score} / ${quizData.length}`;
}

restartBtn.onclick = () => {
  currentQuestion = 0;
  score = 0;
  quizBox.classList.remove("hidden");
  resultBox.classList.add("hidden");
  loadQuestion();
};

loadQuestion();
