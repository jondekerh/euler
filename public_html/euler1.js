function computeResult() {

var sum = 0;
a = 1;

while (a < 1000) {
	if ((a%3 == 0) || (a%5 == 0)) {
		sum = sum + a;
	}
	a++;
	}
	document.getElementById("OutputBox").innerHTML = sum;
}
