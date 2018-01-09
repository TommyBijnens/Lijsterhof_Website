"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var Rx_1 = require("rxjs/Rx");
var cv_service_1 = require(".././cv.service");
require("rxjs/add/observable/interval");
require("rxjs/add/observable/interval");
require("rxjs/observable/IntervalObservable");
require("rxjs/add/observable/of");
var core_1 = require("@angular/core");
var url_library_1 = require(".././url-library");
var url_library_2 = require(".././url-library");
var DoubleSwitchComponent = (function () {
    function DoubleSwitchComponent(_cvService, _serviceInfo1, _serviceInfo2) {
        var _this = this;
        this.checked1 = false;
        this.disabled1 = true;
        this.checked2 = false;
        this.disabled2 = true;
        this.cvService = _cvService;
        this.serviceInfo1 = _serviceInfo1;
        this.serviceInfo2 = _serviceInfo2;
        this.componentService1 = this.cvService.getService(this.serviceInfo1);
        this.componentService2 = this.cvService.getService(this.serviceInfo2);
        this;
        Rx_1.Observable.forkJoin(this.componentService1, this.componentService2)
            .subscribe(function (cv) {
            _this.checked1 = (cv[0] == "1");
            _this.disabled1 = false;
            _this.checked2 = (cv[1] == "1");
            _this.disabled2 = false;
        }, function (error) { return _this.errorMessage = error; });
    }
    DoubleSwitchComponent.prototype.getValue = function () {
        return this.result;
    };
    DoubleSwitchComponent.prototype.switch1 = function () {
        var _this = this;
        var parameter1;
        if (this.checked1)
            parameter1 = 1;
        else
            parameter1 = 0;
        var dummy;
        this.componentPostService1 = this.cvService.postService(this.serviceInfo1, parameter1);
        this.componentPostService1
            .subscribe(function (cv) { return dummy = cv; }, function (error) { return _this.errorMessage = error; });
    };
    DoubleSwitchComponent.prototype.switch2 = function () {
        var _this = this;
        var parameter2;
        if (this.checked2)
            parameter2 = 1;
        else
            parameter2 = 0;
        var dummy;
        this.componentPostService2 = this.cvService.postService(this.serviceInfo2, parameter2);
        this.componentPostService2
            .subscribe(function (cv) { return dummy = cv; }, function (error) { return _this.errorMessage = error; });
    };
    return DoubleSwitchComponent;
}());
exports.DoubleSwitchComponent = DoubleSwitchComponent;
var SetupBS_CV = (function (_super) {
    __extends(SetupBS_CV, _super);
    function SetupBS_CV(__cvService, urlClass1, urlClass2) {
        var _this = _super.call(this, __cvService, urlClass1, urlClass2) || this;
        _this.__cvService = __cvService;
        _this.urlClass1 = urlClass1;
        _this.urlClass2 = urlClass2;
        _this.componentName = "Bruno & Sandy - Verwarming";
        return _this;
    }
    return SetupBS_CV;
}(DoubleSwitchComponent));
SetupBS_CV = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [cv_service_1.CVService, url_library_1.BS_CV_H, url_library_1.BS_CV_M])
], SetupBS_CV);
exports.SetupBS_CV = SetupBS_CV;
var SetupBS_WW = (function (_super) {
    __extends(SetupBS_WW, _super);
    function SetupBS_WW(__cvService, urlClass1, urlClass2) {
        var _this = _super.call(this, __cvService, urlClass1, urlClass2) || this;
        _this.__cvService = __cvService;
        _this.urlClass1 = urlClass1;
        _this.urlClass2 = urlClass2;
        _this.componentName = "Bruno & Sandy - Warm water";
        return _this;
    }
    return SetupBS_WW;
}(DoubleSwitchComponent));
SetupBS_WW = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [cv_service_1.CVService, url_library_1.BS_WW_H, url_library_1.BS_WW_M])
], SetupBS_WW);
exports.SetupBS_WW = SetupBS_WW;
var SetupT_CV = (function (_super) {
    __extends(SetupT_CV, _super);
    function SetupT_CV(__cvService, urlClass1, urlClass2) {
        var _this = _super.call(this, __cvService, urlClass1, urlClass2) || this;
        _this.__cvService = __cvService;
        _this.urlClass1 = urlClass1;
        _this.urlClass2 = urlClass2;
        _this.componentName = "Tommy - Verwarming";
        return _this;
    }
    return SetupT_CV;
}(DoubleSwitchComponent));
SetupT_CV = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [cv_service_1.CVService, url_library_2.T_CV_H, url_library_2.T_CV_M])
], SetupT_CV);
exports.SetupT_CV = SetupT_CV;
var SetupT_WW = (function (_super) {
    __extends(SetupT_WW, _super);
    function SetupT_WW(__cvService, urlClass1, urlClass2) {
        var _this = _super.call(this, __cvService, urlClass1, urlClass2) || this;
        _this.__cvService = __cvService;
        _this.urlClass1 = urlClass1;
        _this.urlClass2 = urlClass2;
        _this.componentName = "Tommy - Warm water";
        return _this;
    }
    return SetupT_WW;
}(DoubleSwitchComponent));
SetupT_WW = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [cv_service_1.CVService, url_library_2.T_WW_H, url_library_2.T_WW_M])
], SetupT_WW);
exports.SetupT_WW = SetupT_WW;
//# sourceMappingURL=DoubleSwitchComponent.js.map