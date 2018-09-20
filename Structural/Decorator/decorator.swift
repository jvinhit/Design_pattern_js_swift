// Implementation

// Tôi phải nhắc lại một lần nữa: càng nhiều càng tốt, hãy viết mã nguồn của bạn đóng cho việc sửa đổi, nhưng mở cho việc mở rộng. Trong chương II, bạn đã biết cách làm việc với mẫu chiến
// lược Strategy. Đó là, bạn đóng gói mã nguồn vào các thuật toán riêng biệt để sử dụng dễ dàng, hơn là việc xử lý chúng thông qua các lớp con.

// Mẫu trang trí Decorator có một cách tiếp cận khác. Thay vì sử dụng một thuật toán bên ngoài, mẫu thiết kế này sử dụng một phương pháp “bao bọc” mã nguồn của bạn để mở rộng chúng.

// Ghi nhớ: Định nghĩa chính thức của mẫu trang trí Decorator trong sách của GoF có viết: “Gắn kết thêm một số tính năng cho đối tượng một cách linh động. Mẫu trang trí Decorator cung cấp
// một phương pháp linh hoạt hơn là sử dụng lớp con để mở rộng chức năng cho đối tượng”

// Mẫu thiết kế này được gọi là “Người trang trí” Decorator nhưng dường như đó là tên gọi rườm rà. Một cái tên tốt hơn cho mẫu này có thể là “Người tăng thêm” Augmentor hay “Người mở rộng”
// Extender bởi vì nó cho phép bạn: tăng thêm hay mở rộng một lớp một cách linh động khi chương trình được thực thi. Tuy nhiên, như bạn thấy trong chương này, thuật ngữ “Người trang trí” // Decorator còn giúp bạn hiểu rõ hơn khái niệm “đóng cho việc chỉnh sửa, mở cho việc mở rộng”. Khi bạn làm hành động bao bọc mã nguồn để mở rộng thêm chức năng, bạn không cần thiết chỉnh 
// sửa lại mã nguồn cũ, bạn chủ yếu tập trung vào việc trang trí nó.
/*
Bây giờ khi bạn gọi phương thức description, mọi việc sẽ xảy ra như sau:

–      Đối tượng computer, sẽ thực hiện phương thức description để tạo ra kết quả “You’re getting a computer”

–      Đối tượng disk, sẽ thực hiện tiếp phương thức trên để thêm vào “and a disk”

–      Đối tượng monitor, tiếp tục thực hiện phương thức description để thêm vào “and a monitor”

–      Kết quả là bạn nhận được “You’re getting a computer and a disk and a monitor”
*/

protocol Coffee {
    func getCost() -> Double
    func getIngredients() -> String
}

class SimpleCoffee: Coffee {
    func getCost() -> Double {
        return 1.0
    }

    func getIngredients() -> String {
        return "Coffee"
    }
}

class CoffeeDecorator: Coffee {
    private let decoratedCoffee: Coffee
    fileprivate let ingredientSeparator: String = ", "

    required init(decoratedCoffee: Coffee) {
        self.decoratedCoffee = decoratedCoffee
    }

    func getCost() -> Double {
        return decoratedCoffee.getCost()
    }

    func getIngredients() -> String {
        return decoratedCoffee.getIngredients()
    }
}

final class Milk: CoffeeDecorator {
    required init(decoratedCoffee: Coffee) {
        super.init(decoratedCoffee: decoratedCoffee)
    }

    override func getCost() -> Double {
        return super.getCost() + 0.5
    }

    override func getIngredients() -> String {
        return super.getIngredients() + ingredientSeparator + "Milk"
    }
}

final class WhipCoffee: CoffeeDecorator {
    required init(decoratedCoffee: Coffee) {
        super.init(decoratedCoffee: decoratedCoffee)
    }

    override func getCost() -> Double {
        return super.getCost() + 0.7
    }

    override func getIngredients() -> String {
        return super.getIngredients() + ingredientSeparator + "Whip"
    }
}

// Usage:

var someCoffee: Coffee = SimpleCoffee()
print("Cost : \(someCoffee.getCost()); Ingredients: \(someCoffee.getIngredients())")
someCoffee = Milk(decoratedCoffee: someCoffee)
print("Cost : \(someCoffee.getCost()); Ingredients: \(someCoffee.getIngredients())")
someCoffee = WhipCoffee(decoratedCoffee: someCoffee)
print("Cost : \(someCoffee.getCost()); Ingredients: \(someCoffee.getIngredients())")
