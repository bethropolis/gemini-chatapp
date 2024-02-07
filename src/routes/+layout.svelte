<script>
	import { goto } from '$app/navigation';
	import Body from '$lib/components/body.svelte';
	import Sidebar from '$lib/components/sidebar.svelte';
	import NavMenu from '$lib/components/navMenu.svelte';
	import '../app.pcss';
	import { sidebar } from '$lib/js/store';
  import { pwaInfo } from 'virtual:pwa-info'; 

  /**
	 * @param {CustomEvent} event - The custom event object
	 */
	const goToChat = (event) => {
		const chatId = event.detail.id;
		goto(`/chat/${chatId}`); 
	};
	

  $: webManifestLink = pwaInfo ? pwaInfo.webManifest.linkTag : '' 
</script>

<svelte:head> 
 	{@html webManifestLink} 
</svelte:head>

<main>
  <div class="flex h-screen overflow-hidden">
    <!-- Sidebar -->
    <div class="lg:w-80 {$sidebar ? 'w-64' : 'w-0'} overflow-x-hidden transition-all duration-300 transform">
      <Sidebar on:goToChat={goToChat} />
    </div>

    <!-- Body content -->
    <div class="flex-1 overflow-x-hidden overflow-y-hidden bg-white">
      <NavMenu />
      <Body />
    </div>
  </div>
</main>

<style>
  @media (max-width: 767px) {

    .lg\:transform {
      transform: translateX(100%);
    }
  }
</style>
