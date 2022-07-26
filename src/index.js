module.exports = function reverse (n) {
  let str = String(n);
  let m = 0
  if (str[0] == '-') {
    m = 1;
  }
  else (m = 0)
  let arr = [];
  for (i = m; i < str.length; i++) {
    arr.push(str[i])
  }

  arr.reverse();
  return arr.join('')
}
