

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(finder, value) {
  var index = getIndexBelowMaxForKey(finder, this._limit);
  if(this[index] !== undefined){
    for(var i in this._limit){
      if(this[i]){
        this.index = value;
        return;
      }
    }
  }
  this.index = value;
};

HashTable.prototype.retrieve = function(finder) {
  var index = getIndexBelowMaxForKey(finder, this._limit);
  return this.index;
};

HashTable.prototype.remove = function(finder) {
  var index = getIndexBelowMaxForKey(finder, this._limit);
  delete this.index;  
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


