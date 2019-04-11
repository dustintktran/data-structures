var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var length = 0;
  var front = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[length] = value;
    length++;
  };

  someInstance.dequeue = function() {
    if(storage[front]){
    var popped = storage[front];
    delete storage[front];   
    front++; 
    return popped;
    }
  };

  someInstance.size = function() {
    return length-front;
  };

  return someInstance;
};
