
<script>
	import "../app.css";
	import { onMount } from 'svelte';
	onMount(() => {
		document.getElementById('isMain')?.classList.remove('loading');
	});
</script>

<svelte:head>
	<title>Kost Darmo Surabaya. Harga terjangkau, bersih, cocok untuk pekerja</title>
	<meta name="description" content="Kost Darmo dengan tarif yang terjangkau, merupakan pilihan sempurna bagi para pekerja yang berlokasi di Surabaya Barat. Harga mulai dari Rp 850.000,- per bulan!" />
	<meta name="robots" content="index, follow" />
	<script src="https://kit.fontawesome.com/823d655421.js" crossorigin="anonymous"></script>
</svelte:head>

<div id="isMain" class="loading">
	<section class="content">
		<slot />
	</section>
</div>
