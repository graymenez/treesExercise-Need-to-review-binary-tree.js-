class Node {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    let total = 0;
    const toVisitStack = [this.root];
    while (toVisitStack.length) {
      const current = toVisitStack.pop();
      for (let child of current.children) {
        toVisitStack.push(child);
        total += child.val;
      }
    }
    return `Total: ${total}`;
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    const toCheckStack = [this.root];
    let evens = [];
    while (toCheckStack.length) {
      const current = toCheckStack.pop();
      for (let child of current.children) {
        toCheckStack.push(child);
        if (child.val % 2 === 0) {
          evens.push(child.val);
        }
      }
    }
    return evens;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    const toCheckStack = [this.root];
    let numsGreaterThanLowerBound = 0;
    while (toCheckStack.length) {
      const current = toCheckStack.pop();
      for (let child of current.children) {
        toCheckStack.push(child);
        if (child.val > lowerBound) {
          numsGreaterThanLowerBound += 1;
        }
      }
    }
    return numsGreaterThanLowerBound;
  }
}

module.exports = { Tree, TreeNode };
