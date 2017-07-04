<template>
	<div class="controls">
		<a href="#" class="button" @click.prevent="togglePlay">{{playButtonText}}</a> 
		<a href="#" class="button" @click.prevent="clearPattern">Clear</a> 
		<Slider :bpm="bpm" @changeBpm="changeBpm" />
	</div>
</template>

<script>
	import Slider from './Slider.vue';

	export default {
		props: ['playing', 'bpm'],
		components: { Slider },
		computed: {
			playButtonText() {
				return (this.playing) ? 'Stop' : 'Play';
			}
		},
		methods: {
			togglePlay() {
				this.$emit('togglePlay');
			},
			clearPattern() {
				this.$emit('clearPattern');
			},
			changeBpm(bpm) {
				this.$emit('changeBpm', bpm);
			}
		}
	}
</script>