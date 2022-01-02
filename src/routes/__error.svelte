<script lang="ts" context="module">
	import type { ErrorLoad } from '@sveltejs/kit';
	export const load: ErrorLoad = ({ error, status }) => {
		console.error(error);
		return {
			props: {
				title: `${status}`,
				message: `${error.message}`
			}
		};
	};
</script>

<script>
	export let title;
	export let message;
</script>

<h1 class="text-6xl text-center">{title}</h1>
<p class="text-2xl text-center">{message}</p>
<a class="text-2xl text-center underline" href="/">Home</a>
