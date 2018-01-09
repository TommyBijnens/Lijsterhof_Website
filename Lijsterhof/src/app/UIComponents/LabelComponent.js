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
var url_library_3 = require("../url-library");
var url_library_4 = require("../url-library");
var url_library_5 = require("../url-library");
var url_library_6 = require("../url-library");
var LabelComponent = (function () {
    function LabelComponent(_cvService, _serviceInfo) {
        var _this = this;
        this._cvService = _cvService;
        this._serviceInfo = _serviceInfo;
        this.result = "...";
        this.componentService = _cvService.getService(_serviceInfo);
        this.componentService
            .subscribe(function (cv) {
            if (typeof cv === "object")
                _this.result = "0";
            else
                _this.result = cv;
        }, function (error) { return _this.errorMessage = error; });
    }
    LabelComponent.prototype.getValue = function () { return this.result; };
    LabelComponent.prototype.unsubscribe = function () { this.subscribedService.unsubscribe; };
    return LabelComponent;
}());
LabelComponent = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [cv_service_1.CVService, url_library_1.URLLibrary])
], LabelComponent);
exports.LabelComponent = LabelComponent;
var Temp1Label = (function (_super) {
    __extends(Temp1Label, _super);
    function Temp1Label(__cvService, urlClass) {
        var _this = _super.call(this, __cvService, urlClass) || this;
        _this.__cvService = __cvService;
        _this.urlClass = urlClass;
        _this.componentName = "Temperatuur 1";
        return _this;
    }
    return Temp1Label;
}(LabelComponent));
Temp1Label = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [cv_service_1.CVService, url_library_2.Temp1])
], Temp1Label);
exports.Temp1Label = Temp1Label;
var Temp2Label = (function (_super) {
    __extends(Temp2Label, _super);
    function Temp2Label(__cvService, urlClass) {
        var _this = _super.call(this, __cvService, urlClass) || this;
        _this.__cvService = __cvService;
        _this.urlClass = urlClass;
        _this.componentName = "Temperatuur 2";
        return _this;
    }
    return Temp2Label;
}(LabelComponent));
Temp2Label = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [cv_service_1.CVService, url_library_2.Temp2])
], Temp2Label);
exports.Temp2Label = Temp2Label;
var Temp3Label = (function (_super) {
    __extends(Temp3Label, _super);
    function Temp3Label(__cvService, urlClass) {
        var _this = _super.call(this, __cvService, urlClass) || this;
        _this.__cvService = __cvService;
        _this.urlClass = urlClass;
        _this.componentName = "Temperatuur 3";
        return _this;
    }
    return Temp3Label;
}(LabelComponent));
Temp3Label = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [cv_service_1.CVService, url_library_2.Temp3])
], Temp3Label);
exports.Temp3Label = Temp3Label;
var TempBufferLabel = (function (_super) {
    __extends(TempBufferLabel, _super);
    function TempBufferLabel(__cvService, urlClass) {
        var _this = _super.call(this, __cvService, urlClass) || this;
        _this.__cvService = __cvService;
        _this.urlClass = urlClass;
        _this.componentName = "Temperatuur Buffer";
        return _this;
    }
    return TempBufferLabel;
}(LabelComponent));
TempBufferLabel = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [cv_service_1.CVService, url_library_2.TempBuffer])
], TempBufferLabel);
exports.TempBufferLabel = TempBufferLabel;
var TempBoilerBSLabel = (function (_super) {
    __extends(TempBoilerBSLabel, _super);
    function TempBoilerBSLabel(__cvService, urlClass) {
        var _this = _super.call(this, __cvService, urlClass) || this;
        _this.__cvService = __cvService;
        _this.urlClass = urlClass;
        _this.componentName = "Boiler Bruno & Sandy";
        return _this;
    }
    return TempBoilerBSLabel;
}(LabelComponent));
TempBoilerBSLabel = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [cv_service_1.CVService, url_library_2.TempBoilerBS])
], TempBoilerBSLabel);
exports.TempBoilerBSLabel = TempBoilerBSLabel;
var TempBoilerTLabel = (function (_super) {
    __extends(TempBoilerTLabel, _super);
    function TempBoilerTLabel(__cvService, urlClass) {
        var _this = _super.call(this, __cvService, urlClass) || this;
        _this.__cvService = __cvService;
        _this.urlClass = urlClass;
        _this.componentName = "Boiler Tommy";
        return _this;
    }
    return TempBoilerTLabel;
}(LabelComponent));
TempBoilerTLabel = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [cv_service_1.CVService, url_library_2.TempBoilerT])
], TempBoilerTLabel);
exports.TempBoilerTLabel = TempBoilerTLabel;
var Counter_BS_HLabel = (function (_super) {
    __extends(Counter_BS_HLabel, _super);
    function Counter_BS_HLabel(__cvService, urlClass) {
        var _this = _super.call(this, __cvService, urlClass) || this;
        _this.__cvService = __cvService;
        _this.urlClass = urlClass;
        _this.componentName = "Hout";
        return _this;
    }
    return Counter_BS_HLabel;
}(LabelComponent));
Counter_BS_HLabel = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [cv_service_1.CVService, url_library_3.Counter_BS_H])
], Counter_BS_HLabel);
exports.Counter_BS_HLabel = Counter_BS_HLabel;
var Counter_BS_MLabel = (function (_super) {
    __extends(Counter_BS_MLabel, _super);
    function Counter_BS_MLabel(__cvService, urlClass) {
        var _this = _super.call(this, __cvService, urlClass) || this;
        _this.__cvService = __cvService;
        _this.urlClass = urlClass;
        _this.componentName = "Mazout";
        return _this;
    }
    return Counter_BS_MLabel;
}(LabelComponent));
Counter_BS_MLabel = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [cv_service_1.CVService, url_library_3.Counter_BS_M])
], Counter_BS_MLabel);
exports.Counter_BS_MLabel = Counter_BS_MLabel;
var Counter_BS_TotLabel = (function (_super) {
    __extends(Counter_BS_TotLabel, _super);
    function Counter_BS_TotLabel(__cvService, urlClass) {
        var _this = _super.call(this, __cvService, urlClass) || this;
        _this.__cvService = __cvService;
        _this.urlClass = urlClass;
        _this.componentName = "Totaal";
        return _this;
    }
    return Counter_BS_TotLabel;
}(LabelComponent));
Counter_BS_TotLabel = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [cv_service_1.CVService, url_library_3.Counter_BS_Tot])
], Counter_BS_TotLabel);
exports.Counter_BS_TotLabel = Counter_BS_TotLabel;
var Counter_T_HLabel = (function (_super) {
    __extends(Counter_T_HLabel, _super);
    function Counter_T_HLabel(__cvService, urlClass) {
        var _this = _super.call(this, __cvService, urlClass) || this;
        _this.__cvService = __cvService;
        _this.urlClass = urlClass;
        _this.componentName = "Hout";
        return _this;
    }
    return Counter_T_HLabel;
}(LabelComponent));
Counter_T_HLabel = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [cv_service_1.CVService, url_library_4.Counter_T_H])
], Counter_T_HLabel);
exports.Counter_T_HLabel = Counter_T_HLabel;
var Counter_T_MLabel = (function (_super) {
    __extends(Counter_T_MLabel, _super);
    function Counter_T_MLabel(__cvService, urlClass) {
        var _this = _super.call(this, __cvService, urlClass) || this;
        _this.__cvService = __cvService;
        _this.urlClass = urlClass;
        _this.componentName = "Mazout";
        return _this;
    }
    return Counter_T_MLabel;
}(LabelComponent));
Counter_T_MLabel = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [cv_service_1.CVService, url_library_4.Counter_T_M])
], Counter_T_MLabel);
exports.Counter_T_MLabel = Counter_T_MLabel;
var Counter_T_TotLabel = (function (_super) {
    __extends(Counter_T_TotLabel, _super);
    function Counter_T_TotLabel(__cvService, urlClass) {
        var _this = _super.call(this, __cvService, urlClass) || this;
        _this.__cvService = __cvService;
        _this.urlClass = urlClass;
        _this.componentName = "Totaal";
        return _this;
    }
    return Counter_T_TotLabel;
}(LabelComponent));
Counter_T_TotLabel = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [cv_service_1.CVService, url_library_4.Counter_T_Tot])
], Counter_T_TotLabel);
exports.Counter_T_TotLabel = Counter_T_TotLabel;
var DayCounter_BS_HLabel = (function (_super) {
    __extends(DayCounter_BS_HLabel, _super);
    function DayCounter_BS_HLabel(__cvService, urlClass) {
        var _this = _super.call(this, __cvService, urlClass) || this;
        _this.__cvService = __cvService;
        _this.urlClass = urlClass;
        _this.componentName = "Hout (dagteller)";
        return _this;
    }
    return DayCounter_BS_HLabel;
}(LabelComponent));
DayCounter_BS_HLabel = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [cv_service_1.CVService, url_library_5.DayCounter_BS_H])
], DayCounter_BS_HLabel);
exports.DayCounter_BS_HLabel = DayCounter_BS_HLabel;
var DayCounter_BS_MLabel = (function (_super) {
    __extends(DayCounter_BS_MLabel, _super);
    function DayCounter_BS_MLabel(__cvService, urlClass) {
        var _this = _super.call(this, __cvService, urlClass) || this;
        _this.__cvService = __cvService;
        _this.urlClass = urlClass;
        _this.componentName = "Mazout (dagteller)";
        return _this;
    }
    return DayCounter_BS_MLabel;
}(LabelComponent));
DayCounter_BS_MLabel = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [cv_service_1.CVService, url_library_5.DayCounter_BS_M])
], DayCounter_BS_MLabel);
exports.DayCounter_BS_MLabel = DayCounter_BS_MLabel;
var DayCounter_BS_TotLabel = (function (_super) {
    __extends(DayCounter_BS_TotLabel, _super);
    function DayCounter_BS_TotLabel(__cvService, urlClass) {
        var _this = _super.call(this, __cvService, urlClass) || this;
        _this.__cvService = __cvService;
        _this.urlClass = urlClass;
        _this.componentName = "Totaal (dagteller)";
        return _this;
    }
    return DayCounter_BS_TotLabel;
}(LabelComponent));
DayCounter_BS_TotLabel = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [cv_service_1.CVService, url_library_5.DayCounter_BS_Tot])
], DayCounter_BS_TotLabel);
exports.DayCounter_BS_TotLabel = DayCounter_BS_TotLabel;
var DayCounter_T_HLabel = (function (_super) {
    __extends(DayCounter_T_HLabel, _super);
    function DayCounter_T_HLabel(__cvService, urlClass) {
        var _this = _super.call(this, __cvService, urlClass) || this;
        _this.__cvService = __cvService;
        _this.urlClass = urlClass;
        _this.componentName = "Hout (dagteller)";
        return _this;
    }
    return DayCounter_T_HLabel;
}(LabelComponent));
DayCounter_T_HLabel = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [cv_service_1.CVService, url_library_6.DayCounter_T_H])
], DayCounter_T_HLabel);
exports.DayCounter_T_HLabel = DayCounter_T_HLabel;
var DayCounter_T_MLabel = (function (_super) {
    __extends(DayCounter_T_MLabel, _super);
    function DayCounter_T_MLabel(__cvService, urlClass) {
        var _this = _super.call(this, __cvService, urlClass) || this;
        _this.__cvService = __cvService;
        _this.urlClass = urlClass;
        _this.componentName = "Mazout (dagteller)";
        return _this;
    }
    return DayCounter_T_MLabel;
}(LabelComponent));
DayCounter_T_MLabel = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [cv_service_1.CVService, url_library_6.DayCounter_T_M])
], DayCounter_T_MLabel);
exports.DayCounter_T_MLabel = DayCounter_T_MLabel;
var DayCounter_T_TotLabel = (function (_super) {
    __extends(DayCounter_T_TotLabel, _super);
    function DayCounter_T_TotLabel(__cvService, urlClass) {
        var _this = _super.call(this, __cvService, urlClass) || this;
        _this.__cvService = __cvService;
        _this.urlClass = urlClass;
        _this.componentName = "Totaal (dagteller)";
        return _this;
    }
    return DayCounter_T_TotLabel;
}(LabelComponent));
DayCounter_T_TotLabel = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [cv_service_1.CVService, url_library_6.DayCounter_T_Tot])
], DayCounter_T_TotLabel);
exports.DayCounter_T_TotLabel = DayCounter_T_TotLabel;
//# sourceMappingURL=LabelComponent.js.map