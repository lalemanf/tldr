import Index from './Index.svelte';

const index = new Index({
	target: document.body,
	props: {
		name: 'TLDR'
	}
});

export default index;