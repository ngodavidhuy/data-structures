var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me

  for (let method in treeMethods) {
    newTree[method] = treeMethods[method];
  }

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  let child = Tree(value);
  this.children.push(child);
};

treeMethods.contains = function(target) {
  let isTrue = this.value === target;

  for (let i = 0; i < this.children.length; i++) {
    if (!isTrue) {
      isTrue = this.children[i].contains(target);
    }
  }
  return isTrue;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */