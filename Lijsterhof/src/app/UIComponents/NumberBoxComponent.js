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
var cv_service_1 = require(".././cv.service");
require("rxjs/add/observable/interval");
require("rxjs/add/observable/interval");
require("rxjs/observable/IntervalObservable");
require("rxjs/add/observable/of");
var core_1 = require("@angular/core");
var url_library_1 = require(".././url-library");
var NumberBoxComponent = (function () {
    function NumberBoxComponent(_cvService, _serviceInfo) {
        var _this = this;
        this.cvService = _cvService;
        this.serviceInfo = _serviceInfo;
        this.componentService = this.cvService.getService(this.serviceInfo);
        this.componentService.subscribe(function (cv) { return _this.value = Number(cv); }, function (error) { return _this.errorMessage = error; });
    }
    NumberBoxComponent.prototype.getValue = function () {
        return this.result;
    };
    NumberBoxComponent.prototype.changeValue = function () {
        var _this = this;
        if (!(this.value == null)) {
            this.componentPostService = this.cvService.postService(this.serviceInfo, this.value);
            var dummy_1;
            this.componentPostService
                .subscribe(function (cv) { return dummy_1 = cv; }, function (error) { return _this.errorMessage = error; });
        }
    };
    return NumberBoxComponent;
}());
exports.NumberBoxComponent = NumberBoxComponent;
var Setup1Box = (function (_super) {
    __extends(Setup1Box, _super);
    function Setup1Box(__cvService, urlClass) {
        var _this = _super.call(this, __cvService, urlClass) || this;
        _this.__cvService = __cvService;
        _this.urlClass = urlClass;
        _this.componentName = "Water temperatuur";
        return _this;
    }
    return Setup1Box;
}(NumberBoxComponent));
Setup1Box = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [cv_service_1.CVService, url_library_1.Setup1])
], Setup1Box);
exports.Setup1Box = Setup1Box;
var Setup2Box = (function (_super) {
    __extends(Setup2Box, _super);
    function Setup2Box(__cvService, urlClass) {
        var _this = _super.call(this, __cvService, urlClass) || this;
        _this.__cvService = __cvService;
        _this.urlClass = urlClass;
        _this.componentName = "Buffer instelling";
        return _this;
    }
    return Setup2Box;
}(NumberBoxComponent));
Setup2Box = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [cv_service_1.CVService, url_library_1.Setup2])
], Setup2Box);
exports.Setup2Box = Setup2Box;
//# sourceMappingURL=NumberBoxComponent.js.map