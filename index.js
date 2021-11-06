// import readline-sync library to get input from user and chalk library to style
var read = require("readline-sync");
var chalk = require("chalk");

var log = console.log;
var violet = chalk.hex('#9e1aeb');
var pink = chalk.hex('#f542ce');
var finalScore = 0,
    score = 0;

//Question and answer data structure for level 1
qna_lvl1 = [{
        question: "What is the capital city of Bhutan?",
        opt1: "Yerevan",
        opt2: "Baku",
        opt3: "Thimphu",
        opt4: "Praia",
        answer: 2
    },
    {
        question: "Taka is the currency of which country?",
        opt1: "Japan",
        opt2: "Bangladesh",
        opt3: "China",
        opt4: "None of the above",
        answer: 1
    },
    {
        question: "What is the capital city of Myanmar?",
        opt1: "Maputo",
        opt2: "Yangon",
        opt3: "Palikir",
        opt4: "Lima",
        answer: 1
    },
    {
        question: "Real is the currency of which country?",
        opt1: "Brazil",
        opt2: "Colombia",
        opt3: "Mexico",
        opt4: "None of the above",
        answer: 0
    },
    {
        question: "What is the capital city of The Netherlands?",
        opt1: "Wellington",
        opt2: "Warsaw",
        opt3: "Freetown",
        opt4: "Amsterdam",
        answer: 3
    }
];

//Question and answer data structure for level 2
qna_lvl2 = [{
        question: "Raja Ravi Verma, was famous in which of the fields?",
        opt1: "Painting",
        opt2: "Politics",
        opt3: "Dance",
        opt4: "Music",
        answer: 0
    },
    {
        question: "Michael Jackson is a distinguished person in the field of _____",
        opt1: "Acting",
        opt2: "Jounalism",
        opt3: "Pop Music",
        opt4: "Sports",
        answer: 2
    },
    {
        question: "The first Indian to swim across English channel was _____",
        opt1: "V. Merchant",
        opt2: "P. K. Banerji",
        opt3: "Mihir Sen",
        opt4: "Arati Saha",
        answer: 2
    },
    {
        question: "Who is known as 'Trimurthy of Carnatic Music'?",
        opt1: "Muthuswami Dikshitar",
        opt2: "Purandardasa",
        opt3: "Swami Thirunal",
        opt4: "None of these",
        answer: 0
    },
    {
        question: "Who is known as the 'Lady with the Lamp'?",
        opt1: "Florence Nightingale",
        opt2: "Sarojini Naidu",
        opt3: "Indira Gandhi",
        opt4: "Joan of Arc",
        answer: 0
    },
    {
        question: "Hitendra Desai was famous in the which field?",
        opt1: "Social Service",
        opt2: "Journalism",
        opt3: "Literature",
        opt4: "Politics",
        answer: 3
    },
    {
        question: "Miss Universe 1994, Ms. Sushmita Sen hails from which of the following cities?",
        opt1: "Mumbai",
        opt2: "New Delhi",
        opt3: "Chandigarh",
        opt4: "Bangalore",
        answer: 1
    },
    {
        question: "Who among the following is not a dramatist?",
        opt1: "Girish R. Karnad",
        opt2: "Badal Sircar",
        opt3: "Jayanta Mahapatra",
        opt4: "Vijay Tendulkar",
        answer: 2
    },
    {
        question: "In which of the following dance forms 'Guru Kelucharan Mohapatra' is associated with?",
        opt1: "Odissi",
        opt2: "Bharathanatiyam",
        opt3: "Kathak",
        opt4: "Kathakali",
        answer: 0
    },
    {
        question: "The first woman in space was _____",
        opt1: "Sally Ride",
        opt2: "Naidia Comenci",
        opt3: "Tamara Press",
        opt4: "Valentina Tereshkova",
        answer: 3
    }
];

