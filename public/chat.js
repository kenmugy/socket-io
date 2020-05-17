const socket = io();

const field = document.getElementById('chat-field');
const name = document.getElementById('name-input');
const message = document.getElementById('message-input');
const send = document.getElementById('send');
const chat = document.getElementById('chat-output');

field.addEventListener('submit', (e) => {
  e.preventDefault();
  socket.emit('chat', {
    name: name.value,
    message: message.value,
  });
  message.value = '';
});

socket.on('chat', ({ name, message }) => {
  const div = document.createElement('div');
  div.innerHTML += `<p><i>${name}: </i> ${message}</p>`;
  chat.appendChild(div);
});
