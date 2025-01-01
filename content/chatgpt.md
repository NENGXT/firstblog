---
title: "NENGBOT"
showHero: true
heroStyle: background
showReadingTime: false
---
{{< badge >}}
<div id="chat-container" style="width: 780px; margin: 0 auto; padding: 20px; border-radius: 10px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
  <div id="messages" style="width: 100%; height: 300px; overflow-y: auto; border: 0px solid #ddd; padding: 10px; margin-bottom: 10px; border-radius: 3px; background-color: transparent;"></div>
  <input type="text" id="message-input" placeholder="输入消息..." style="width: 80%; padding: 10px; border: 1px solid #ccc; border-radius: 10px; margin-right: 10px; background-color: transparent;" />
  {{< button href="#button" target="send-button">}}
    ENTER
  {{< /button >}}
</div>
{{< /badge >}}
<script src="/js/chatgpt.js"></script>