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

  // Create a function that will add questions and answer choices
  function startQuiz() {
    
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
        $("#container").append("<input type='radio' name=" + questions[i].answerGroup  + "<label>" + answers + "</label>");
      }
    }
    // Create a timer
    // timer start time
    var timer = 10;
    var intervalId;

    function countdown() {
      intervalId = setInterval(decrement, 1000);
    }

    function decrement() {
      timer--;
      $("#timer").html("<h2>" + timer + "</h2>");

      if (timer === 0) {
        clearInterval(intervalId);
      }
    }
    $("#container").append("<div id='finishButton'>" + "<input type='button' value='Finish'>")
    countdown();
  }
  startQuiz();
});