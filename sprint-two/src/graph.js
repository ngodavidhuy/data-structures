

// Instantiate a new graph
var Graph = function() {
  this.vertices = [];
  this.edges = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.vertices.push(node);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return this.vertices.includes(node);
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {

  //Remove from vertices
  this.vertices = this.vertices.filter( v => {
    v !== node;
  });

  //Remove the edges
  let newEdges = [];
  for (let edge of this.edges) {
    let fromNode = edge[0];
    let toNode = edge[1];
    if (node !== fromNode && node !== toNode) {
      newEdges.push(edge);
    }
  }
  this.edges = newEdges;
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  for (let edge of this.edges) {
    let target = JSON.stringify([fromNode, toNode]);
    let other = JSON.stringify(edge);
    if (target === other) {
      return true;
    }
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.edges.push([fromNode, toNode]);
  this.edges.push([toNode, fromNode]);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  let updateEdges = [];
  let target = JSON.stringify([fromNode, toNode]);
  let target2 = JSON.stringify([toNode, fromNode]);
  for (let i = 0; i < this.edges.length; i++) {
    let edge = JSON.stringify(this.edges[i]);
    if (target !== edge && target2 !== edge) {
      updateEdges.push(this.edges[i]);
    } 
  }
  this.edges = updateEdges;
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  this.vertices.forEach( v => {
    cb(v);
  });  
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


// Graph.prototype.addNode -----> O(1)
// Graph.prototype.contains -----> O(n)
// raph.prototype.removeNode -----> O(n)
// Graph.prototype.hasEdge -----> ) O(n)
// Graph.prototype.addEdge -----> O(1)
// Graph.prototype.removeEdge -----> O(n)
// Graph.prototype.forEachNode -----> O(n)


