function Currency(options) {
    this.Symbol = options.symbol || "$";
    this.Code = options.symbol || "USD";;
}
Currency.prototype.getSymbol = function() {
    return this.Symbol;
}
Currency.prototype.getCode = function(){
    return this.Code;
}
// MARK: EURO
function Euro(options){
    Currency.call(this, options);
}
Euro.prototype = Object.create(Currency.prototype);
Euro.prototype.constructor = Euro;

// MARK: VND
function VND(options){
    Currency.call(this,options);
}
VND.prototype = Object.create(Currency.prototype);
VND.prototype.constructor = VND;

// MARK: UnitedState
function UnitedState(options){
    Currency.call(this, options);
}
UnitedState.prototype = Object.create(Currency.prototype);
UnitedState.prototype.constructor = UnitedState;


// MARK: Factory Pattern
function CurrencyFactory(){

}
CurrencyFactory.prototype.currencyClass = UnitedState;
CurrencyFactory.prototype.createCurrency = function(options){
    switch (options.currencyClass) {
        case 'Euro':
            return new Euro({ symbol: '€', code: 'EURO'});
        case 'VND':
            return new VND({ symbol: 'VND', code: 'VND'});
        case 'UnitedState':
            return new UnitedState({ symbol: '$', code: 'DOLA'});
    
    }
}
var currency_symbols = {
    'USD': '$', // US Dollar
    'EUR': '€', // Euro
    'CRC': '₡', // Costa Rican Colón
    'GBP': '£', // British Pound Sterling
    'ILS': '₪', // Israeli New Sheqel
    'INR': '₹', // Indian Rupee
    'JPY': '¥', // Japanese Yen
    'KRW': '₩', // South Korean Won
    'NGN': '₦', // Nigerian Naira
    'PHP': '₱', // Philippine Peso
    'PLN': 'zł', // Polish Zloty
    'PYG': '₲', // Paraguayan Guarani
    'THB': '฿', // Thai Baht
    'UAH': '₴', // Ukrainian Hryvnia
    'VND': '₫', // Vietnamese Dong
};

let factory = new CurrencyFactory()
let vndCurrency = factory.createCurrency({ currencyClass: 'VND'});
let usdCurrency = factory.createCurrency({ currencyClass: 'UnitedState'});
console.log(vndCurrency)
console.log(usdCurrency)
