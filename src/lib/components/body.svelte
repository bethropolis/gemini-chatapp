<script>
	import ChatBox from './ChatBox.svelte';
	import ChatInput from './ChatInput.svelte';

	let messages = [
		{ id: 1, sender: 'User', text: 'Hello!' },
		{ id: 2, sender: 'Bot', text: 'Hi there! How can I help you?' }
	];

	const addMessage = (newMessage) => {
		messages = [...messages, newMessage];
	};
</script>

<div class="body-container  h-full w-full relative">
	<div class="messages-container">
		{#each messages as { id, sender, text }}
			<ChatBox {id} {sender} {text} />
		{/each}
	</div>

	<div class="mt-4 absolute bottom-2 w-full">
		<ChatInput on:addMessage={addMessage} />
	</div>
</div>

<style>
</style>
