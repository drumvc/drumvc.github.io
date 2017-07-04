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
    core_1.Component({
        selector: 'staves',
        template: "\n\t\t<stave *ngFor=\"let stave of staves\" [name]=\"stave.name\" [notes]=\"stave.notes\"></stave>\n\t",
        providers: [staves_service_1.StavesService]
    }),
    __metadata("design:paramtypes", [staves_service_1.StavesService])
], StavesComponent);
exports.StavesComponent = StavesComponent;
//# sourceMappingURL=staves.component.js.map