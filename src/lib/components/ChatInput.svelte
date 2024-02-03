<!-- ChatInput.svelte -->
<script>
	// Import any dependencies you need
	import { createEventDispatcher } from 'svelte';

	// Create an event dispatcher
	const dispatch = createEventDispatcher();

	// Local state to hold the input value
	let messageInput = '';

	// Function to handle sending messages
	const sendMessage = () => {
		if (messageInput.trim() !== '') {
			// Dispatch the 'addMessage' event with the new message
			dispatch('addMessage', { sender: 'User', text: messageInput });

			// Clear the input field
			messageInput = '';
		}
	};

	// Function to handle Enter key press for sending messages
	const handleKeyPress = (event) => {
		if (event.key === 'Enter') {
			sendMessage();
		}
	};
</script>

<div class="input-container px-4 flex items-center">

	<label class="form-control flex-1 p-2 rounded-l">
		<textarea
			class="textarea textarea-bordered min-h-6"
			placeholder="Bio"
			bind:value={messageInput}
			on:keypress={handleKeyPress}
		></textarea>
	</label>

	<!-- Send button -->
	<button
		class="send-button h-[48px] w-[48px] bg-blue-500 text-white p-2 rounded-full"
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