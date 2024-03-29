

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (!Array.isArray(this._storage.get(index))) {
    this._storage.set(index, [[k,v]]);
  } else {
    let bucket = this._storage.get(index);
    for (let tuple of bucket) {
      if (tuple[0] === k) {
        tuple[1] = v; 
      } else {
        bucket.push([k, v]);
      }
    }
    this._storage.set(index, bucket);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  let bucket = this._storage.get(index);
  for (let tuple of bucket) {
    if (tuple[0] === k) {
      return tuple[1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  let bucket = this._storage.get(index);
  for (let i = 0; i < bucket.length; i++) {
    if(bucket[i][0] === k) {
      bucket.splice(i, i + 1);
    }
  }
  this._storage.set(index, bucket);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


// HashTable.prototype.insert => O(n);
// HashTable.prototype.retrieve => O(n)
// HashTable.prototype.remove => O(n)



















