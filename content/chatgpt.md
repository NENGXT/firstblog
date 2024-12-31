---
title: "NENGBOT"
showHero: false
heroStyle: background
showReadingTime: false
---
{{< badge >}}
<div id="chat-container" style="width: 780px; margin: 0 auto; padding: 20px; border-radius: 10px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
  <div id="messages" style="width: 100%; height: 300px; overflow-y: auto; border: 1px solid #ddd; padding: 10px; margin-bottom: 10px; border-radius: 5px; background-color: transparent;"></div>
  <input type="text" id="message-input" placeholder="输入消息..." style="width: 100%; padding: 10px; border: 1px solid #ccc; border-radius: 10px; margin-right: 10px; background-color: transparent;" />
  <button id="send-button" style="padding: 10px 20px; border: none; border-radius: 5px; background-color: #007bff; color: #fff; cursor: pointer;">发送</button>
</div>
{{< /badge >}}
<script src="/js/chatgpt.js"></script>