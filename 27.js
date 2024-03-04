const TwentySeven = [
  [[1, 2, 3], [4, 5, 6], [7, 8, 9]],
  [[10, 11, 12], [13, 14, 15], [16, 17, 18]],
  [[19, 20, 21], [22, 23, 24], [25, 26, 27]],
]

let number = 20;

function findPattern(number) {
  for (let i = 0; i < TwentySeven.length; i++) {
    for (let j = 0; j < TwentySeven[i].length; j++) {
      if (TwentySeven[i][j].includes(number)) {
        return [TwentySeven[i][j].indexOf(number), TwentySeven[i].indexOf(TwentySeven[i][j]), TwentySeven.indexOf(TwentySeven[i])];
      }
    }
  }
}

console.log(toPattern(findPattern(number)));

function toPattern(arr) {
  let pattern = [];
  
  arr.forEach(element => {
    switch (element) {
      case 0:
        pattern.push("bottom");
        break;
      case 1:
        pattern.push("middle");
        break;
      case 2:
        pattern.push("top");
        break;
    
      default:
        return console.error("invalid number");
    }
  });

  return pattern;
}