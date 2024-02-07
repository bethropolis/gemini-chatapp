<script>
	import QueryCard from './mini/queryCard.svelte';
</script>

<div class="h-full w-full p-4 text-center">
	<div class="mt-4 text-4xl font-sans">
		<h2>Gemini chat</h2>
	</div>
	<div class="font-normal text-xl mb=8">
		<p>start a new chat with google's gemini pro model</p>
	</div>

	<div class="mt-8 w-full text-left">
		<span class="text-xl">Examples</span>

		<div class="flex flex-col justify-center items-center gap-2 md:flex-row md:justify-evenly ">
			<QueryCard query="Tell me a joke that makes me laugh" />
			<QueryCard query="what is quantum mechanics?" />
			<QueryCard query="what is the meaning of life?" />
		</div>
	</div>
</div>
