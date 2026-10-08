const danhSachXe = [
    '30A-12345',
    '29B-67890'
];

const danhSachTruSac = [
    'S01',
    'S02',
    'S03'
];

const trangThaiTru = [
    'AVAILABLE',
    'CHARGING',
    'AVAILABLE'
];

const hangDoiXe = [];

hangDoiXe.push(danhSachXe[0]);
hangDoiXe.push(danhSachXe[1]);

hangDoiXe.unshift('51A-99999');

const viTriHuy = hangDoiXe.indexOf('29B-67890');

if (viTriHuy !== -1) {
    hangDoiXe.splice(viTriHuy, 1);
}

let truTrong = -1;

for (let i = 0; i < trangThaiTru.length; i++) {
    if (trangThaiTru[i] === 'AVAILABLE') {
        truTrong = i;
        break;
    }
}

if (truTrong !== -1 && hangDoiXe.length > 0) {
    const xeDuocSac = hangDoiXe.shift();

    trangThaiTru[truTrong] = 'CHARGING';

    console.log('Xe được điều phối:', xeDuocSac);
    console.log('Trụ sạc:', danhSachTruSac[truTrong]);
} else if (truTrong === -1) {
    console.log('Không có trụ sạc trống!');
} else {
    console.log('Hàng đợi đang rỗng!');
}

console.log('\n===== DASHBOARD TRẠM SẠC =====');

console.log('\nHàng đợi xe:');

if (hangDoiXe.length === 0) {
    console.log('Hàng đợi rỗng');
} else {
    for (let i = 0; i < hangDoiXe.length; i++) {
        console.log(`STT ${i + 1}: ${hangDoiXe[i]}`);
    }
}

console.log('\nTrạng thái trụ sạc:');

for (let i = 0; i < danhSachTruSac.length; i++) {
    console.log(
        `${danhSachTruSac[i]} - ${trangThaiTru[i]}`
    );
}