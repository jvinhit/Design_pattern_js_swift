// Ghi nhớ:Theo sách GoF, mẫu thiết kế phương thức nhà máy Factory Method được định nghĩa “Định nghĩa một giao diện để tạo một đối tượng, nhưng cho phép các lớp con quyết định cách thức thể hiện nó. Phương thức nhà máy Factory cho phép một lớp trì hoãn việc hiện thực của nó qua các lớp con”
// Điểm mấu chốt ở đây là phần “để lớp con quyết định”. Cho tới bây giờ, lớp nhà máy Factory mà bạn vừa tạo, vẫn chưa cho phép các lớp con quyết định cách thể hiện, trừ việc cho kế thừa và ghi đè lại phương thức của lớp Connection cơ sở.

// Mẫu thiết kế phương thức nhà máy Factory Method của GoF đem đến cho bạn khả năng uyển chuyển hơn phương pháp truyền thống rất nhiều. Cách làm của GoF là: bạn định nghĩa cách phương thức nhà máy Factory làm việc, và cho phép các lớp con hiện thực implement một nhà máy factory thật sự.

// Chúng ta đã nói rằng, Hội đồng quản trị khu vực Western bất ngờ gọi điện và yêu cầu họ không thích lớp nhà máy FirstFactory, họ muốn có thể tạo ra các kết nối bảo mật đến máy chủ cơ sở dữ liệu, không chỉ là một kết nối thông thường. Điều này có nghĩa là họ phải viết lại lớp nhà máy FirstFactory mỗi khi bạn thay đổi nó, để họ có thể tạo ra một kết nối bảo mật.

// Đây là vấn đề của các lập trình viên. Mỗi khi bạn cập nhật lại lớp FirstFactory, các lập trình viên khác phải viết lại mã của họ để thích hợp với yêu cầu của họ. Họ đang gọi và yêu cầu rằng họ muốn kiểm soát được quá trình nhiều hơn.

// Tốt thôi, bạn nói. Đó chính là vấn đề mẫu thiết kế Factory áp dụng, giao quyền kiểm soát cho các lớp con. Để thấy cách mẫu này hoạt động, bạn thay đổi cách tạo đối tượng kết nối connection, sử dụng kỹ thuật của GoF, bạn sẽ làm cho khu vực Western của công ty MegaGigaCo hài lòng.

//  Gợi ý: Bạn vẫn còn băn khoăn về cách sử dụng của mẫu nhà máy Factory của GoF? Mẫu Factory được sử dụng khi bạn muốn chuyển giao toàn bộ quyền điều khiển các lớp con cho các lập trình viên khác.
function Currency(options) {
    this.Symbol = options.symbol || '$';
    this.Code = options.symbol || 'USD';
}
Currency.prototype.getSymbol = function() {
    return this.Symbol;
};
Currency.prototype.getCode = function() {
    return this.Code;
};
// MARK: EURO
function Euro(options) {
    Currency.call(this, options);
}
Euro.prototype = Object.create(Currency.prototype);
Euro.prototype.constructor = Euro;

// MARK: VND
function VND(options) {
    Currency.call(this, options);
}
VND.prototype = Object.create(Currency.prototype);
VND.prototype.constructor = VND;

// MARK: UnitedState
function UnitedState(options) {
    Currency.call(this, options);
}
UnitedState.prototype = Object.create(Currency.prototype);
UnitedState.prototype.constructor = UnitedState;

// MARK: Factory Pattern
function CurrencyFactory() {}
CurrencyFactory.prototype.currencyClass = UnitedState;
CurrencyFactory.prototype.createCurrency = function(options) {
    switch (options.currencyClass) {
        case 'Euro':
            return new Euro({ symbol: '€', code: 'EURO' });
        case 'VND':
            return new VND({ symbol: 'VND', code: 'VND' });
        case 'UnitedState':
            return new UnitedState({ symbol: '$', code: 'DOLA' });
    }
};
var currency_symbols = {
    USD: '$', // US Dollar
    EUR: '€', // Euro
    CRC: '₡', // Costa Rican Colón
    GBP: '£', // British Pound Sterling
    ILS: '₪', // Israeli New Sheqel
    INR: '₹', // Indian Rupee
    JPY: '¥', // Japanese Yen
    KRW: '₩', // South Korean Won
    NGN: '₦', // Nigerian Naira
    PHP: '₱', // Philippine Peso
    PLN: 'zł', // Polish Zloty
    PYG: '₲', // Paraguayan Guarani
    THB: '฿', // Thai Baht
    UAH: '₴', // Ukrainian Hryvnia
    VND: '₫' // Vietnamese Dong
};

let factory = new CurrencyFactory();
let vndCurrency = factory.createCurrency({ currencyClass: 'VND' });
let usdCurrency = factory.createCurrency({ currencyClass: 'UnitedState' });
console.log(vndCurrency);
console.log(usdCurrency);
