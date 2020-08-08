$(document).ready(function () {
    // variables add below
    let score = 0;
    const totalQuestions = 10;
    let timer = 60;
    const quizContainer = $(".card");

    // quiz questions
    const questions = [
        {
            // question1
            question: "Who invented JavaScript?",
            answers: {
                a: "Mark Zuckerberg",
                b: "Jesse Eisenberg",
                c: "Manny",
                d: "Brendan Eich"
            },
            correctAnswer: "d"
        },
        // question2
        {
            question: "Who was the NFL MVP in 2019?",
            answers: {
                a: "Patrick Mahomes",
                b: "Christian McCaffrey",
                c: "Lamar Jackson",
                d: "Russell Wilson"
            },
            correctAnswer: "c"
        },
        // question3
        {
            question: "Who is the lead singer for Phish?",
            answers: {
                a: "Freddie Mercury",
                b: "Trey Anastasio",
                c: "John Mayer",
                d: "David Bowie"
            },
            correctAnswer: "b"
        },
        // question4
        {
            question: "How many weeks in a year?",
            answers: {
                a: "60",
                b: "365",
                c: "50",
                d: "52"
            },
            correctAnswer: "d"
        },
        // question5
        {
            question: "Whats the fastest way to get from point A to point B?",
            answers: {
                a: "Uber",
                b: "Lyft",
                c: "A straight Line",
                d: "Airplane"
            },
            correctAnswer: "c"
        },
        // question6
        {
            question: "Who is the fastest sprinter alive?",
            answers: {
                a: "Manny",
                b: "Chris Johnson",
                c: "Michael Jordan",
                d: "Usain Bolt"
            },
            correctAnswer: "d"
        },
        // question7
        {
            question: "What is the biggest food chain in the world?",
            answers: {
                a: "Subway",
                b: "Taco Bell",
                c: "McDonalds",
                d: "KFC"
            },
            correctAnswer: "a"
        },
        // question8
        {
            question: "Who let the dogs out?",
            answers: {
                a: "Airbud",
                b: "Baha Men",
                c: "Michael Vick",
                d: "Yeller's Owner"
            },
            correctAnswer: "b"
        },
        // question9
        {
            question: "Who holds the record for the most points scored in a single NBA game?",
            answers: {
                a: "Michael Jordan",
                b: "Lebron James",
                c: "Kobe Bryant",
                d: "Wilt Chamberlain"
            },
            correctAnswer: "d"
        },
        // question10
        {
            question: "How many points did he score in that game?",
            answers: {
                a: "100",
                b: "81",
                c: "103",
                d: "94"
            },
            correctAnswer: "a"
        },
    ];
    // timer functions and code:
    const $countdown = $(".countdown");
    $countdown.text(timer);
    // start button gets clicked function
    $("#btn-start").click(function () {
        console.log("clicked");
        // event.preventDefault();
        buildQuiz();
        countDown();
        // quizGrade();

    });
    // start of quiz builder function
    function buildQuiz() {
        const output = [];
        questions.forEach(
            (currentQuestion, questionNumber) => {
                const answers = [];
                for (letter in currentQuestion.answer) {
                    answers.push(
                        `<label>
                            <input type="button" name="question${questionNumber}" value="${letter}">
                            ${letter} :
                            ${currentQuestion.answer[letter]}
                    <\label>`
                    );
                }
                output.push(
                    `<div class="slide">
                      <div class="question"> ${currentQuestion.question} </div>
                      <div class="answers"> ${answers.join("")} </div>
                    </div>`
                  );
            }
        );
        quizContainer.innerHTML = output.join('');
    };
    // countdown function for the quiz timer
    // ALTER SO IF A QUESTION IS WRONG, MORE TIME IS SUBTRACTED
    function countDown() {
        let timerInterval = setInterval(function () {
            timer--;
            $countdown.text(timer);
            if (timer === 0) {
                clearInterval(timerInterval);
                quizGrade();
            }
        }, 1000);
    }

    function quizGrade() {
        alert("You got " + score + " out of 10!");
    }
    // function to subtract 5 second when a question is wrong
    function subtractFive() {
        timer = timer - 5;
    }

    // create an object with each multiple choice question and answer
    // add key "q:" "a1", "a2", "a3", "a4" - answers too
    // total of 10 questions with 4 possible answers

    // because of jQuery dont forget to include all inside event funciton!!!

    // put all code inside of a while loop that only continues as long as timeLeft !==0
    // add function that responds to the clicks of the user and highlights the answer in green and alters the score...
    //      then have the new set of questions pop up
    // add function for user choice and check if it matches the answer from the object

    // add function that converts the score out of 10 to a percent
});