$(document).ready(function () {
    // variables add below
    let score = 0;
    let timer = 60;
    let userQuestionIndex = 0;
    const $card1 = $(".card1");
    const $card2 = $(".card2");
    // trying to add animation over the start button to switch colors every second
    // setInterval(function() {
    //     let btnStart = $('.btn-start');
    //     if (btnStart.css('background-color') == 'red') {
    //         btnStart.css({'background-color':'green'});
    //     }
    //     else {
    //         btnStart.css({'background-color':'red'});
    //     }
    // }, 1000);
    // quiz questions
    const questions = [
        {
            // question1
            question: "Who invented JavaScript?",
            answers: { a: "Mark Zuckerberg", b: "Jesse Eisenberg", c: "Manny", d: "Brendan Eich" },
            correctAnswer: "d"
        },
        // question2
        {
            question: "Who was the NFL MVP in 2019?",
            answers: { a: "Patrick Mahomes", b: "Christian McCaffrey", c: "Lamar Jackson", d: "Russell Wilson" },
            correctAnswer: "c"
        },
        // question3
        {
            question: "Who is the lead singer for Phish?",
            answers: { a: "Freddie Mercury", b: "Trey Anastasio", c: "John Mayer", d: "David Bowie" },
            correctAnswer: "b"
        },
        // question4
        {
            question: "How many weeks in a year?",
            answers: { a: "60", b: "365", c: "50", d: "52" },
            correctAnswer: "d"
        },
        // question5
        {
            question: "Whats the fastest way to get from point A to point B?",
            answers: { a: "Uber", b: "Lyft", c: "A straight Line", d: "Airplane" },
            correctAnswer: "c"
        },
        // question6
        {
            question: "Who is the fastest sprinter alive?",
            answers: { a: "Manny", b: "Chris Johnson", c: "Michael Jordan", d: "Usain Bolt" },
            correctAnswer: "d"
        },
        // question7
        {
            question: "What is the biggest food chain in the world?",
            answers: { a: "Subway", b: "Taco Bell", c: "McDonalds", d: "KFC" },
            correctAnswer: "a"
        },
        // question8
        {
            question: "Who let the dogs out?",
            answers: { a: "Airbud", b: "Baha Men", c: "Michael Vick", d: "Yeller's Owner" },
            correctAnswer: "b"
        },
        // question9
        {
            question: "Who holds the record for the most points scored in a single NBA game?",
            answers: { a: "Michael Jordan", b: "Lebron James", c: "Kobe Bryant", d: "Wilt Chamberlain" },
            correctAnswer: "d"
        },
        // question10
        {
            question: "How many points did he score in that game?",
            answers: { a: "100", b: "81", c: "103", d: "94" },
            correctAnswer: "a"
        },
    ];
    // timer functions and code:
    const $countdown = $(".countdown");
    $countdown.text(timer);
    // start button gets clicked function
    $("#btn-start").click(function () {
        displayQuestion();
        countDown();
    });
    // function to display question 1
    // function to move to the next question with an click function 
    function displayQuestion() {
        $card1.text("");
        let currentQuestion = questions[userQuestionIndex];
        $card1.text(currentQuestion.question);
        let temp = Object.keys(currentQuestion.answers);
        $card2.text("");
        for (let i = 0; i < temp.length; i++) {
            let li = document.createElement("li");
            let btn = document.createElement("button");
            btn.setAttribute("class", "user-choice")
            btn.setAttribute("value", temp[i])
            btn.textContent = currentQuestion.answers[temp[i]];
            li.textContent = temp[i];
            li.setAttribute("card-text", i.toString());
            li.append(btn);
            $card2.append(li);
            btn.onclick = nextQuestion;
        }
    }
    // dynamically checks if the user chose the correct answer and add it to the score value
    // if the user is wrong, call the subtractFive() function
    // function to go to next question once an answer is clicked
    // function for user choice and check if it matches the answer from the object
    function nextQuestion() {
        let currentQuestion = questions[userQuestionIndex];
        // console.log(currentQuestion.correctAnswer, this.value);
        if (this.value !== currentQuestion.correctAnswer) {
            subtractFive();
            if (timer < 0) {
                quizGrade();
            }
        }
        else {
            score++;
            console.log(this.value);
        }
        userQuestionIndex++;
        if (userQuestionIndex > 9) {
            quizGrade();
        }
        else {
            displayQuestion();
        }
    };
    // countdown function for the quiz timer
    // ALTER SO IF A QUESTION IS WRONG, MORE TIME IS SUBTRACTED
    // function countDown() {
    //     let timerInterval = 60;
    //      timer = setInterval(function () {
    //         timerInterval--;
    //         $countdown.text(timerInterval);
    //         if (timer === 0) {
    //             quizGrade();
    //             console.log(timer);
    //             console.log(timerInterval);
    //             clearInterval(timer);
                
    //         }
    //     }, 1000);
    // }
    function countDown() {
        let timerInterval = setInterval(function () {
            timer--;
            $countdown.text(timer);
            if (timer == 0) {
                quizGrade();
                clearInterval(timerInterval);
            }
            if (userQuestionIndex > 9) {
                clearInterval(timerInterval);
            }
        }, 1000);
    }
// alerts the user's grade out of the 10 questions
    function quizGrade() {
        alert("You got " + score + " out of 10!");
        $countdown.text("0");
        alert("That's a " + (score/10)*100 + "%!");
    }
    // function to subtract 5 second when a question is wrong
    function subtractFive() {
        timer = timer - 5;
        $countdown.text(timer);
    }
    // add function that responds to the clicks of the user and highlights the answer in green and alters the score...
    //      then have the new set of questions pop up

    // add function that converts the score out of 10 to a percent
});