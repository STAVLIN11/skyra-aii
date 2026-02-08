function runLesson() {
  const stage = document.getElementById("stage");
  const narration = document.getElementById("narration");

  if (!stage || !narration) {
    alert("Stage or narration not found");
    return;
  }

  stage.innerHTML = "";
  narration.innerText = "";

  const questionInput = document.getElementById("question");
  const question = questionInput ? questionInput.value.toLowerCase() : "";

  let steps = [];

  if (question.includes("pseudocode")) {
    steps = [
      { visual: "PSEUDOCODE", color: "yellow", explain: "Pseudocode is a simple way to plan a program." },
      { visual: "START", color: "blue", explain: "START means the program begins here." },
      { visual: "IF hungry", color: "yellow", explain: "This checks a condition." },
      { visual: "Make sandwich", color: "green", explain: "This happens when the condition is true." },
      { visual: "ELSE relax", color: "red", explain: "This happens when the condition is false." },
      { visual: "END", color: "blue", explain: "END means the program finishes." }
    ];
  } else {
    steps = [
      { visual: "Skyra", color: "yellow", explain: "Try typing: Teach pseudocode" }
    ];
  }

  animateSteps(stage, narration, steps);
}

function animateSteps(stage, narration, steps) {
  let index = 0;

  const interval = setInterval(() => {
    if (index >= steps.length) {
      clearInterval(interval);
      narration.innerText = "Lesson complete!";
      return;
    }

    const step = steps[index];

    const block = document.createElement("div");
    block.className = `block ${step.color}`;
    block.innerText = step.visual;

    stage.appendChild(block);
    narration.innerText = step.explain;

    index++;
  }, 1200);
}
