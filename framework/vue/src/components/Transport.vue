<template>
	<div class="transportContainer">
		<TransportBlank/>
		<TransportBlank/>
		<TransportBlank/>
		<TransportBlank/>
		<TransportBlank/>
		<TransportBlank/>
		<TransportBlank/>
		<TransportBlank/>
		<div class="transport">					
			<div class="transportLight transportLightActive" :style="lightPos"></div>
		</div>
	</div>
</template>

<script>
	import TransportBlank from './TransportBlank.vue';

	export default {
		props: ['pos'],
		components: { TransportBlank },
		computed: {
			lightPos() {
				return 'left:' + this.pos * 95 + 'px';
			}
		}
	}
</script>