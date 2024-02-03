<script>
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	let messageInput = '';

	const sendMessage = () => {
		if (messageInput.trim() !== '') {
			dispatch('addMessage', { sender: 'User', text: messageInput });
			messageInput = '';
		}
	};

	const handleKeyPress = (event) => {
		if (event.key === 'Enter' && !event.shiftKey && window.screen.width > 640) {
			event.preventDefault();
			sendMessage();
		}
	};
</script>

<div class="input-container px-0 md:px-4 flex items-center">

	<label class="form-control flex-1 p-2 rounded-l">
		<textarea
			class="textarea textarea-bordered border-4 textarea-sm bg-transparent min-h-6"
			rows="2"
			placeholder="Bio"
			bind:value={messageInput}
			on:keypress={handleKeyPress}
		></textarea>
	</label>

	<button
		class="send-button h-[48px] w-[48px] bg-blue-500 text-white p-2 mr-1 rounded-full"
		on:click={sendMessage}
	>
		Send
	</button>
</div>

<style>
    textarea{
        line-height: 1.5;
    }
</style>