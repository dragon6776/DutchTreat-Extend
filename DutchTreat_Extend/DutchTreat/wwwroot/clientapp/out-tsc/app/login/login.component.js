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
var LoginComponent = /** @class */ (function () {
    function LoginComponent(dataService, router) {
        this.dataService = dataService;
        this.router = router;
        this.title = "Login";
        this.errorMessage = "";
        this.creds = {
            username: "",
            password: ""
        };
    }
    LoginComponent.prototype.ngOnInit = function () {
        if (!this.dataService.loginRequired) {
            this.router.navigate(['/']);
        }
    };
    LoginComponent.prototype.onLogin = function () {
        var _this = this;
        // call the login service
        this.dataService.login(this.creds)
            .subscribe(function (success) {
            if (_this.dataService.order.items.length == 0) {
                _this.router.navigate(["/"]);
                // reload page for updating the header cookie logged info
                //location.reload();
            }
            else {
                _this.router.navigate(["login"]);
            }
        }, function (err) { return _this.errorMessage = "Failed to login"; });
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'login',
            templateUrl: 'login.component.html',
            styles: []
        }),
        __metadata("design:paramtypes", [dataService_1.DataService, router_1.Router])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map