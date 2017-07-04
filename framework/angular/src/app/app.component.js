"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var staves_service_1 = require("./staves.service");
require("../css/styles.css");
var AppComponent = (function () {
    function AppComponent(stavesService) {
        this.stavesService = stavesService;
        this.transporterPos = 0;
        this.playing = false;
        this.bpm = 220;
    }
    AppComponent.prototype.getStaves = function () {
        this.staves = this.stavesService.getStaves();
    };
    AppComponent.prototype.ngOnInit = function () {
        this.getStaves();
        for (var _i = 0, _a = this.staves; _i < _a.length; _i++) {
            var stave = _a[_i];
            var localStorageRef = localStorage.getItem('ag-pattern-' + stave.id);
            if (localStorageRef) {
                stave.notes = JSON.parse(localStorageRef);
            }
        }
    };
    AppComponent.prototype.ngAfterContentChecked = function () {
        for (var _i = 0, _a = this.staves; _i < _a.length; _i++) {
            var stave = _a[_i];
            localStorage.setItem('ag-pattern-' + stave.id, JSON.stringify(stave.notes));
        }
    };
    AppComponent.prototype.setTimer = function () {
        var _this = this;
        this.timerId = setInterval(function () { return _this.tick(); }, this.calculateTempo(this.bpm));
    };
    AppComponent.prototype.tick = function () {
        this.transporterPos++;
        if (this.transporterPos > 7) {
            this.transporterPos = 0;
        }
        this.checkNote();
    };
    AppComponent.prototype.checkNote = function () {
        for (var _i = 0, _a = this.staves; _i < _a.length; _i++) {
            var stave = _a[_i];
            for (var _b = 0, _c = stave.notes; _b < _c.length; _b++) {
                var note = _c[_b];
                if (note.active && note.pos === this.transporterPos) {
                    this.playSample(stave.sample);
                }
            }
        }
    };
    AppComponent.prototype.playSample = function (sample) {
        var sound = new Howl({
            src: [sample]
        });
        sound.play();
    };
    AppComponent.prototype.calculateTempo = function (bpm) {
        return 60000 / bpm;
    };
    AppComponent.prototype.togglePlay = function () {
        this.playing = !this.playing;
        if (this.playing) {
            this.setTimer();
        }
        else {
            clearInterval(this.timerId);
        }
    };
    AppComponent.prototype.clearPattern = function () {
        for (var _i = 0, _a = this.staves; _i < _a.length; _i++) {
            var stave = _a[_i];
            for (var _b = 0, _c = stave.notes; _b < _c.length; _b++) {
                var note = _c[_b];
                note.active = false;
            }
        }
    };
    AppComponent.prototype.updateBpm = function (bpm) {
        this.bpm = bpm;
        if (this.playing) {
            clearInterval(this.timerId);
            this.setTimer();
        }
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n\t<div class=\"machine\">\n\t\t<controls [bpm]=\"bpm\" [playing]=\"playing\" (togglePlay)=\"togglePlay($event)\" (clearPattern)=\"clearPattern($event)\" (updateBpm)=\"updateBpm($event)\"></controls>\n\t\t<staves></staves>\n\t\t<transporter [pos]=\"transporterPos\"></transporter>\n\t</div>\n  ",
        providers: [staves_service_1.StavesService]
    }),
    __metadata("design:paramtypes", [staves_service_1.StavesService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map