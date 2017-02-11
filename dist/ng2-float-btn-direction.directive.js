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
var Ng2FloatBtnDirectionDirective = (function () {
    function Ng2FloatBtnDirectionDirective(el) {
        this.el = el;
    }
    Ng2FloatBtnDirectionDirective.prototype.ngOnInit = function () {
        this.el.nativeElement.style.display = 'inline-flex';
        switch (this.btnDirection) {
            case 'right':
                this.setJustifyContent('flex-start');
                this.setDirection('row');
                break;
            case 'left':
                this.setJustifyContent('flex-start');
                this.setDirection('row-reverse');
                break;
            case 'down':
                this.setJustifyContent('flex-start');
                this.setDirection('column');
                break;
            case 'up':
                this.setJustifyContent('flex-end');
                this.setDirection('column-reverse');
                break;
            /* istanbul ignore next */
            default:
                throw 'invalid direction.';
        }
    };
    Ng2FloatBtnDirectionDirective.prototype.setJustifyContent = function (position) {
        this.el.nativeElement.style.justifyContent = position;
    };
    Ng2FloatBtnDirectionDirective.prototype.setDirection = function (flexDirection) {
        this.el.nativeElement.style.flexDirection = flexDirection;
    };
    return Ng2FloatBtnDirectionDirective;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], Ng2FloatBtnDirectionDirective.prototype, "btnDirection", void 0);
Ng2FloatBtnDirectionDirective = __decorate([
    core_1.Directive({
        selector: '[ng2-float-btn-direction]'
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], Ng2FloatBtnDirectionDirective);
exports.Ng2FloatBtnDirectionDirective = Ng2FloatBtnDirectionDirective;
//# sourceMappingURL=ng2-float-btn-direction.directive.js.map