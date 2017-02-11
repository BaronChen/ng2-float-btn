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
var Ng2FloatBtnLableDirective = (function () {
    function Ng2FloatBtnLableDirective(el) {
        this.el = el;
    }
    Ng2FloatBtnLableDirective.prototype.ngOnInit = function () {
        this.el.nativeElement.style.alignSelf = 'center';
        this.el.nativeElement.style.fontFamily = 'Roboto,"Helvetica Neue",sans-serif';
        if (this.isMini == true) {
            this.el.nativeElement.style.fontSize = "0.7em";
        }
        else {
            this.el.nativeElement.style.fontSize = "0.9em";
        }
    };
    return Ng2FloatBtnLableDirective;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], Ng2FloatBtnLableDirective.prototype, "isMini", void 0);
Ng2FloatBtnLableDirective = __decorate([
    core_1.Directive({
        selector: '[ng2-float-btn-label]'
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], Ng2FloatBtnLableDirective);
exports.Ng2FloatBtnLableDirective = Ng2FloatBtnLableDirective;
//# sourceMappingURL=ng2-float-btn-label.directive.js.map