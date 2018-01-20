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
//# sourceMappingURL=order.js.map