function getBotReply(question) {
  question = question.toLowerCase();

  if (question.includes("pseudocode")) {
    return "Pseudocode is a simple way to write steps of a program using plain language. Imagine writing instructions for a computer without worrying about real code syntax. For example, to add two numbers, we write: start, take two numbers, add them, show the result, stop.";
  }

  if (question.includes("who are you")) {
    return "I am Skyra, your AI companion. I help you learn, think, and understand things clearly.";
  }

  if (question.includes("what is ai")) {
    return "Artificial Intelligence is when machines are designed to think and act like humans. For example, chatbots, voice assistants, and recommendation systems use AI.";
  }

  return "That’s a good question. I’m still learning. Soon I’ll be able to answer this perfectly.";
}

function sendMessage() {
  let input = document.getElementById("message");
  let chat = document.getElementById("chat");

  let userMsg = input.value.trim();
  if (userMsg === "") return;

  chat.innerHTML += `<div class="message user">${userMsg}</div>`;
  input.value = "";

  setTimeout(() => {
    let reply = getBotReply(userMsg);
    chat.innerHTML += `<div class="message bot">${reply}</div>`;
    chat.scrollTop = chat.scrollHeight;
  }, 700);
}
