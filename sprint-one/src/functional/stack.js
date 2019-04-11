var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var length = 0;
  var popped;

  // Implement the methods below
  someInstance.push = function(value) {
    storage[length] = value;
    length++;
  };

  someInstance.pop = function() {
    popped = storage[length-1];
    delete storage[length-1];
    if(length > 0){
      length--;
    }
    return popped;
  }

  someInstance.size = function() {
    return length;
  };

  return someInstance;
};
