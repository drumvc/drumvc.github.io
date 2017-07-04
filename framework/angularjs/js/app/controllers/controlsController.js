app.controller('ControlsController', function($interval, NotesService, BpmService) {

	this.buttonText = 'Play';
	this.bpm = BpmService.getBpm();

	this.togglePlay = function() {
		BpmService.toggleTicker();
		if (BpmService.isPlaying()) {
			this.buttonText = 'Stop';
		} else {
			this.buttonText = 'Play';
		}
	}

	this.clearPattern = function() {
		NotesService.clearPattern();
	}

	this.newRange = function() {
		BpmService.setBpm(this.bpm);
	}

});