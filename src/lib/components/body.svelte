<script>
	import { ask } from '$lib/js/gemini';
	import { bot, isResponding, messages } from '$lib/js/store';
	import ChatBox from './ChatBox.svelte';
	import ChatInput from './ChatInput.svelte';
	import Empty from './empty.svelte';


	/**
	 * @param {Object} message - The custom event object containing the new message details
	 */
	const askAi = async (message) => {
		$isResponding = true;
		let botResponse = await ask(message);
		$isResponding = false;

		if(botResponse?.error) {
			$messages = [...$messages,{ id: Date.now(), error: true, sender: bot, text: botResponse?.error }];
			return;
		}

		$messages = [...$messages,{ id: Date.now(),  sender: bot, text: botResponse?.text }];
	};

	/**
	 * @param {CustomEvent} newMessage - The custom event object containing the new message details
	 */
	const addMessage = (newMessage) => {
		$messages = [...$messages, { ...newMessage.detail, id: Date.now() }];
		askAi(newMessage.detail);
	};
</script>

<div class="body-container w-full relative">
	<div class="messages-container small-scroll  max-w-[764px] mx-auto">
		{#if $messages.length !== 0}
		{#each $messages as { id, sender, text, error=false }}
			<ChatBox {id} {sender} {text} {error} />
		{/each}

		{#if $isResponding}
			<div class="w-full p-2">
				<div class="skeleton w-24 h-4 mb-2"></div>
				<div class="skeleton w-11/12 h-14"></div>
			</div>
		{/if}

		{:else}
		  <Empty/>
		{/if}
	</div>

	<div class="mt-4 absolute bottom-2 w-full">
		<ChatInput on:addMessage={addMessage} />
	</div>
</div>

<style>
	.body-container {
		height: calc(100dvh - 64px);
	}
	.messages-container {
		height: calc(100dvh - 64px - 74px);
		overflow-y: auto;
	}
</style>
