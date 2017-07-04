"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./app.component");
var controls_component_1 = require("./controls.component");
var staves_component_1 = require("./staves.component");
var stave_component_1 = require("./stave.component");
var note_component_1 = require("./note.component");
var transport_component_1 = require("./transport.component");
var transport_blank_component_1 = require("./transport-blank.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule],
        declarations: [app_component_1.AppComponent, controls_component_1.ControlsComponent, staves_component_1.StavesComponent, stave_component_1.StaveComponent, note_component_1.NoteComponent, transport_component_1.TransportComponent, transport_blank_component_1.TransportBlankComponent],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map