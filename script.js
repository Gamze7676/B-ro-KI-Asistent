async function sendMessage() {
  const input = document.getElementById('input');
  const chat = document.getElementById('chat');
  const userMessage = input.value;
  
  if (!userMessage) return;

  chat.innerHTML += `<div style="color:blue">USER: ${userMessage}</div>`;
  input.value = '';

  try {
    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: userMessage })
    });

    const data = await res.json();
    chat.innerHTML += `<div style="color:green">BOT: ${data.reply}</div>`;
    chat.scrollTop = chat.scrollHeight;
  } catch (err) {
    chat.innerHTML += `<div style="color:red">BOT: Fehler bei der KI</div>`;
  }
}
