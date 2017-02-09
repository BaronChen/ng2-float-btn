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
var test_lib_component_1 = require("./test-lib.component");
var TestLibModule = (function () {
    function TestLibModule() {
    }
    return TestLibModule;
}());
TestLibModule = __decorate([
    core_1.NgModule({
        declarations: [
            test_lib_component_1.TestLibComponent
        ],
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule
        ],
        providers: [],
        exports: [test_lib_component_1.TestLibComponent]
    })
], TestLibModule);
exports.TestLibModule = TestLibModule;
//# sourceMappingURL=test-lib.module.js.map