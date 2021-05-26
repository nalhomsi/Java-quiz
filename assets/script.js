// Home page
var mainEl = document.querySelector("#main");
var timerEl = document.querySelector("#timer");
var timeLeft = 75;
var timeIntervalID;
var totalPoints = 0;
var end = false;

    // Global Functions for use in questions
var points = function() {
    totalPoints = totalPoints + 10;
    console.log("You have " + totalPoints + " points!");
}
var timer = function() {
    console.log ("end timer function")
timeLeft--;
if(timeLeft<=0){
    timerEl.textContent=timeLeft
    clearInterval(timeIntervalID)
}
else{
    timerEl.textContent=timeLeft
}
    // var timeInterval = setInterval(() => {
    //     if (end === false) {
    //         timerEl.textContent = timeLeft;
    //         timeLeft = timeLeft -2;
    //         return timeLeft;
    //     } else {
    //         timerEl.textContent = "";
    //         clearInterval(timeInterval);
    //     }
    // }, 1000);
    
    // console.log("TIMER STARTED")
    //if (end === true){
    //     timerEl.textContent = timeLeft;
    // }
}



var highScores = function() {
        //div
    var highScoreContainer = document.createElement("div");
    highScoreContainer.className = "hs-container";
    mainEl.appendChild(highScoreContainer);

    // high Score TITLE
    var title = document.createElement("h1");
    title.className = "high-score-title";
    title.textContent = "High Scores";
    highScoreContainer.appendChild(title);

    //displays high scores
    // displays player scores
    var initals = localStorage.getItem("initals");
    var score = localStorage.getItem("score");
    var leaderboardScore = document.createElement("p");
    leaderboardScore.className = "leaderboard-score";
    leaderboardScore.textContent = "1." + initals + " - " + score;
    highScoreContainer.appendChild(leaderboardScore);


        //div
    var leaderboard = document.createElement("div");
    leaderboard.className = "leaderboard";
    highScoreContainer.appendChild(leaderboard);
        //button "GO BACK"
    var goBack = document.createElement("button");
    goBack.className = "go-back-btn";
    goBack.textContent = "Go Back";
    goBack.addEventListener("click", event => {
        totalPoints = 0;
        end = false;
        timeLeft = 75;
        highScoreContainer.remove();
        start();
    })
    leaderboard.appendChild(goBack);
        // button "CLEAR HIGH SCORE"
    var clearHighScore = document.createElement("button");
    clearHighScore.className = "clear-highScore";
    clearHighScore.textContent = "Clear High Scores";
    clearHighScore.addEventListener("click", event => {
        //remove score from local storage
        localStorage.removeItem("initals")
        //remove initals from local storage
        localStorage.removeItem("score")
        //remove score from leaderboard
        leaderboardScore.remove();
    })
    leaderboard.appendChild(clearHighScore);
}

var enterScore = function() {
    clearInterval(timeIntervalID);
        // DIV
    var doneContainer = document.createElement("div");
    doneContainer.className = "done-container";
    mainEl.appendChild(doneContainer);
        // TITLE
    var done = document.createElement("h1");
    done.textContent = "All Done!";
    done.className = "done-title";
    doneContainer.appendChild(done);
        // SCORE
    var score = document.createElement("h4");
    score.textContent = "Your final score is " + totalPoints;
    score.className = "score";
    doneContainer.appendChild(score); 

        //div
    var inputContainer = document.createElement("div");
    inputContainer.className = "input-container";
    doneContainer.appendChild(inputContainer);

        // LABEL
    var label = document.createElement("label");
    label.textContent = "Enter Initials:";
    label.className = "label";
    label.setAttribute("for", "input");
    inputContainer.appendChild(label);
        // INPUT
    var initalInput = document.createElement("Input");
    initalInput.className = "score-input";
    initalInput.setAttribute("id", "input")
    initalInput.setAttribute("name", "input");
    initalInput.setAttribute("type", "text");
    inputContainer.appendChild(initalInput);
        //SUBMIT
    var submit = document.createElement("button");
    submit.textContent = "Submit";
    submit.className = "submit-btn";
    submit.addEventListener("click", event => {
            // retreives user input
        var initals = document.getElementById("input").value;
        //store score in local storage
        localStorage.setItem("initals", initals);
        //store initals in local storage
        localStorage.setItem("score", totalPoints);
            // remove page content
        doneContainer.remove();
        //move to next page
        highScores();
    })
    inputContainer.appendChild(submit);
}

