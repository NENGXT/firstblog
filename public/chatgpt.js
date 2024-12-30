document.addEventListener('DOMContentLoaded', function () {
    const messagesContainer = document.getElementById('messages');
    const messageInput = document.getElementById('message-input');
    const sendButton = document.getElementById('send-button');
  
    sendButton.addEventListener('click', sendMessage);
    messageInput.addEventListener('keypress', function (e) {
      if (e.key === 'Enter') {
        sendMessage();
      }
    });
  
    function sendMessage() {
      const message = messageInput.value.trim();
      if (message) {
        addMessage('user', message);
        messageInput.value = '';
  
        // 发送消息到云服务器
        fetch('https://your-cloud-server.com/api/chat', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ message: message }),
        })
          .then(response => response.json())
          .then(data => {
            addMessage('bot', data.reply);
          })
          .catch(error => {
            console.error('Error:', error);
            addMessage('bot', '抱歉，发生了错误。');
          });
      }
    }
  
    function addMessage(sender, text) {
      const messageElement = document.createElement('div');
      messageElement.className = `message ${sender}`;
      messageElement.textContent = text;
      messagesContainer.appendChild(messageElement);
      messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }
  });