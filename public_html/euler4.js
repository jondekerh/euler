function Palindrome(str) {

var len = Math.floor(str.length / 2);

  for (x = 0; x < len; x++)
    if (str[x] !== str[str.length - x - 1])
      return false;
  return true;
}

function computeResult() {

var answer = 0;

  for (i = 900; i <= 999; i++) {
    for (k = 900; i <= 999; k++) {
      (i*k); 
      if (Palindrome(i*k)) {
        answer = (i*k);
      }
    }
  }
  document.getElementById("OutputBox").innerHTML = sum;
}
//palindrome check script i used:
//http://stackoverflow.com/questions/14813369/palindrome-check-in-javascript