var questionOne = function() {
    // execute if wrong answer is choosen
    var removeWrong = function() {
        timeLeft = timeLeft -10
        questionContainer.remove();
        questionTwo()
        console.log("The answer you picked was wrong");
       
    }
        //div
    var questionContainer = document.createElement("div");
    questionContainer.className = "question-container";
    mainEl.appendChild(questionContainer);

        // question One
    var question = document.createElement("h1");
    question.className = "question";
    question.textContent = "What is called Variable typing in Javascript?";
    questionContainer.appendChild(question);

        // question One Answers
    var answerContainer = document.createElement("div");
    answerContainer.className = "answer-container";
    questionContainer.appendChild(answerContainer);
            // answer one
    var answerOne = document.createElement("button");
    answerOne.className = "answer-One";
    answerOne.textContent = "1. Assigns a number to a variable";
    answerContainer.appendChild(answerOne);
    answerOne.addEventListener("click", event => {
        points();
        questionContainer.remove();
        // enterScore();
        console.log("You picked the right answer");
        questionTwo()
        
    })
            //answer Two
    var answerTwo = document.createElement("button");
    answerTwo.className = "answer-Two";
    answerTwo.textContent = "2. Assigns a letter to a variable";
    answerContainer.appendChild(answerTwo);
    answerTwo.addEventListener("click", event => {
        removeWrong();
        
    })
            // answer Three
    var answerThree = document.createElement("button");
    answerThree.className = "answer-Three";
    answerThree.textContent = "3. Assigns true/false to a variable ";
    answerContainer.appendChild(answerThree);
    answerThree.addEventListener("click", event => {
        removeWrong();
      
    })
            // answer Four
    var answerFour = document.createElement("button");
    answerFour.className = "answer-Four";
    answerFour.textContent = "4. I'm not sure!";
    answerContainer.appendChild(answerFour);
    answerFour.addEventListener("click", event => {
        removeWrong();
        
    })
}

var questionTwo = function() {
// execute if wrong answer is choosen
    var removeWrong = function() {
        timeLeft = timeLeft - 10;
        questionContainer.remove();
        questionThree();
        console.log("The answer you picked was wrong");

    }
        //div
    var questionContainer = document.createElement("div");
    questionContainer.className = "question-container";
    mainEl.appendChild(questionContainer);

        // question Two
    var question = document.createElement("h1");
    question.className = "question";
    question.textContent = "Which data type represents a series of characters and is written with quotes?";
    questionContainer.appendChild(question);

        // question Two Answers
    var answerContainer = document.createElement("div");
    answerContainer.className = "answer-container";
    questionContainer.appendChild(answerContainer);
            // answer one
    var answerOne = document.createElement("button");
    answerOne.className = "answer-One";
    answerOne.textContent = "1. Boolean";
    answerContainer.appendChild(answerOne);
    answerOne.addEventListener("click", event => {
        removeWrong();
       
    })
            //answer Two
    var answerTwo = document.createElement("button");
    answerTwo.className = "answer-Two";
    answerTwo.textContent = "2. Array";
    answerContainer.appendChild(answerTwo);
    answerTwo.addEventListener("click", event => {
        removeWrong();
      
    })
            // answer Three
    var answerThree = document.createElement("button");
    answerThree.className = "answer-Three";
    answerThree.textContent = "3. Number";
    answerContainer.appendChild(answerThree);
    answerThree.addEventListener("click", event => {
        removeWrong();
        
    })
            // answer Four
    var answerFour = document.createElement("button");
    answerFour.className = "answer-Four";
    answerFour.textContent = "4. String";
    answerContainer.appendChild(answerFour);
    answerFour.addEventListener("click", event => {
        questionContainer.remove();
        console.log("You picked the right answer");
        points();
        questionThree();
        
    })
}

var questionThree = function() {
// execute if wrong answer is choosen
    var removeWrong = function() {
        timeLeft = timeLeft - 10;
        questionContainer.remove();
        questionFour();
        console.log("The answer you picked was wrong");
        
    }
        //div
    var questionContainer = document.createElement("div");
    questionContainer.className = "question-container";
    mainEl.appendChild(questionContainer);

        // question Three
    var question = document.createElement("h1");
    question.className = "question";
    question.textContent = "Is javascript a statically typed or a dynamically typed language?";
    questionContainer.appendChild(question);

        // question Three Answers
    var answerContainer = document.createElement("div");
    answerContainer.className = "answer-container";
    questionContainer.appendChild(answerContainer);
            // answer one
    var answerOne = document.createElement("button");
    answerOne.className = "answer-One";
    answerOne.textContent = "1. Static";
    answerContainer.appendChild(answerOne);
    answerOne.addEventListener("click", event => {
        removeWrong();
    })
            //answer Two
    var answerTwo = document.createElement("button");
    answerTwo.className = "answer-Two";
    answerTwo.textContent = "2. Both";
    answerContainer.appendChild(answerTwo);
    answerTwo.addEventListener("click", event => {
        removeWrong();
    })
            // answer Three
    var answerThree = document.createElement("button");
    answerThree.className = "answer-Three";
    answerThree.textContent = "3. Neither";
    answerContainer.appendChild(answerThree);
    answerThree.addEventListener("click", event => {
        removeWrong();
    })
            // answer Four
    var answerFour = document.createElement("button");
    answerFour.className = "answer-Four";
    answerFour.textContent = "4. Dynamic";
    answerContainer.appendChild(answerFour);
    answerFour.addEventListener("click", event => {
        questionContainer.remove();
        questionFour();
        console.log("You picked the right answer");
        points();
    })
}

