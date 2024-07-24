import { LinkedList } from "./linkedList.js";

// Instance of LinkedList
const myList = LinkedList();

// Adds to the ends of the list
myList.append('Dog');
myList.append('Cat');
myList.append('Duck');

// Adds to the start of the list
myList.prepend('Chicken');
myList.prepend('Horse');

// Print list
console.log(myList.getList());
console.log(myList.toArray());

// Prints the size of the list
const sizeMyList = myList.size();
console.log(`Size list is ${sizeMyList}`);

// Print the fist node of the list
const firstNode = myList.head();
console.log(`First node is ${firstNode}`);

// Print the last node of the list
const lastNode = myList.tail();
console.log(`Last node is ${lastNode}`);

// Get the node by index
const index = 2;
console.log(myList.at(index));

// Remove the last node and print list
myList.pop();
console.log(myList.toArray());

// Check if the item exists in the list
const findItem = 'Dog';
console.log(myList.contains(findItem));

// Get the index of the item
const item = 'Cat';
console.log(myList.find(item));

// Convert list to string and print
console.log(myList.toString());

// Insert node to specified index and print list
myList.insertAt('Lyon', 0);
myList.insertAt('Elephant', 3);
myList.insertAt('Tigre', 6);
console.log(myList.toArray());

// Remove a specific node by index and print list
myList.removeAt(2);
console.log(myList.toArray());
