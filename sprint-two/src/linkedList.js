var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  
  list.addToTail = function(value) {
    let newNode = Node(value);
    let currentNode = this.head;

    if (this.head === null) {
      this.head = newNode;
    }

    if (this.tail !== null) {
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = newNode;
    }

    this.tail = newNode;
  };

  list.removeHead = function() {
    let removedVal = this.head.value;
    this.head = this.head.next;
    return removedVal;
  };

  list.contains = function(target) {
    let currentNode = this.head;

    while (currentNode) {
      if (currentNode.value === target) {
        return true;
      }
      currentNode = currentNode.next;
    }
    
    return false;
  };

  return list;
};


var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};


/*
 * Complexity: What is the time complexity of the above functions?

list.addToTail -> O(1)
list.removeHead -> O(1)
list.contains -> O(n)
 */
}










