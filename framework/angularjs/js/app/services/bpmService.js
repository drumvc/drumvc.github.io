app.service('BpmService', function($rootScope, $interval) {

	let playing = false;
	let bpm = 220;
	let interval;

    let startTicker = function() {
    	interval = $interval(function(){
	    	$rootScope.$broadcast('tick');
	    }, 60000 / bpm);
    }

	return {
		getBpm: function() {
			return bpm;
		},
		setBpm: function(val) {
			bpm = val;
			if (playing) {
				$interval.cancel(interval);
				startTicker();
			}
		},
		toggleTicker: function() {
			if (playing) {
				$interval.cancel(interval);
			} else {
				startTicker();
			}
			playing = !playing;
		},
		isPlaying: function() {
			return playing;
		}
	}
	
});