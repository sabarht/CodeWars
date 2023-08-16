//www.codewars.com/kata/57a5b0dfcf1fa526bb000118/solutions/javascript
https: function distinct(a) {
  //shortest way
  //   const result = [...new Set(a)];
  const result = [];
  for (let i = 0; i < a.length; i++) {
    if (!result.includes(a[i])) {
      result.push(a[i]);
    }
  }
  return result;
}
const array = [1, 3, 5, 2, 1, 2];
console.log(distinct(array));
