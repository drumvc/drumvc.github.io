<template>
	<div>
		<h1>DRU<strong>MVC</strong> - Vue</h1>
		<div class="machine">
			<div id="staves">
				<component v-for="stave in store.staves" :key="stave.id" is="stave" :name="stave.name" :notes="stave.notes" @toggleNote="toggleNote"></component>
				<Transport :pos="store.transportPos"></Transport>
				<Controls @togglePlay="togglePlay" @clearPattern="clearPattern"  @changeBpm="changeBpm" :playing="store.playing" :bpm="store.bpm"></Controls>
			</div>
		</div>
	</div>
</template>

<script>
	import store from './components/store.js';
	import Controls from './components/Controls.vue';
	import Stave from './components/Stave.vue';
	import Transport from './components/Transport.vue';

	export default {
		name: 'app',

		components: { Controls, Stave, Transport },

		data() { 
			return {
				store: store
			}
		},

		created() {
			this.restorePatterns();
			if (store.playing) {
				this.setTempo();
			}
		},

		methods: {
			setTempo() {
				this.timerId = setInterval(() => this.tick(), this.calculateTempo(store.bpm));
			},
			tick() {
				let transportPos = store.transportPos;
				transportPos++;
				if (transportPos > 7) {
					transportPos = 0;
				}
				store.transportPos = transportPos;
				this.checkNote();
			},
			calculateTempo(bpm) {
				return 60000 / bpm;
			},
			changeBpm(bpm) {
				store.bpm = bpm;
				if (store.playing) {
					clearInterval(this.timerId);
					this.setTempo();
				}
			},
			toggleNote(note) {
				note.active = !note.active;
				this.savePatterns();
			},
			checkNote() {
				let transportPos = store.transportPos;
				let that = this;
				for (var stave of store.staves) {
					for (var note of stave.notes) {
						if (note.active && note.pos === transportPos) {
							that.playSample(stave.sample);
						}
					}
				}
			},
			playSample(sample) {
				let sound = new Howl({
					src: [sample]
				});
				sound.play();
			},
			togglePlay() {
				if (store.playing) {
					clearInterval(this.timerId);
					store.playing = false;
				} else {
					this.setTempo();
					store.playing = true;
				}
			},
			clearPattern() {
				let staves = store.staves;
				for (var stave of staves) {
					for (var note of stave.notes) {
						note.active = false;
					}
				}
				store.staves = staves;
				this.savePatterns();
			},
			savePatterns() {
				for (var stave of store.staves) {
					localStorage.setItem('vb-pattern-' + stave.id, JSON.stringify(stave.notes));
				}				
			},
			restorePatterns() {
				for (var stave of store.staves) {
					let localStorageRef = localStorage.getItem('vb-pattern-' + stave.id);
					if (localStorageRef) {
						stave.notes = JSON.parse(localStorageRef);
					}
				}
			}
		}
	}
</script>