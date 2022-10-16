const quizdata=[
    {
        question : "1. Who is generally considered the inventor of the motor car?",
        a: "Henry Ford",
        b: "Karl Benz",
        c: "Henry M. Leland",
        correct:"b",
    },
    {
        question : "2. The fear of insects is known as what? ",
        a: "Entomophobia",
        b: "Arachnophobia",
        c: "Ailurophobia",
        correct:"a",
    },
    {
        question : "3. Which horoscope sign is a fish? ",
        a: "Aquarius",
        b: "Cancer",
        c: "Pisces",
        correct:"c",
    },
    {
        question : "4. What is the largest US state (by landmass)? ",
        a: "Texas",
        b: "Alaska",
        c: "California",
        correct:"b",
    },
    {
        question : "5. What city hosted the 2002 Olympic Games? ",
        a: "Tokyo",
        b: "Beijing",
        c: "Sydney",
        correct:"c",
    },
];
const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const submitbtn = document.getElementById('submit')

let currentQuiz=0
let score = 0
loadQuiz()

function loadQuiz(){
    deselectAnswers()

    const currentQuizData = quizdata[currentQuiz]
    questionEl.innerText = currentQuizData.question
    a_text.innerText=currentQuizData.a
    b_text.innerText=currentQuizData.b
    c_text.innerText=currentQuizData.c
    

}

function deselectAnswers(){
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected(){
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked){
            answer = answerEl.id
        }
    })
    return answer
}

submitbtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer){
        if (answer === quizdata[currentQuiz].correct){
            score++
        }
        currentQuiz++

        if(currentQuiz < quizdata.length){
            loadQuiz()
        }else{
            quiz.innerHTML= `
            <h2>You answered ${score}/${quizdata.length} questions correctly</h2>
            <button onclick="location.reload()">Reload</button>
            `
            
        }
    }
})
