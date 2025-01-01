---
title: "NENGBOT"
draft: false
showHero: true
heroStyle: background
showReadingTime: false
---

  {{< badge >}}
  <div id="messages" style="width: 400px; height: 300px; overflow-y: auto; border: none; mix-blend-mode: screen; padding: 10px; margin-bottom: 10px;  border-radius: 3px; background-color: transparent;"></div>
  {{< /badge >}}

  <div style="display: flex; align-items: center; gap: 10px; margin-top: 10px;">
  {{< badge >}}
  <input type="text" id="message-input" placeholder="给NENGBOT发送消息..." style="width: 300px; padding: 6px; border: none; border-radius: 10px;  background-color: transparent; margin-right: 8px; box-shadow: none;" />
  {{< /badge >}}
  {{< mybutton href="#button" target="send-button">}}
    ENTER
  {{< /mybutton >}}
  </div>
<script src="/js/chatgpt.js"></script>
<!-- {{< keywordList >}}
{{< keyword >}} Lorem ipsum dolor. {{< /keyword >}}
{{< keyword icon="code" >}} **Important** skill {{< /keyword >}}
{{< /keywordList >}} -->