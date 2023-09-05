https://www.codewars.com/kata/525c65e51bf619685c000059/train/javascript
function cakes(recipe, available) {
  const array = [];

  // available.filter((ing)=>{
  // ing == property
  // })
  // console.log("available[key] ", available.includes(2));
  for (const key in available) {
    // ing.push(key);
    // console.log("ing", ing);

    for (const property in recipe) {
      if (key == property) {
        recipe[property] && available[key]
          ? array.push(Math.round(available[key] / recipe[property]))
          : null;
      }
    }
  }
  return Math.min(...array);
}

console.log(
  "an",
  cakes(
    { apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100 },
    { sugar: 500, flour: 2000, milk: 2000 }
  )
);
