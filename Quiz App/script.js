const questions = [
    {
        question: "Javascript is an _______ language?",
        answers: [
                {Text: "Object-Oriented", correct: true},
                {Text: "Object-Based", correct: false},
                {Text: "Procedural", correct: false},
                {Text: "None of the above", correct: false},
        ]
    },
    {
        question: "Which of the following keywords is used to define a variable in Javascript?",
        answers: [
                {Text: "var", correct: false},
                {Text: "let", correct: false},
                {Text: "Both A and B", correct: true},
                {Text: "None of the above", correct: false},
        ]
    },
    {
        question: "Both var and let keywords are used to define a variable in Javascript.",
        answers: [
                {Text: "getElementbyId()", correct: false},
                {Text: "getElementsByClassName()", correct: false},
                {Text: "Both A and B", correct: true},
                {Text: "None of the above", correct: false},
        ]
    },
    {
        question: "Upon encountering empty statements, what does the Javascript Interpreter do?",
        answers: [
                {Text: "Throws an error", correct: false},
                {Text: "Ignores the statements", correct: true},
                {Text: "Gives a warning", correct: false},
                {Text: "None of the above", correct: false},
        ]
    },
    {
        question: "Which of the following methods can be used to display data in some form using Javascript?",
        answers: [
                {Text: "document.write()", correct: false},
                {Text: "console.log()", correct: false},
                {Text: "window.alert()", correct: false},
                {Text: "All of the above", correct: true},
        ]
    },
    {
        question: "How can a datatype be declared to be a constant type?",
        answers: [
                {Text: "const", correct: true},
                {Text: "var", correct: false},
                {Text: "let", correct: false},
                {Text: "constant", correct: false},
        ]
    },
    {
        question: "When the switch statement matches the expression with the given labels, how is the comparison done?",
        answers: [
                {Text: "Both the datatype and the result of the expression are compared.", correct: true},
                {Text: "Only the datatype of the expression is compared.", correct: false},
                {Text: "Only the value of the expression is compared.", correct: false},
                {Text: "None of the above.", correct: false},
        ]
    }

];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
score = 0;
function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next"
    showQestion();
}

function showQestion (){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex +1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.
    question;

    currentQuestion.answers.forEach(answer =>{
        const button = document.createElement("button");
        button.innerHTML = answer.Text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }

        button.addEventListener("click",selectAnswer);


    });
}
function resetState(){
    nextButton.style.display = "none"
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}
function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect")
    }
    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block"
}

function showScore (){
    resetState();
    questionElement.innerHTML = `you scored ${score} out of the ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block"
}

function handleNextButton (){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})
startQuiz();