function Prime(num) {
  for (i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
    return true
  }
}
console.log(Prime(5));
// true