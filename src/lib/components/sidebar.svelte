<script>
	import { sidebar } from '$lib/js/store';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	/**
	 * @param {CustomEvent} event - The custom event object containing the new message id
	 */
	const goToChat = (event) => {
		dispatch('goToChat', event.detail.id);
	};
</script>

<div class="drawer lg:drawer-open">
	<input id="my-drawer" type="checkbox" class="drawer-toggle" checked={$sidebar} />

	<div class="drawer-side">
		<div class="p-4 w-full lg:w-80 min-h-full bg-gray-800">
			<a href="/?new" on:click={()=> window.location.reload()}>
				<button class="btn btn-primary w-3/5 mb-2 uppercase">new chat</button>
			</a>
			<h2 class="uppercase text-lg text-gray-500 mt-4">Chats</h2>
			<ul class="menu text-gray-500">
				<li><a>coming soon</a></li>
			</ul>
		</div>
	</div>
</div>

<style>
	li:hover a {
		@apply bg-gray-700 text-white;
	}
</style>
