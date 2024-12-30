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
  
        console.log('Sending message:', message);
  
        // 发送消息到云服务器
        fetch('http://104.233.170.17:3000/api/chat/completions', {  // 使用你的云服务器 IP 地址和端口
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ message: message }),
        })
          .then(response => response.json())
          .then(data => {
            console.log('Received response:', data);
            if (data.choices && data.choices.length > 0) {
              addMessage('bot', data.choices[0].message.content);
            } else {
              addMessage('bot', '抱歉，未收到有效回复。');
            }
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