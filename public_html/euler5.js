function IsDivisibleByRange(num) {

  for(i = 11; i <= 20; i++) {
    if(num % i != 0)
    return false;
    }
  return true;
}

function computeResult() {

var HowWeFoundIt = false;
var NumToCheck = 9699680;

  while(HowWeFoundIt == false) {
    if(IsDivisibleByRange(NumToCheck)) {
      document.getElementById("OutputBox").innerHTML = NumToCheck;
      HowWeFoundIt = true;
    }
  NumToCheck = NumToCheck + 20;
  }
}
