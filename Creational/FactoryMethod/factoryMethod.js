var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Ship = /** @class */ (function () {
    function Ship() {
    }
    Ship.prototype.deliver = function () {
        return 'Transport with ship in thuyền';
    };
    return Ship;
}());
var Trunk = /** @class */ (function () {
    function Trunk() {
    }
    Trunk.prototype.deliver = function () {
        return 'Transport with container';
    };
    return Trunk;
}());
var Logistic = /** @class */ (function () {
    function Logistic() {
    }
    Logistic.prototype.planDelivery = function (type) {
        var transport = this.createTrans(type);
        return transport.deliver();
    };
    return Logistic;
}());
var SeaLogistic = /** @class */ (function (_super) {
    __extends(SeaLogistic, _super);
    function SeaLogistic() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SeaLogistic.prototype.createTrans = function (type) {
        if (type.toLowerCase() === 'ship') {
            return new Ship();
        }
    };
    return SeaLogistic;
}(Logistic));
var TrunkLogistic = /** @class */ (function (_super) {
    __extends(TrunkLogistic, _super);
    function TrunkLogistic() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TrunkLogistic.prototype.createTrans = function (type) {
        if (type.toLowerCase() === 'trunk') {
            return new Trunk();
        }
    };
    return TrunkLogistic;
}(Logistic));
var $shipL = new SeaLogistic();
console.log($shipL.planDelivery('ship'));
