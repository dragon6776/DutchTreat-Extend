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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var dataService_1 = require("../shared/dataService");
var CheckoutComponent = /** @class */ (function () {
    function CheckoutComponent(dataService, router) {
        this.dataService = dataService;
        this.router = router;
        this.errorMessage = "";
    }
    CheckoutComponent.prototype.ngOnInit = function () {
        if (this.dataService.loginRequired) {
            // force login
            this.router.navigate(['login']);
        }
        else {
            // go to checkout
            this.router.navigate(['checkout']);
        }
    };
    CheckoutComponent.prototype.onCheckout = function () {
        var _this = this;
        this.dataService.checkout()
            .subscribe(function (s) {
            if (s) {
                _this.router.navigate(["/"]);
            }
        }, function (err) { return _this.errorMessage = "Failed to checkout"; });
    };
    CheckoutComponent = __decorate([
        core_1.Component({
            selector: "checkout",
            templateUrl: "checkout.component.html",
            styleUrls: ['checkout.component.css']
        }),
        __metadata("design:paramtypes", [dataService_1.DataService, router_1.Router])
    ], CheckoutComponent);
    return CheckoutComponent;
}());
exports.CheckoutComponent = CheckoutComponent;
//# sourceMappingURL=checkout.component.js.map