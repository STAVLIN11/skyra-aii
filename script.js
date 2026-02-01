function sendMessage() {
  let input = document.getElementById("message");
  let chat = document.getElementById("chat");

  let userMsg = input.value;
  if(userMsg === "") return;

  chat.innerHTML += `<div class="user">${userMsg}</div>`;

  input.value = "";

  setTimeout(() => {
    chat.innerHTML += `<div class="bot">I am Skyra. I will answer you soon!</div>`;
    chat.scrollTop = chat.scrollHeight;
  }, 500);
}
