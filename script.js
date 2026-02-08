function runLesson() {
  const stage = document.getElementById("stage");
  const narration = document.getElementById("narration");

  stage.innerHTML = "";
  narration.innerText = "";

  const question = document.getElementById("question").value.toLowerCase();

  let steps = [];

  if (question.includes("pseudocode")) {
    steps = [
      {
        visual: "PSEUDOCODE",
        color: "yellow",
        explain: "Pseudocode is a simple way to plan a program using easy words."
      },
      {
        visual: "START",
        color: "blue",
        explain: "Every program begins with a START step."
      },
      {
        visual: "IF hungry",
        color: "yellow",
        explain: "Here we check a condition to make a decision."
      },
      {
        visual: "Make sandwich",
        color: "green",
        explain: "If the condition is true, this action happens."
      },
      {
        visual: "ELSE relax",
        color: "red",
        explain: "If the condition is false, we choose another action."
      },
      {
        visual: "END",
        color: "blue",
        explain: "END means the program is finished."
      }
    ];
  } else {
    steps = [
      {
        visual: "Skyra is thinking",
        color: "yellow",
        explain: "I will explain this topic soon."
      }
    ];
  }

  animateSteps(stage, narration, steps);
}

function animateSteps(stage, narration, steps) {
  let index = 0;

  const interval = setInterval(() => {
    if (index >= steps.length) {
      clearInterval(interval);
      narration.innerText = "That is the full explanation.";
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
