<script>
	import { goto } from '$app/navigation';
	import Body from '$lib/components/body.svelte';
	import Sidebar from '$lib/components/sidebar.svelte';
	import '../app.pcss';

	const goToChat = (chatId = '') => {
		goto(`/chat/${chatId}`);
	};
</script>

<main>
	<main class="flex h-screen overflow-hidden">
		<!-- Sidebar component -->
		<div class="hidden md:flex md:flex-shrink-0">
			<Sidebar on:goToChat={goToChat} />
		</div>

		<!-- Main content -->
		<div class="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
			<Body />
		</div>
	</main>
</main>

<style>
</style>
