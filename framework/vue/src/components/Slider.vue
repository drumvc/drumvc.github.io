<template>
	<div class="bpmRange">
		<div class="bpmTitle">BPM</div>
		<input type="range" id="bpm" min="1" max="420" step="1" v-model="rangeValue" @change="changeBpm" />
		<output htmlFor="bpm" class="bpmOutput">{{ rangeValue }}</output>
	</div>
</template>

<script>
export default {
	props: ['bpm'],
	data() {
		return {
			rangeValue: this.bpm
		}
	},
	methods: {
		changeBpm() {
			this.$emit('changeBpm', this.rangeValue);
		}
	}
}
</script>