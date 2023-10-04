
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
	<meta name="keywords" content="kos, sewa kamar, kost, kost2an, surabaya, surabaya barat, murah, harga terjangkau, bersih, khusus wanita, khusus pekerja, wifi, darmo, indah, darmo indah timur, tandes, tandes lor, harian, bulanan, pakai AC" />
	<meta name="robots" content="index, follow" />
	<script src="https://kit.fontawesome.com/823d655421.js" crossorigin="anonymous"></script>
</svelte:head>

<div id="isMain" class="loading">
	<section class="content">
		<slot />
	</section>
</div>
