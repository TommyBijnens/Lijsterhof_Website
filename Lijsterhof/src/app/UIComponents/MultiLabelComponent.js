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
var MultiLabelComponent = (function () {
    function MultiLabelComponent(_cvService, _serviceInfo1, _serviceInfo2) {
        var _this = this;
        this._cvService = _cvService;
        this._serviceInfo1 = _serviceInfo1;
        this._serviceInfo2 = _serviceInfo2;
        this.result = "...";
        this.option1 = "Uitgeschakeld";
        this.option2 = "Standby";
        this.option3 = "In werking";
        this.cvService = _cvService;
        this.serviceInfo1 = _serviceInfo1;
        this.serviceInfo2 = _serviceInfo2;
        this.componentService1 = this.cvService.getService(this.serviceInfo1);
        this.componentService2 = this.cvService.getService(this.serviceInfo2);
        Rx_1.Observable.forkJoin(this.componentService1, this.componentService2)
            .subscribe(function (cv) {
            _this.result = _this.option1;
            if (cv[0] == "1")
                _this.result = _this.option2;
            if (cv[1] == "1")
                if (cv[0] == "1")
                    _this.result = _this.option3;
        }, function (error) { return _this.errorMessage = error; });
    }
    MultiLabelComponent.prototype.getValue = function () {
        return this.result;
    };
    return MultiLabelComponent;
}());
exports.MultiLabelComponent = MultiLabelComponent;
var WoodRegime = (function (_super) {
    __extends(WoodRegime, _super);
    function WoodRegime(__cvService, urlClass1, urlClass2) {
        var _this = _super.call(this, __cvService, urlClass1, urlClass2) || this;
        _this.__cvService = __cvService;
        _this.urlClass1 = urlClass1;
        _this.urlClass2 = urlClass2;
        _this.componentName = "Houtketel";
        return _this;
    }
    return WoodRegime;
}(MultiLabelComponent));
WoodRegime = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [cv_service_1.CVService, url_library_1.WoodSelected, url_library_1.WoodHeating])
], WoodRegime);
exports.WoodRegime = WoodRegime;
var OilRegime = (function (_super) {
    __extends(OilRegime, _super);
    function OilRegime(__cvService, urlClass1, urlClass2) {
        var _this = _super.call(this, __cvService, urlClass1, urlClass2) || this;
        _this.__cvService = __cvService;
        _this.urlClass1 = urlClass1;
        _this.urlClass2 = urlClass2;
        _this.componentName = "Mazoutketel";
        return _this;
    }
    return OilRegime;
}(MultiLabelComponent));
OilRegime = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [cv_service_1.CVService, url_library_1.OilSelected, url_library_1.OilHeating])
], OilRegime);
exports.OilRegime = OilRegime;
//# sourceMappingURL=MultiLabelComponent.js.map