function SquareTheSum (num) {

  var sum = 0;

  for(i = 1; i <= num; i++) {
    sum = sum + i;
  }
  
  var SquaredSum = sum*sum;
  return SquaredSum;
}

function SumTheSquare (num) {

  var sum = 0;

  for(i = 1; i <= num; i++) {
    sum = sum + (i*i)
  }

  return sum;
}

function computeResult() {
  document.getElementById("OutputBox").innerHTML = (SquareTheSum(100) - SumTheSquare(100));
}
