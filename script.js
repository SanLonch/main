Array.prototype.pow = function(n) {
  return this.map(item => Math.pow(item, n));
};

Function.prototype.defer = function(n) {
  setTimeout(this, n);
};

function a() {
  console.log("test");
}

a.defer(1000);

const array = [5, 9, 6];
const newArray = array.pow(2);
console.log(newArray);
