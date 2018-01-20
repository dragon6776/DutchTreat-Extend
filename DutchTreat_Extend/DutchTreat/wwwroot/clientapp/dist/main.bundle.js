webpackJsonp(["main"],{

/***/ "../../../../../ClientApp/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../ClientApp/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../ClientApp/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<nav class=\"navbar navbar-inverse navbar-fixed-top\">\r\n    <div class=\"container\">\r\n        <div class=\"navbar-header\">\r\n            <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse\">\r\n                <span class=\"sr-only\">Toggle navigation</span>\r\n                <span class=\"icon-bar\"></span>\r\n                <span class=\"icon-bar\"></span>\r\n                <span class=\"icon-bar\"></span>\r\n            </button>\r\n            <a routerLink=\"/\" class=\"navbar-brand\">{{ title }}</a>\r\n        </div>\r\n        <div class=\"navbar-collapse collapse\">\r\n            <ul class=\"nav navbar-nav\">\r\n                <li><a routerLink=\"product-list\">Products</a></li>\r\n                <li><a routerLink=\"shop\">Shop</a></li>\r\n                <li><a href=\"/\" target=\"_blank\">Guest</a></li>\r\n            </ul>\r\n\r\n            <app-loginpartial></app-loginpartial>\r\n        </div>\r\n    </div>\r\n</nav>\r\n<div class=\"container body-content\">\r\n    \r\n    <router-outlet></router-outlet>\r\n\r\n    <hr />\r\n    <footer>\r\n        <p>&copy; 2018 - DutchTreat</p>\r\n    </footer>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../ClientApp/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Administration';
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("../../../../../ClientApp/app/app.component.html"),
            styles: []
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "../../../../../ClientApp/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var http_1 = __webpack_require__("../../../common/esm5/http.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var forms_1 = __webpack_require__("../../../forms/esm5/forms.js");
var app_component_1 = __webpack_require__("../../../../../ClientApp/app/app.component.ts");
var dataService_1 = __webpack_require__("../../../../../ClientApp/app/shared/dataService.ts");
var cart_component_1 = __webpack_require__("../../../../../ClientApp/app/cart/cart.component.ts");
var shop_component_1 = __webpack_require__("../../../../../ClientApp/app/shop/shop.component.ts");
var productList_component_1 = __webpack_require__("../../../../../ClientApp/app/productList/productList.component.ts");
var checkout_component_1 = __webpack_require__("../../../../../ClientApp/app/checkout/checkout.component.ts");
var login_component_1 = __webpack_require__("../../../../../ClientApp/app/login/login.component.ts");
var sessionStorageService_1 = __webpack_require__("../../../../../ClientApp/app/shared/sessionStorageService.ts");
var loginpartial_component_1 = __webpack_require__("../../../../../ClientApp/app/loginpartial/loginpartial.component.ts");
var dashboard_component_1 = __webpack_require__("../../../../../ClientApp/app/dashboard/dashboard.component.ts");
var routes = [
    // { path: "", component: ShopComponent},
    { path: "", redirectTo: 'dashboard', pathMatch: 'full' },
    { path: "checkout", component: checkout_component_1.CheckoutComponent },
    { path: "login", component: login_component_1.LoginComponent },
    { path: "dashboard", component: dashboard_component_1.DashboardComponent },
    { path: "shop", component: shop_component_1.ShopComponent },
    { path: "product-list", component: productList_component_1.ProductListComponent },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                productList_component_1.ProductListComponent,
                cart_component_1.CartComponent,
                shop_component_1.ShopComponent,
                checkout_component_1.CheckoutComponent,
                login_component_1.LoginComponent,
                loginpartial_component_1.LoginpartialComponent,
                dashboard_component_1.DashboardComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpClientModule,
                forms_1.FormsModule,
                router_1.RouterModule.forRoot(routes, {
                    useHash: true,
                    enableTracing: false // for Debugging of the Routes
                })
            ],
            providers: [
                dataService_1.DataService,
                sessionStorageService_1.SessionStorageService
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "../../../../../ClientApp/app/cart/cart.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"well well-sm\">\r\n    <h3>Shopping Cart</h3>\r\n    <div *ngIf=\"!dataService.order.items.length\">No items</div>\r\n    <div *ngIf=\"dataService.order.items.length > 0\">\r\n        <div>#/Items: {{ dataService.order.items.length }}</div>\r\n        <div>Subtotal: {{ dataService.order.subtotal }}</div>\r\n        <table class=\"table table-condensed table-hover\">\r\n            <thead>\r\n                <tr>\r\n                    <td>Product</td>\r\n                    <td>#</td>\r\n                    <td>$</td>\r\n                    <td>Total</td>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let o of dataService.order.items\">\r\n                    <td>{{o.productCategory}}</td>\r\n                    <td>{{o.quantity}}</td>\r\n                    <td>{{o.unitPrice | currency: \"USD\":true}}</td>\r\n                    <td>{{o.unitPrice * o.quantity | currency: \"USD\":true}}</td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n\r\n    <!--<button (click)=\"onCheckout()\" class=\"btn btn-primary\" *ngIf=\"dataService.order.items.length>0\">Checkout</button>-->\r\n    <a routerLink=\"/checkout\" class=\"btn btn-primary\" *ngIf=\"dataService.order.items.length>0\">Checkout</a>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../ClientApp/app/cart/cart.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var dataService_1 = __webpack_require__("../../../../../ClientApp/app/shared/dataService.ts");
var CartComponent = /** @class */ (function () {
    function CartComponent(dataService, router) {
        this.dataService = dataService;
        this.router = router;
    }
    CartComponent.prototype.ngOnInit = function () {
    };
    // move these to checkout.component.ts
    CartComponent.prototype.onCheckout = function () {
        if (this.dataService.loginRequired) {
            // force login
            this.router.navigate(['login']);
        }
        else {
            // go to checkout
            this.router.navigate(['checkout']);
        }
    };
    CartComponent = __decorate([
        core_1.Component({
            selector: 'the-cart',
            template: __webpack_require__("../../../../../ClientApp/app/cart/cart.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [dataService_1.DataService, router_1.Router])
    ], CartComponent);
    return CartComponent;
}());
exports.CartComponent = CartComponent;


/***/ }),

/***/ "../../../../../ClientApp/app/checkout/checkout.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".checkout-thumb {\r\n  max-width: 100px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../ClientApp/app/checkout/checkout.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div *ngIf=\"errorMessage\" class=\"alert alert-warning\">{{ errorMessage }}</div>\r\n  <h3>Confirm Order</h3>\r\n  <table class=\"table table-bordered table-hover\">\r\n    <tr *ngFor=\"let o of dataService.order.items\">\r\n      <td><img src=\"/img/{{ o.productArtId }}.jpg\" alt=\"o.productTitle\" class=\"img-thumbnail checkout-thumb\" /></td>\r\n      <td>{{ o.productCategory }}({{ o.productSize }}) - {{ o.productArtist }}: {{ o.productTitle }}</td>\r\n      <td>{{ o.quantity }}</td>\r\n      <td>{{ o.unitPrice|currency:'USD':true }}</td>\r\n      <td>{{ (o.unitPrice * o.quantity)|currency:'USD':true }}</td>\r\n    </tr>\r\n  </table>\r\n  <div class=\"col-md-4 col-md-offset-8 text-right\">\r\n    <table class=\"table table-condensed\">\r\n      <tr>\r\n        <td class=\"text-right\">Subtotal</td>\r\n        <td class=\"text-right\">{{ dataService.subtotal|currency:'USD':true }}</td>\r\n      </tr>\r\n      <tr>\r\n        <td class=\"text-right\">Shipping</td>\r\n        <td class=\"text-right\">$ 0.00</td>\r\n      </tr>\r\n      <tr>\r\n        <td class=\"text-right\">Total:</td>\r\n        <td class=\"text-right\">{{ dataService.subtotal|currency:'USD':true }}</td>\r\n      </tr>\r\n    </table>\r\n    <button class=\"btn btn-success\" (click)=\"onCheckout()\">Complete Purchase</button>\r\n    <a routerLink=\"/\" class=\"btn btn-info\">Cancel</a>\r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ "../../../../../ClientApp/app/checkout/checkout.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var dataService_1 = __webpack_require__("../../../../../ClientApp/app/shared/dataService.ts");
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
            template: __webpack_require__("../../../../../ClientApp/app/checkout/checkout.component.html"),
            styles: [__webpack_require__("../../../../../ClientApp/app/checkout/checkout.component.css")]
        }),
        __metadata("design:paramtypes", [dataService_1.DataService, router_1.Router])
    ], CheckoutComponent);
    return CheckoutComponent;
}());
exports.CheckoutComponent = CheckoutComponent;


