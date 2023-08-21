//BT1: Quản Lý Tuyển Sinh
document.getElementById('tinh').onclick = function () {
    //B1: Input
    var diemChuan = +document.getElementById('diemChuan').value;
    var diemToan = +document.getElementById('diemToan').value;
    var diemLy = +document.getElementById('diemLy').value;
    var diemHoa = +document.getElementById('diemHoa').value;
    var khuVuc = document.getElementById('khuVuc').value;
    var doiTuong = +document.getElementById('doiTuong').value;
    console.log('doiTuong: ', doiTuong);
    //B2: Xử lý
    switch (doiTuong) {
        case 1: {
            doiTuong = 2.5;
            break;
        }
        case 2: {
            doiTuong = 1.5;
            break;
        }
        case 3: {
            doiTuong = 1;
            break;
        }
        default: {
            doiTuong = 0;
            break;
        }
    }
    switch (khuVuc) {
        case "A": {
            khuVuc = 2;
            break;
        }
        case "B": {
            khuVuc = 1;
            break;
        }
        case "C": {
            khuVuc = 0.5;
            break;
        }
        default: {
            khuVuc = 0;
            break;
        }
    }
    var total = diemToan + diemLy + diemHoa + doiTuong + khuVuc;
    var content = '';
    if ((diemToan == 0) || (diemLy == 0) || (diemHoa == 0)) {
        content = "Bạn đã rớt. Do có điểm bằng 0."
    } else {
        if (total < diemChuan) {
            content += `
            <span>Bạn đã rớt. Tổng điểm: ${total}</span> 
            `
        } else {
            content += `
            <span>Bạn đã đậu. Tổng điểm: ${total}</span> 
            `
        }
    }
    document.getElementById('resultBT1').innerHTML = content;
}
//BT2: Tính tiền điện

document.getElementById('tinhBT2').onclick = function () {
    //B1: Input
    var name = document.getElementById('name').value;
    var kwDien = +document.getElementById('kwDien').value;
    var giaTien;
    var contentBT2 = '';
    //B2: Xử lý
    if (kwDien <= 50) {
        giaTien = kwDien * 500;
    } else if (kwDien <= 100) {
        giaTien = (50 * 500) + (kwDien - 50) * 650;
    } else if (kwDien <= 200) {
        giaTien = (50 * 500) + (50 * 650) + (kwDien - 100) * 850;
    } else if (kwDien <= 350) {
        giaTien = (50 * 500) + (50 * 650) + (100 * 850) + (kwDien - 200) * 1100;
    } else {
        giaTien = (50 * 500) + (50 * 650) + (100 * 850) + (150 * 1100) + (kwDien - 350) * 1300;
    }
    document.getElementById('resultBT2').innerHTML = `
    <span>Họ tên: ${name}; Tiền điện: ${giaTien.toLocaleString()}</span>`
}

//BT3: Tính thuê thu nhập cá nhân

//B1: Input
document.getElementById('tinhBT3').onclick = function () {
    var nameBT3 = document.getElementById('nameBT3').value;
    var thuNhap = +document.getElementById('thuNhap').value;
    var nguoiPhuThuoc = +document.getElementById('nguoiPhuThuoc').value;
    //B2: Xử lý
    var thuNhapChiuThue = thuNhap - 4000000 - nguoiPhuThuoc * 1600000;
    var thueThuNhap;
    if (thuNhapChiuThue <= 0) {
        alert("Số tiền thu nhập không hợp lệ")
    }
    else if (thuNhapChiuThue <= 60000000) {
        thueThuNhap = thuNhapChiuThue * 0.05;
    } else if (thuNhapChiuThue <= 120000000) {
        thueThuNhap = 60000000 * 0.05 + (thuNhapChiuThue - 60000000) * 0.1;
    } else if (thuNhapChiuThue <= 210000000) {
        thueThuNhap = 60000000 * 0.05 + 60000000 * 0.1 + (thuNhapChiuThue - 120000000) * 0.15;
    } else if (thuNhapChiuThue <= 384000000) {
        thueThuNhap = 60000000 * 0.05 + 60000000 * 0.1 + 90000000 * 0.15 + (thuNhapChiuThue - 210000000) * 0.2;
    } else if (thuNhapChiuThue <= 624000000) {
        thueThuNhap = 60000000 * 0.05 + 60000000 * 0.1 + 90000000 * 0.15 + 174000000 * 0.2 + (thuNhapChiuThue - 384000000) * 0.25;
    } else if (thuNhapChiuThue <= 960000000) {
        thueThuNhap = 60000000 * 0.05 + 60000000 * 0.1 + 90000000 * 0.15 + 174000000 * 0.2 + 240000000 * 0.25 + (thuNhapChiuThue - 624000000) * 0.3;
    } else {
        thueThuNhap = 60000000 * 0.05 + 60000000 * 0.1 + 90000000 * 0.15 + 174000000 * 0.2 + 240000000 * 0.25 + 336000000 * 0.3 + (thuNhapChiuThue - 960000000) * 0.35;
    }
    document.getElementById('resultBT3').innerHTML = `
   <span>Họ tên: ${nameBT3}; Thuế Thu Nhập Phải Đóng ${thueThuNhap.toLocaleString()} VND</span>`;
}

