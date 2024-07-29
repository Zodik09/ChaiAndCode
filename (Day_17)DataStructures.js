// Day 17: Data Structures
console.log("/-----------------------------/");
// Tasks/Activities:
// Activity 1: Linked List

// . Task 1: Implement a Node class to represent an element in a linked list with properties value and next .
class Node {
    constructor(value, next = null) {
        this.value = value;  // The value of the node
        this.next = next;    // A reference to the next node in the linked list
    }
}

// Example usage:
const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);

// Linking the nodes
node1.next = node2;
node2.next = node3;

console.log(node1); // Output: Node { value: 1, next: Node { value: 2, next: Node { value: 3, next: null } } }


// . Task 2: Implement a LinkedList class with methods to add a node to the end, remove a node from the end, and display all nodes.

class LinkedList {
    constructor() {
        this.head = null;
    }

    // Method to add a node to the end
    add(value) {
        const newNode = new Node(value);
        if (this.head === null) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    // Method to remove a node from the end
    remove() {
        if (this.head === null) {
            console.log("List is empty.");
            return;
        }

        if (this.head.next === null) {
            this.head = null;
            return;
        }

        let current = this.head;
        let previous = null;

        while (current.next !== null) {
            previous = current;
            current = current.next;
        }

        previous.next = null;
    }

    // Method to display all nodes
    display() {
        let current = this.head;
        let result = [];

        while (current !== null) {
            result.push(current.value);
            current = current.next;
        }

        console.log(result.join(' -> '));
    }
}

// Example usage:
const list = new LinkedList();
list.add(1);
list.add(2);
list.add(3);

console.log("Initial list:");
list.display(); // Output: 1 -> 2 -> 3

list.remove();
console.log("After removing a node from the end:");
list.display(); // Output: 1 -> 2

list.remove();
list.remove();
console.log("After removing all nodes:");
list.display(); // Output: (empty)


// Activity 2: Stack
// . Task 3: Implement a Stack class with methods push (add element), pop (remove element), and peek (view the top element).
class Stack {
    constructor() {
        this.items = [];
    }

    // Method to add an element to the stack
    push(element) {
        this.items.push(element);
    }

    // Method to remove the top element from the stack
    pop() {
        if (this.isEmpty()) {
            console.log("Stack is empty.");
            return null;
        }
        return this.items.pop();
    }

    // Method to view the top element of the stack
    peek() {
        if (this.isEmpty()) {
            console.log("Stack is empty.");
            return null;
        }
        return this.items[this.items.length - 1];
    }

    // Method to check if the stack is empty
    isEmpty() {
        return this.items.length === 0;
    }

    // Method to get the size of the stack
    size() {
        return this.items.length;
    }

    // Method to display all elements in the stack
    display() {
        console.log(this.items.join(' <- '));
    }
}

// Example usage:
const stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);

console.log("Stack after pushes:");
stack.display(); // Output: 10 <- 20 <- 30

console.log("Peek top element:", stack.peek()); // Output: 30

console.log("Pop top element:", stack.pop()); // Output: 30

console.log("Stack after pop:");
stack.display(); // Output: 10 <- 20

console.log("Peek top element:", stack.peek()); // Output: 20

console.log("Is stack empty?", stack.isEmpty()); // Output: false

console.log("Stack size:", stack.size()); // Output: 2


// . Task 4: Use the Stack class to reverse a string by pushing all characters onto the stack and then popping them off.
class Stacks {
    constructor() {
        this.items = [];
    }

    // Method to add an element to the stack
    push(element) {
        this.items.push(element);
    }

    // Method to remove the top element from the stack
    pop() {
        if (this.isEmpty()) {
            console.log("Stack is empty.");
            return null;
        }
        return this.items.pop();
    }

    // Method to view the top element of the stack
    peek() {
        if (this.isEmpty()) {
            console.log("Stack is empty.");
            return null;
        }
        return this.items[this.items.length - 1];
    }