/***/ }),

/***/ "../../../../../ClientApp/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<br>\r\n<div class=\"row\">\r\n    <div class=\"col-md-4\">\r\n        <div class=\"well\">\r\n            <a routerLink=\"/shop\">Shop</a>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-4\">\r\n        <div class=\"well\">\r\n            <a routerLink=\"/login\">Login</a>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-4\">\r\n        <div class=\"well\">\r\n            <a routerLink=\"/product-list\">Products</a>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../ClientApp/app/dashboard/dashboard.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        core_1.Component({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../ClientApp/app/dashboard/dashboard.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;


/***/ }),

/***/ "../../../../../ClientApp/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>{{ title }}</h2>\r\n<div class=\"row\">\r\n    <div class=\"col-md-4 col-sm-4 col-md-offset-4 col-sm-offset-4\">\r\n        <div *ngIf=\"errorMessage\" class=\"alert alert-warning\">{{errorMessage}}</div>\r\n        <form (submit)=\"onLogin()\" #theForm=\"ngForm\" novalidate>\r\n            <!--<div class=\"form-group\">\r\n              <label for=\"username\">Username</label>\r\n              <input type=\"text\" class=\"form-control\" name=\"username\" [(ngModel)]=\"creds.username\" #username=\"ngModel\" required />\r\n              <div class=\"text-danger\" *ngIf=\"username.touched && username.invalid && username.errors.required\">User name is required</div>\r\n            </div>-->\r\n            <div class=\"form-group\">\r\n                <label for=\"username\">Email</label>\r\n                <input type=\"email\" class=\"form-control\" name=\"email\" [(ngModel)]=\"creds.email\" #email=\"ngModel\" required />\r\n                <div class=\"text-danger\" *ngIf=\"email.touched && email.invalid && email.errors.required\">Email is required</div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label for=\"password\">Password</label>\r\n                <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"creds.password\" #password=\"ngModel\" required />\r\n                <div class=\"text-danger\" *ngIf=\"password.touched && password.invalid && password.errors.required\">Password is required</div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <input type=\"submit\" class=\"btn btn-success\" value=\"Login\" [disabled]=\"theForm.invalid\" />\r\n                <a routerLink=\"/\" class=\"btn btn-default\">Cancel</a>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../ClientApp/app/login/login.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var dataService_1 = __webpack_require__("../../../../../ClientApp/app/shared/dataService.ts");
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
            _this.router.navigate(["/"]);
            // if (this.dataService.order.items.length == 0) {
            //     // reload page for updating the header cookie logged info
            // } else {
            //     this.router.navigate(["login"]);
            // }
        }, function (err) { return _this.errorMessage = "Failed to login"; });
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'login',
            template: __webpack_require__("../../../../../ClientApp/app/login/login.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [dataService_1.DataService, router_1.Router])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;


/***/ }),

