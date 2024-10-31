function applyOperation(arr, operation) {
    return arr.map(operation);
  }
  
  const numbers = [1, 2, 3, 4, 5];
  const doubled = applyOperation(numbers, function(num) {
    return num * 2;
  });
  
  console.log(doubled);  // Output: [2, 4, 6, 8, 10]

  function multiplier(factor){
    return function(num){
        return num * factor;
    };
  }

  const double = multiplier(2);
  console.log(double(5));

  const triple = multiplier(3);
  console.log(triple (5));