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
var ControlsComponent = (function () {
    function ControlsComponent() {
        this.togglePlay = new core_1.EventEmitter();
        this.clearPattern = new core_1.EventEmitter();
        this.updateBpm = new core_1.EventEmitter();
    }
    ControlsComponent.prototype.toggle = function () {
        this.togglePlay.emit();
    };
    ControlsComponent.prototype.clear = function () {
        this.clearPattern.emit();
    };
    ControlsComponent.prototype.changeBpm = function (bpm) {
        this.updateBpm.emit(bpm);
    };
    return ControlsComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], ControlsComponent.prototype, "bpm", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], ControlsComponent.prototype, "playing", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], ControlsComponent.prototype, "togglePlay", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], ControlsComponent.prototype, "clearPattern", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], ControlsComponent.prototype, "updateBpm", void 0);
ControlsComponent = __decorate([
    core_1.Component({
        selector: 'controls',
        template: "\n\t\t<div class=\"controls\">\n\t\t\t<a href=\"#\" class=\"button\" (click)=\"toggle()\">{{ playing ? 'Stop': 'Play' }}</a> \n\t\t\t<a href=\"#\" class=\"button\" (click)=\"clear()\">Clear Pattern</a> \n\t\t\t<div class=\"bpmRange\">\n\t\t\t\t<div class=\"bpmTitle\">BPM:</div><input type=\"range\" id=\"bpm\" min=\"1\" max=\"420\" step=\"1\" #ref (change)=\"changeBpm(ref.value)\" /><output for=\"bpm\" id=\"bpmOutput\">{{ bpm }}</output>\n\t\t\t</div>\n\t\t</div>\n\t"
    })
], ControlsComponent);
exports.ControlsComponent = ControlsComponent;
//# sourceMappingURL=controls.component.js.map