/***/ "../../../../../ClientApp/app/loginpartial/loginpartial.component.html":
/***/ (function(module, exports) {

module.exports = "<ul class=\"nav navbar-nav navbar-right\" *ngIf=\"dataService.loginRequired\">\r\n    <li><a href=\"#\">Register</a></li>\r\n    <li><a routerLink=\"login\">Log in</a></li>\r\n</ul>\r\n\r\n<ul class=\"nav navbar-nav navbar-right\" *ngIf=\"!dataService.loginRequired\">\r\n    <li>\r\n        <a title=\"Manage\" href=\"/Manage/Index\">Hello admin@gmail.com!</a>\r\n    </li>\r\n    <li>\r\n        <button (click)=\"logout()\" class=\"btn btn-link navbar-btn navbar-link\">Log out</button>\r\n    </li>\r\n</ul>"

/***/ }),

/***/ "../../../../../ClientApp/app/loginpartial/loginpartial.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var dataService_1 = __webpack_require__("../../../../../ClientApp/app/shared/dataService.ts");
var LoginpartialComponent = /** @class */ (function () {
    function LoginpartialComponent(dataService) {
        this.dataService = dataService;
    }
    LoginpartialComponent.prototype.ngOnInit = function () {
    };
    LoginpartialComponent.prototype.logout = function () {
        this.dataService.logout();
    };
    LoginpartialComponent = __decorate([
        core_1.Component({
            selector: 'app-loginpartial',
            template: __webpack_require__("../../../../../ClientApp/app/loginpartial/loginpartial.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [dataService_1.DataService])
    ], LoginpartialComponent);
    return LoginpartialComponent;
}());
exports.LoginpartialComponent = LoginpartialComponent;


/***/ }),

/***/ "../../../../../ClientApp/app/productList/productList.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-md-4 col-sm-4 product-info\" *ngFor=\"let p of products\">\r\n        <h3>{{ p.category }} - {{ p.size }}</h3>\r\n        <img class=\"img-responsive\" src=\"/img/{{p.artId}}.jpg\" [alt]=\"p.title\" />\r\n        <div>Price: {{ p.price | currency: USD }}</div>\r\n        <div>Artist: {{ p.artist }}</div>\r\n        <div>Title: {{ p.title }}</div>\r\n        <button class=\"btn btn-success\" (click)=\"addProduct(p)\">Buy</button>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../ClientApp/app/productList/productList.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var dataService_1 = __webpack_require__("../../../../../ClientApp/app/shared/dataService.ts");
var ProductListComponent = /** @class */ (function () {
    function ProductListComponent(dataService) {
        this.dataService = dataService;
        this.products = [];
    }
    ProductListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.loadProducts().subscribe(function (s) {
            if (s) {
                _this.products = _this.dataService.products;
            }
        });
    };
    ProductListComponent.prototype.addProduct = function (product) {
        this.dataService.AddToOrder(product);
    };
    ProductListComponent = __decorate([
        core_1.Component({
            selector: "product-list",
            template: __webpack_require__("../../../../../ClientApp/app/productList/productList.component.html"),
            styleUrls: []
        }),
        __metadata("design:paramtypes", [dataService_1.DataService])
    ], ProductListComponent);
    return ProductListComponent;
}());
exports.ProductListComponent = ProductListComponent;


