<script>
	import { goto } from '$app/navigation';
	import Body from '$lib/components/body.svelte';
	import Sidebar from '$lib/components/sidebar.svelte';
	import NavMenu from '$lib/components/navMenu.svelte';
	import '../app.pcss';

	const goToChat = (event) => {
		const chatId = event.detail.id;
		goto(`/chat/${chatId}`);
	};
</script>

<main>
	<main class="flex h-screen overflow-hidden">
		<div class="hidden md:flex md:flex-shrink-0">
			<Sidebar on:goToChat={goToChat} />
		</div>

		<div class="flex-1 overflow-x-hidden overflow-y-auto bg-white">
			<NavMenu />
			<Body />
		</div>
	</main>
</main>

<style>
</style>
