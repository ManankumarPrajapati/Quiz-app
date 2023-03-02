const questions = [
  {
    que: "Which of the following is a markup language?",
    a: "HTML",
    b: "CSS",
    c: "JavaScript",
    d: "PHP",
    correct: "a",
  },
  {
    que: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "None of the above",
    correct: "b",
  },
  {
    que: "What does stands CSS for?",
    a: "Hyper text markup language",
    b: "Cascading style sheet",
    c: "Jason object notaion",
    d: "Javascript",
    correct: "b",
  },
];
let index = 0;
let total = questions.length;
let right = 0;
wrong = 0;
const quesbox = document.getElementById("quesBox");
const quizContainer = document.getElementById("box");
const loadQuestions = () => {
  if (index == total) {
    return endQuiz();
  }

  reset();
  var quiz = "";
  for (const property in questions[index]) {
    if (property === "correct" || questions[index][property] === undefined) {
      continue;
    }
    if (property === "que") {
      quiz += `<h2 id="quesBox">${questions[index][property]}</h2>`;
    } else {
      quiz += `<div class="ans">
      <input class="options" type="radio" value = "${property}" name="Option" id="option1">
      <label for="opt" class="opt">${questions[index][property]}</label>
  </div>`;
    }
  }
  quiz += `<br><button class="btn" onclick="submitQuiz()">Submit</button>`;
  quizContainer.innerHTML = quiz;
  quizContainer.appendChild;

  //   const data = questions[index];
  //   quesbox.innerText = ` ${index + 1}) ${data.que}`;
  //   data.a && (optionInputs[0].nextElementSibling.innerText = data.a);
  //   data.b && (optionInputs[1].nextElementSibling.innerText = data.b);
  //   data.c && (optionInputs[2].nextElementSibling.innerText = data.c);
  //   data.d && (optionInputs[3].nextElementSibling.innerText = data.d);
};

const submitQuiz = () => {
  const data = questions[index];
  const ans = getAnswer();
  if (ans == data.correct) {
    right++;
  } else {
    wrong++;
  }
  index++;
  loadQuestions();
  return;
};

const getAnswer = () => {
  let answer;
  const optionInputs = document.querySelectorAll(".options");

  optionInputs.forEach((input) => {
    // console.log(input.value);
    if (input.checked) {
      answer = input.value;
    }
  });
  return answer;
};

const reset = () => {
  const optionInputs = document.querySelectorAll(".options");
  optionInputs.forEach((input) => {
    input.checked = false;
  });
};

const endQuiz = () => {
  document.getElementById("box").innerHTML = `
    <div style = "text-align: center">
    <h3> Thank you for playing Quiz </h3>
    <h2> ${right} / ${total} are correct </h2>
    `;
};

loadQuestions();