// BT4: Tính tiền cáp
//B1: Input
document.getElementById('demo').style.display = "none"
function myFunction() {
    var khachHang = document.getElementById("mySelect").value;
    console.log('khachHang: ', khachHang);
    if (khachHang == 'Doanh Nghiệp') {
        document.getElementById('demo').style.display = "block"
    } else {
        document.getElementById('demo').style.display = "none"
    }
}
function tinhPhiXuLyHoaDon(khachHang) {
    if (khachHang === 'Nhà Dân') {
        return 4.5;
    } else if (khachHang === 'Doanh Nghiệp') {
        return 15;
    }
}
function tinhPhiDichVuCoBan(khachHang) {
    var soKetNoi = +document.getElementById('soKetNoi').value;
    if (khachHang === 'Nhà Dân') {
        return 20.5;
    } else if (khachHang === 'Doanh Nghiệp') {
        if (soKetNoi < 10) {
            return 75;
        } else {
            return 75 + (soKetNoi - 10) * 5;
        }
    }
}
function tinhPhiKenhCaoCap(khachHang) {
    if (khachHang === 'Nhà Dân') {
        return 7.5;
    } else if (khachHang === 'Doanh Nghiệp') {
        return 50;
    }
}

//B2: Xử lý

document.getElementById('tinhBT4').onclick = function () {
    var maKH = document.getElementById('nameBT4').value;
    var khachHang = document.getElementById("mySelect").value;
    var soKenhCaoCap = +document.getElementById('soKenhCaoCap').value;
    var soKetNoi = +document.getElementById('soKetNoi').value;
    var phiXuLyHoaDon = tinhPhiXuLyHoaDon(khachHang);
    var phiDichVuCoBan = tinhPhiDichVuCoBan(khachHang);
    var phiKenhCaoCap = tinhPhiKenhCaoCap(khachHang) * soKenhCaoCap;
    var tienCap;
    if (soKetNoi < 10) {
        tienCap = phiXuLyHoaDon + phiDichVuCoBan + phiKenhCaoCap;
    } else {
        tienCap = tienCap = phiXuLyHoaDon + phiDichVuCoBan + phiKenhCaoCap;
    }
    // if (khachHang = "Nhà Dân") {
    //     console.log('khachHang: ', khachHang);
    //     var tienCap = phiXuLyHoaDon + phiDichVuCoBan + phiKenhCaoCap
    // }else if (khachHang = "Doanh Nghiệp"){
    //     phiXuLyHoaDon = 15;
    //     phiDichVuCoBan = 75;
    //     phiKenhCaoCap = 50 * soKenhCaoCap;
    //     if(soKetNoi > 10){
    //         phiDichVuCoBan = 75 * 10 + (soKetNoi - 10) * 5;
    //     }
    //     tienCap = phiXuLyHoaDon + phiDichVuCoBan + phiKenhCaoCap
    // }


    document.getElementById('resultBT4').innerHTML = `
    <span>Mã KH: ${maKH}; Tiền Cáp Phải Đóng: $${tienCap.toLocaleString()} </span>`;
}