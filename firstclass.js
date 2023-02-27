function sayHello() {
  console.log("Hello");
}
sayHello();

var sayBye = function () {
  console.log("Bye");
};
sayBye();

function sing(song) {
  console.log(song);
}
sing("Lea de da");
sing("Helloo");
sing("backstreet back");

function multiply(a, b) {
  return a * b;
}
multiply(5, 10);

function multiply(a, b) {
  if (a > 10 || b > 10) {
    return "that´s too hard";
  } else {
    return a * b;
  }
}
multiply(5, 10);

function multiply(a, b) {
  return a * b;
}
alert(multiply(3, 4));