    // Method to check if the stack is empty
    isEmpty() {
        return this.items.length === 0;
    }

    // Method to get the size of the stack
    size() {
        return this.items.length;
    }

    // Method to display all elements in the stack
    display() {
        console.log(this.items.join(' <- '));
    }
}

// Function to reverse a string using the Stack class
function reverseString(str) {
    const stack = new Stacks();
    
    // Push all characters of the string onto the stack
    for (let char of str) {
        stack.push(char);
    }

    // Pop all characters from the stack to build the reversed string
    let reversedStr = '';
    while (!stack.isEmpty()) {
        reversedStr += stack.pop();
    }

    return reversedStr;
}

// Example usage:
const originalString = "Hello, World!";
const reversedString = reverseString(originalString);

console.log("Original String:", originalString); // Output: Hello, World!
console.log("Reversed String:", reversedString); // Output: !dlroW ,olleH


// Activity 3: Queue
// . Task 5: Implement a Queue class with methods enqueue (add element), dequeue (remove element), and front (view the first element).
class Queue {
    constructor() {
        this.items = [];
    }

    // Method to add an element to the queue
    enqueue(element) {
        this.items.push(element);
    }

    // Method to remove the front element from the queue
    dequeue() {
        if (this.isEmpty()) {
            console.log("Queue is empty.");
            return null;
        }
        return this.items.shift();
    }

    // Method to view the front element of the queue
    front() {
        if (this.isEmpty()) {
            console.log("Queue is empty.");
            return null;
        }
        return this.items[0];
    }

    // Method to check if the queue is empty
    isEmpty() {
        return this.items.length === 0;
    }

    // Method to get the size of the queue
    size() {
        return this.items.length;
    }

    // Method to display all elements in the queue
    display() {
        console.log(this.items.join(' <- '));
    }
}

// Example usage:
const queue = new Queue();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

console.log("Queue after enqueues:");
queue.display(); // Output: 10 <- 20 <- 30

console.log("Front element:", queue.front()); // Output: 10

console.log("Dequeue element:", queue.dequeue()); // Output: 10

console.log("Queue after dequeue:");
queue.display(); // Output: 20 <- 30

console.log("Front element:", queue.front()); // Output: 20

console.log("Is queue empty?", queue.isEmpty()); // Output: false

console.log("Queue size:", queue.size()); // Output: 2


// . Task 6: Use the Queue class to simulate a simple printer queue where print jobs are added to the queue and processed in order.
class Queue2 {
    constructor() {
        this.items = [];
    }

    // Method to add an element to the queue
    enqueue(element) {
        this.items.push(element);
    }

    // Method to remove the front element from the queue
    dequeue() {
        if (this.isEmpty()) {
            console.log("Queue is empty.");
            return null;
        }
        return this.items.shift();
    }

    // Method to view the front element of the queue
    front() {
        if (this.isEmpty()) {
            console.log("Queue is empty.");
            return null;
        }
        return this.items[0];
    }

    // Method to check if the queue is empty
    isEmpty() {
        return this.items.length === 0;
    }

    // Method to get the size of the queue
    size() {
        return this.items.length;
    }

    // Method to display all elements in the queue
    display() {
        console.log(this.items.join(' <- '));
    }
}

// Function to simulate the printer queue
function printerQueueSimulation() {
    const printQueue = new Queue2();

    // Add print jobs to the queue
    printQueue.enqueue("Document1.pdf");
    printQueue.enqueue("Document2.docx");
    printQueue.enqueue("Photo.png");
    printQueue.enqueue("Presentation.pptx");

    console.log("Initial print queue:");
    printQueue.display(); // Output: Document1.pdf <- Document2.docx <- Photo.png <- Presentation.pptx

    // Process each print job
    console.log("\nProcessing print jobs...");
    while (!printQueue.isEmpty()) {
        const job = printQueue.dequeue();
        console.log(`Printing: ${job}`);
    }

    console.log("\nPrint queue after processing:");
    printQueue.display(); // Output: (empty)
}

