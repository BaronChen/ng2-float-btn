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
var Ng2FloatBtnComponent = (function () {
    function Ng2FloatBtnComponent() {
        this.showBtns = false;
        this.animateState = 'void';
    }
    Ng2FloatBtnComponent.prototype.ngOnInit = function () {
        /* istanbul ignore if */
        if (!this.mainButton)
            throw "mainButton is required.";
        /* istanbul ignore if */
        if (!this.buttons || this.buttons.length == 0)
            throw "buttons is required.";
        if (!this.direction || this.direction == '')
            this.direction = "right";
        if (!this.isMini) {
            this.isMini = false;
        }
    };
    Ng2FloatBtnComponent.prototype.triggerBtnMenu = function () {
        this.showBtns = !this.showBtns;
        if (!this.showBtns) {
            this.animateState = 'void';
        }
        else {
            switch (this.direction) {
                case 'right':
                    this.animateState = 'right-show';
                    break;
                case 'left':
                    this.animateState = 'left-show';
                    break;
                case 'down':
                    this.animateState = 'down-show';
                    break;
                case 'up':
                    this.animateState = 'up-show';
                    break;
                /* istanbul ignore next */
                default:
                    throw 'Invalid direction.';
            }
        }
    };
    Ng2FloatBtnComponent.prototype.fireAction = function ($event, action) {
        this.triggerBtnMenu();
        /* istanbul ignore else  */
        if (action)
            action($event);
    };
    Ng2FloatBtnComponent.prototype.shouldShowLabel = function (title) {
        if (!title || title == '')
            return false;
        return true;
    };
    return Ng2FloatBtnComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], Ng2FloatBtnComponent.prototype, "buttons", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], Ng2FloatBtnComponent.prototype, "mainButton", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], Ng2FloatBtnComponent.prototype, "direction", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], Ng2FloatBtnComponent.prototype, "isMini", void 0);
Ng2FloatBtnComponent = __decorate([
    core_1.Component({
        selector: 'ng2-float-btn',
        styles: [
            "ul {\n\t\t\tlist-style-type: none; \n\t\t\tmargin: 0; \n\t\t\tpadding: 0; \n\t\t\toverflow: hidden;\n\t\t\tz-index: 200;\n\t\t}",
            "button {\n\t\t\tmargin: 8px;\n\t\t}"
        ],
        animations: [
            core_1.trigger('buttonAnimation', [
                core_1.transition('void => right-show', [
                    core_1.style({ transform: 'translateX(-100%) scale(0.5)', opacity: 0 }),
                    core_1.animate('400ms ease-out', core_1.style({ transform: 'translateX(0) scale(1)', opacity: 1 }))
                ]),
                core_1.transition('right-show => void', [
                    core_1.style({ transform: 'translateX(0) scale(1)', 'opacity': 1 }),
                    core_1.animate('400ms ease-in', core_1.style({ transform: 'translateX(-100%) scale(0.5)', opacity: 0 }))
                ]),
                core_1.transition('void => left-show', [
                    core_1.style({ transform: 'translateX(100%) scale(0.5)', opacity: 0 }),
                    core_1.animate('400ms ease-out', core_1.style({ transform: 'translateX(0) scale(1)', opacity: 1 }))
                ]),
                core_1.transition('left-show => void', [
                    core_1.style({ transform: 'translateX(0) scale(1)', 'opacity': 1 }),
                    core_1.animate('400ms ease-in', core_1.style({ transform: 'translateX(100%) scale(0.5)', opacity: 0 }))
                ]),
                core_1.transition('void => down-show', [
                    core_1.style({ transform: 'translateY(-100%) scale(0.5)', opacity: 0 }),
                    core_1.animate('400ms ease-out', core_1.style({ transform: 'translateY(0) scale(1)', opacity: 1 }))
                ]),
                core_1.transition('down-show => void', [
                    core_1.style({ transform: 'translateY(0) scale(1)', 'opacity': 1 }),
                    core_1.animate('400ms ease-in', core_1.style({ transform: 'translateY(-100%) scale(0.5)', opacity: 0 }))
                ]),
                core_1.transition('void => up-show', [
                    core_1.style({ transform: 'translateY(100%) scale(0.5)', opacity: 0 }),
                    core_1.animate('400ms ease-out', core_1.style({ transform: 'translateY(0) scale(1)', opacity: 1 }))
                ]),
                core_1.transition('up-show => void', [
                    core_1.style({ transform: 'translateY(0) scale(1)', 'opacity': 1 }),
                    core_1.animate('400ms ease-in', core_1.style({ transform: 'translateY(100%) scale(0.5)', opacity: 0 }))
                ])
            ]),
            core_1.trigger('labelAnimation', [
                core_1.transition(':enter', [
                    core_1.style({ transform: 'scale(0.6)', 'opacity': 0 }),
                    core_1.animate('100ms 300ms ease', core_1.style({ transform: 'scale(1)', opacity: 1 }))
                ]),
                core_1.transition(':leave', [
                    core_1.style({ transform: 'scale(1)', 'opacity': 1 }),
                    core_1.animate('200ms ease-out', core_1.style({ transform: 'scale(0.6)', opacity: 0 }))
                ])
            ])
        ],
        //the two hidden button is used to trigger a render of material fab 
        //so that the buttons with attribute binding will render correctly later
        template: "\n\t\t<button md-fab style=\"display: none\"></button>\n\t\t<button md-mini-fab style=\"display: none\"></button>\n\t\t<ul ng2-float-btn-direction [btnDirection]=\"direction\">\n\t\t\t<li>\n\t\t\t\t<button [attr.md-fab]=\"isMini ? null : ''\" [attr.md-mini-fab]=\"isMini ? '' : null\"\n\t\t\t\t\t\t(click)=\"triggerBtnMenu()\">\n\t\t\t\t\t<md-icon>{{mainButton.iconName}}</md-icon>\n\t\t\t\t</button>\t\n\t\t\t</li>\n\t\t\t<li *ngFor=\"let btn of buttons\" ng2-float-btn-li>\n\t\t\t\t<button [attr.md-fab]=\"isMini ? null : ''\" [attr.md-mini-fab]=\"isMini ? '' : null\"\n\t\t\t\t\t[@buttonAnimation]=\"animateState\" *ngIf=\"showBtns\"\n\t\t\t\t\t(click)=\"fireAction($event, btn.onClick)\">\n\t\t\t\t\t\t<md-icon>{{btn.iconName}}</md-icon>\n\t\t\t\t</button>\n\t\t\t\t<label *ngIf=\"shouldShowLabel(btn.label) && showBtns\" [@labelAnimation]=\"showBtns\"\n\t\t\t\t\t\tng2-float-btn-label [isMini]=\"isMini\">\n\t\t\t\t\t{{btn.label}}\n\t\t\t\t</label>\n\t\t\t</li>\n\t\t\t\n\t\t</ul>\n\t\t\n  "
    }),
    __metadata("design:paramtypes", [])
], Ng2FloatBtnComponent);
exports.Ng2FloatBtnComponent = Ng2FloatBtnComponent;
//# sourceMappingURL=ng2-float-btn.component.js.map