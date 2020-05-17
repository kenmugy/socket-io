const socket = io();

const field = document.getElementById('chat-field');
const name = document.getElementById('name-input');
const message = document.getElementById('message-input');
const send = document.getElementById('send');
const chat = document.getElementById('chat-output');
const feedback = document.getElementById('feedback');

field.addEventListener('submit', (e) => {
  e.preventDefault();
  socket.emit('chat', {
    name: name.value,
    message: message.value,
  });
  message.value = '';
});

message.addEventListener('keyup', () => {
  socket.emit('typing', name.value);
});

socket.on('chat', ({ name, message }) => {
  feedback.innerHTML = '';
  const div = document.createElement('div');
  div.innerHTML += `<p><i>${name}: </i> ${message}</p>`;
  chat.appendChild(div);
});

socket.on('typing', (name) => {
  feedback.innerHTML = `<small><i>${name} is typing...</i></small>`;
});
