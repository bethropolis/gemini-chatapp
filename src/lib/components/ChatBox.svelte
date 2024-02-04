<script>
	import { format } from "$lib/js/format";
  export let sender = 'user';
  export let text = '';
  export let id = 0;

  </script>
  
  <style>
    .chat-box {
      padding: 10px;
      word-wrap: break-word;
    }
  
    .sender {
      font-weight: bold;
      margin-bottom: 4px;
      @apply text-blue-500;
    }

    .bot {
      font-weight: bold;
      margin-bottom: 4px;
      @apply text-red-500;
    }
  
    .message-text {
      font-size: 14px;
    }
  </style>
  
  <div class="chat-box bg-inherit">
    <div class="{sender === 'User' ? 'sender' : 'bot'}">{sender}</div>

    <div class="message-text">{@html format(text)}</div>
  </div>
  