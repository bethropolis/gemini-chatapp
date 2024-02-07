<script>
	import { startingText } from "$lib/js/store";

    export let query = '';
</script>

<button class="card w-72 h-20 flex items-center justify-center bg-base-100 shadow-xl hover:bg-base-200 select-none" on:click={() => $startingText = query}>
    <div class="card-body p-3">
      <p>{query}</p>
    </div>
  </button>