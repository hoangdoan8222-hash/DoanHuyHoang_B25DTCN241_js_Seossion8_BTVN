const hangDoi = ['30A-111', '29B-222', '51C-333'];
const giaMoiKwh = 4500;

console.log('===== TRẠNG THÁI BAN ĐẦU =====');
console.log(hangDoi);

console.log('\n===== THÊM XE MỚI =====');
console.log('Trước:', hangDoi);

hangDoi.push('43D-444');

console.log('Sau:', hangDoi);

console.log('\n===== KIỂM TRA XE ƯU TIÊN =====');

const xeUuTien = '14A-999';

if (hangDoi.includes(xeUuTien)) {
    console.log('Xe ưu tiên đã có trong hàng đợi.');
} else {
    console.log('Xe ưu tiên chưa có trong hàng đợi.');
}

console.log('\n===== CHÈN XE ƯU TIÊN =====');
console.log('Trước:', hangDoi);

hangDoi.splice(1, 0, xeUuTien);

console.log('Sau:', hangDoi);

console.log('\n===== TÌM VỊ TRÍ XE ƯU TIÊN =====');

const viTriXeUuTien = hangDoi.indexOf(xeUuTien);

console.log('Vị trí xe ưu tiên:', viTriXeUuTien);

console.log('\n===== XE VÀO SẠC =====');
console.log('Trước:', hangDoi);

const xeVaoSac = hangDoi.shift();

console.log('Xe vào sạc:', xeVaoSac);
console.log('Sau:', hangDoi);

console.log('\n===== TÍNH DOANH THU =====');

const dienNang = [30, 45, 25];
let tongKwh = 0;

for (let i = 0; i < dienNang.length; i++) {
    tongKwh += dienNang[i];
}

const tongDoanhThu = tongKwh * giaMoiKwh;

console.log('Mảng điện năng:', dienNang);
console.log('Tổng điện năng:', tongKwh, 'kWh');
console.log('Đơn giá:', giaMoiKwh, 'VNĐ/kWh');
console.log('Tổng doanh thu:', tongDoanhThu.toLocaleString('vi-VN'), 'VNĐ');

console.log('\n===== BÁO CÁO CUỐI CA =====');
console.log('Xe đã vào sạc:', xeVaoSac);
console.log('Hàng đợi còn lại:', hangDoi);
console.log('Tổng điện năng:', tongKwh, 'kWh');
console.log('Tổng doanh thu:', tongDoanhThu.toLocaleString('vi-VN'), 'VNĐ');