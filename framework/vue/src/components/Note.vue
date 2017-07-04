<template>
	<div class="noteContainer" @click="handleClick">
		<div class="note" v-bind:class="{active : active}"></div>
	</div>
</template>

<script>
export default {
	props: ['active', 'id'],
	methods: {
		handleClick() {
			this.$emit('noteClick', this.id);
		}
	}
}
</script>