/***/ }),

/***/ "../../../../../ClientApp/app/shared/dataService.ts":
/***/ (function(module, exports, __webpack_require__) {

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
var http_1 = __webpack_require__("../../../common/esm5/http.js");
var core_1 = __webpack_require__("../../../core/esm5/core.js");
__webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var order_1 = __webpack_require__("../../../../../ClientApp/app/shared/order.ts");
var sessionStorageService_1 = __webpack_require__("../../../../../ClientApp/app/shared/sessionStorageService.ts");
var DataService = /** @class */ (function () {
    function DataService(http, storageService) {
        this.http = http;
        this.storageService = storageService;
        this.userName = "";
        this.email = "";
        this.token = "";
        this.order = new order_1.Order();
        this.products = [];
        // update login info from storage
        var strg = this.storageService.getStorage();
        if (strg.token !== '') {
            this.token = strg.token;
            this.tokenExpiration = strg.tokenExpiration;
            this.userName = strg.userName;
            this.email = strg.email;
        }
        // check cookie auth logged
        //if (this.cookieAuthLogged != this.jwtAuthLogged) {
        //    if (this.cookieAuthLogged) {
        //        this.setLogoutCookieAuth();
        //    } else {
        //        this.setLogoutJwtAuth();
        //    }
        //}
        if (strg.orderItems)
            this.order.items = strg.orderItems;
    }
    DataService.prototype.logout = function () {
        this.userName = '';
        this.email = '';
        this.token = '';
        this.tokenExpiration = null;
        this.storageService.clearStorageLogin();
    };
    //setLogoutCookieAuth() {
    //    // set logout cookie on server, then updating logout status storage
    //    $('#logoutForm').submit();
    //}
    //setLogoutJwtAuth() {
    //    this.token = '';
    //    this.tokenExpiration = null;
    //    this.userName = '';
    //    this.email = '';
    //    // clear storage
    //    this.storageService.clearStorageLogin();
    //}
    //logoff() {
    //    this.setLogoutCookieAuth();
    //    // cookie logoff
    //    this.setLogoutCookieAuth();
    //    // set to storage
    //    this.storageService.clearStorageLogin();
    //}
    DataService.prototype.setJwtLoginFromTokenInfo = function (tokenInfo) {
        this.token = tokenInfo.token;
        this.tokenExpiration = tokenInfo.tokenExpiration;
        this.userName = tokenInfo.userName;
        this.email = tokenInfo.email;
        // set to storage
        this.storageService.setStorageLogin(this.userName, this.token, this.tokenExpiration);
    };
    Object.defineProperty(DataService.prototype, "loginRequired", {
        get: function () {
            return this.token.length == 0 || this.tokenExpiration > new Date();
        },
        enumerable: true,
        configurable: true
    });
    //public get cookieAuthLogged(): boolean {
    //    return $('#logoutForm').length > 0;
    //}
    //public get jwtAuthLogged(): boolean {
    //    return !this.loginRequired;
    //}
    DataService.prototype.login = function (creds) {
        var _this = this;
        return this.http.post('/account/createtoken', creds)
            .map(function (response) {
            //let tokenInfo = response.json();
            var tokenInfo = response;
            _this.setJwtLoginFromTokenInfo(tokenInfo);
            return true;
        });
    };
    DataService.prototype.checkout = function () {
        var _this = this;
        if (!this.order.orderNumber) {
            var d = this.order.orderDate;
            this.order.orderNumber = d.getFullYear().toString() + d.getTime().toString();
        }
        return this.http.post("/api/orders", this.order, {
            headers: new http_1.HttpHeaders({ "Authorization": "Bearer " + this.token }),
        }).map(function (res) {
            _this.order = new order_1.Order();
            return true;
        });
    };
    DataService.prototype.loadProducts = function () {
        var _this = this;
        return this.http.get('/api/products')
            .map(function (data) {
            _this.products = data;
            return true;
        });
    };
    DataService.prototype.AddToOrder = function (product) {
        var item = this.order.items.find(function (i) { return i.productId == product.id; });
        if (item) {
            item.quantity++;
        }
        else {
            item = new order_1.OrderItem();
            item.productId = product.id;
            item.productArtId = product.artId;
            item.productArtist = product.artist;
            item.productCategory = product.category;
            item.productTitle = product.title;
            item.productSize = product.size;
            item.unitPrice = product.price;
            item.quantity = 1;
            this.order.items.push(item);
        }
        // update to storage
        this.storageService.setOrderItemsStorage(this.order.items);
    };
    DataService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient, sessionStorageService_1.SessionStorageService])
    ], DataService);
    return DataService;
}());
exports.DataService = DataService;


