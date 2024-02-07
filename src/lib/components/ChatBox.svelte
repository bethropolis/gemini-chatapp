<script>
	import { fade } from 'svelte/transition';
	import { format } from '$lib/js/format';
	import { bot, user } from '$lib/js/store';
	export let sender = 'user';
	export let text = '';
	export let id = 0;
  export let error = false;
</script>

{#if sender && text}
	<div class="chat-box w-full text-left bg-inherit p-2 my-2 transition duration-300" class:error>
		<div class={sender === user ? 'user' : 'bot'}>{sender}</div>
		<div class="message-text" in:fade>{@html format(text)}</div>
	</div>
{/if}

<style>
	.chat-box {
		padding: 10px;
		word-wrap: break-word;
	}

	.user {
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
		font-size: 1em;
	}
</style>
