// Ý tương của thuật toán Strategy?
// Tách riêng những phần dễ thay đổi, và đóng gói chúng vào các đối tượng, ta có thể sử dụng các đối tượng này khi cần. =>
// 'has-a' mã nguồn có thể dễ dàng kết hợp các đối tượng thuật toàn khi cần update.
// Cuốn sách GoF đã nói rằng mẫu Strategy, mẫu chiến lược như sau: “Định nghĩa một tập hợp các thuật toán, đóng gói chúng thành từng loại một,
// và giúp chúng có thể hoán đổi cho nhau. Mẫu chiến lược giúp các thuật toán độc lập hơn khi được sử dụng.
// Mẫu chiến lược chỉ ra rằng, đôi khi, nó sẽ được áp dụng tốt cho mục đích hướng chức năng.
// Và nó đặc biệt quan trọng khi bạn muốn thực hiện công việc nâng cấp, bảo trì cho các đoạn mã dễ thay đổi của bạn một cách riêng biệt với toàn bộ mã của chương trình,
// hoặc khi bạn muốn thay đổi thuật toán sử dụng khi chương trình được thực thi.

// Với ví dụ dưới đây, đầu tiên bạn nhận yêu cầu tạo ra máy in, chỉ đơn thuần là in ấn text ra nguyên bản.
// Về sau này , phía khách hàng yêu cầu in đoạn text và đc inhoa
// Lại sau nữa đòi in thường
// Về sau nữa lại đòi translate ra thứ gì đó
//
