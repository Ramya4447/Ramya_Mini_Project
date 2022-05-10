var answer = 0;
var score = 0;
var highscore = 0;
var timedisplay;
var time;
var colordisplay;
var min = 100;
var max = 999;
highscore = localStorage.getItem("high", highscore);

function startgame3() {
    question();
}

function timing() {
    time = 9;
    var timing = document.getElementById("timeleft");
    timedisplay = setInterval(function() {
        timing.innerHTML = "Time Remaining : " + time;
        time = time - 1;
        if (time == -1) {
            localStorage.setItem("scoree", score);
            localStorage.getItem("scoree", score);
            if (highscore < score) {
                highscore = score;
            }
            localStorage.setItem("high", highscore);
            window.location.href = "tryagain.html";
        }
    }, 1000)
}

function question() {
    var sum = 0;
    var arr = ["+", "*", "-"];
    var randomoperator = Math.floor(Math.random() * 3);
    document.getElementById("operator").innerHTML = arr[randomoperator];
    switch (randomoperator) {
        case 0:
            var num1 = Math.floor((Math.random() * (max - min + 1)) + min);
            document.getElementById("questionbox1").innerHTML = num1;
            var num2 = Math.floor((Math.random() * (max - min + 1)) + min);
            document.getElementById("questionbox2").innerHTML = num2;
            answer = num1 + num2;
            var wronganswer1 = Math.floor((Math.random() * (max - min + 1)) + min) + Math.floor((Math.random() * (max - min + 1)) + min);
            if (wronganswer1 != answer) {
                sum = sum + 1;
            } else {
                var wronganswer1 = Math.floor((Math.random() * (max - min + 1)) + min) + Math.floor((Math.random() * (max - min + 1)) + min);
            }
            var wronganswer2 = Math.floor((Math.random() * (max - min + 1)) + min) + Math.floor((Math.random() * (max - min + 1)) + min);
            if (wronganswer2 != answer && wronganswer2 != wronganswer1) {
                sum = sum + 1;
            } else {
                var wronganswer2 = Math.floor((Math.random() * (max - min + 1)) + min) + Math.floor((Math.random() * (max - min + 1)) + min);
            }
            var wronganswer3 = Math.floor((Math.random() * (max - min + 1)) + min) + Math.floor((Math.random() * (max - min + 1)) + min);
            if (wronganswer3 != answer && wronganswer3 != wronganswer1 && wronganswer3 != wronganswer2) {
                sum = sum + 1;
            } else {
                var wronganswer3 = Math.floor((Math.random() * (max - min + 1)) + min) + Math.floor((Math.random() * (max - min + 1)) + min);
            }
            var wronganswer4 = Math.floor((Math.random() * (max - min + 1)) + min) + Math.floor((Math.random() * (max - min + 1)) + min);
            if (wronganswer4 != answer && wronganswer4 != wronganswer1 && wronganswer4 != wronganswer2 && wronganswer4 != wronganswer3) {
                sum = sum + 1;
            } else {
                var wronganswer4 = Math.floor((Math.random() * (max - min + 1)) + min) + Math.floor((Math.random() * (max - min + 1)) + min);
            }

            document.getElementById("answerbox1").innerHTML = wronganswer1;
            document.getElementById("answerbox2").innerHTML = wronganswer2;
            document.getElementById("answerbox3").innerHTML = wronganswer3;
            document.getElementById("answerbox4").innerHTML = wronganswer4;
            document.getElementById("answerbox1").style.backgroundColor = "#59238F";
            document.getElementById("answerbox2").style.backgroundColor = "#59238F";
            document.getElementById("answerbox3").style.backgroundColor = "#59238F";
            document.getElementById("answerbox4").style.backgroundColor = "#59238F";
            var correctindex = Math.floor((Math.random() * 4) + 1);
            var correctId = "answerbox" + correctindex;
            document.getElementById(correctId).innerHTML = answer;
            timing();
            break;

        case 1:
            var num1 = Math.floor((Math.random() * (max - min + 1)) + min);
            document.getElementById("questionbox1").innerHTML = num1;
            var num2 = Math.floor((Math.random() * (max - min + 1)) + min);
            document.getElementById("questionbox2").innerHTML = num2;
            answer = num1 * num2;
            var wronganswer1 = Math.floor((Math.random() * (max - min + 1)) + min) * Math.floor((Math.random() * (max - min + 1)) + min);
            if (wronganswer1 != answer) {
                sum = sum + 1;
            } else {
                var wronganswer1 = Math.floor((Math.random() * (max - min + 1)) + min) * Math.floor((Math.random() * (max - min + 1)) + min);
            }
            var wronganswer2 = Math.floor((Math.random() * (max - min + 1)) + min) * Math.floor((Math.random() * (max - min + 1)) + min);
            if (wronganswer2 != answer && wronganswer2 != wronganswer1) {
                sum = sum + 1;
            } else {
                var wronganswer2 = Math.floor((Math.random() * (max - min + 1)) + min) * Math.floor((Math.random() * (max - min + 1)) + min);
            }
            var wronganswer3 = Math.floor((Math.random() * (max - min + 1)) + min) * Math.floor((Math.random() * (max - min + 1)) + min);
            if (wronganswer3 != answer && wronganswer3 != wronganswer1 && wronganswer3 != wronganswer2) {
                sum = sum + 1;
            } else {
                var wronganswer3 = Math.floor((Math.random() * (max - min + 1)) + min) * Math.floor((Math.random() * (max - min + 1)) + min);
            }
            var wronganswer4 = Math.floor((Math.random() * (max - min + 1)) + min) * Math.floor((Math.random() * (max - min + 1)) + min);
            if (wronganswer4 != answer && wronganswer4 != wronganswer1 && wronganswer4 != wronganswer2 && wronganswer4 != wronganswer3) {
                sum = sum + 1;
            } else {
                var wronganswer4 = Math.floor((Math.random() * (max - min + 1)) + min) * Math.floor((Math.random() * (max - min + 1)) + min);
            }

            document.getElementById("answerbox1").innerHTML = wronganswer1;
            document.getElementById("answerbox2").innerHTML = wronganswer2;
            document.getElementById("answerbox3").innerHTML = wronganswer3;
            document.getElementById("answerbox4").innerHTML = wronganswer4;
            document.getElementById("answerbox1").style.backgroundColor = "#59238F";
            document.getElementById("answerbox2").style.backgroundColor = "#59238F";
            document.getElementById("answerbox3").style.backgroundColor = "#59238F";
            document.getElementById("answerbox4").style.backgroundColor = "#59238F";
            var correctindex = Math.floor((Math.random() * 4) + 1);
            var correctId = "answerbox" + correctindex;
            document.getElementById(correctId).innerHTML = answer;
            timing();
            break;

        case 2:
            var num1 = Math.floor((Math.random() * (max - min + 1)) + min);
            var num2 = Math.floor((Math.random() * (max - min + 1)) + min);
            if (num1 < num2) {
                var temp = num1;
                num1 = num2;
                num2 = temp;
            }
            document.getElementById("questionbox1").innerHTML = num1;
            document.getElementById("questionbox2").innerHTML = num2;
            answer = num1 - num2;
            var wronganswer1 = Math.floor((Math.random() * (max - min + 1)) + min);
            if (wronganswer1 != answer) {
                sum = sum + 1;
            } else {
                var wronganswer1 = Math.floor((Math.random() * (max - min + 1)) + min);
            }
            var wronganswer2 = Math.floor((Math.random() * (max - min + 1)) + min);
            if (wronganswer2 != answer && wronganswer2 != wronganswer1) {
                sum = sum + 1;
            } else {
                var wronganswer2 = Math.floor((Math.random() * (max - min + 1)) + min);
            }
            var wronganswer3 = Math.floor((Math.random() * (max - min + 1)) + min);
            if (wronganswer3 != answer && wronganswer3 != wronganswer1 && wronganswer3 != wronganswer2) {
                sum = sum + 1;
            } else {
                var wronganswer3 = Math.floor((Math.random() * (max - min + 1)) + min);
            }
            var wronganswer4 = Math.floor((Math.random() * (max - min + 1)) + min);
            if (wronganswer4 != answer && wronganswer4 != wronganswer1 && wronganswer4 != wronganswer2 && wronganswer4 != wronganswer3) {
                sum = sum + 1;
            } else {
                var wronganswer4 = Math.floor((Math.random() * (max - min + 1)) + min);
            }
            document.getElementById("answerbox1").innerHTML = wronganswer1;
            document.getElementById("answerbox2").innerHTML = wronganswer2;
            document.getElementById("answerbox3").innerHTML = wronganswer3;
            document.getElementById("answerbox4").innerHTML = wronganswer4;
            document.getElementById("answerbox1").style.backgroundColor = "#59238F";
            document.getElementById("answerbox2").style.backgroundColor = "#59238F";
            document.getElementById("answerbox3").style.backgroundColor = "#59238F";
            document.getElementById("answerbox4").style.backgroundColor = "#59238F";
            var correctindex = Math.floor((Math.random() * 4) + 1);
            var correctId = "answerbox" + correctindex;
            document.getElementById(correctId).innerHTML = answer;
            timing();
            break;
    }
}

function option(choice) {
    var res = document.getElementById("answerbox" + choice).innerHTML;
    if (res == answer) {
        document.getElementById("answerbox" + choice).style.backgroundColor = "green";
        score = score + 5;
        document.getElementById("marks").innerHTML = "Score : " + score;
        clearInterval(timedisplay);
        setTimeout(question, 250);
    } else {
        document.getElementById("answerbox" + choice).style.backgroundColor = "red";
        localStorage.setItem("scoree", score);
        localStorage.getItem("scoree", score);
        if (highscore < score) {
            highscore = score;
        }
        localStorage.setItem("high", highscore);
        window.location.href = "tryagain.html";
    }
}

function tryagain() {
    window.location.href = "hard.html";
}

function finalscoree() {
    var dupscore = localStorage.getItem("scoree");
    document.getElementById("finalscore").innerHTML = dupscore;
    document.getElementById("highscore").innerHTML = localStorage.getItem("high", highscore);
    var initscore = 0;
    localStorage.setItem("scoree", initscore);
}

function homepage() {
    window.location.href = "typequiz.html";
}