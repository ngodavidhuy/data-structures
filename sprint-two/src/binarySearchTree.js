var BinarySearchTree = function(value) {
  this.value = value;
  this.left = undefined;
  this.right = undefined;
};

BinarySearchTree.prototype.insert = function(value) {
  let newNode = new BinarySearchTree(value);

  let insertNode = function(node) {
    if (node.value > value && !node.left) {
      node.left = newNode;
    } else if (node.value > value && node.left) {
      insertNode(node.left);
    } else if (node.value <= value && !node.right) {
      node.right = newNode;
    } else if (node.value <= value && node.right) {
      insertNode(node.right);
    }
  };

  insertNode(this);
};

BinarySearchTree.prototype.contains = function(target) {
  let traverse = function(node) {
    if (node.value === target) {
      return true;
    } else if (node.value > target) {
      return node.left ? traverse(node.left) : false;
    } else if (node.value <= target) {
      return node.right ? traverse(node.right) : false;
    }
  };

  return traverse(this);
};

BinarySearchTree.prototype.depthFirstLog = function(cb) {
  let traverse = function (node) {
    if (node.value) {
      node.value = cb(node.value);
    }
    if (node.left) {
      traverse(node.left);
    }
    if (node.right) {
      traverse(node.right);
    }
  };

  traverse(this);
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

 /*
BinarySearchTree.prototype.insert ===> O(n)
BinarySearchTree.prototype.contains ===> O(log n)
BinarySearchTree.prototype.depthFirstLog ===> O(n)
 */