var questionFour = function() {
        // execute if wrong answer is choosen
    var removeWrong = function() {
        questionFive();
        questionContainer.remove();
        timeLeft = timeLeft - 10;
    }
        //div
    var questionContainer = document.createElement("div");
    questionContainer.className = "question-container";
    mainEl.appendChild(questionContainer);

        // question Four
    var question = document.createElement("h1");
    question.className = "question";
    question.textContent = "What is a Boolean data type?";
    questionContainer.appendChild(question);

        // question Four
    var answerContainer = document.createElement("div");
    answerContainer.className = "answer-container";
    questionContainer.appendChild(answerContainer);
            // answer one
    var answerOne = document.createElement("button");
    answerOne.className = "answer-One";
    answerOne.textContent = "1. Represents numbers";
    answerContainer.appendChild(answerOne);
    answerOne.addEventListener("click", event => {
        removeWrong();
    });
            //answer Two
    var answerTwo = document.createElement("button");
    answerTwo.className = "answer-Two";
    answerTwo.textContent = "2. Represents a series of characters";
    answerContainer.appendChild(answerTwo);
    answerTwo.addEventListener("click", event => {
        removeWrong();
    });
            // answer Three
    var answerThree = document.createElement("button");
    answerThree.className = "answer-Three";
    answerThree.textContent = "3. Represents true or false";
    answerContainer.appendChild(answerThree);
    answerThree.addEventListener("click", event => {
        questionContainer.remove();
        questionFive();
        console.log("You picked the right answer");
        points();
    });
            // answer Four
    var answerFour = document.createElement("button");
    answerFour.className = "answer-Four";
    answerFour.textContent = "4. None of the above";
    answerContainer.appendChild(answerFour);
    answerFour.addEventListener("click", event => {
        removeWrong();
    });
}

var questionFive = function() {
        // execute if wrong answer is choosen
    var removeWrong = function() {
        timeLeft = timeLeft - 10;
        questionContainer.remove();
        enterScore();
        console.log("The answer you picked was wrong");
    }
        //div
    var questionContainer = document.createElement("div");
    questionContainer.className = "question-container";
    mainEl.appendChild(questionContainer);

        //question Five
    var question = document.createElement("h1");
    question.className = "question";
    question.textContent = "Primitive data types can store:";
    questionContainer.appendChild(question);

        //question Five Answers
    var answerContainer = document.createElement("div");
    answerContainer.className = "answer-container";
    questionContainer.appendChild(answerContainer);
            // answer One
    var answerOne = document.createElement("button");
    answerOne.className = "answer-One";
    answerOne.textContent = "1. Multiple values";
    answerContainer.appendChild(answerOne);
    answerOne.addEventListener("click", event => {
        removeWrong();
    })
            // answer Two
    var answerTwo = document.createElement("button");
    answerTwo.className = "answer-Two";
    answerTwo.textContent = "2.Complex values ";
    answerContainer.appendChild(answerTwo);
    answerTwo.addEventListener("click", event => {
        removeWrong();
    })
            // answer Three
    var answerThree = document.createElement("button");
    answerThree.className = "answer-Three";
    answerThree.textContent = "3. Single Values";
    answerContainer.appendChild(answerThree);
    answerThree.addEventListener("click", event => {
        questionContainer.remove();
        enterScore();
        console.log("You picked the right answer");
        points();
    })
            // answer Four
    var answerFour = document.createElement("button");
    answerFour.className = "answer-Four";
    answerFour.textContent = "4. There are only non-primitive types in Javascript";
    answerContainer.appendChild(answerFour);
    answerFour.addEventListener("click", event => {
        removeWrong();
    })
    console.log("Question One");
}

var start = function() {
        //div
    var container = document.createElement("div");
    container.className = "home-container"
    mainEl.appendChild(container);

        // start page title
    var homeHeader = document.createElement("h1");
    homeHeader.className = "home-title";
    homeHeader.textContent = "Coding Quiz Challenge";
    container.appendChild(homeHeader);

        // start page paragraph
    var homeParagraph = document.createElement("p");
    homeParagraph.className = "home-text-p";
    homeParagraph.textContent = "Let's test your coding knowledge! Try to answer the following javascript" +
    " questions within the alloted time limit. Remember that incorrect answer will" +
    " penalize your score and time by ten seconds."
    container.appendChild(homeParagraph);

        // start quick button
    var startQuizBtn = document.createElement("button");
    startQuizBtn.className = "home-btn";
    startQuizBtn.textContent = "Start Quiz";
    container.appendChild(startQuizBtn);

        // removes home page elements
    startQuizBtn.addEventListener("click", event => {
        startQuizBtn.remove();
        homeHeader.remove();
        homeParagraph.remove();
        timerEl.textContent=timeLeft
        timeIntervalID = setInterval(timer, 1000)
        questionOne()
    });
}
start();