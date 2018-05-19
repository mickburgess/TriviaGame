$("document").ready(function() {
  // Create an array of question objects that hold question, answer choices, and correct answer
  var questions = 
  [
    { 
      question: "What are things?",
      answers: ["A", "B", "C", "D"],
      answerGroup: 1,
      correctAnswer: 0
    },

    {
      question: "Another question?",
      answers: ["A", "B", "C", "D"],
      answerGroup: 2,
      correctAnswer: 2
    },

    {
      question: "Third question?",
      answers: ["A", "B", "C", "D"],
      answerGroup: 3,
      correctAnswer: 3
    }
  ];
  var correctAnswers = 0;
  var incorrectAnswers = 0;
  var unanswered = 0;

  // timer start time
  var timer = 60;

  // Create a function that will add questions and answer choices
  function startQuiz() {
    $("#startButton").remove();
    // add timer to screen
    $("#timer").html("<h2>" + timer + "</h2>");

  // Loop through and display questions from the array
    for (var i = 0; i < questions.length; i++) {
      var question = questions[i].question;
      console.log(question);
      // Create a div for each question
      $("#container").append("<div>" + question + "</div>");
      // Create radio buttons (inputs) and add answer choices as text beside radio buttons
      for (var j = 0; j < questions[i].answers.length; j++) {
        var answers = questions[i].answers[j];
        console.log(answers);
        $("#container").append("<input type='radio' value='" + j + "' name=" + questions[i].answerGroup + ">" + "<label>" + answers + "</label>" + "</input>");
        // var radios = $("<input>");
        // radios.attr("type", "radio");
        // radios.attr("name", questions.indexOf(questions[i]));
        // radios.attr("id", answers + questions.indexOf(questions[i]));
        // $("#container").append(radios);
        // var labels = $("<label id=label>");
        // labels.attr("for", answers + questions.indexOf(questions[i]))
        // $("#label").text(answers);
        // radios.wrap(labels);
      }
    }
    
    $("#container").append("<div id='finishButton'>" + "<input type='button' value='Finish'>")
    
  };
  
function endGame() {
  $("#container").empty();
  $("#container").append("<h2>All Done!</h2>");
  $("#container").append("<p id='correct'>" + correctAnswers + "</p>");
  $("#container").append("<p id='incorrect'>" + incorrectAnswers + "</p>");
  //$("#container").append("<p id='unanswered'>" + unanswered + "</p>");
};
// var userAnswer = questions[i].answerGroup;
// console.log(questions[i].answerGroup);
function answerChecker() {
  for (i = 0; i < questions.length; i++) {
    var inputName = questions[i].answerGroup;
    var userAnswer = $("input[" + inputName + "]:checked");
      if (userAnswer === questions[i].correctAnswer) {
        correctAnswers++
      }
        else if (!userAnswer) {
          unanswered++
        }
        else {
          incorrectAnswers++
        }
  };

   console.log(userAnswer);
}

  function takeQuiz() {
    $("#startButton").on("click", function() {
      startQuiz();
    // Create a timer
    var intervalId;

    function countdown() {
      intervalId = setInterval(decrement, 1000);
    }

    function decrement() {
      timer--;
      $("#timer").html("<h2>" + timer + "</h2>");

      if (timer === 0) {
        clearInterval(intervalId);
        endGame();
        answerChecker();
      }
    }
    countdown();
    });
    $("#container").on("click", "#finishButton", function() {
      endGame();
      answerChecker();
    })
  }
  takeQuiz();
});