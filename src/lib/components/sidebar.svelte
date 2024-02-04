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
	<input
	  id="my-drawer"
	  type="checkbox"
	  class="drawer-toggle"
	  checked={true}  
	/>
  
	<div class="drawer-side">
	  <div class="p-4 w-80 min-h-full bg-gray-800">
		<button class="btn btn-primary w-3/5 mb-2 uppercase">new chat</button>
		<h2 class="uppercase text-lg text-gray-500 mt-4">Chats</h2>
		<ul class="menu text-gray-500">
		  <li><a>Sidebar Item 1</a></li>
		  <li><a>Sidebar Item 2</a></li>
		</ul>
	  </div>
	</div>
  </div>
  
  <style>
	li:hover a {
	  @apply bg-gray-700 text-white;
	}
  </style>
  