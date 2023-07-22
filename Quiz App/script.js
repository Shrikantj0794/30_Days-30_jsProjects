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
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");