// Run the simulation
printerQueueSimulation();

// Activity 4: Binary Tree
// . Task 7: Implement a TreeNode class to represent a node in a binary tree with properties value, left, and right.
class TreeNode {
    constructor(value, left = null, right = null) {
        this.value = value;  // The value of the node
        this.left = left;    // A reference to the left child node
        this.right = right;  // A reference to the right child node
    }
}

// Example usage:
const nodes1 = new TreeNode(1);
const nodes2 = new TreeNode(2);
const nodes3 = new TreeNode(3);

// Setting up the tree structure
nodes1.left = nodes2;   // Node 1's left child is Node 2
nodes1.right = nodes3;  // Node 1's right child is Node 3

console.log(nodes1); // Output: TreeNode { value: 1, left: TreeNode { value: 2, left: null, right: null }, right: TreeNode { value: 3, left: null, right: null } }

// . Task 8: Implement a BinaryTree class with methods for inserting values and performing in-order traversal to display nodes.
class TreeNode1 {
    constructor(value, left = null, right = null) {
        this.value = value;  // The value of the node
        this.left = left;    // A reference to the left child node
        this.right = right;  // A reference to the right child node
    }
}

class BinaryTree {
    constructor() {
        this.root = null;  // The root node of the tree
    }

    // Method to insert a value into the binary tree
    insert(value) {
        const newNode = new TreeNode1(value);
        if (this.root === null) {
            this.root = newNode;
        } else {
            this._insertRecursive(this.root, newNode);
        }
    }

    // Helper method to insert a value recursively
    _insertRecursive(node, newNode) {
        if (newNode.value < node.value) {
            // Insert into the left subtree
            if (node.left === null) {
                node.left = newNode;
            } else {
                this._insertRecursive(node.left, newNode);
            }
        } else {
            // Insert into the right subtree
            if (node.right === null) {
                node.right = newNode;
            } else {
                this._insertRecursive(node.right, newNode);
            }
        }
    }

    // Method to perform in-order traversal
    inOrderTraversal(node = this.root, result = []) {
        if (node !== null) {
            this.inOrderTraversal(node.left, result);  // Traverse left subtree
            result.push(node.value);                   // Visit node
            this.inOrderTraversal(node.right, result); // Traverse right subtree
        }
        return result;
    }
}

// Example usage:
const tree = new BinaryTree();

tree.insert(5);
tree.insert(3);
tree.insert(7);
tree.insert(2);
tree.insert(4);
tree.insert(6);
tree.insert(8);

console.log("In-order Traversal:");
console.log(tree.inOrderTraversal()); // Output: [2, 3, 4, 5, 6, 7, 8]

// Activity 5: Graph (Optional)
// . Task 9: Implement a Graph class with methods to add vertices, add edges, and perform a breadth-first search (BFS).
// . Task 10: Use the Graph class to represent a simple network and perform BFS to find the shortest path between two nodes.

// Feature Request:
// 1. Linked List Script: Write a script that implements a linked list with methods to add, remove, and display nodes.
// 2. Stack Script: Create a script that implements a stack and uses it to reverse a string.
// 3. Queue Script: Write a script that implements a queue and simulates a printer queue.
// 4. Binary Tree Script: Create a script that implements a binary tree with insertion and in-order traversal methods.
// 5. Graph Script: Write a script that implements a graph and performs breadth-first search (optional).

// Achievement:
// By the end of these activities, students will:
// . Implement and use linked lists for dynamic data storage.
// . Use stacks for LIFO (Last-In-First-Out) operations and reverse data.
// . Use queues for FIFO (First-In-First-Out) operations and simulate real-world scenarios.
// . Implement binary trees for hierarchical data storage and traversal.
console.log("/-----------------------------/");