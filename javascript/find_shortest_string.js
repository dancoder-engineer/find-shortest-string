function findShortestString(arr) {
  findArr = [arr[0], arr[0].length]
  for (n = 1; n < arr.length; n++) {
    if (arr[n].length < findArr[1]) {
      findArr[0] = arr[n]
      findArr[1] = arr[n].length
    }
  }
  return findArr[0]

}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'a'");
  console.log("=>", findShortestString(['aaa', 'a', 'bb', 'ccc']));

  console.log("");

  console.log("Expecting: 'hi'");
  console.log("=>", findShortestString(['cat', 'hi', 'dog', 'an']));

  console.log("");

  console.log("Expecting: 'lily'");
  console.log("=>", findShortestString(['flower', 'juniper', 'lily', 'dadelion']));

  
  const startTime = Date.now();

  for (let i = 0; i < 1000; i++) {
    findShortestString(['flower', 'juniper', 'lily', 'dadelion']);
  }

  const avgTime = (Date.now() - startTime) / 2000;

  console.log(avgTime);
}

module.exports = findShortestString;

// Please add your pseudocode to this file
// And a written explanation of your solution
