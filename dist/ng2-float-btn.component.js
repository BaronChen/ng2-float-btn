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
    }
    Ng2FloatBtnComponent.prototype.ngOnInit = function () {
        if (!this.mainButton)
            throw "mainButton is required.";
        if (!this.buttons || this.buttons.length == 0)
            throw "buttons is required.";
        if (!this.direction || this.direction == '')
            this.direction = "right";
    };
    Ng2FloatBtnComponent.prototype.triggerBtnMenu = function () {
        this.showBtns = !this.showBtns;
    };
    Ng2FloatBtnComponent.prototype.fireAction = function ($event, action) {
        if (action)
            action($event);
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
Ng2FloatBtnComponent = __decorate([
    core_1.Component({
        selector: 'ng2-float-btn',
        styles: [
            "ul {\n\t\t\tlist-style-type: none; \n\t\t\tmargin: 0; \n\t\t\tpadding: 0; \n\t\t\toverflow: hidden;\n\t\t\tdisplay:flex;\n\t\t}",
            "button {\n\t\t\tmargin: 8px;\n\t\t}"
        ],
        animations: [
            core_1.trigger('rightAnimation', [
                core_1.transition(':enter', [
                    core_1.style({ transform: 'translateX(-100%) scale(0.5)', opacity: 0 }),
                    core_1.animate('400ms ease-out', core_1.style({ transform: 'translateX(0) scale(1)', opacity: 1 }))
                ]),
                core_1.transition(':leave', [
                    core_1.style({ transform: 'translateX(0) scale(1)', 'opacity': 1 }),
                    core_1.animate('400ms ease-in', core_1.style({ transform: 'translateX(-100%) scale(0.5)', opacity: 0 }))
                ])
            ]),
            core_1.trigger('leftAnimation', [
                core_1.transition(':enter', [
                    core_1.style({ transform: 'translateX(100%) scale(0.5)', opacity: 0 }),
                    core_1.animate('400ms ease-out', core_1.style({ transform: 'translateX(0) scale(1)', opacity: 1 }))
                ]),
                core_1.transition(':leave', [
                    core_1.style({ transform: 'translateX(0) scale(1)', 'opacity': 1 }),
                    core_1.animate('400ms ease-in', core_1.style({ transform: 'translateX(100%) scale(0.5)', opacity: 0 }))
                ])
            ]),
            core_1.trigger('downAnimation', [
                core_1.transition(':enter', [
                    core_1.style({ transform: 'translateY(-100%) scale(0.5)', opacity: 0 }),
                    core_1.animate('400ms ease-out', core_1.style({ transform: 'translateY(0) scale(1)', opacity: 1 }))
                ]),
                core_1.transition(':leave', [
                    core_1.style({ transform: 'translateY(0) scale(1)', 'opacity': 1 }),
                    core_1.animate('400ms ease-in', core_1.style({ transform: 'translateY(-100%) scale(0.5)', opacity: 0 }))
                ])
            ]),
            core_1.trigger('upAnimation', [
                core_1.transition(':enter', [
                    core_1.style({ transform: 'translateY(100%) scale(0.5)', opacity: 0 }),
                    core_1.animate('400ms ease-out', core_1.style({ transform: 'translateY(0) scale(1)', opacity: 1 }))
                ]),
                core_1.transition(':leave', [
                    core_1.style({ transform: 'translateY(0) scale(1)', 'opacity': 1 }),
                    core_1.animate('400ms ease-in', core_1.style({ transform: 'translateY(100%) scale(0.5)', opacity: 0 }))
                ])
            ])
        ],
        template: "\n\t\t<ul ng2-float-btn-direction [btnDirection]=\"direction\">\n\t\t\t<li>\n\t\t\t\t<button md-fab (click)=\"triggerBtnMenu()\">\n\t\t\t\t\t<md-icon>{{mainButton.iconName}}</md-icon>\n\t\t\t\t</button>\t\n\t\t\t</li>\n\t\t\t<li *ngFor=\"let btn of buttons\">\n\t\t\t\t<ng-container [ngSwitch]=\"direction\">\n\t\t\t\t\t<ng-container *ngSwitchCase=\"'right'\" >\n\t\t\t\t\t\t<button md-fab [@rightAnimation]=\"showBtns\" *ngIf=\"showBtns\"\n\t\t\t\t\t\t\t\t(click)=\"fireAction($event, btn.onClick)\">\n\t\t\t\t\t\t\t\t<md-icon>{{btn.iconName}}</md-icon>\n\t\t\t\t\t\t</button>\n\t\t\t\t\t</ng-container>\n\n\t\t\t\t\t<ng-container *ngSwitchCase=\"'left'\" >\n\t\t\t\t\t\t<button md-fab [@leftAnimation]=\"showBtns\" *ngIf=\"showBtns\"\n\t\t\t\t\t\t\t\t(click)=\"fireAction($event, btn.onClick)\">\n\t\t\t\t\t\t\t\t<md-icon>{{btn.iconName}}</md-icon>\n\t\t\t\t\t\t</button>\n\t\t\t\t\t</ng-container>\n\t\t\t\t\t\n\t\t\t\t\t<ng-container *ngSwitchCase=\"'down'\" >\n\t\t\t\t\t\t<button md-fab [@downAnimation]=\"showBtns\" *ngIf=\"showBtns\"\n\t\t\t\t\t\t\t\t(click)=\"fireAction($event, btn.onClick)\">\n\t\t\t\t\t\t\t\t<md-icon>{{btn.iconName}}</md-icon>\n\t\t\t\t\t\t</button>\n\t\t\t\t\t</ng-container>\n\n\t\t\t\t\t<ng-container *ngSwitchCase=\"'up'\" >\n\t\t\t\t\t\t<button md-fab [@upAnimation]=\"showBtns\" *ngIf=\"showBtns\"\n\t\t\t\t\t\t\t\t(click)=\"fireAction($event, btn.onClick)\">\n\t\t\t\t\t\t\t\t<md-icon>{{btn.iconName}}</md-icon>\n\t\t\t\t\t\t</button>\n\t\t\t\t\t</ng-container>\n\t\t\t\t</ng-container>\n\t\t\t\n\t\t\t\t\n\t\t\t</li>\n\t\t\t\n\t\t</ul>\n\t\t\n  "
    }),
    __metadata("design:paramtypes", [])
], Ng2FloatBtnComponent);
exports.Ng2FloatBtnComponent = Ng2FloatBtnComponent;
//# sourceMappingURL=ng2-float-btn.component.js.map