function computeResult() {

  var x = 0;
  var y = 1;
  var z = x + y;
  var sum = 0;

  while(z < 4000000) {

    if(z % 2 == 0) {

      sum = sum + z;
    }
    x = y;
    y = z;
    z = x + y;
  }

  document.getElementById("OutputBox").innerHTML = sum;

}



// add x and y thru z?
// if (z%2 == 0) {
//                 sum = sum + z;
//}
// set x equal to y
// set y equal to z
// repeat
