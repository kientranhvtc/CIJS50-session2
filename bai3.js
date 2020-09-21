//Độ phức tạp O(n)
function oN(input){
  let arrString = input.split(' ');
  let string1 = arrString[0].split('');
  let string2 = arrString[1].split('');
  if (string1.length !== string2.length) return false;
  
  let check = new Object();
  string1.forEach(function(i){
    if(check[i]){
        check[i]++;
    }
    else check[i] = 1;    
  })
  string2.forEach(function(i){
    check[i]--;
  })   

  for (let i in check){
    if(check[i] != 0) return false;
  }
  return true;
}

console.log(oN("hanh ahnh"));
console.log(oN("abxo abxk"));
console.log(oN("abxds abb"));

//Độ phức tạp O(nlog(n))
function oNlogN(input){
  let arrString = input.split(' ');
  let string1 = arrString[0].split('');
  let string2 = arrString[1].split('');
  if (string1.length !== string2.length) return false;
  let s1 = (string1.sort()).join('');
  let s2 = (string2.sort()).join('');
  if (s1 == s2) return true;
  return false;
}

console.log(oNlogN("hanh ahnh"));
console.log(oNlogN("abxo abxk"));
console.log(oNlogN("abxds abb"));
/*
Hãy viết một hàm để kiểm tra xem có thể sắp xếp các kí tự của 1 chuỗi String cho trước thành 1 chuỗi String cho trước khác không?

Input: 2 chuỗi String
Output: True hoặc False

ví dụ:

Input: hanh ahnh
Output: True

Input: abxo abxk
Output: False

Input: abxds abb
Output: False
*/