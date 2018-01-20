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
var http_1 = require("@angular/common/http");
var core_1 = require("@angular/core");
require("rxjs/add/operator/map");
var order_1 = require("./order");
var sessionStorageService_1 = require("./sessionStorageService");
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
            headers: new http_1.HttpHeaders({ "Authorization": "Bearer " + this.token })
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
//# sourceMappingURL=dataService.js.map