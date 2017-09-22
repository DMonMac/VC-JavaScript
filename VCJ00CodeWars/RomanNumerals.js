function solution(number){
  var romnum = '';
  var thousands = (number - number%1000)/1000;
  var hundreds = (number%1000 - number%100)/100;
  var tens = (number%100 - number%10)/10;
  var ones = number%10;

  switch(thousands){
    case 0:
      var thsym = '';
      break;
    default:
      var thsym = 'M'.repeat(thousands);

  }

  switch(true){
    case hundreds<4:
      var hsym = 'C'.repeat(hundreds);
      break;
    case hundreds == 4:
      var hsym = 'CD';
      break;
    case hundreds == 5:
      var hsym = 'D';
      break;
    case hundreds>5 && hundreds<9:
      var hsym = 'D'+'C'.repeat(hundreds-5);
      break;
    case hundreds == 9:
      var hsym = 'CM';
      break;
    default:
      var hsym = '';
  }

  switch(true){
    case tens<4:
      var tsym = 'X'.repeat(tens);
      break;
    case tens == 4:
      var tsym = 'XL';
      break;
    case tens == 5:
      var tsym = 'L';
      break;
    case tens>5 && tens<9:
      var tsym = 'L'+'X'.repeat(tens-5);
      break;
    case tens == 9:
      var tsym = 'XC';
      break;
    default:
      var tsym = '';
  }

    switch(true){
    case ones<4:
      var osym = 'I'.repeat(ones);
      break;
    case ones == 4:
      var osym = 'IV';
      break;
    case ones == 5:
      var osym = 'V';
      break;
    case ones>5 && ones<9:
      var osym = 'V'+'I'.repeat(ones-5);
      break;
    case ones == 9:
      var osym = 'IX';
      break;
    default:
      var osym = '';
  }

  romnum = thsym+hsym+tsym+osym;

  return romnum;

}


// Easier answer
function solution(number){

  // convert the number to a roman numeral
var  roman = {M:1000,CM:900, D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1 }

var ans = '';
while(number>0){
    for(a in roman){
        if(roman[a]<=number){ ans += a; number-=roman[a]; break;}

    }
}
return ans;
}