/***/ }),

/***/ "../../../../../ClientApp/app/shared/order.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//import * as _ from "lodash";
// package.json: "lodash":"^2.17.4"
Object.defineProperty(exports, "__esModule", { value: true });
var Order = /** @class */ (function () {
    function Order() {
        this.orderDate = new Date();
        this.items = new Array();
    }
    Object.defineProperty(Order.prototype, "subtotal", {
        get: function () {
            if (!this.items.length)
                return 0;
            var r = this.items
                .map(function (x) { return x.quantity * x.unitPrice; })
                .reduce(function (sum, x) { return sum + x; });
            return r;
        },
        enumerable: true,
        configurable: true
    });
    return Order;
}());
exports.Order = Order;
var OrderItem = /** @class */ (function () {
    function OrderItem() {
    }
    return OrderItem;
}());
exports.OrderItem = OrderItem;


/***/ }),

/***/ "../../../../../ClientApp/app/shared/sessionStorage.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var SessionStorage = /** @class */ (function () {
    function SessionStorage() {
        this.userName = "";
        this.email = "";
        this.token = "";
        this.orderItems = new Array();
    }
    return SessionStorage;
}());
exports.SessionStorage = SessionStorage;


/***/ }),

/***/ "../../../../../ClientApp/app/shared/sessionStorageService.ts":
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var sessionStorage_1 = __webpack_require__("../../../../../ClientApp/app/shared/sessionStorage.ts");
var SessionStorageService = /** @class */ (function () {
    function SessionStorageService() {
    }
    SessionStorageService.prototype.setStorage = function (data) {
        var jsText = JSON.stringify(data);
        sessionStorage.setItem('dataStorage', jsText);
    };
    SessionStorageService.prototype.setOrderItemsStorage = function (orderItems) {
        var storage = this.getStorage();
        storage.orderItems = orderItems;
        this.setStorage(storage);
    };
    SessionStorageService.prototype.getStorage = function () {
        if (sessionStorage.getItem('dataStorage')) {
            return JSON.parse(sessionStorage.getItem('dataStorage'));
        }
        return new sessionStorage_1.SessionStorage();
    };
    SessionStorageService.prototype.setStorageLogin = function (userName, token, tokenExpiration) {
        var strg = this.getStorage();
        strg.userName = userName;
        strg.token = token;
        strg.tokenExpiration = tokenExpiration;
    };
    SessionStorageService.prototype.clearStorageLogin = function () {
        this.setStorageLogin('', '', null);
    };
    SessionStorageService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], SessionStorageService);
    return SessionStorageService;
}());
exports.SessionStorageService = SessionStorageService;


/***/ }),

/***/ "../../../../../ClientApp/app/shop/shop.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-md-9 col-sm-9\">\r\n        <h3>{{ title }}</h3>\r\n        <product-list></product-list>\r\n    </div>\r\n    <div class=\"col-md-3 col-sm-3\">\r\n        <the-cart></the-cart>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../ClientApp/app/shop/shop.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var ShopComponent = /** @class */ (function () {
    function ShopComponent() {
    }
    ShopComponent.prototype.ngOnInit = function () {
    };
    ShopComponent = __decorate([
        core_1.Component({
            selector: 'the-shop',
            template: __webpack_require__("../../../../../ClientApp/app/shop/shop.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], ShopComponent);
    return ShopComponent;
}());
exports.ShopComponent = ShopComponent;


/***/ }),

/***/ "../../../../../ClientApp/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "../../../../../ClientApp/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("../../../../../ClientApp/app/app.module.ts");
var environment_1 = __webpack_require__("../../../../../ClientApp/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../ClientApp/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map