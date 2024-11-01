// in ra các bạn không có chữ 'n' trong tên


// var ten=["my", "chơn","cường","diện","Ngọc"];
//     for(var i=0; i< ten.length;i++){
//         if(ten[i].toLowerCase().includes('n')==false)
//             document.write(ten[i]);
//     }

// var kq=[false,false,false,true,true,false,false,true,true];
// var dem=0;
// var diem=0;
// for (var i=0; i<kq.length;i++){
//     if(kq[i]==false){
//         dem+=1;
       
//     }
//     if(kq[i]==true){
//         diem+=1;
      
//     }

// }
// document.write('lớp có:',dem,'bạn bị cấm thi'+'<br>');
// document.write('lớp có',diem,'bạn qua môn'+'<br>');

// //cho ds các sô là số chẵn nhân 2
// // lẻ nhân 3
//  var number=[2,3,4,5,6,7,8];
//  var moi=[];
//  for(var i=0; i<number.length;i++){
//     if(number[i]%2==0){
//        number[i]*=2;
//     moi[i]=number[i];
//     }
//     else{
//         number[i]*=3;
//         moi[i]=number[i];
//     }}
//     document.write('mảng mới là:',moi,'<br>');

    //in ra màn lớp có bn bạn
    // tìm ra ds lớp có bn bạn họ nguyễn, in ra màn hình

    // var ten=[ 'nguyễn my','nguyễn nam','hoàng a','trần b','khuất a', 'nguyễn b','lê a','lê b'];
    // document.write('lớp  có:',ten.length,'bạn'+'<br>');
    // dem=0;
    // mang=[];
    // for(var i=0; i<ten.length;i++){
    //     if(ten[i].startsWith('nguyễn')){
    //         dem+=1;
    //         mang[i]=ten[i];
    //     }
      
    // }
    // document.write('lớp có:',dem,'bạn họ Nguyễn'+'<br>');
    // document.write(mang)


    var danhSach = [
        {
            hoTen: "Mai Thị Vân	Anh",
            monHoc: {
                web:{
                    diemA: 10,
                    diemB: 6,
                    diemC: 3,
                    diemChu: "",
                    nghiPhep: 4,
                    khongPhep: 4,
                    trangthai:"",
                },
                java:{
                    diemA: 5,
                    diemB: 6,
                    diemC: 7,
                    diemChu: "",
                    nghiPhep: 1,
                    khongPhep: 4,
                    trangthai:"",
                },
                dotNet:{
                    diemA: 7,
                    diemB: 8,
                    diemC: 9,
                    diemChu: "",
                    nghiPhep: 1,
                    khongPhep: 5,
                    trangthai:"",
                },
            }, 
        },
        {
            hoTen: "Nguyễn Huy Anh",
            monHoc: {
                web:{
                    diemA: 10,
                    diemB: 6,
                    diemC: 3,
                    diemChu: "",
                    nghiPhep: 4,
                    khongPhep: 4,
                    trangthai:"",
                },
                java:{
                    diemA: 5,
                    diemB: 6,
                    diemC: 7,
                    diemChu: "",
                    nghiPhep: 1,
                    khongPhep: 4,
                    trangthai:"",
                },
                dotNet:{
                    diemA: 7,
                    diemB: 8,
                    diemC: 9,
                    diemChu: "",
                    nghiPhep: 1,
                    khongPhep: 5,
                    trangthai:","
                },
            }, 
        },
        {
            hoTen: "Nguyễn Ngọc Đức	Anh",
            monHoc: {
                web:{
                    diemA: 4,
                    diemB: 5,
                    diemC: 6,
                    diemChu: "",
                    nghiPhep: 2,
                    khongPhep: 2,
                    trangthai:"",
                
                },
                java:{
                    diemA: 7,
                    diemB: 8,
                    diemC: 9,
                    diemChu: "",
                    nghiPhep: 1,
                    khongPhep: 4,
                    trangthai:"",
                },
                dotNet:{
                    diemA: 9,
                    diemB: 8,
                    diemC: 9,
                    diemChu: "",
                    nghiPhep: 1,
                    khongPhep: 3,
                    trangthai:"",
                },
            }, 
        },
    ];
    //tìm người học nguyễn và tính ra 
    //điểm chữ của người họ nguyễn trong từng môn học
    
    for (var i = 0; i < danhSach.length; i++) {
        if (danhSach[i].hoTen.toLocaleLowerCase().startsWith("nguyễn")) {
            var web = danhSach[i].monHoc.web;
            var java = danhSach[i].monHoc.java;
            var dotNet = danhSach[i].monHoc.dotNet;
            var diemChu = "";
            
            //Tính điểm môn web
            var diemTong = web.diemA * 0.6 + web.diemB * 0.3 + web.diemC * 0.1;
            if (diemTong >= 8) {
                diemChu = "A";
            }
            else if (diemTong < 8 && diemTong >= 7) {
                diemChu = "B";
            }
            else if (diemTong < 7 && diemTong >= 6) {
                diemChu = "C";
            }
            else if (diemTong < 6 && diemTong >= 4) {
                diemChu = "D";
            }
            else {
                diemChu = "F";
            }
            web.diemChu = diemChu;
    
            //Tính điểm môn java
            diemTong = java.diemA * 0.6 + java.diemB * 0.3 + java.diemC * 0.1;
            if (diemTong >= 8) {
                diemChu = "A";
            }
            else if (diemTong < 8 && diemTong >= 7) {
                diemChu = "B";
            }
            else if (diemTong < 7 && diemTong >= 6) {
                diemChu = "C";
            }
            else if (diemTong < 6 && diemTong >= 4) {
                diemChu = "D";
            }
            else {
                diemChu = "F";
            }
            java.diemChu = diemChu;
    
            //Tính điểm môn dotNet
            diemTong = dotNet.diemA * 0.6 + dotNet.diemB * 0.3 + dotNet.diemC * 0.1;
            if (diemTong >= 8) {
                diemChu = "A";
            }
            else if (diemTong < 8 && diemTong >= 7) {
                diemChu = "B";
            }
            else if (diemTong < 7 && diemTong >= 6) {
                diemChu = "C";
            }
            else if (diemTong < 6 && diemTong >= 4) {
                diemChu = "D";
            }
            else {
                diemChu = "F";
            }
            dotNet.diemChu = diemChu;
        }
    }
   //kiểm tra cấm thi môn wed
  // confirm box:
 // var r= confirm("hello")


 //POPOP BOXES
//  var r=confirm("press a button")
//  if(r==true){
//     document.write("you press ok")

//  }
//  else{
//     document.write("you press cancel")
//  }

 //prompt box: cho pheps nguowif dungf nhapj 
 // cú pháp: prompt("text","default")

//  var i=prompt("test","type here")
//  document.write(i)

 //nhập thông tin kiểm tra ng dùng nhập vào là chữ hay sô chứ inlaf chữ ..
var ktra=prompt("test","Nhập vào")

function kiemtra(value){
   if(isNaN(value)== true){
        document.write('Ký tự bạn nhập là chữ');
   }
   else{
        document.write('ký tự bạn nhập là số')
   }
}
kiemtra(ktra)

 //functions
 // cú pháp:
 //-không tham số :functions(){code}
//  function Hello(ten,tuoi){
//     document.write("Hello"+ten+tuoi)
//  }
//  Hello("my",27);

 
 

