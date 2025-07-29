async function sendMessage() {
  const input = document.getElementById('input');
  const message = input.value;
  if (!message) return;

  addMessage(`USER: ${message}`, "blue");

  const res = await fetch('/api/chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ message }),
  });

  const data = await res.json();
  addMessage(`BOT: ${data.reply || data.error}`, "green");

  input.value = '';
}

function addMessage(text, color) {
  const chatBox = document.getElementById('chat');
  const div = document.createElement('div');
  div.style.color = color;
  div.textContent = text;
  chatBox.appendChild(div);
  chatBox.scrollTop = chatBox.scrollHeight;
}