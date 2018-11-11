var BinarySearchTree = function(value) {
  let node = Object.create(binarySearchMethods);
  node.value = value;
  node.left = undefined;
  node.right = undefined;
  return node;
};

let binarySearchMethods = {
  insert : function(value) {
    let newNode = BinarySearchTree(value);
    
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
    }
    
    insertNode(this);
  },

  contains : function(target) {
    let wasFound = false;
 
    let traverse = function(node) {
      if (node.value === target) {
        console.log('target found');
        wasFound = true;
      } else if (node.value > target) {
        if (node.left) {
          traverse(node.left);
        }
      } else if (node.value <= target) {
        console.log('target is greater than or equal to value of node')
        if (node.right) {
          traverse(node.right);
        }
      }
    }
    
    traverse(this);
    return wasFound;
  },

  depthFirstLog : function(cb) {

    let diging = function(node) {
      if (node.left) {
        return cb(node.value);
      }
    }
    
    diging(this);
    return diging(this);
    
  }
}

// binarySearchTree.insert(2);
// binarySearchTree.insert(3);
// binarySearchTree.insert(7);
// expect(binarySearchTree.contains(7)).to.equal(true);






/*
 * Complexity: What is the time complexity of the above functions?
 */
