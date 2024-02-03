<script>
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	const goToChat = (chatId = '') => {
		dispatch('goToChat', chatId);
	};
</script>

<div class="drawer lg:drawer-open">
	<input id="my-drawer-2" type="checkbox" class="drawer-toggle" />

	<div class="drawer-side">
		<div class="p-4 w-80 min-h-full bg-gray-800">
			<button class="btn btn-primary w-3/5 mb-2 uppercase">new chat</button>
			<h2 class="uppercase text-lg mt-4">Chats</h2>
			<ul class="menu text-base-content">
				<li><a>Sidebar Item 1</a></li>
				<li><a>Sidebar Item 2</a></li>
			</ul>
		</div>
	</div>
</div>
