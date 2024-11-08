const questions = [
    {
        question: "What is the capital of France?",
        answers: ["Paris", "London", "Rome", "Berlin"],
        correct: 0,
        image: "france quiz.png"
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: ["Earth", "Mars", "Jupiter", "Saturn"],
        correct: 1,
        image: "redplanet.jpg"
    },
    {
        question: "What is 5 + 3?",
        answers: ["5", "6", "7", "8"],
        correct: 3,
        image: "maths.jpg"
    },
    {
        question: "How many minutes are in a full week'?",
        answers: ["10,080", "10,000", "11,000", "900"],
        correct: 0,
        image: "min.jpg"
    }
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const questionData = questions[currentQuestionIndex];

    document.getElementById('question').textContent = questionData.question;

    const img = document.getElementById('question-image');
    if (questionData.image) {
        img.src = questionData.image;
        img.style.display = "block";
    } else {
        img.style.display = "none";
    }

    const answerButtons = document.querySelectorAll('.answer-btn');
    questionData.answers.forEach((answer, index) => {
        answerButtons[index].textContent = answer;
        answerButtons[index].disabled = false;
        answerButtons[index].style.backgroundColor = "blue";
    });

    document.getElementById('next-btn').disabled = true;
}

function checkAnswer(answerIndex) {
    const questionData = questions[currentQuestionIndex];
    const answerButtons = document.querySelectorAll('.answer-btn');

    answerButtons.forEach(button => button.disabled = true);

    if (answerIndex === questionData.correct) {
        score++;
        answerButtons[answerIndex].style.backgroundColor = "#076b07";
    } else {
        answerButtons[answerIndex].style.backgroundColor = "#b30404";
        answerButtons[questionData.correct].style.backgroundColor = "#076b07";
    }

    document.getElementById('next-btn').disabled = false;
    document.getElementById('score').textContent = score;
}

function nextQuestion() {
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        alert("Quiz completed! Your final score is: " + score);
    }
}

loadQuestion();
