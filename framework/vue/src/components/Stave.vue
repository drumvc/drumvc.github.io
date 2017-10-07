<template>
	<div class="stave">
		<div class="staveName">{{ name }}</div>
		<component v-for="note in notes" :id="note.id" :key="note.id" is="note" :active="note.active" @noteClick="toggleNote(note)"></component>
	</div>
</template>

<script>
import Note from './Note.vue';

export default {
	props: ['name', 'notes'],
	components: { Note },
	methods: {
		toggleNote(note) {
			this.$emit('toggleNote', note);
		}
	}
}
</script>