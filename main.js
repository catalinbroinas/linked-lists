// Create a linked list
function LinkedList() {
    // Define an empty list
    const list = {
        head: null
    };

    // Get the entire list
    const getList = () => list;

    // Check if the list is empty
    const empty = () => (list.head === null) ? true : false;

    // Convert the linked list to an array for easy display
    const toArray = () => {
        const results = [];
        let current = list.head;

        // Traverse the list and add each item to the array
        while (current !== null) {
            results.push(current.value);
            current = current.nextNode;
        }

        return results;
    };

    // Append a new node at the end of the list
    const append = (value) => {
        const newNode = CreateNode(value);

        // If the list is empty, add the new node to the head
        if (list.head === null) {
            list.head = newNode;
        } else {
            // Traverse the list to find the last node
            let current = list.head;
            while (current.nextNode !== null) {
                current = current.nextNode;
            }

            // Add the new node at the end of the list
            current.nextNode = newNode;
        }
    };

    // Prepend a new node at the beginning of the list
    const prepend = (value) => {
        const newNode = CreateNode(value, list.head);
        list.head = newNode;
    };

    // Get the total number of nodes in the list
    const size = () => {
        let current = list.head;
        let size = 0;

        // Traverse the list and count each node
        while (current !== null) {
            size += 1;
            current = current.nextNode;
        }

        return size;
    };

    // Get the first node in the list
    const head = () => list.head ? list.head.value : null;

    // Get the last node in the list
    const tail = () => {
        if (empty()) {
            return 'Empty list!';
        }

        // Traverse the list to find the last node
        let current = list.head;
        while (current.nextNode !== null) {
            current = current.nextNode;
        }

        return current.value;
    };

    // Get the value of the node at a specific index
    const at = (index) => {
        if (empty()) {
            return 'Empty list!';
        }

        // Check if index is invalid
        if (!Number.isInteger(index) || index < 0) {
            return 'Invalid index';
        }

        let current = list.head;
        let currentIndex = 0;

        // Traverse the list and return the value at the given index
        while (current !== null) {
            if (currentIndex === index) {
                return current.value;
            }

            current = current.nextNode;
            currentIndex += 1;
        }

        return 'Invalid index';
    };

    // Removes the last element from the list
    const pop = () => {
        if (empty()) {
            return 'Empty list!';
        }

        // Check if there is only one element in the list
        if (list.head.nextNode === null) {
            list.head = null;
            return;
        }

        // Traverse the list to find the second to last node
        let current = list.head;
        while (current.nextNode.nextNode !== null) {
            current = current.nextNode;
        }

        // Remove the last node
        current.nextNode = null;
    };

    // Check if the item exists in the list
    const contains = (value) => {
        if (empty()) {
            return 'Empty list!';
        }

        // Traverse the list to find the item
        let current = list.head;
        while (current !== null) {

            if (current.value === value) {
                return true;
            }
            current = current.nextNode;
        }

        return false;
    };

    // Get the index of the node with a specific value
    const find = (value) => {
        if (empty()) {
            return 'Empty list!';
        }

        let current = list.head;
        let currentIndex = 0;

        // Traverse the list to find the value
        while (current !== null) {
            // Compare values for equality
            if (current.value === value) {
                // Return the index if the value
                return currentIndex;
            }
            current = current.nextNode;
            currentIndex += 1;
        }

        // Return null if the value is not found
        return null;
    };

    // Convert the linked list to string
    const toString = () => {
        let current = list.head;
        let result = '';

        // Traverse the list and add each node to result
        while (current !== null) {
            result += `( ${current.value} ) -> `;
            current = current.nextNode;
        }

        return result + 'null';
    };

    // Add the specified value to the specified index
    const insertAt = (value, index) => {
        index = parseInt(index);

        // Check if index is invalid
        if (!Number.isInteger(index) || index < 0) {
            return 'Invalid index';
        }

        // Handle empty list
        if (empty()) {
            // Insert node at the beginning of the list
            if (index === 0) {
                prepend(value);
            } else {
                return 'Index out of bounds.';
            }
            return true;
        }

        // Handle insertion at the beginning
        if (index === 0) {
            // Insert node at the beginning of the list
            prepend(value);
            return true;
        }

        let current = list.head;
        let currentIndex = 0;

        // Traverse the list to find the insertion point
        while (current !== null) {
            if (currentIndex === index - 1) {
                // Insert new node at the specified index
                const newNode = CreateNode(value, current.nextNode);
                current.nextNode = newNode;
                return true;
            }
            current = current.nextNode;
            currentIndex += 1;
        }

        // Index is out of bounds
        return 'Index out of bounds.';
    };

    // Remove a specified node at a given index
    const removeAt = (index) => {
        if (empty()) {
            return 'Empty list.';
        }

        index = parseInt(index);

        // Check if index is invalid
        if (!Number.isInteger(index) || index < 0) {
            return 'Invalid index.';
        }

        // Check if the list contains only one element
        if (list.head.nextNode === null) {
            list.head = null;
            return true;
        }

        let current = list.head;

        // Remove the first node
        if (index === 0) {
            list.head = current.nextNode;
            return true;
        }

        let previous = null;
        let currentIndex = 0;

        // Traverse the list to find the node to remove
        while (current !== null) {
            if (currentIndex === index) {
                if (previous !== null) {
                    previous.nextNode = current.nextNode;
                }
                return true;
            }
            previous = current;
            current = current.nextNode;
            currentIndex += 1;
        }

        // Index is out of bounds
        return 'Index out of bounds.';
    };

    return {
        getList,
        toArray,
        append,
        prepend,
        size,
        head,
        tail,
        at,
        pop,
        contains,
        find,
        toString,
        insertAt,
        removeAt
    };
}

// Create a node
function CreateNode(value = null, nextNode = null) {
    return {
        value,
        nextNode
    };
}

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
