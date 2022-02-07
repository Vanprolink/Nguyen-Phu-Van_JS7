var numArr = [];

// function demSoChan(arr) {
//   var soChanArr = arr.filter(function (item) {
//     return item % 2 == 0;
//   });
//   return soChanArr.length;
// }
function demSoDuong(arr) {
  var soDuongArr = arr.filter(function (item) {
    return item > 0;
  });
  return soDuongArr.length;
}
function demTongSoDuong(arr) {
  var sum = 0;
  arr.map(function (item) {
    if (item > 0) {
      sum += item;
    }
  });
  return sum;
}

function timSoNhoNhat(arr){
    arr.filter(function(item){
         item = arr[0];
        for (i = 1; i < item; i++){
            if (item > arr[i] )
                item = arr[i];
        return item;
        }
    })
}

function tinhNao() {

  var numberVl = document.querySelector("#txtBai1").value * 1;
  numArr.push(numberVl);

//   var soLuongSoChan = demSoChan(numArr);
//   console.log({ soLuongSoChan });
  var soLuongSoDuong = demSoDuong(numArr);
  console.log(soLuongSoDuong);
  var sumSoDuong = demTongSoDuong(numArr);
  console.log({ sumSoDuong });
  var soNhoNhat = timSoNhoNhat(numArr);
  console.log({soNhoNhat});
  // console.log({ numArr });

 var contentHTML = `<div>So Luong So Duong: ${soLuongSoDuong}</div><div>Tong So Luong So Duong: ${sumSoDuong}</div><div> So Nho Nhat: ${soNhoNhat}</div>`;
 document.querySelector(".ketQua").innerHTML = contentHTML;


}