//Question and answer data structure for level 3
qna_lvl3 = [{
        question: "What Galileo invented?",
        opt1: "Barometer",
        opt2: "Pendulum clock",
        opt3: "Microscope",
        opt4: "Thermometer",
        answer: 3
    },
    {
        question: "In which decade was the telephone invented?",
        opt1: "1850s",
        opt2: "1860s",
        opt3: "1870s",
        opt4: "1880s",
        answer: 2
    },
    {
        question: "Who perfected GENETIC ENGINEERING?",
        opt1: "Cohen & Boyer",
        opt2: "Hunt & Davids",
        opt3: "Sinclair & Roberts",
        opt4: "Jaysson & Simons",
        answer: 0
    },
    {
        question: "For what is Charles Babbage (1792-1871) remembered?",
        opt1: "Computers",
        opt2: "Telescopes",
        opt3: "Radio-Telegraphy",
        opt4: "Steam Boating",
        answer: 0
    },
    {
        question: "Who invented Automobiles using gasoline?",
        opt1: "Leo H Baekeland",
        opt2: "Karl Benz",
        opt3: "Evangelista Torricelli",
        opt4: "Kirkpatrick Macmillan",
        answer: 1
    },
    {
        question: "Who invented the battery?",
        opt1: "John Wilkinson",
        opt2: "Alessandro Volta",
        opt3: "James Hargreaves",
        opt4: "Thomas Edison",
        answer: 1
    },
    {
        question: "What Sir Isaac Newton invented?",
        opt1: "Reflecting telescope",
        opt2: "Chronometer",
        opt3: "Microscope",
        opt4: "Spectacles",
        answer: 0
    },
    {
        question: "CORN FLAKES - Who made them first?",
        opt1: "Nabisco",
        opt2: "Kellogg",
        opt3: "Quaker",
        opt4: "Archers",
        answer: 1
    },
    {
        question: "Who invented the first controllable flying AEROPLANE (AIRPLANE)?",
        opt1: "Lidenbergh Brothers",
        opt2: "South Brothers",
        opt3: "West Brothers",
        opt4: "Wright Brothers",
        answer: 3
    },
    {
        question: "In which decade was the telegraph invented?",
        opt1: "1810s",
        opt2: "1870s",
        opt3: "1840s",
        opt4: "1890s",
        answer: 2
    },
    {
        question: "What inspired reflecting road lights to be invented?",
        opt1: "Car door reflecting mirrors",
        opt2: "The light a cat's eyes gave off on a fence",
        opt3: "Sun light on steel posts on road sides",
        opt4: "The sun light on the windshield",
        answer: 1
    },
    {
        question: "Who invented Electric Generator?",
        opt1: "Sir Alexander Graham Bell",
        opt2: "Michael Faraday",
        opt3: "Alfred B. Nobel",
        opt4: "Thomas Alva Edison",
        answer: 1
    },
    {
        question: "Where was the yo-yo invented?",
        opt1: "France",
        opt2: "United States",
        opt3: "Philippines",
        opt4: "England",
        answer: 2
    },
    {
        question: "Who is the only U.S. President to invent and patent something?",
        opt1: "Abraham Lincoln",
        opt2: "Theodore Roosevelt",
        opt3: "Thomas Jefferson",
        opt4: "Rutherford B. Hayes",
        answer: 0
    },
    {
        question: "What Benjamin Franklin invented?",
        opt1: "Bifocal spectacles",
        opt2: "Radio",
        opt3: "Barometer",
        opt4: "Hygrometer",
        answer: 0
    }
];

//function to ask question to the user
function askQuestion(qna) {
    score_lvl = 0;
    for (var i = 0; i < qna.length; i++) {
        options = [chalk.yellow(qna[i].opt1), chalk.yellow(qna[i].opt2), chalk.yellow(qna[i].opt3), chalk.yellow(qna[i].opt4)];
        log(chalk.blue(qna[i].question));
        var userAnswer = read.keyInSelect(options, chalk.blue("Answer : "), {
            cancel: false,
            guide: false
        });
        score_lvl = check(qna[i], userAnswer);
        log(chalk.keyword('orange')("-----------------------------------------------------\n"));
    }
    log(chalk.magenta("Score of this level : " + score_lvl));
    finalScore = finalScore + score_lvl;
    log((chalk.magenta("Final Score : " + finalScore)));
    score = 0;
}

