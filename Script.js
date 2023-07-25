const questions = [
{
    question: "Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?",
    answers: [
        {text: "alt" , correct: true},
        {text: "src" , correct: false},
        {text: "longdesc" , correct: false},
        {text: "title" , correct: false},
    ]
},
{
    question: "Which of these elements in HTML can be used for making a text bold?",
    answers: [
        {text: "&lt;a&gt;" , correct: false},
        {text: "&lt;pre&gt;" , correct: false},
        {text: "&lt;br&gt;" , correct: false},
        {text: "&lt;b&gt;" , correct: true},
    ]
},
{
    question: "In HTML, we use the &lt;hr&gt; tag for ___________.",
    answers: [
        {text: " horizontal ruler" , correct: true},
        {text: "new line" , correct: false},
        {text: "new paragraph" , correct: false},
        {text: "vertical ruler" , correct: false},
    ]
},
{
    question: "In HTML, the tags are __________.",
    answers: [
        {text: "in upper case" , correct: false},
        {text: "case-sensitive" , correct: false},
        {text: " in lowercase" , correct: false},
        {text: "not case sensitive" , correct: true},
    ]
},
{
    question: " Which of these tags helps in the creation of a drop-down box or a combo box?",
    answers: [
        {text: "&lt;input type = “dropdown” &gt;" , correct: false},
        {text: "&lt;list&gt;" , correct: false},
        {text: "&lt;ul&gt;" , correct: false},
        {text: "&lt;select&gt;" , correct: true},
    ]
},
{
    question: "Which tag is used in HTML5 for the initialization of the document type?",
    answers: [
        {text: "&lt;Doctype HTM&gt;" , correct: false},
        {text: "&lt;!DOCTYPE html&gt;" , correct: true},
        {text: "&lt;Doctype&gt;" , correct: false},
        {text: "&lt;\Doctype html&gt;" , correct: false},
    ]
},
{
    question: "Which HTML tag do we use for displaying the power in the expression, (x² – y²)?",
    answers: [
        {text: "&lt;p&gt;" , correct: false},
        {text: "&lt;sub&gt;" , correct: false},
        {text: "None of the above" , correct: false},
        {text: "&lt;sup&gt;" , correct: true},
    ]
},
{
    question: " Which one is the HTML document’s root tag?",
    answers: [
        {text: "&lt;head&gt;" , correct: false},
        {text: "&lt;body&gt;" , correct: false},
        {text: "&lt;title&gt;" , correct: false},
        {text: "&lt;html&gt;" , correct: true},
    ]
},
{
    question: "What attribute do we use for data binding?",
    answers: [
        {text: "datasrc" , correct: true},
        {text: "mayscript" , correct: false},
        {text: "name" , correct: false},
        {text: "datafld" , correct: false},
    ]
},
{
    question: "Which of these entities is not defined in the XML?",
    answers: [
        {text: "apos" , correct: false},
        {text: "quot" , correct: false},
        {text: "copy" , correct: true},
        {text: "gt" , correct: false},
    ]
},
{
    question: "Which of these doesn’t support the MP3 format?",
    answers: [
        {text: "Opera" , correct: true},
        {text: " Safari" , correct: false},
        {text: "Chrome" , correct: false},
        {text: "Firefox" , correct: false},
    ]
},
{
    question: " Which one of these helps us test if an old browser supports the geolocation?",
    answers: [
        {text: "Modernizr.geolocation" , correct: false},
        {text: "Modernizr" , correct: false},
        {text: "Modernizr.js" , correct: false},
        {text: "Navigator.userAgent" , correct: true},
    ]
},
];

const questionElement = document.getElementById("question");
const answersButton = document.getElementById("answers-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();

    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button")
        button.innerHTML = answer.text;
        button.classList.add("ans-btn");
        answersButton. appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click" , selectAnswer);
    })
}

function resetState(){
    nextButton.style.display = "none";
    while(answersButton.firstChild){
        answersButton.removeChild(answersButton.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answersButton.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";

}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Try Again";
    nextButton.style.display = "block";

}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
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
});
 
startQuiz();