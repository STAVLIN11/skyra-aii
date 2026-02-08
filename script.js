function runLesson() {
  const stage = document.getElementById("stage");
  stage.innerHTML = "";

  const question = document.getElementById("question").value.toLowerCase();

  // TEMP LOGIC (AI WILL REPLACE THIS LATER)
  let steps = [];

  if (question.includes("pseudocode")) {
    steps = [
      { text: "PSEUDOCODE", color: "yellow" },
      { text: "START", color: "blue" },
      { text: "IF hungry", color: "yellow" },
      { text: "Make sandwich", color: "green" },
      { text: "ELSE relax", color: "red" },
      { text: "END", color: "blue" }
    ];
  } else {
    steps = [
      { text: "Skyra is thinking...", color: "yellow" },
      { text: "I will explain this soon!", color: "blue" }
    ];
  }

  animateSteps(stage, steps);
}

function animateSteps(stage, steps) {
  let index = 0;

  const interval = setInterval(() => {
    if (index >= steps.length) {
      clearInterval(interval);
      return;
    }

    const block = document.createElement("div");
    block.className = `block ${steps[index].color}`;
    block.innerText = steps[index].text;

    stage.appendChild(block);
    index++;
  }, 900);
}