//function to check whether the user answer is correct or not and update the score accordingly
function check(level, userAnswer) {
    if (userAnswer === level.answer) {
        log(chalk.green("You are right!!"));
        score = score + 1;
    } else {
        log(chalk.red("You are wrong!!"));
    }
    return score;
}

// function to give intruction about level to be played by user
function instruction(lvl, topic, quesCount, cutOffMark) {
    log(chalk.yellow.underline("Level " + lvl + "\n"));
    log(pink("Topic               : " + topic + "\nNumber of questions : " + quesCount + "\nCorrect answer      : 1 point\nWrong answer        : 0 point\nScore " + chalk.yellow(cutOffMark + " or above") + " to get to next level.\n"));
    log(pink.underline("Directions:") + pink(" Choose the correct answer from the four given options."));
    log(chalk.keyword('orange')("\n-----------------------------------------------------\n"));
}

//Start of the quiz with Welcome message for quiz contestant
console.log(chalk.hex("#58d9ed")(chalk.underline(chalk.bold("GENERAL KNOWLEDGE QUIZ\n"))));
var userName = read.question(violet("Please enter your name : "));
log(violet("\nHi " + pink(userName) + "!! Welcome to the Quiz on general knowledge. There are 3 levels in this quiz.\n\nLets start with " + chalk.yellow("level 1") + " . . .\n"));
read.keyInPause(violet("Press any key to continue . . ."), {
    guide: false
});
console.clear();

//start level 1 
instruction(1, "Captial and Currencies", 5, 3);
askQuestion(qna_lvl1);
//check eligiblity with cutOffMark and start level 2 if eligible
if (score_lvl >= 3) {
    log(chalk.yellow("Congratulations!!🥉 You are eligible to play next level.\n"));
    read.keyInPause(violet("Press any key to start level 2 . . ."), {
        guide: false
    });

    //start level 2
    console.clear();
    instruction(2, "Famous Personalities", 10, 8);
    askQuestion(qna_lvl2);

    if (score_lvl >= 8) {
        log(chalk.yellow("Congratulations!!🥈 You are eligible to play next level.\n"));
        read.keyInPause(violet("Press any key to start level 3 . . ."), {
            guide: false
        });

        //start level 3
        console.clear();
        log(chalk.yellow.underline("Level 3 - Final level\n"));
        log(pink("Topic               : Inventions\nNumber of questions : 15\nCorrect answer      : 1 point\nWrong answer        : 0 point\n\n"));
        log(pink.underline("Directions:") + pink(" Choose the correct answer from the four given options."));
        log(chalk.keyword('orange')("\n-----------------------------------------------------\n"));

        askQuestion(qna_lvl3);
        //display the data of top scorer of the quiz
        var highScore = [{
                name: "Sasi",
                score: 30
            },
            {
                name: "Varun",
                score: 29
            },
            {
                name: "Likash",
                score: 29
            }
        ];

        log(pink("\nCheck out the User who got high score."));
        log(chalk.yellow("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$"));
        for (var i = 1; i <= highScore.length; i++) {
            console.log(highScore[i - 1].name + " : " + highScore[i - 1].score);
        }
        log(chalk.yellow("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$"));
        if (finalScore >= 29) {
            log(violet("Congratulations!!🥇🏆🏆🏆\nYou have got the top score!!!\nPlease send the screenshot of your score to gomathicoder@gmail.com to add your name in the top scorer list"));
        } else {
            log(violet("You have made to the final level. Try to beat the high score next time."));
        }
    } else {
        log(chalk.yellow("Oops! Sorry you are not eligible for next level.\nBetter luck next time.👍"));
    }
} else {
    log(chalk.yellow("Oops! Sorry you are not eligible for next level.\nBetter luck next time.👍"));
}