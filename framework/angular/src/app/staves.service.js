"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var STAVES = [
    {
        id: 1,
        name: 'Bass',
        sample: '../audio/Bass-Drum-1.mp3',
        notes: [
            { 'pos': 0, 'active': false },
            { 'pos': 1, 'active': false },
            { 'pos': 2, 'active': false },
            { 'pos': 3, 'active': false },
            { 'pos': 4, 'active': false },
            { 'pos': 5, 'active': false },
            { 'pos': 6, 'active': false },
            { 'pos': 7, 'active': false }
        ]
    },
    {
        id: 2,
        name: 'Snare',
        sample: '../audio/Hip-Hop-Snare-1.mp3',
        notes: [
            { 'pos': 0, 'active': false },
            { 'pos': 1, 'active': false },
            { 'pos': 2, 'active': false },
            { 'pos': 3, 'active': false },
            { 'pos': 4, 'active': false },
            { 'pos': 5, 'active': false },
            { 'pos': 6, 'active': false },
            { 'pos': 7, 'active': false }
        ]
    },
    {
        id: 3,
        name: 'Hihat',
        sample: '../audio/Closed-Hi-Hat-1.mp3',
        notes: [
            { 'pos': 0, 'active': false },
            { 'pos': 1, 'active': false },
            { 'pos': 2, 'active': false },
            { 'pos': 3, 'active': false },
            { 'pos': 4, 'active': false },
            { 'pos': 5, 'active': false },
            { 'pos': 6, 'active': false },
            { 'pos': 7, 'active': false }
        ]
    },
];
var StavesService = (function () {
    function StavesService() {
    }
    StavesService.prototype.getStaves = function () {
        return STAVES;
    };
    return StavesService;
}());
StavesService = __decorate([
    core_1.Injectable()
], StavesService);
exports.StavesService = StavesService;
//# sourceMappingURL=staves.service.js.map