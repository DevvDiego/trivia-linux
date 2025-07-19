<script>
	import '../app.css';
	import  linux_icon  from "$lib/linux-tux.svg";
	
	let { children } = $props();
</script>

<!-- navbar -->
<nav>
	
	<div>
		<img src={linux_icon} alt="linux icon">
	</div>

</nav>


{@render children()}
