var answer;
var score = 0;
var timedisplay;
var time;
var colordisplay;
var askedques = [];
var questions = [
    {
        question: "What is always coming,but never arrives ?",
        option1: "Rain",
        option2: "Today",
        option3: "Cold",
        option4: "Tomorrow",
        correctoption: "Tomorrow"
    },
    {
        question: "Bay of Bengal in which state ?",
        option1: "India",
        option2: "Liquid",
        option3: "Tamil Nadu",
        option4: "Water",
        correctoption: "Liquid"
    },
    {
        question: "What does come down but never goes up ?",
        option1: "Rain",
        option2: "Tree",
        option3: "Water",
        option4: "Home",
        correctoption: "Rain"
    },
    {
        question: "I get smaller every time I take a bath. What am I ?",
        option1: "Water",
        option2: "Cold",
        option3: "Soap",
        option4: "dirt",
        correctoption: "Soap"
    },
    {
        question: "Which planet is known as the Red Planet ?",
        option1: "Venus",
        option2: "Saturn",
        option3: "Mercury",
        option4: "Pluto",
        correctoption: "Saturn"
    },
    {
        question: "Which star is at the centre of the solar System ?",
        option1: "Neptune",
        option2: "Moon",
        option3: "Sun",
        option4: "Earth",
        correctoption: "Sun"
    },
    {
        question: "What can be broken but never held ?",
        option1: "Wood",
        option2: "Table",
        option3: "Trust",
        option4: "Advice",
        correctoption: "Advice"
    },
    {
        question: "What can one catch that is not thrown ?",
        option1: "Ball",
        option2: "Cold",
        option3: "Fever",
        option4: "Pain",
        correctoption: "Cold"
    },
    {
        question: "What has a face and two hands, but no arms or legs ?",
        option1: "Window",
        option2: "Cube",
        option3: "Clock",
        option4: "Lock",
        correctoption: "Clock"
    },
    {
        question: "What has a head, a tail, but does not have a body ?",
        option1: "Frog",
        option2: "Coin",
        option3: "Water",
        option4: "Dog",
        correctoption: "Coin"
    },
    {
        question: "Who is bigger, Mr. Bigger, Mrs. Bigger, or their baby ?",
        option1: "Father",
        option2: "Mother",
        option3: "Baby",
        option4: "Sister",
        correctoption: "Baby"
    },
    {
        question: "What is sticky and brown ?",
        option1: "Gum",
        option2: "Stick",
        option3: "Wood",
        option4: "Dog",
        correctoption: "Stick"
    },
    {
        question: "Which room has no walls ?",
        option1: "Bedroom",
        option2: "Hall",
        option3: "Groom",
        option4: "Mushroom",
        correctoption: "Mushroom"
    },
    {
        question: "What goes up and down, but never moves ?",
        option1: "Stairs",
        option2: "Chair",
        option3: "Water",
        option4: "Human",
        correctoption: "Stairs"
    },
    {
        question: "What can you never eat for breakfast ?",
        option1: "Fruits",
        option2: "Lunch",
        option3: "Meals",
        option4: "Bread",
        correctoption: "Lunch"
    },
    {
        question: " How many sides does a circle have ?",
        option1: "Four",
        option2: "Two",
        option3: "Zero",
        option4: "Ten",
        correctoption: "Two"
    },
    {
        question: "What is the coldest country in the world ?",
        option1: "Snow",
        option2: "Chili",
        option3: "Cold",
        option4: "Island",
        correctoption: "Chili"
    },
    {
        question: "What is it that stands up, but grows down ?",
        option1: "Tree",
        option2: "Candle",
        option3: "Hair",
        option4: "Dog",
        correctoption: "Candle"
    },
    {
        question: "What do you find in the middle of nowhere ?",
        option1: "E",
        option2: "W",
        option3: "H",
        option4: "R",
        correctoption: "H"
    },
    {
        question: "What's a great name for a lawyer ?",
        option1: "Sue",
        option2: "Ram",
        option3: "Judge",
        option4: "Advocate",
        correctoption: "Sue"
    },
]

function startgame() {
    nextquestion();
}
function timing() {
    time = 9;
    var timing = document.getElementById("timeleft");
    timedisplay = setInterval(function () {
        timing.innerHTML = "Time Remaining : " + time;
        time = time - 1;
        if (time == -1) {
            localStorage.setItem("scoree", score);
            window.location.href = "tryagaingeneral.html";
        }
    }, 1000)
}
function nextquestion() {
    var index = Math.floor(Math.random() * 20);
    if (askedques.includes(index) != true) {
        askedques.push(index);
        document.getElementById("questionbox1").innerHTML = questions[index].question;
        document.getElementById("answerbox1").innerHTML = questions[index].option1;
        document.getElementById("answerbox2").innerHTML = questions[index].option2;
        document.getElementById("answerbox3").innerHTML = questions[index].option3;
        document.getElementById("answerbox4").innerHTML = questions[index].option4;
        answer = questions[index].correctoption;
        document.getElementById("answerbox1").style.backgroundColor = "#59238F";
        document.getElementById("answerbox2").style.backgroundColor = "#59238F";
        document.getElementById("answerbox3").style.backgroundColor = "#59238F";
        document.getElementById("answerbox4").style.backgroundColor = "#59238F";
        timing();
    }
    else {
        nextquestion();
    }
    if (askedques.length > questions.length) {
        localStorage.setItem("scoree", score);
        window.location.href = "tryagaingeneral.html";
    }

}
function option(choice) {
    var res = document.getElementById("answerbox" + choice).innerHTML;
    if (res == answer) {
        document.getElementById("answerbox" + choice).style.backgroundColor = "green";
        score = score + 5;
        document.getElementById("marks").innerHTML = "Score : " + score;
        clearInterval(timedisplay);
        setTimeout(nextquestion, 250);
    }
    else {
        document.getElementById("answerbox" + choice).style.backgroundColor = "red";
        localStorage.setItem("scoree", score);
        window.location.href = "tryagaingeneral.html";
    }
}
function tryagain() {
    window.location.href = "general.html";
}
function finalscoree() {
    var dupscore = localStorage.getItem("scoree");
    document.getElementById("finalscore").innerHTML = dupscore;
    var initscore = 0;
    localStorage.setItem("scoree", initscore);
}
function homepage() {
    window.location.href = "typequiz.html";
}