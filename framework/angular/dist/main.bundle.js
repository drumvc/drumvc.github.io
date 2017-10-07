webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"machine\">\n  <div id=\"staves\">\n    <staves></staves>\n    <transport [pos]=\"transportPos\"></transport>\n    <controls [bpm]=\"bpm\" [playing]=\"playing\" (togglePlay)=\"togglePlay($event)\" (clearPattern)=\"clearPattern($event)\" (updateBpm)=\"updateBpm($event)\"></controls>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__staves_service__ = __webpack_require__("../../../../../src/app/staves.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles_css__ = __webpack_require__("../../../../../src/styles.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__styles_css__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(stavesService) {
        this.stavesService = stavesService;
        this.transportPos = 0;
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
            var localStorageRef = localStorage.getItem("ag-pattern-" + stave.id);
            if (localStorageRef) {
                stave.notes = JSON.parse(localStorageRef);
            }
        }
    };
    AppComponent.prototype.ngAfterContentChecked = function () {
        for (var _i = 0, _a = this.staves; _i < _a.length; _i++) {
            var stave = _a[_i];
            localStorage.setItem("ag-pattern-" + stave.id, JSON.stringify(stave.notes));
        }
    };
    AppComponent.prototype.setTimer = function () {
        var _this = this;
        this.timerId = setInterval(function () { return _this.tick(); }, this.calculateTempo(this.bpm));
    };
    AppComponent.prototype.tick = function () {
        this.transportPos++;
        if (this.transportPos > 7) {
            this.transportPos = 0;
        }
        this.checkNote();
    };
    AppComponent.prototype.checkNote = function () {
        for (var _i = 0, _a = this.staves; _i < _a.length; _i++) {
            var stave = _a[_i];
            for (var _b = 0, _c = stave.notes; _b < _c.length; _b++) {
                var note = _c[_b];
                if (note.active && note.pos === this.transportPos) {
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: "app-root",
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        providers: [__WEBPACK_IMPORTED_MODULE_1__staves_service__["a" /* StavesService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__staves_service__["a" /* StavesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__staves_service__["a" /* StavesService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__controls_controls_component__ = __webpack_require__("../../../../../src/app/controls/controls.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__note_note_component__ = __webpack_require__("../../../../../src/app/note/note.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__stave_stave_component__ = __webpack_require__("../../../../../src/app/stave/stave.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__staves_staves_component__ = __webpack_require__("../../../../../src/app/staves/staves.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__transport_blank_transport_blank_component__ = __webpack_require__("../../../../../src/app/transport-blank/transport-blank.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__transport_transport_component__ = __webpack_require__("../../../../../src/app/transport/transport.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_3__controls_controls_component__["a" /* ControlsComponent */],
            __WEBPACK_IMPORTED_MODULE_4__note_note_component__["a" /* NoteComponent */],
            __WEBPACK_IMPORTED_MODULE_5__stave_stave_component__["a" /* StaveComponent */],
            __WEBPACK_IMPORTED_MODULE_6__staves_staves_component__["a" /* StavesComponent */],
            __WEBPACK_IMPORTED_MODULE_7__transport_blank_transport_blank_component__["a" /* TransportBlankComponent */],
            __WEBPACK_IMPORTED_MODULE_8__transport_transport_component__["a" /* TransportComponent */]
        ],
        imports: [__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */]],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/controls/controls.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"controls\">\n\t<a href=\"#\" class=\"button\" (click)=\"toggle()\">{{ playing ? 'Stop': 'Play' }}</a> \n\t<a href=\"#\" class=\"button\" (click)=\"clear()\">Clear</a> \n\t<div class=\"bpmRange\">\n\t\t<div class=\"bpmTitle\">BPM</div><input type=\"range\" id=\"bpm\" min=\"1\" max=\"420\" step=\"1\" #ref (change)=\"changeBpm(ref.value)\" /><output for=\"bpm\" class=\"bpmOutput\">{{ bpm }}</output>\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/controls/controls.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ControlsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ControlsComponent = (function () {
    function ControlsComponent() {
        this.togglePlay = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]();
        this.clearPattern = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]();
        this.updateBpm = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]();
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Number)
], ControlsComponent.prototype, "bpm", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Boolean)
], ControlsComponent.prototype, "playing", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]) === "function" && _a || Object)
], ControlsComponent.prototype, "togglePlay", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Output */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]) === "function" && _b || Object)
], ControlsComponent.prototype, "clearPattern", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Output */])(),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]) === "function" && _c || Object)
], ControlsComponent.prototype, "updateBpm", void 0);
ControlsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: "controls",
        template: __webpack_require__("../../../../../src/app/controls/controls.component.html")
    })
], ControlsComponent);

