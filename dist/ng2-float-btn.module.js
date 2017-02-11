"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var material_1 = require("@angular/material");
var ng2_float_btn_component_1 = require("./ng2-float-btn.component");
var ng2_float_btn_direction_directive_1 = require("./ng2-float-btn-direction.directive");
var ng2_float_btn_li_directive_1 = require("./ng2-float-btn-li.directive");
var ng2_float_btn_label_directive_1 = require("./ng2-float-btn-label.directive");
var Ng2FloatBtnModule = (function () {
    /* istanbul ignore next */
    function Ng2FloatBtnModule() {
    }
    return Ng2FloatBtnModule;
}());
Ng2FloatBtnModule = __decorate([
    core_1.NgModule({
        declarations: [
            ng2_float_btn_component_1.Ng2FloatBtnComponent,
            ng2_float_btn_direction_directive_1.Ng2FloatBtnDirectionDirective,
            ng2_float_btn_li_directive_1.Ng2FloatBtnLiDirective,
            ng2_float_btn_label_directive_1.Ng2FloatBtnLableDirective
        ],
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            material_1.MaterialModule
        ],
        providers: [],
        exports: [ng2_float_btn_component_1.Ng2FloatBtnComponent]
    })
], Ng2FloatBtnModule);
exports.Ng2FloatBtnModule = Ng2FloatBtnModule;
//# sourceMappingURL=ng2-float-btn.module.js.map