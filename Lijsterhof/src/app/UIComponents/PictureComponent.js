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
var url_library_1 = require(".././url-library");
require("rxjs/add/observable/interval");
require("rxjs/add/observable/interval");
require("rxjs/observable/IntervalObservable");
require("rxjs/add/observable/of");
var core_1 = require("@angular/core");
var url_library_2 = require(".././url-library");
var PictureComponent = (function () {
    function PictureComponent(_cvService, _serviceInfo) {
        var _this = this;
        this._cvService = _cvService;
        this._serviceInfo = _serviceInfo;
        this.Text = "...";
        this.color = "black";
        this.picture = "stop.gif";
        this.Text = "...";
        this.color = "black";
        this.cvService = _cvService;
        this.serviceInfo = _serviceInfo;
        this.componentService = this.cvService.getService(this.serviceInfo);
        this.componentService.subscribe(function (cv) {
            _this.Text = "Uitgeschakeld";
            _this.color = "blue";
            if (cv == "1") {
                _this.Text = "In werking";
                _this.color = "red";
                _this.picture = "rotation.gif";
            }
        }, function (error) { return _this.errorMessage = error; });
    }
    PictureComponent.prototype.getPicture = function () {
        return this.picture;
    };
    PictureComponent.prototype.getText = function () {
        return this.Text;
    };
    PictureComponent.prototype.getColor = function () {
        return this.color;
    };
    return PictureComponent;
}());
PictureComponent = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [cv_service_1.CVService, url_library_1.URLLibrary])
], PictureComponent);
exports.PictureComponent = PictureComponent;
var Pump1Picture = (function (_super) {
    __extends(Pump1Picture, _super);
    function Pump1Picture(__cvService, urlClass) {
        var _this = _super.call(this, __cvService, urlClass) || this;
        _this.__cvService = __cvService;
        _this.urlClass = urlClass;
        _this.componentName = "Bruno & Sandy - Pomp 1 - Warm water";
        return _this;
    }
    return Pump1Picture;
}(PictureComponent));
Pump1Picture = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [cv_service_1.CVService, url_library_2.Pump1])
], Pump1Picture);
exports.Pump1Picture = Pump1Picture;
var Pump2Picture = (function (_super) {
    __extends(Pump2Picture, _super);
    function Pump2Picture(__cvService, urlClass) {
        var _this = _super.call(this, __cvService, urlClass) || this;
        _this.__cvService = __cvService;
        _this.urlClass = urlClass;
        _this.componentName = "Bruno & Sandy - Pomp 2 - Verwarming";
        return _this;
    }
    return Pump2Picture;
}(PictureComponent));
Pump2Picture = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [cv_service_1.CVService, url_library_2.Pump2])
], Pump2Picture);
exports.Pump2Picture = Pump2Picture;
var Pump3Picture = (function (_super) {
    __extends(Pump3Picture, _super);
    function Pump3Picture(__cvService, urlClass) {
        var _this = _super.call(this, __cvService, urlClass) || this;
        _this.__cvService = __cvService;
        _this.urlClass = urlClass;
        _this.componentName = "Tommy - Pomp 1 - Warm water";
        return _this;
    }
    return Pump3Picture;
}(PictureComponent));
Pump3Picture = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [cv_service_1.CVService, url_library_2.Pump3])
], Pump3Picture);
exports.Pump3Picture = Pump3Picture;
var Pump4Picture = (function (_super) {
    __extends(Pump4Picture, _super);
    function Pump4Picture(__cvService, urlClass) {
        var _this = _super.call(this, __cvService, urlClass) || this;
        _this.__cvService = __cvService;
        _this.urlClass = urlClass;
        _this.componentName = "Tommy - Pomp 2 - Verwarming";
        return _this;
    }
    return Pump4Picture;
}(PictureComponent));
Pump4Picture = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [cv_service_1.CVService, url_library_2.Pump4])
], Pump4Picture);
exports.Pump4Picture = Pump4Picture;
var PumpMainPicture = (function (_super) {
    __extends(PumpMainPicture, _super);
    function PumpMainPicture(__cvService, urlClass) {
        var _this = _super.call(this, __cvService, urlClass) || this;
        _this.__cvService = __cvService;
        _this.urlClass = urlClass;
        _this.componentName = "Hoofdpomp";
        return _this;
    }
    return PumpMainPicture;
}(PictureComponent));
PumpMainPicture = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [cv_service_1.CVService, url_library_2.PumpMain])
], PumpMainPicture);
exports.PumpMainPicture = PumpMainPicture;
//# sourceMappingURL=PictureComponent.js.map