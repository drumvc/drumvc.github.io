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
var TransportComponent = (function () {
    function TransportComponent() {
    }
    return TransportComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], TransportComponent.prototype, "pos", void 0);
TransportComponent = __decorate([
    core_1.Component({
        selector: 'transport',
        template: "\n\t\t<div class=\"transportContainer\">\n\t\t\t<transport-blank></transport-blank>\n\t\t\t<transport-blank></transport-blank>\n\t\t\t<transport-blank></transport-blank>\n\t\t\t<transport-blank></transport-blank>\n\t\t\t<transport-blank></transport-blank>\n\t\t\t<transport-blank></transport-blank>\n\t\t\t<transport-blank></transport-blank>\n\t\t\t<transport-blank></transport-blank>\n\t\t\t<div class=\"transport\">\t\t\t\t\t\n\t\t\t\t<div class=\"transportLight transportLightActive\" [ngStyle]=\"{left: pos * 100 + 'px'}\"></div>\n\t\t\t</div>\n\t\t</div>\t\n\t"
    })
], TransportComponent);
exports.TransportComponent = TransportComponent;
//# sourceMappingURL=transport.component.js.map