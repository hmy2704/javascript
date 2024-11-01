// alert("Dìa dia");

var hoVaTen = 'Chu Anh Kiên <br>';



//hằng
const pi = 3.14;
//phép toán

    //phép cộng: +
var soA = 10;
var soB = 5;
var Tong = soA + soB;

    // phép trừ nhân chia: - * /

var Hieu = soA - soB;
var Tich = soA * soB;
var Thuong = soA / soB;

    // phép increase: ++
    // var increase = ++soA;
    // document.write(increase + '<br>');

    // phép decrease: --
    // var decrease = --soA;
    // document.write(decrease + '<br>');

    // += -= *= /= %=

    // So sánh
    // ==
    // != chack cùng kiểu dữ liệu
    // !== check gía trị và cùng giá trị
    // > < >= <=
    // var ketQua = soA !== '10';
    // document.write(ketQua);

    // ||: hoặc
    // var ketQua = soA >= 10 || soB <= 5;
    // document.write(!ketQua)

var a = null;
var ketQua = !a;

//kiểu dữ liệu
//object
var hocSinh = {
    Ten: 'Chu Anh Kien',
    Tuoi: 20,
    GT: "nam",
    address:{
        city: 'Hanoi',
        district: 'Colonhue',
        street: 'Phố Viên'
    }
}

var soA = 10;
var soB = '5';
var ketqua = soA + soB;
var Ketqua = soA + parseInt(soB);
var ketqua = hocSinh.Ten + "" + hocSinh.Tuoi+ "tuổi" ;

//-------------------------------
// Đo độ dài của 1 chuỗi .length
var tenSV = "Nguyễn vũ Hoàng";
var ten = tenSV.length;

var typeOf = typeof(tenSV);
//trỏ đến 1 phần tử trong chuỗi

var troPT=tenSV[2];
//trỏ vào phần tử

// slice: từ vị trí đầu cho đến vị trí cận cuôi
var myString='hello';
var slice = myString.slice(1,4);

var rePlace= tenSV.replace("Vũ Hoàng","Huyền My");
//thay đổi 1 kí tự chuỗi hoặc văn bản
var rePlaceAll= tenSV.replaceAll('g','h');

var inHoa= tenSV.toUpperCase();// in hoa
var inThuong= tenSV.toLowerCase();// in thường

//indexOf: kiểm tra kí tự có trong chuỗi hay  không

var inCludes=tenSV.includes('f');
var indexOf= tenSV.indexOf('n');

//split: chia phần tử thành các chuỗi(biến chuỗi thành mảng)
var tuoi =27;
var tuoiJ=`tôi năm nay ${tuoi} tuổi`;
//nhúng

var tenM=tenSV.startsWith("Nguyễn");
//startsWith : kiểm tra xem chuỗi có bắt đầu bằng chữ gì


//----KIỂU NUMBER------

var so="123";
var epKieu= Number(so) +1;
 
// parseInt: ép kiểu số nguyên
// parseFloat: ép kiểu số thực
var nguyen= 10.5;
var parsenguyen=parseInt("10.5");

//làm tròn
var Pi=3.14159;
var Pitron=Pi.toFixed(2);

//kiểm tra số
//isNaN(): kiểm tra giá trị đấy phải sô hay không
//isFinite(): kiểm tra phải số hữu hạn hay không
 var a=10;
 var ktra=isNaN(10);

 var homNay=new Date();
 var homQua= new Date('2024-09-24');
 var nam=homNay.getFullYear();//lấy năm
 var thang=homNay.getMonth();// lấy tháng bắt đầu từ 0
 var ngay=homNay.getDate();//lấy ngày
 //getDay:lấy ngày thứ mấy trong tuân

//-----------Mảng----------
var arr=[1,2,3,4,5,6,7,8,9,2,10];
var mang=Array.isArray(arr);
//gọi số
var dem=arr[4];
//trỏ về trí đầu tiên của phần tử trong mảng
var vitri=arr.indexOf(4);
//trả về vị trí cuối cùng
var kiemtra=arr.lastIndexOf(2);
//thay só vào vị trí của 1 số
arr[6]=100;
var thay=arr;
//Nối mảng,chuỗi,tất cả mọi thứ lại voied nhau
var a,b,c,d;
a=new Array(1,2,3);
b='jscript';
c=new Array(42,"vbscript");
d=a.concat(b,c);
//thay dấu',' là dấu'/'
var change=(arr.join("/"));
// typeof(arr.join()) trả về kiểu

//pop:xóa bỏ phần tử cuối cùng trong mảng
arr.pop();
var xoa=arr;
// tương tự với push đẩy vào phần tử cuối mảng
// arr.push(200);
// var day=arr;
// đảo chiều mảng
var daoChieu =arr.reverse();

//shift:xóa phần tử đầu tiên
//unshift:thêm phần tử vào đầu tiên vào trong mảng
//-----IF ELSE IF----
var i=10
var ktra=""
if(i%2==0){
   ktra="la so chan";
}
else{
   ktra="laf soos le";
}
// ví dụ
var soktra="20000000000000009";
var soCuoiCung=soktra[soktra.length-1];
var ketqua="";
if(parseInt(soCuoiCung)%2==0){
    ketqua="so chẵn";
}
else{
    ketqua="là số lẻ";
}
//Nhập vào điểm số từ 0 đến 10 và in ra xếp loại tương ứng(a,b,c,d)
// var diem= prompt("Mời nhập vào điểm của bạn:");
//  if(diem<0 || diem >10){
//     diem="không hơp lệ";
//  }
//  if(diem<=4 ){
//     diem=" xếp loại F";
//  }
//  if(diem<=5.5 ){
//     diem=" xếp loại D";
//  }
//  if(diem<=7){
//     diem=" xếp loại C";
//  }if(diem<=8.5){
//     diem=" xếp loại B";
//  }
//  if(diem>  8.5){
//     diem=" xếp loại A";
//  }
//  alert(diem);

 //nhập r in ra số lớn nhất
 var so1,so2,so3;
 so1=2;
 so2=5;
 so3=19;
 kq=""
 if(so1>so2 && so1>so3){
   kq="so1";
 }
 if(so2>so1 && so2>so3){
   kq="so2";
 }
 if(so3>so2 && so3>so1){
   kq="so3";
 }
 
// Câu lệnh switch case
// var d =new Date();
// theDay=d.getDay();
// switch(theDay){
//    case 5:
//       document.write("finally friday");
//       break;
//    case 6:
//       document.write("super saturdady");
//       break;
//    case 0:
//       document.write("sleepy sunday");
//       break;
//    default:
//       document.write("i'm looking for sunday");   
// }

// Tháng 
// var thang=new Date();
// thisM= thang.getMonth()+1;
// switch(thisM){
//    case 1:
//    case 3:
//    case 5:
//    case 7:
//    case 8:
//    case 10:
//    case 12:
//       document.write("Tháng có 31 ngày");
//       break;
//    case 4:
//    case 6:
//    case 9:
//    case 11:
//       document.write("Tháng có 30 ngày");
//       break;
//       case 2:
//       document.write("Tháng có 28 ngày");
//       break;
//    default:
//       document.write("sai");
// }
// lặp For:
var ten=["my", "chơn","cường","diện"];
for (let i = 0; i <ten.length; i++) {
   document.write(i);
   document.write(" xin chào bạn "+ten[i]+"<br>");
   
}