var _a, _b, _c;
//# sourceMappingURL=controls.component.js.map

/***/ }),

/***/ "../../../../../src/app/note/note.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"noteContainer\">\n  <div class=\"note\" [class.active]=\"active === true\"></div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/note/note.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoteComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NoteComponent = (function () {
    function NoteComponent() {
    }
    return NoteComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Boolean)
], NoteComponent.prototype, "active", void 0);
NoteComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: "note",
        template: __webpack_require__("../../../../../src/app/note/note.component.html")
    })
], NoteComponent);

//# sourceMappingURL=note.component.js.map

/***/ }),

/***/ "../../../../../src/app/stave/stave.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"stave\">\n  <div class=\"staveName\">{{ name }}</div>\n  <note *ngFor=\"let note of notes\" (click)=\"onClick(note)\" [active]=\"note.active\"></note>\n</div>"

/***/ }),

/***/ "../../../../../src/app/stave/stave.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StaveComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StaveComponent = (function () {
    function StaveComponent() {
    }
    StaveComponent.prototype.onClick = function (note) {
        note.active = !note.active;
    };
    return StaveComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", String)
], StaveComponent.prototype, "name", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Array)
], StaveComponent.prototype, "notes", void 0);
StaveComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: "stave",
        template: __webpack_require__("../../../../../src/app/stave/stave.component.html")
    })
], StaveComponent);

//# sourceMappingURL=stave.component.js.map

/***/ }),

/***/ "../../../../../src/app/staves.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StavesService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var audioPath = "../../../audio/";
var kick = audioPath + "kick.wav";
var snare = audioPath + "snare.wav";
var hihat = audioPath + "hihat.wav";
var STAVES = [
    {
        id: 1,
        name: "Kick",
        sample: kick,
        notes: [
            { pos: 0, active: false },
            { pos: 1, active: false },
            { pos: 2, active: false },
            { pos: 3, active: false },
            { pos: 4, active: false },
            { pos: 5, active: false },
            { pos: 6, active: false },
            { pos: 7, active: false }
        ]
    },
    {
        id: 2,
        name: "Snare",
        sample: snare,
        notes: [
            { pos: 0, active: false },
            { pos: 1, active: false },
            { pos: 2, active: false },
            { pos: 3, active: false },
            { pos: 4, active: false },
            { pos: 5, active: false },
            { pos: 6, active: false },
            { pos: 7, active: false }
        ]
    },
    {
        id: 3,
        name: "Hihat",
        sample: hihat,
        notes: [
            { pos: 0, active: false },
            { pos: 1, active: false },
            { pos: 2, active: false },
            { pos: 3, active: false },
            { pos: 4, active: false },
            { pos: 5, active: false },
            { pos: 6, active: false },
            { pos: 7, active: false }
        ]
    }
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])()
], StavesService);

//# sourceMappingURL=staves.service.js.map

/***/ }),

/***/ "../../../../../src/app/staves/staves.component.html":
/***/ (function(module, exports) {

module.exports = "<stave *ngFor=\"let stave of staves\" [name]=\"stave.name\" [notes]=\"stave.notes\"></stave>"

/***/ }),

/***/ "../../../../../src/app/staves/staves.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__staves_service__ = __webpack_require__("../../../../../src/app/staves.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StavesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StavesComponent = (function () {
    function StavesComponent(stavesService) {
        this.stavesService = stavesService;
    }
    StavesComponent.prototype.getStaves = function () {
        this.staves = this.stavesService.getStaves();
    };
    StavesComponent.prototype.ngOnInit = function () {
        this.getStaves();
    };
    return StavesComponent;
}());
StavesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: "staves",
        template: __webpack_require__("../../../../../src/app/staves/staves.component.html"),
        providers: [__WEBPACK_IMPORTED_MODULE_1__staves_service__["a" /* StavesService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__staves_service__["a" /* StavesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__staves_service__["a" /* StavesService */]) === "function" && _a || Object])
], StavesComponent);

var _a;
//# sourceMappingURL=staves.component.js.map

/***/ }),

/***/ "../../../../../src/app/transport-blank/transport-blank.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"transportOff\">\n\t<div class=\"transportLight\"></div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/transport-blank/transport-blank.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransportBlankComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TransportBlankComponent = (function () {
    function TransportBlankComponent() {
    }
    return TransportBlankComponent;
}());
TransportBlankComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: "transport-blank",
        template: __webpack_require__("../../../../../src/app/transport-blank/transport-blank.component.html")
    })
], TransportBlankComponent);

