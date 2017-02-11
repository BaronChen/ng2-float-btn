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
var Ng2FloatBtnLiDirective = (function () {
    function Ng2FloatBtnLiDirective(el) {
        this.el = el;
    }
    Ng2FloatBtnLiDirective.prototype.ngOnInit = function () {
        this.el.nativeElement.style.display = 'flex';
        this.setJustifyContent("flex-start");
        this.setDirection("column");
    };
    Ng2FloatBtnLiDirective.prototype.setJustifyContent = function (position) {
        this.el.nativeElement.style.justifyContent = position;
    };
    Ng2FloatBtnLiDirective.prototype.setDirection = function (flexDirection) {
        this.el.nativeElement.style.flexDirection = flexDirection;
    };
    return Ng2FloatBtnLiDirective;
}());
Ng2FloatBtnLiDirective = __decorate([
    core_1.Directive({
        selector: '[ng2-float-btn-li]'
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], Ng2FloatBtnLiDirective);
exports.Ng2FloatBtnLiDirective = Ng2FloatBtnLiDirective;
//# sourceMappingURL=ng2-float-btn-li.directive.js.map