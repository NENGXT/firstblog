document.addEventListener('DOMContentLoaded', function () {
    const messagesContainer = document.getElementById('messages');
    const messageInput = document.getElementById('message-input');
    const button = document.querySelector('a[href="#button"][target="send-button"]'); // 选择特定的按钮
    const userName = "我"; // 用户称呼
    const botName = "NengBot："; // 机器人
  
    
    button.addEventListener('click', function() {
        console.log('click'); // 输出 "click"
        sendMessage();
    }); 
    
    messageInput.addEventListener('keypress', function (e) {
      if (e.key === 'Enter') {
        sendMessage();
      }
    });
  
    function sendMessage() {
      const message = messageInput.value.trim();

      
      if (message) {
        addMessage('user', `${userName}: ${message}`);
        addMessage('bot', `${botName} 正在生成回复，请稍候...`); // 添加加载提示
        messageInput.value = '';
  
        console.log('Sending message:', message);
        
  
        // 发送消息到云服务器
        fetch('http://104.233.170.17:3000/api/chat/completions', {  // 使用你的云服务器 IP 地址和端口
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ 
            message: message,
            }),
        })
          .then(response => response.json())
          .then(data => {
            console.log('Received response:', data);
            if (data.choices && data.choices.length > 0) {
              addMessage('bot', botName+data.choices[0].message.content);
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