//# sourceMappingURL=transport-blank.component.js.map

/***/ }),

/***/ "../../../../../src/app/transport/transport.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"transportContainer\">\n\t<transport-blank></transport-blank>\n\t<transport-blank></transport-blank>\n\t<transport-blank></transport-blank>\n\t<transport-blank></transport-blank>\n\t<transport-blank></transport-blank>\n\t<transport-blank></transport-blank>\n\t<transport-blank></transport-blank>\n\t<transport-blank></transport-blank>\n\t<div class=\"transport\">\t\t\t\t\t\n\t\t<div class=\"transportLight transportLightActive\" [ngStyle]=\"{left: pos * 95 + 'px'}\"></div>\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/transport/transport.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransportComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TransportComponent = (function () {
    function TransportComponent() {
    }
    return TransportComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Number)
], TransportComponent.prototype, "pos", void 0);
TransportComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: "transport",
        template: __webpack_require__("../../../../../src/app/transport/transport.component.html")
    })
], TransportComponent);

//# sourceMappingURL=transport.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../../src/styles.css":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../../src/styles.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__("../../../../style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js??ref--9-1!../node_modules/postcss-loader/index.js??postcss!./styles.css", function() {
			var newContent = require("!!../node_modules/css-loader/index.js??ref--9-1!../node_modules/postcss-loader/index.js??postcss!./styles.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../../src/styles.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "html {\r\n\theight: 100%;\r\n}\r\n\r\nbody {\r\n\theight: 100%;   \r\n\tbackground: rgba(247,247,247,1);\r\n\tbackground: radial-gradient(ellipse at center, rgba(247,247,247,1) 0%, rgba(246,246,246,1) 47%, rgba(180,180,180,1) 100%);\r\n\tfilter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#ededed', GradientType=1 );\r\n    /*font-family: 'Roboto Slab', serif;*/\r\n    font-family: BlinkMacSystemFont,-apple-system,\"Segoe UI\",Roboto,Oxygen,Ubuntu,Cantarell,\"Fira Sans\",\"Droid Sans\",\"Helvetica Neue\",Helvetica,Arial,sans-serif;\r\n}\r\n\r\nh1 {\r\n\ttext-align: center;\r\n\tfont-weight: normal;\r\n}\r\n\r\naside {\r\n\twidth: 190px;\r\n\tbackground: rgba(255, 255, 255, 0.5);\r\n\theight: 100%;\r\n\tposition: fixed;\r\n\ttop: 0;\r\n\tleft: 0;\r\n\tpadding: 0 0 0 15px;\r\n\tfont-size: 16px;\r\n}\r\n\r\naside a {\r\n\tcolor: black;\r\n\ttext-decoration: none;\r\n}\r\n\r\naside .content {\r\n\tmargin-top: 130px;\r\n}\r\n\r\naside .left {\r\n\twidth: 30px;\r\n\tfloat: left;\r\n\tmargin-right: 10px;\r\n\tclear: left;\r\n\ttext-align: center;\r\n\tmargin-bottom: 8px;\r\n}\r\n\r\naside .right {\r\n\twidth: 150px;\r\n\tfloat: left;\r\n}\r\n\r\naside .right a:hover {\r\n\ttext-decoration: underline;\r\n}\r\n\r\n.machine {\r\n\tmargin: 40px auto;\r\n\twidth: 910px;\r\n\tposition: relative;\r\n}\r\n\r\n#staves {\r\n\tborder-left: 20px solid #232323;\r\n\tborder-right: 20px solid #232323;\r\n\tborder-radius: 3px;\r\n}\r\n\r\n.stave {\r\n\twidth: 100%;\r\n\theight: 70px;\r\n\tborder: 1px solid #666;\r\n\tbackground: #333;\r\n}\r\n\r\n.staveName {\r\n\tfont-family: \"Abel\", sans-serif;\r\n\tfloat: right;\r\n\tcolor: white;\r\n\tmargin: 20px 10px 0 0;\r\n\tbackground: #111;\r\n\twidth: 80px;\r\n\tpadding: 3px 8px 3px 8px;\r\n\tborder-left: 2px solid #222222;\r\n\tborder-right: 2px solid #454545;\r\n\tborder-top: 2px solid #212121;\r\n\tborder-bottom: 2px solid #565656;\r\n}\r\n\r\n.noteContainer {\r\n\twidth: 95px;\r\n\theight: 70px;\r\n\tbackground: none;\r\n\tfloat: left;\r\n}\r\n\r\n.transportContainer {\r\n\twidth: 100%;\r\n\theight: 40px;\r\n\tpadding-top: 10px;\r\n\tborder: 1px solid #666;\r\n\tbackground: #333;\r\n}\r\n\r\n.transport {\r\n\twidth: 95px;\r\n\theight: 50px;\r\n\tmargin-left: 20px;\r\n\ttext-align: center;\r\n\tleft: 0;\r\n\tz-index: 1;\r\n\tposition: absolute;\r\n}\r\n\r\n.transportOff {\r\n\twidth: 95px;\r\n\theight: 60px;\r\n\ttext-align: center;\r\n\tfloat: left;\r\n}\r\n\r\n.transportLight {\r\n\tborder-radius: 50%;\r\n\tbackground-color: #001100;\r\n\twidth: 25px;\r\n\theight: 25px;\r\n\tmargin: 0 auto;\r\n\tposition: relative;\r\n\tborder: 3px solid #222;\r\n}\r\n\r\n.transportLight:after {\r\n\tcontent: '';\r\n\twidth: 4px;\r\n\theight: 4px;\r\n\tborder-radius: 50%;\r\n\tposition: absolute;\r\n\tbackground-color: rgba(255, 255, 255, 0.5);\r\n\ttop: 6px;\r\n\tleft: 6px;\r\n\tbox-shadow: 3px 4px 7px 8px rgba(0, 120, 0, 0.6);\r\n}\r\n\r\n.transportLightActive {\r\n\tbackground-color: #00AA00;\r\n\tbox-shadow: 0px 0px 10px 5px rgba(0, 255, 0, 0.4);\r\n\tborder: 3px solid rgba(0, 120, 0, 1);\r\n}\r\n\r\n.transportLightActive:after {\r\n\tbackground-color: rgba(255,255,255,1);\r\n\tbox-shadow: 4px 4px 6px 7px rgba(0, 255, 0, 1);\r\n}\r\n\r\n.note {\r\n\tborder-radius: 50%;\r\n\tbackground-color: #220000;\r\n\twidth: 30px;\r\n\theight: 30px;\r\n\tposition: relative;\r\n\tcursor: pointer;\r\n\tmargin: 20px auto;\r\n\tborder: 3px solid #222;\r\n}\r\n\r\n.active {\r\n\tbackground-color: #AA0000;\r\n\tbox-shadow: 0px 0px 10px 5px rgba(255, 0, 0, 0.4);\r\n\tborder: 3px solid rgba(120, 0, 0, 1);\r\n}\r\n\r\n.note:after {\r\n\tcontent: '';\r\n\twidth: 4px;\r\n\theight: 4px;\r\n\tborder-radius: 50%;\r\n\tposition: absolute;\r\n\tbackground-color: rgba(255, 255, 255, 0.5);\r\n\ttop: 7px;\r\n\tleft: 7px;\r\n\tbox-shadow: 3px 4px 7px 9px rgba(180, 0, 0, 0.6);\r\n}\r\n\r\n.active:after {\r\n\tbackground-color: rgba(255,255,255,1);\r\n\tbox-shadow: 4px 4px 6px 7px rgba(255, 0, 0, 1);\r\n}\r\n\r\n/* CONTROLS */\r\n\r\n.controls {\r\n\tfont-family: \"Abel\", sans-serif;\r\n\twidth: 100%;\r\n\tpadding: 15px 0 15px 0;\r\n\tbackground: #333;\r\n\tborder-left: 1px solid #666;\r\n\tborder-right: 1px solid #666;\r\n}\r\n\r\n.controls::after { \r\n\tcontent: \"\";\r\n\tdisplay: block; \r\n\theight: 0; \r\n\tclear: both;\r\n}\r\n\r\n.bpmRange {\r\n\tfloat: right;\r\n\tmargin-top: 3px;\r\n}\r\n\r\n.bpmTitle {\r\n\tfloat: left;\r\n\tcolor: white;\r\n\tmargin: 8px 8px 0 0;\r\n}\r\n\r\n.bpmOutput {\r\n\twidth: 30px;\r\n\tmargin: 8px 15px 0 8px;\r\n\tcolor: white;\r\n\tfloat: right;\r\n}\r\n\r\n/* BUTTONS */\r\n\r\n.buttons {\r\n\tfloat: left;\r\n}\r\n\r\na.button {\r\n\twidth: 130px;\r\n\ttext-align: center;\r\n\ttext-decoration: none;\r\n\tborder-radius: 4px;\r\n\tcursor: pointer;\r\n\tpadding: 12px 0;\r\n\tdisplay: inline-block;\r\n\tbackground: #7b7b8c;\r\n\tbox-shadow: 0 2px 4px rgba(255, 255, 255, 0.1) inset, 0 -15px 70px rgba(0, 0, 0, 0.45) inset, -2px -2px 5px rgba(0, 0, 0, 0.4);\r\n\tcolor: #fff;\r\n\tmargin-left: 15px;\r\n\tfont-size: 16px;\r\n}\r\n\r\n.button:active {\r\n\tbox-shadow: 0 1px 5px rgba(255, 255, 255, 0.2) inset, 0 -15px 70px rgba(0, 0, 0, 0.3) inset, -2px 2px 2px rgba(0, 0, 0, 0.25), 0 10px 100px rgba(0, 0, 0, 0.2) inset;\r\n}\r\n\r\n/* RANGE INPUT */\r\n/* Styled with http://danielstern.ca/range.css/ */\r\n\r\ninput[type=range] {\r\n\twidth: 16em;\r\n\t-webkit-appearance: none;\r\n\tmargin: 16.55px 0;\r\n}\r\n\r\ninput[type=range]:focus {\r\n\toutline: none;\r\n}\r\n\r\ninput[type=range]::-webkit-slider-runnable-track {\r\n\twidth: 100%;\r\n\theight: 2.9px;\r\n\tcursor: pointer;\r\n\tbox-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;\r\n\tbackground: #606060;\r\n\tborder-radius: 20px;\r\n\tborder: 0.1px solid #010101;\r\n}\r\n\r\ninput[type=range]::-webkit-slider-thumb {\r\n\tbox-shadow: 0 -2px 4px rgba(255, 255, 255, 0.6) inset, -2px -2px 5px rgba(0, 0, 0, 0.4);\r\n\tbackground: #adadad;\r\n\tborder: 0px solid #000000;\r\n\theight: 36px;\r\n\twidth: 16px;\r\n\tborder-radius: 2px;\r\n\tcursor: pointer;\r\n\t-webkit-appearance: none;\r\n\tmargin-top: -16.65px;\r\n}\r\n\r\ninput[type=range]:focus::-webkit-slider-runnable-track {\r\n\tbackground: #636363;\r\n}\r\n\r\ninput[type=range]::-moz-range-track {\r\n\twidth: 100%;\r\n\theight: 2.9px;\r\n\tcursor: pointer;\r\n\tbox-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;\r\n\tbackground: #606060;\r\n\tborder-radius: 20px;\r\n\tborder: 0.1px solid #010101;\r\n}\r\n\r\ninput[type=range]::-moz-range-thumb {\r\n\tbox-shadow: 0 -2px 4px rgba(255, 255, 255, 0.6) inset, -2px -2px 5px rgba(0, 0, 0, 0.4);\r\n\tbackground: #adadad;\r\n\tborder: 0px solid #000000;\r\n\theight: 36px;\r\n\twidth: 16px;\r\n\tborder-radius: 3px;\r\n\tcursor: pointer;\r\n}\r\n\r\ninput[type=range]::-ms-track {\r\n\twidth: 100%;\r\n\theight: 2.9px;\r\n\tcursor: pointer;\r\n\tbackground: transparent;\r\n\tborder-color: transparent;\r\n\tcolor: transparent;\r\n}\r\n\r\ninput[type=range]::-ms-fill-lower {\r\n\tbackground: #5d5d5d;\r\n\tborder: 0.1px solid #010101;\r\n\tborder-radius: 40px;\r\n\tbox-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;\r\n}\r\n\r\ninput[type=range]::-ms-fill-upper {\r\n\tbackground: #606060;\r\n\tborder: 0.1px solid #010101;\r\n\tborder-radius: 40px;\r\n\tbox-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;\r\n}\r\n\r\ninput[type=range]::-ms-thumb {\r\n\tbox-shadow: 0 -2px 4px rgba(255, 255, 255, 0.6) inset, -2px -2px 5px rgba(0, 0, 0, 0.4);\r\n\tbackground: #adadad;\r\n\tborder: 0px solid #000000;\r\n\theight: 36px;\r\n\twidth: 16px;\r\n\tborder-radius: 3px;\r\n\tcursor: pointer;\r\n\theight: 2.9px;\r\n}\r\n\r\ninput[type=range]:focus::-ms-fill-lower {\r\n\tbackground: #606060;\r\n}\r\n\r\ninput[type=range]:focus::-ms-fill-upper {\r\n\tbackground: #636363;\r\n}\r\n\r\n.credits {\r\n\twidth: 99%;\r\n\ttext-align: center;\r\n\tposition: absolute;\r\n\tbottom: 10px;\r\n}\r\n\r\n.credits a {\r\n\tcolor: black;\r\n}", ""]);

// exports


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map